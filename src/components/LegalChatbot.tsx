
import React, { useState, useRef, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { ScrollArea } from '@/components/ui/scroll-area';
import { MessageCircle, Send, Bot, User, Phone, Calendar } from 'lucide-react';
import { AIContentService } from '@/services/aiContentService';

interface ChatMessage {
  id: string;
  type: 'user' | 'bot';
  content: string;
  timestamp: Date;
  suggestions?: string[];
}

interface ChatSession {
  sessionId: string;
  messages: ChatMessage[];
  userContext: {
    needsConsultation?: boolean;
    practiceArea?: string;
    urgency?: 'low' | 'medium' | 'high';
  };
}

const initialBotMessage: ChatMessage = {
  id: '1',
  type: 'bot',
  content: "Hello! I'm the Summit Law AI assistant. I can help you understand your legal situation and determine if you need Attorney Joe Brava's services. What legal matter can I help you with today?",
  timestamp: new Date(),
  suggestions: [
    "I was arrested",
    "I need a restraining order",
    "I have a traffic violation",
    "I have a court hearing"
  ]
};

const quickResponses = {
  arrest: "If you were arrested, time is critical. Attorney Brava's experience as a former prosecutor gives him unique insight into criminal defense. What were you charged with?",
  restraining: "Restraining orders can be complex. Attorney Brava handles both defense against restraining orders and filing them. Are you looking to file one or defend against one?",
  traffic: "Traffic violations can affect your license and insurance. What type of violation are you dealing with?",
  court: "Court hearings require proper preparation. What type of hearing do you have scheduled?"
};

export const LegalChatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [session, setSession] = useState<ChatSession>({
    sessionId: crypto.randomUUID(),
    messages: [initialBotMessage],
    userContext: {}
  });
  const [currentMessage, setCurrentMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const scrollAreaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollToBottom();
  }, [session.messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const addMessage = (message: Omit<ChatMessage, 'id' | 'timestamp'>) => {
    const newMessage: ChatMessage = {
      ...message,
      id: crypto.randomUUID(),
      timestamp: new Date()
    };

    setSession(prev => ({
      ...prev,
      messages: [...prev.messages, newMessage]
    }));
  };

  const generateBotResponse = async (userMessage: string): Promise<ChatMessage> => {
    // Simple rule-based responses for demo
    const lowerMessage = userMessage.toLowerCase();
    
    let response = "I understand your concern. ";
    let suggestions: string[] = [];
    let practiceArea = '';
    let urgency: 'low' | 'medium' | 'high' = 'low';

    if (lowerMessage.includes('arrest') || lowerMessage.includes('charge')) {
      response += "Being arrested is serious. Attorney Brava's experience as a former prosecutor means he understands both sides of criminal cases. ";
      practiceArea = 'Criminal Defense';
      urgency = 'high';
      suggestions = ["What happens next?", "Do I need a lawyer?", "How much does it cost?"];
    } else if (lowerMessage.includes('restraining') || lowerMessage.includes('209a')) {
      response += "Restraining orders affect your rights and relationships. Attorney Brava has extensive experience with these cases. ";
      practiceArea = 'Restraining Orders';
      urgency = 'medium';
      suggestions = ["How do I respond?", "What are my rights?", "Can I get it dismissed?"];
    } else if (lowerMessage.includes('traffic') || lowerMessage.includes('dui') || lowerMessage.includes('license')) {
      response += "Traffic violations can impact your driving record and insurance. Attorney Brava can help protect your license. ";
      practiceArea = 'Motor Vehicle Violations';
      urgency = 'medium';
      suggestions = ["Can I fight this?", "Will I lose my license?", "What are the penalties?"];
    } else if (lowerMessage.includes('court') || lowerMessage.includes('hearing')) {
      response += "Court appearances require proper preparation. Attorney Brava will ensure you're ready. ";
      practiceArea = 'Show Cause Hearings';
      urgency = 'high';
      suggestions = ["What should I bring?", "What will happen?", "Do I need representation?"];
    } else {
      response += "I'd like to help you find the right legal solution. Can you tell me more about your specific situation?";
      suggestions = ["I was arrested", "I need a restraining order", "I have a traffic violation", "I have a court hearing"];
    }

    // Update user context
    setSession(prev => ({
      ...prev,
      userContext: {
        ...prev.userContext,
        practiceArea: practiceArea || prev.userContext.practiceArea,
        urgency: urgency || prev.userContext.urgency,
        needsConsultation: true
      }
    }));

    // Add consultation recommendation if serious issue detected
    if (urgency === 'high' || practiceArea) {
      response += "\n\nBased on what you've told me, I recommend speaking with Attorney Brava directly. Would you like me to help you schedule a consultation?";
      suggestions.push("Schedule consultation");
    }

    return {
      id: crypto.randomUUID(),
      type: 'bot',
      content: response,
      timestamp: new Date(),
      suggestions
    };
  };

  const handleSendMessage = async (message?: string) => {
    const messageToSend = message || currentMessage.trim();
    if (!messageToSend) return;

    // Add user message
    addMessage({
      type: 'user',
      content: messageToSend
    });

    setCurrentMessage('');
    setIsTyping(true);

    // Simulate typing delay
    setTimeout(async () => {
      const botResponse = await generateBotResponse(messageToSend);
      addMessage(botResponse);
      setIsTyping(false);
    }, 1000 + Math.random() * 1000);
  };

  const handleSuggestionClick = (suggestion: string) => {
    if (suggestion === "Schedule consultation") {
      // Scroll to contact form or open phone dialer
      const contactSection = document.getElementById('contact');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
        setIsOpen(false);
      }
      return;
    }
    handleSendMessage(suggestion);
  };

  if (!isOpen) {
    return (
      <div className="fixed bottom-6 right-6 z-50">
        <Button
          onClick={() => setIsOpen(true)}
          size="lg"
          className="rounded-full h-14 w-14 shadow-lg hover:shadow-xl transition-shadow"
        >
          <MessageCircle className="h-6 w-6" />
        </Button>
      </div>
    );
  }

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <Card className="w-80 h-96 shadow-xl">
        <CardHeader className="pb-3">
          <div className="flex items-center justify-between">
            <CardTitle className="text-base flex items-center gap-2">
              <Bot className="h-4 w-4" />
              Legal Assistant
            </CardTitle>
            <div className="flex items-center gap-2">
              <Badge variant="secondary" className="text-xs">Online</Badge>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsOpen(false)}
                className="h-6 w-6 p-0"
              >
                ×
              </Button>
            </div>
          </div>
        </CardHeader>

        <CardContent className="p-0 flex flex-col h-full">
          <ScrollArea ref={scrollAreaRef} className="flex-1 px-4">
            <div className="space-y-4 pb-4">
              {session.messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[80%] rounded-lg p-3 ${
                      message.type === 'user'
                        ? 'bg-primary text-primary-foreground'
                        : 'bg-muted'
                    }`}
                  >
                    <div className="flex items-start gap-2">
                      {message.type === 'bot' && <Bot className="h-4 w-4 mt-0.5 flex-shrink-0" />}
                      {message.type === 'user' && <User className="h-4 w-4 mt-0.5 flex-shrink-0" />}
                      <div className="space-y-2">
                        <p className="text-sm leading-relaxed whitespace-pre-line">
                          {message.content}
                        </p>
                        {message.suggestions && message.suggestions.length > 0 && (
                          <div className="flex flex-wrap gap-1">
                            {message.suggestions.map((suggestion, index) => (
                              <Button
                                key={index}
                                variant="outline"
                                size="sm"
                                className="text-xs h-6 px-2"
                                onClick={() => handleSuggestionClick(suggestion)}
                              >
                                {suggestion}
                              </Button>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
              
              {isTyping && (
                <div className="flex justify-start">
                  <div className="bg-muted rounded-lg p-3 max-w-[80%]">
                    <div className="flex items-center gap-2">
                      <Bot className="h-4 w-4" />
                      <div className="flex space-x-1">
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>
          </ScrollArea>

          <div className="border-t p-4">
            <div className="flex gap-2">
              <Input
                value={currentMessage}
                onChange={(e) => setCurrentMessage(e.target.value)}
                placeholder="Type your message..."
                onKeyPress={(e) => {
                  if (e.key === 'Enter' && !e.shiftKey) {
                    e.preventDefault();
                    handleSendMessage();
                  }
                }}
                disabled={isTyping}
                className="text-sm"
              />
              <Button
                onClick={() => handleSendMessage()}
                disabled={!currentMessage.trim() || isTyping}
                size="sm"
              >
                <Send className="h-4 w-4" />
              </Button>
            </div>
            <div className="flex items-center justify-center gap-4 mt-2 text-xs text-muted-foreground">
              <span className="flex items-center gap-1">
                <Phone className="h-3 w-3" />
                (508) 454-0822
              </span>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
