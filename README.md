
Insurance Policy Management Dashboard & Analytics Platform

A secure, performant dashboard for managing and visualizing insurance policy data built with React, TypeScript, Supabase, Tailwind CSS, and Cloudflare Pages.

Live Website: https://blue-lobster-dashboard1.pages.dev

Tech Stack:

Frontend: React, TypeScript, Vite  
Styling: Tailwind CSS  
State Management: useState and useContext
Backend & Database: Supabase (Auth, Database, RLS)  
Charting: Recharts  
Linting/Formatting: Biome JS  
Hosting: Cloudflare Pages  

Features:

- Full authentication (sign-up, sign-in, password reset, protected routes) via Supabase  
- Role-based access (policy_holder, agent, admin) enforced in UI and at the database level  
- Server-side filtering, sorting, and pagination for large datasets  
- Interactive charts (pie, bar, line) with live filter controls  
- Policy detail modal with full policy information  
- Summary cards for at-a-glance metrics  
- Responsive, accessible UI with Tailwind CSS 

Getting Started:

1. Clone the Repository
git clone https://github.com/gaqlaxy/Blue_Lobster_Dashboard1.git
cd Blue_Lobster_Dashboard1

2. Install Dependencies
npm install

3. Environment Variables
Create a .env file:
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key

4. Run the App
npm run dev
