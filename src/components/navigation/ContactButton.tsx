
import React from "react";
import { Button } from "@/components/ui/button";

interface ContactButtonProps {
  handleNavigation: (path: string) => void;
}

const ContactButton = ({ handleNavigation }: ContactButtonProps) => {
  return (
    <div className="hidden lg:block">
      <Button
        onClick={() => handleNavigation("/contact")}
        className="bg-summit-orange-500 hover:bg-summit-orange-600 text-white border-none font-semibold px-6 py-2 shadow-md hover:shadow-lg transition-all duration-300"
      >
        Contact Us
      </Button>
    </div>
  );
};

export default ContactButton;
