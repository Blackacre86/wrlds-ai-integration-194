-- Fix the INSERT policy for client_intakes table to allow authenticated users to create their own intakes
DROP POLICY IF EXISTS "Users can create their own intakes" ON public.client_intakes;

CREATE POLICY "Users can create their own intakes" 
ON public.client_intakes 
FOR INSERT 
WITH CHECK (auth.uid() = user_id);