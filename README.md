# Tech Haven - Admin Portal

A React-based Single Page Application (SPA) for managing an e-commerce store's product inventory. Built with modern frontend practices including React Router, Context API, custom hooks, and comprehensive testing.

## Features

- **Landing Page**: Store overview with featured products and admin quick actions
- **Product Catalog**: Browse all products with real-time search functionality
- **Product Detail**: View individual product details with inline editing capabilities
- **Add Product**: Form to add new products to the inventory
- **Search**: Dynamic product search across name, category, and description
- **Responsive Design**: Fully responsive layout for desktop and mobile devices
- **Admin Editing**: PATCH requests to update product details like price and stock

## Tech Stack

- **React 18** - UI library with hooks and functional components
- **React Router 6** - Client-side routing
- **Vite** - Build tool and development server
- **Vitest** - Unit testing framework
- **React Testing Library** - Component testing utilities
- **JSON Server** - Simulated REST API backend

## Project Structure
tech-haven/
├── public/
├── src/
│   ├── components/        # Reusable UI components
│   │   ├── Navbar.jsx
│   │   ├── Footer.jsx
│   │   ├── ProductCard.jsx
│   │   ├── ProductForm.jsx
│   │   ├── LoadingSpinner.jsx
│   │   └── ErrorMessage.jsx
│   ├── pages/             # Route-level page components
│   │   ├── LandingPage.jsx
│   │   ├── ProductsPage.jsx
│   │   ├── ProductDetailPage.jsx
│   │   ├── AddProductPage.jsx
│   │   └── NotFoundPage.jsx
│   ├── hooks/             # Custom React hooks
│   │   └── useProducts.jsx
│   ├── styles/            # Component-specific CSS
│   │   ├── index.css
│   │   ├── App.css
│   │   ├── Navbar.css
│   │   ├── Footer.css
│   │   ├── ProductCard.css
│   │   ├── ProductForm.css
│   │   ├── LoadingSpinner.css
│   │   ├── ErrorMessage.css
│   │   ├── LandingPage.css
│   │   ├── ProductsPage.css
│   │   ├── ProductDetailPage.css
│   │   ├── AddProductPage.css
│   │   └── NotFoundPage.css
│   ├── tests/             # Unit tests
│   │   ├── setup.js
│   │   ├── Navbar.test.jsx
│   │   ├── ProductCard.test.jsx
│   │   ├── ProductForm.test.jsx
│   │   └── LandingPage.test.jsx
│   ├── App.jsx
│   └── main.jsx
├── db.json                
├── index.html
├── package.json
├── vite.config.js
└── README.md

## Setup Instructions

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/tech-haven.git
   cd tech-haven

2. Install dependencies:
```bash
npm install

3. Start the mock backend (in a separate terminal):
```bash
npm run server

The JSON Server will run on http://localhost:3001

4. Start the development server:
```bash
npm run dev

The app will be available at http://localhost:5173

### Running Tests
```bash 
npm test

### Tests cover:
- Component rendering
- Form validation
- User interactions (clicking, typing)
- Navigation links
- Prop passing

### API Endpoints (JSON Server)
Table
Method	Endpoint	Description
GET	/store_info/1	Fetch store information
GET	/products	Fetch all products
POST	/products	Add new product
PATCH	/products/:id	Update existing product
Advanced React Concepts Used
useState: Local state management in forms and editing modes
useEffect: Data fetching on component mount
useContext: Global product state via ProductProvider
useRef: Focus management on price input during editing
useId: Accessible form labeling
useCallback: Memoized fetch functions
Custom Hook: useProducts for centralized data access
React Router: Client-side routing with URL parameters

### Known Limitations 
- Images use external URLs (Unsplash) and may change or become unavailable
- JSON Server must be running separately from the dev server

- No authentication/authorization (admin portal is open)

- No pagination for large product catalogs

- Data persists only in memory (resets when JSON Server restarts unless db.json is modified)

### Future Enhancements
- Add product deletion functionality (DELETE requests)

- Implement image upload instead of URL input

- Add sorting and filtering by category

- Implement user authentication

- Add data persistence with a real database

- Add toast notifications for success/error feedback

### License
MIT
```
with open(os.path.join(base_dir, "README.md"), "w") as f:
f.write(readme_md)
---

## Final Step: How to Run the Project

After creating all files above, run these commands in your terminal:

```bash
# 1. Navigate to your project folder
cd tech-haven

# 2. Install all dependencies
npm install

# 3. Start the mock backend API (Terminal 1)
npm run server

# 4. Start the React app (Terminal 2)
npm run dev

# 5. Run tests (Terminal 3)
npm test
Important: You need two terminals running simultaneously:
One for npm run server (backend on port 3001)
One for npm run dev (frontend on port 5173)
Your app will be live at http://localhost:5173