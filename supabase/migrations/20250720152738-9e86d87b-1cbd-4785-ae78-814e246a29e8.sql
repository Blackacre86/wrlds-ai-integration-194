-- Create client profiles table
CREATE TABLE public.client_profiles (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID NOT NULL UNIQUE REFERENCES auth.users(id) ON DELETE CASCADE,
  client_number TEXT UNIQUE,
  status TEXT DEFAULT 'active',
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create client intake table
CREATE TABLE public.client_intakes (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  docket_number TEXT,
  court_name TEXT,
  charges JSONB DEFAULT '[]'::jsonb,
  biographical_info JSONB DEFAULT '{}'::jsonb,
  case_facts TEXT,
  contact_info JSONB DEFAULT '{}'::jsonb,
  status TEXT DEFAULT 'draft',
  submitted_at TIMESTAMP WITH TIME ZONE,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create Massachusetts criminal statutes table for autocomplete
CREATE TABLE public.ma_criminal_statutes (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  chapter TEXT NOT NULL,
  section TEXT NOT NULL,
  statute_code TEXT NOT NULL,
  charge_name TEXT NOT NULL,
  full_description TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.client_profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.client_intakes ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.ma_criminal_statutes ENABLE ROW LEVEL SECURITY;

-- Create policies for client_profiles
CREATE POLICY "Users can view their own profile" 
ON public.client_profiles 
FOR SELECT 
USING (auth.uid() = user_id);

CREATE POLICY "Users can insert their own profile" 
ON public.client_profiles 
FOR INSERT 
WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update their own profile" 
ON public.client_profiles 
FOR UPDATE 
USING (auth.uid() = user_id);

-- Create policies for client_intakes
CREATE POLICY "Users can view their own intakes" 
ON public.client_intakes 
FOR SELECT 
USING (auth.uid() = user_id);

CREATE POLICY "Users can create their own intakes" 
ON public.client_intakes 
FOR INSERT 
WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update their own intakes" 
ON public.client_intakes 
FOR UPDATE 
USING (auth.uid() = user_id);

-- Create policies for statutes (public read access)
CREATE POLICY "Statutes are viewable by authenticated users" 
ON public.ma_criminal_statutes 
FOR SELECT 
TO authenticated
USING (true);

-- Create function to update timestamps
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create triggers for automatic timestamp updates
CREATE TRIGGER update_client_profiles_updated_at
  BEFORE UPDATE ON public.client_profiles
  FOR EACH ROW
  EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_client_intakes_updated_at
  BEFORE UPDATE ON public.client_intakes
  FOR EACH ROW
  EXECUTE FUNCTION public.update_updated_at_column();

-- Insert sample Massachusetts criminal statutes for testing
INSERT INTO public.ma_criminal_statutes (chapter, section, statute_code, charge_name, full_description) VALUES
('265', '13A', 'MGL c.265, §13A', 'Assault and Battery', 'Assault and battery upon another'),
('265', '13A(a)', 'MGL c.265, §13A(a)', 'Assault and Battery on Family/Household Member', 'Assault and battery upon a family or household member'),
('265', '13B', 'MGL c.265, §13B', 'Assault and Battery on Police Officer', 'Assault and battery upon a police officer'),
('265', '15A', 'MGL c.265, §15A', 'Assault and Battery with Dangerous Weapon', 'Assault and battery by means of a dangerous weapon'),
('266', '30', 'MGL c.266, §30', 'Larceny Under $1200', 'Larceny of property valued under $1,200'),
('266', '30', 'MGL c.266, §30', 'Larceny Over $1200', 'Larceny of property valued over $1,200'),
('90', '24', 'MGL c.90, §24', 'OUI - Operating Under the Influence', 'Operating a motor vehicle under the influence of intoxicating liquor or drugs'),
('94C', '32', 'MGL c.94C, §32', 'Possession of Class A Substance', 'Possession of a Class A controlled substance'),
('94C', '32', 'MGL c.94C, §32', 'Possession of Class B Substance', 'Possession of a Class B controlled substance'),
('94C', '32', 'MGL c.94C, §32', 'Possession of Class C Substance', 'Possession of a Class C controlled substance');