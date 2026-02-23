# KICKS

LIVE LINK:

A modern, responsive e-commerce web application for sneakers and footwear. Built with React and Vite, it showcases product listings, categories, product details with add-to-cart, and a full shopping cart experience with persistent storage.

---

## What This Project Does

KICKS is a front-end e-commerce site that lets users:

- **Browse products** — View new drops on the landing page and an “All New Items” page.
- **Browse by category** — Navigate categories via a carousel and see products filtered by category.
- **View product details** — See product images, price, color and size options, and add items to the cart.
- **Manage cart** — Add/remove items, change quantity and size, see subtotal and delivery fee, with cart state saved in `localStorage`.
- **Get recommendations** — “You may also like” and “Also like” sections on product and cart pages with horizontally scrollable product cards.

The app uses the [EscuelaJS Fake Store API](https://api.escuelajs.co/) for products and categories. Cart and UI state are handled entirely on the client.

---

## Tech Stack

| Area              | Technology                         |
| ----------------- | ---------------------------------- |
| **Framework**     | React 19                           |
| **Build tool**    | Vite 7                             |
| **Routing**       | React Router DOM v7                |
| **Styling**       | Tailwind CSS v4 (with Vite plugin) |
| **HTTP client**   | Axios                              |
| **Icons**         | Font Awesome 6 (CDN)               |
| **Fonts**         | Google Fonts (Rubik)               |
| **Notifications** | react-toastify                     |

---

## Project Structure

```
KICKS/
├── index.html              # Entry HTML; Font Awesome & Rubik font links
├── package.json
├── vite.config.js          # Vite config; React plugin, Tailwind, @/ → src/
├── src/
│   ├── main.jsx            # React root (StrictMode, createRoot)
│   ├── App.jsx             # CartProvider, ToastContainer, RouterProvider
│   ├── App.css
│   ├── index.css           # Tailwind import; Rubik font-family
│   ├── context/
│   │   └── CartContext.jsx  # Cart state, localStorage, add/update/remove, itemCount
│   ├── Methods/
│   │   ├── get.js          # GET helper (axios; returns res.data.result ?? res.data)
│   │   ├── post.js
│   │   ├── put.js
│   │   └── delete.js
│   ├── component/
│   │   ├── Navbar.jsx       # Logo, nav links, mobile menu, cart count (useCart)
│   │   ├── Footer.jsx       # Newsletter, categories, company links, social
│   │   ├── Loading.jsx      # Reusable loading spinner + “Loading...” text
│   │   ├── AllNewItems.jsx  # All products grid (API products list)
│   │   ├── SameCategoryItems.jsx  # Products filtered by category id (route param)
│   │   ├── LayoutAndRoute/
│   │   │   ├── Layout.jsx   # Navbar + Outlet + Footer; scroll to top on route change
│   │   │   └── Routing.jsx  # createBrowserRouter and route definitions
│   │   ├── LandingPage/
│   │   │   ├── LandingPage.jsx  # Composes Hero, NewProducts, Categories, Reviews
│   │   │   ├── HeroSection.jsx  # Hero headline + main/side images
│   │   │   ├── NewProducts.jsx  # First 4 products + “Shop New Drops” → /all-new-items
│   │   │   ├── Categories.jsx   # Categories carousel (API), links to /category-product/:id
│   │   │   └── Reviews.jsx      # Static review cards (title, text, rating, image)
│   │   ├── ProdcutDetails/
│   │   │   ├── ProductDetails.jsx  # Single product by id; color/size; add to cart; AlsoLike
│   │   │   └── AlsoLike.jsx        # “You may also like” horizontal scroll
│   │   └── CartPage/
│   │       └── Cart.jsx     # Cart list, quantity/size dropdowns, order summary, AlsoLike
│   └── assets/             # SVGs and images (logo, hero, footer, icons)
```

---

## Features in Detail

### Landing Page

- **Hero section**: Headline (“DO IT RIGHT”), main hero image, side thumbnails, and “Shop Now” CTA.
- **New products**: Fetches products from the API, shows first 4 in a grid with “New” badge and “View Product” with price; link to “Shop New Drops” → `/all-new-items`.
- **Categories**: Fetches categories from the API; carousel (prev/next) showing 2 cards per view; each card links to `/category-product/:id`.
- **Reviews**: Static section with review cards (avatar, title, text, star rating, product image).

### Product Details (`/Product-details/:id`)

- Fetches single product by `id` from the API.
- Image grid, title, price, “New Release” badge.
- Color selector (e.g. Shadow Navy, Army Green) and size selector (e.g. 38–47).
- “Add to cart” (with toast) and “Buy it now”; wishlist-style button.
- “About the product” copy.
- “You may also like” horizontal scroll (AlsoLike component).

### Cart (`/cart`)

- Lists cart items from `CartContext` (image, name, category, color, price, quantity, size).
- Inline dropdowns to change size and quantity; remove item (with toast).
- Order summary: item count, subtotal, delivery fee ($6.99), total; “Checkout” and “Use a promo code”.
- “You may also like” section at the bottom.

### Cart & Persistence

- **CartContext** holds `cartItems` and exposes `addToCart`, `updateQuantity`, `updateSize`, `removeItem`, and `itemCount`.
- Cart is persisted in `localStorage` under key `kicks-cart` and rehydrated on load.
- Line items are keyed by `productId-size-color` so same product with different size/color appears as separate lines.

### Routing

- **Layout** wraps all main routes: Navbar, `<Outlet />`, Footer; scrolls to top on `pathname` change.
- Routes: `/` (Landing), `/Product-details/:id`, `/category-product/:id`, `/cart`, `/all-new-items`.

### UI/UX

- **Loading**: Reusable `Loading` component (spinner + “Loading...”) used on product lists, categories, product details, and AlsoLike.
- **Toasts**: react-toastify for “Added to cart” and “Item removed from cart”.
- **Responsive layout**: Tailwind breakpoints (e.g. `sm:`, `lg:`) used across layout, grids, and typography.
- **Path alias**: `@/` in imports points to `src/` (e.g. `@/context/CartContext`, `@/component/...`).

---

## API

- **Base**: `https://api.escuelajs.co/api/v1/`
- **Endpoints used**:
  - `GET /products` — All products (NewProducts, AllNewItems, SameCategoryItems, AlsoLike).
  - `GET /products/:id` — Single product (ProductDetails).
  - `GET /categories` — Categories list (Categories carousel).

Data is requested via the shared `get` helper in `src/Methods/get.js` (Axios; returns `res.data.result ?? res.data`).

---

## Summary

This project is a **React + Vite** e-commerce front end that uses **Tailwind CSS** for styling, **React Router** for navigation, **Axios** for the EscuelaJS API, and **React Context** for cart state with **localStorage** persistence. **react-toastify** is used for feedback, and **Font Awesome** (CDN) plus **Rubik** (Google Fonts) for icons and typography. It demonstrates a full landing page, product listing, category filtering, product detail page with add-to-cart, and a cart page with quantity/size updates and order summary.
