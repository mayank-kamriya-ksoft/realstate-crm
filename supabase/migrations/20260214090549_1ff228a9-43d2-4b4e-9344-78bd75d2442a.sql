
-- Temporarily disable RLS to seed data
ALTER TABLE public.contacts DISABLE ROW LEVEL SECURITY;
ALTER TABLE public.properties DISABLE ROW LEVEL SECURITY;
ALTER TABLE public.tasks DISABLE ROW LEVEL SECURITY;
ALTER TABLE public.activities DISABLE ROW LEVEL SECURITY;

-- Seed contacts
INSERT INTO public.contacts (user_id, full_name, email, phone, company, source, status, notes) VALUES
('c417d09a-b948-4e45-a9d5-af4a6fc15501', 'Sarah Johnson', 'sarah.johnson@email.com', '+1-555-0101', 'Johnson Realty', 'website', 'new', 'Interested in 3-bedroom homes in downtown area'),
('c417d09a-b948-4e45-a9d5-af4a6fc15501', 'Michael Chen', 'michael.chen@email.com', '+1-555-0102', 'TechCorp Inc', 'referral', 'contacted', 'Looking for commercial office space'),
('c417d09a-b948-4e45-a9d5-af4a6fc15501', 'Emily Davis', 'emily.davis@email.com', '+1-555-0103', NULL, 'social_media', 'qualified', 'First-time buyer, pre-approved for $450K'),
('c417d09a-b948-4e45-a9d5-af4a6fc15501', 'Robert Wilson', 'robert.wilson@email.com', '+1-555-0104', 'Wilson & Co', 'cold_call', 'negotiation', 'Negotiating on 2 properties'),
('c417d09a-b948-4e45-a9d5-af4a6fc15501', 'Amanda Lopez', 'amanda.lopez@email.com', '+1-555-0105', NULL, 'website', 'won', 'Closed deal on Sunset Blvd property'),
('c417d09a-b948-4e45-a9d5-af4a6fc15501', 'James Brown', 'james.brown@email.com', '+1-555-0106', 'Brown Enterprises', 'referral', 'lost', 'Went with competitor'),
('c417d09a-b948-4e45-a9d5-af4a6fc15501', 'Lisa Martinez', 'lisa.martinez@email.com', '+1-555-0107', NULL, 'social_media', 'new', 'Inquired about rental listings'),
('c417d09a-b948-4e45-a9d5-af4a6fc15501', 'David Kim', 'david.kim@email.com', '+1-555-0108', 'Kim Holdings', 'website', 'contacted', 'Investor looking for multi-family units');

-- Seed properties
INSERT INTO public.properties (user_id, title, address, price, property_type, status, bedrooms, bathrooms, area_sqft, description) VALUES
('c417d09a-b948-4e45-a9d5-af4a6fc15501', 'Sunset Villa', '123 Sunset Blvd, Los Angeles, CA', 850000, 'residential', 'available', 4, 3, 2800, 'Stunning 4-bed villa with pool and ocean views'),
('c417d09a-b948-4e45-a9d5-af4a6fc15501', 'Downtown Loft', '456 Main St, New York, NY', 620000, 'residential', 'under_contract', 2, 2, 1400, 'Modern loft in the heart of Manhattan'),
('c417d09a-b948-4e45-a9d5-af4a6fc15501', 'Tech Park Office', '789 Innovation Dr, San Jose, CA', 1200000, 'commercial', 'available', NULL, NULL, 5000, 'Prime office space near major tech campuses'),
('c417d09a-b948-4e45-a9d5-af4a6fc15501', 'Maple Street Cottage', '321 Maple St, Portland, OR', 385000, 'residential', 'sold', 3, 2, 1600, 'Charming cottage with updated kitchen'),
('c417d09a-b948-4e45-a9d5-af4a6fc15501', 'Harbor View Apartment', '654 Harbor Rd, Seattle, WA', 2200, 'rental', 'rented', 1, 1, 750, 'Cozy 1-bed with harbor views, monthly rental'),
('c417d09a-b948-4e45-a9d5-af4a6fc15501', 'Greenfield Plaza', '987 Commerce Ave, Austin, TX', 2500000, 'commercial', 'available', NULL, NULL, 12000, 'Large retail and office complex');

-- Seed tasks
INSERT INTO public.tasks (user_id, title, description, status, priority, due_date) VALUES
('c417d09a-b948-4e45-a9d5-af4a6fc15501', 'Follow up with Sarah Johnson', 'Call to discuss 3-bedroom options in downtown', 'pending', 'high', now() + interval '1 day'),
('c417d09a-b948-4e45-a9d5-af4a6fc15501', 'Schedule property showing', 'Show Sunset Villa to Emily Davis', 'pending', 'medium', now() + interval '3 days'),
('c417d09a-b948-4e45-a9d5-af4a6fc15501', 'Prepare contract for Downtown Loft', 'Draft purchase agreement for buyer', 'in_progress', 'high', now() + interval '2 days'),
('c417d09a-b948-4e45-a9d5-af4a6fc15501', 'Market Greenfield Plaza', 'Create listing materials and post online', 'pending', 'low', now() + interval '7 days'),
('c417d09a-b948-4e45-a9d5-af4a6fc15501', 'Review rental agreement', 'Finalize lease terms for Harbor View', 'done', 'medium', now() - interval '2 days'),
('c417d09a-b948-4e45-a9d5-af4a6fc15501', 'Call David Kim', 'Discuss multi-family investment opportunities', 'pending', 'high', now() - interval '1 day');

-- Seed activities
INSERT INTO public.activities (user_id, action, entity_type, entity_id) VALUES
('c417d09a-b948-4e45-a9d5-af4a6fc15501', 'created', 'contact', NULL),
('c417d09a-b948-4e45-a9d5-af4a6fc15501', 'status_changed', 'contact', NULL),
('c417d09a-b948-4e45-a9d5-af4a6fc15501', 'created', 'property', NULL),
('c417d09a-b948-4e45-a9d5-af4a6fc15501', 'created', 'task', NULL),
('c417d09a-b948-4e45-a9d5-af4a6fc15501', 'status_changed', 'property', NULL);

-- Re-enable RLS
ALTER TABLE public.contacts ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.properties ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.tasks ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.activities ENABLE ROW LEVEL SECURITY;
