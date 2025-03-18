Frontend Task - Landing Page

Live Demo
Check out the live demo of the project hosted on Vercel:
 https://frontend-task-plum.vercel.app/

Overview
This project is a responsive landing page built with React.js and Tailwind CSS. It showcases a modern and interactive user interface with features like a hero section, service cards, a pricing table, a contact form, and a user list fetched from an API. The project also includes performance optimizations like lazy loading and debounced search functionality.

Features
Hero Section: A visually appealing hero section with a background image and a fade-in animation.

Service Cards: Displays services with hover effects and smooth transitions.

Pricing Table: A responsive pricing table with gradient backgrounds and hover animations.

Contact Form: A user-friendly contact form with validation and submission handling.

User List: Fetches and displays user data from an API with lazy loading for images.

Debounced Search: Implements a debounced search bar to filter user names dynamically.

Responsive Design: Fully responsive layout for all screen sizes.

Technologies Used
React.js: A JavaScript library for building user interfaces.

Tailwind CSS: A utility-first CSS framework for rapid UI development.

Axios: For making HTTP requests to fetch user data.

React LazyLoad: For lazy loading images to improve performance.

TypeScript: For type-safe JavaScript development.

Vercel: For hosting and deployment.

Setup Instructions
Follow these steps to set up the project locally:

1. Clone the Repository
bash
Copy
git clone https://github.com/your-username/frontend-task.git
cd frontend-task
2. Install Dependencies
bash
Copy
npm install
3. Run the Development Server
bash
Copy
npm start
The project will be running at http://localhost:3000.

4. Build for Production
bash
Copy
npm run build
File Structure
Copy
frontend-task/
├── node_modules/
├── public/
│   ├── index.html
│   ├── favicon.ico
│   └── manifest.json
├── src/
│   ├── assets/
│   │   └── hero-bg.jpg
│   ├── components/
│   │   ├── HeroSection.tsx
│   │   ├── ServiceCards.tsx
│   │   ├── PricingTable.tsx
│   │   ├── ContactForm.tsx
│   │   └── UserList.tsx
│   ├── pages/
│   │   └── LandingPage.tsx
│   ├── styles/
│   │   └── tailwind.css
│   ├── types/
│   │   └── react-lazyload.d.ts
│   ├── utils/
│   │   └── debounce.ts
│   ├── App.tsx
│   ├── index.tsx
│   └── index.css
├── package.json
├── tsconfig.json
├── tailwind.config.js
└── README.md
Performance Optimizations
Lazy Loading: Images are lazy-loaded using react-lazyload to improve page load times.

Debounced Search: A debounced search bar ensures efficient filtering of user data.

Tailwind CSS: Utility-first CSS ensures minimal and optimized styles.

