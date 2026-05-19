# Tech Haven - Admin Portal

A React-based Single Page Application (SPA) for managing an e-commerce store's product inventory. The application demonstrates modern frontend development practices using React Router, Context API, custom hooks, CRUD operations, and unit testing.

---

## Features

- Landing page with store overview and featured products
- Product catalog with real-time search functionality
- Product detail page with inline editing capabilities
- Add new products through a controlled form
- Dynamic search across product name, category, and description
- Responsive design for desktop and mobile devices
- Product editing using PATCH requests
- Simulated backend using JSON Server

---

## Tech Stack

- React 18
- React Router DOM
- Vite
- Vitest
- React Testing Library
- JSON Server
- CSS3

---

## Project Structure

```txt
tech-haven/

- public/

- src/
  - components/
    - Navbar.jsx
    - Footer.jsx
    - ProductCard.jsx
    - ProductForm.jsx
    - LoadingSpinner.jsx
    - ErrorMessage.jsx

  - pages/
    - LandingPage.jsx
    - ProductsPage.jsx
    - ProductDetailPage.jsx
    - AddProductPage.jsx
    - NotFoundPage.jsx

  - hooks/
    - useProducts.jsx

  - styles/
    - index.css
    - App.css
    - Navbar.css
    - Footer.css
    - ProductCard.css
    - ProductForm.css
    - LoadingSpinner.css
    - ErrorMessage.css
    - LandingPage.css
    - ProductsPage.css
    - ProductDetailPage.css
    - AddProductPage.css
    - NotFoundPage.css

  - tests/
    - setup.js
    - Navbar.test.jsx
    - ProductCard.test.jsx
    - ProductForm.test.jsx
    - LandingPage.test.jsx

  - App.jsx
  - main.jsx

- db.json
- index.html
- package.json
- vite.config.js
- README.md
```

---

## Setup Instructions

### Prerequisites

Make sure you have the following installed:

- Node.js 18 or higher
- npm or yarn

---

## Installation

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/tech-haven.git
cd tech-haven
```

### 2. Install Dependencies

```bash
npm install
```

---

## Running the Project

### Start the Mock Backend

Run this command in the first terminal:

```bash
npm run server
```

The JSON Server will run on:

```txt
http://localhost:3001
```

### Start the React Development Server

Run this command in a second terminal:

```bash
npm run dev
```

The React application will run on:

```txt
http://localhost:5173
```

---

## Running Tests

```bash
npm test
```

### Tests Cover

- Component rendering
- Form validation
- User interactions
- Navigation links
- Prop passing
- Routing behavior

---

## API Endpoints

| Method | Endpoint | Description |
|--------|-----------|-------------|
| GET | `/store_info/1` | Fetch store information |
| GET | `/products` | Fetch all products |
| POST | `/products` | Add a new product |
| PATCH | `/products/:id` | Update an existing product |

---

## Advanced React Concepts Used

### React Hooks

- `useState` - Local state management
- `useEffect` - Fetching data on component mount
- `useContext` - Global product state management
- `useRef` - Focus management during editing
- `useId` - Accessible form labeling
- `useCallback` - Memoized functions

### Custom Hook

- `useProducts` for centralized product fetching and state handling

### Routing

- React Router for client-side navigation
- Dynamic routes using URL parameters

---

## Known Limitations

- Images use external URLs and may become unavailable
- JSON Server must run separately from the frontend
- No authentication or authorization system
- No pagination for large product catalogs
- Data persistence depends on `db.json`

---

## Future Enhancements

- Add DELETE functionality for products
- Add image upload support
- Implement product sorting and filtering
- Add authentication and protected routes
- Connect to a real database
- Add toast notifications for user feedback

---

## Final Steps to Run the Application

Open multiple terminals and run the following commands:

### Terminal 1 - Backend Server

```bash
npm run server
```

### Terminal 2 - React Frontend

```bash
npm run dev
```

### Terminal 3 - Run Tests

```bash
npm test
```

---

## Application URLs

Frontend:

```txt
http://localhost:5173
```

Backend:

```txt
http://localhost:3001
```

---

## License

MIT License

---

## Author

Rahab Wanja