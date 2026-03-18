
CREATE TABLE public.rsvp_responses (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  attending TEXT NOT NULL DEFAULT 'yes',
  guests INTEGER NOT NULL DEFAULT 1,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

ALTER TABLE public.rsvp_responses ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit RSVP" ON public.rsvp_responses
  FOR INSERT WITH CHECK (true);

CREATE POLICY "Allow select for all" ON public.rsvp_responses
  FOR SELECT USING (true);
