# Leda Global Sports - Taekwondo Equipment Shop

A simple, mobile-focused shop website for Leda Global Sports Taekwondo equipment built with HTML, CSS, and JavaScript.

## Features

- **Responsive Design**: Mobile-first approach with clean grid layout
- **Product Catalog**: 20+ Taekwondo equipment items with detailed descriptions
- **Stripe Integration**: Ready for Stripe Checkout (test mode)
- **Contact Form**: Simple contact functionality
- **Modern UI**: Card-style design with hover effects and animations

## Products Included

- Competition Systems
- Electronic Protective Gear Packages (A, B, C)
- Individual Protective Equipment
- Kids Edition Packages (V4, V6, V8, V10, V12)
- Scoring Devices
- Electronic Targets
- Chargers and Accessories

## Setup Instructions

### 1. Stripe Configuration

To enable Stripe checkout functionality:

1. Replace the placeholder key in `script.js`:
   ```javascript
   const stripe = Stripe('pk_test_your_stripe_publishable_key_here');
   ```
   with your actual Stripe publishable key.

2. Set up a backend endpoint `/create-checkout-session` to handle Stripe session creation.

### 2. Local Development

1. Open `index.html` in a web browser
2. For full Stripe functionality, serve via a local server:
   ```bash
   # Using Python
   python -m http.server 8000
   
   # Using Node.js
   npx serve .
   
   # Using PHP
   php -S localhost:8000
   ```

### 3. Backend Integration (Optional)

For production use, implement a backend to:
- Handle Stripe checkout session creation
- Process contact form submissions
- Manage product inventory

## File Structure

```
shop website/
├── index.html          # Main HTML structure
├── styles.css          # Responsive CSS styling
├── script.js           # JavaScript functionality
└── README.md           # This file
```

## Responsive Breakpoints

- **Desktop**: 1200px+ (3-4 column grid)
- **Tablet**: 768px-1199px (2-3 column grid)
- **Mobile**: <768px (1 column grid)

## Future E-commerce Expansion

This simple shop is designed to easily transition to a full e-commerce platform:

- **Database Integration**: Add product management
- **User Accounts**: Customer registration and login
- **Shopping Cart**: Persistent cart functionality
- **Order Management**: Order tracking and history
- **Inventory System**: Stock management
- **Admin Panel**: Product and order administration

## Browser Support

- Chrome 60+
- Firefox 55+
- Safari 12+
- Edge 79+

## License

This project is for demonstration purposes. Please ensure you have proper licensing for any commercial use.