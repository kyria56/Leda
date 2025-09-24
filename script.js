// Product image mapping
const productImageMap = {
    'Receiver': 'pics/Reciever.png',
    'Foot Guards': 'pics/Foot Guards.png',
    'Headgear': 'pics/Headgear.png',
    'Protective Gear': 'pics/Protective Gear.png'
};

// Function to get appropriate image for product
function getProductImage(productName) {
    // Check for exact matches first
    if (productImageMap[productName]) {
        return productImageMap[productName];
    }
    
    // Check for partial matches
    const lowerName = productName.toLowerCase();
    if (lowerName.includes('receiver')) {
        return productImageMap['Receiver'];
    }
    if (lowerName.includes('foot') && lowerName.includes('guard')) {
        return productImageMap['Foot Guards'];
    }
    if (lowerName.includes('headgear') || lowerName.includes('helmet')) {
        return productImageMap['Headgear'];
    }
    if (lowerName.includes('protective gear') || lowerName.includes('chest')) {
        return productImageMap['Protective Gear'];
    }
    
    // Default fallback
    return productImageMap['Protective Gear'];
}

// Product data (JSON format as provided)
const products = [
    {
        "name": "Competition System",
        "description": "Supports match formats (round-based, best-of-three, point system). Team formats 2v2–5v5. Compatible with poomsae competition system and speed testing. Customisable match parameters; detailed recording of strike data. Requires Windows 7+ computer with Ethernet port.",
        "price_usd": null,
        "quantity": "Set"
    },
    {
        "name": "Competition Taekwondo Electronic Protective Gear Package A",
        "description": "Includes 2 chest protectors, 2 helmets, 2 helmet transmitters, 2 gear transmitters, 2 foot pads, 1 receiver, 1 charger, 1 network cable.",
        "price_usd": 1010.27,
        "quantity": "Set"
    },
    {
        "name": "Competition Taekwondo Electronic Protective Gear Package B",
        "description": "Includes 4 chest protectors, 2 helmets, 2 helmet transmitters, 4 gear transmitters, 4 foot pads, 1 receiver, 1 charger, 1 network cable.",
        "price_usd": 1444.80,
        "quantity": "Set"
    },
    {
        "name": "Competition Taekwondo Electronic Protective Gear Package C",
        "description": "Includes 4 chest protectors, 4 helmets, 4 helmet transmitters, 4 gear transmitters, 4 foot pads, 1 receiver, 1 charger, 1 network cable.",
        "price_usd": 1806.90,
        "quantity": "Set"
    },
    {
        "name": "Taekwondo Electronic Protective Gear (including transmitters)",
        "description": "PU leather, military-grade force sensor, WiFi transmitter, lithium battery (24h), USB charging, sizes #1–4.",
        "price_usd": 217.26,
        "quantity": "Piece"
    },
    {
        "name": "Taekwondo Electronic Headgear (including transmitter)",
        "description": "High-resilience EPDM, 360° scoring zone, WiFi transmitter, lithium battery (24h), models S/M/L.",
        "price_usd": 199.16,
        "quantity": "Unit"
    },
    {
        "name": "Electronic Foot Guards",
        "description": "Five-toe pads, PU leather, 14–16 sensors, sizes XS–XXXL, hand wash only.",
        "price_usd": 37.60,
        "quantity": "Pair"
    },
    {
        "name": "Electronic Protective Gear Receiver",
        "description": "Dual-core 880MHz system, noise reduction, indoor/outdoor stable connection, wireless + Ethernet.",
        "price_usd": 201.94,
        "quantity": "Unit"
    },
    {
        "name": "Scoring Device",
        "description": "Supports professional/traditional competitions; poomsae 3–7 judge system; wireless connection; lithium battery (24h).",
        "price_usd": 720.59,
        "quantity": "Set (3 units)"
    },
    {
        "name": "Electronic Iran Target",
        "description": "Auto ranking, force/speed calculation, WiFi transmitter, lithium battery (24h). Includes 4 targets, 1 receiver, charger.",
        "price_usd": 235.19,
        "quantity": "Set"
    },
    {
        "name": "Electronic Speed Testing Package",
        "description": "Includes 4 chest guards, 2 vertical columns, 1 horizontal bar, 1 receiver, charger, air pump, water pipe.",
        "price_usd": 1444.80,
        "quantity": "Set"
    },
    {
        "name": "Kids Edition V4 Package",
        "description": "4 helmets, 4 chest guards, 4 foot guards, 1 receiver, charger, training system.",
        "price_usd": 901.64,
        "quantity": "Set"
    },
    {
        "name": "Kids Edition V6 Package",
        "description": "6 helmets, 6 chest guards, 6 foot guards, 1 receiver, charger, training system.",
        "price_usd": 1263.74,
        "quantity": "Set"
    },
    {
        "name": "Kids Edition V8 Package",
        "description": "8 helmets, 8 chest guards, 8 foot guards, 1 receiver, charger, training system.",
        "price_usd": 1625.85,
        "quantity": "Set"
    },
    {
        "name": "Kids Edition V10 Package",
        "description": "10 helmets, 10 chest guards, 10 foot guards, 1 receiver, charger, training system.",
        "price_usd": 1987.95,
        "quantity": "Set"
    },
    {
        "name": "Kids Edition V12 Package",
        "description": "12 helmets, 12 chest guards, 12 foot guards, 1 receiver, charger, training system.",
        "price_usd": 2350.06,
        "quantity": "Set"
    },
    {
        "name": "Kids Edition Chest Guard",
        "description": "Chest guard with transmitter.",
        "price_usd": 108.63,
        "quantity": "Unit"
    },
    {
        "name": "Kids Edition Helmet",
        "description": "Helmet with transmitter.",
        "price_usd": 90.53,
        "quantity": "Unit"
    },
    {
        "name": "Kids Edition Full Set",
        "description": "Helmet + chest guard + foot guards.",
        "price_usd": 217.26,
        "quantity": "Set"
    },
    {
        "name": "Charger 5V1A",
        "description": "One charger for four devices.",
        "price_usd": 18.11,
        "quantity": "Unit"
    }
];

// Initialize Stripe (Replace with your actual publishable key)
const stripe = Stripe('pk_test_your_stripe_publishable_key_here'); // Replace with your actual key

// DOM Elements
const productsGrid = document.getElementById('products-grid');
const loadingIndicator = document.getElementById('loading');
const contactForm = document.getElementById('contact-form');
const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
const nav = document.querySelector('.nav');

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    renderProducts();
    setupEventListeners();
    setupMobileMenu();
    setupContactForm();
    setupSmoothScrolling();
});

/**
 * Render all products in the grid
 */
function renderProducts() {
    productsGrid.innerHTML = '';
    
    products.forEach((product, index) => {
        const productCard = createProductCard(product, index);
        productsGrid.appendChild(productCard);
    });
}

/**
 * Create a product card element
 * @param {Object} product - Product data
 * @param {number} index - Product index for animation delay
 * @returns {HTMLElement} Product card element
 */
function createProductCard(product, index) {
    const card = document.createElement('div');
    card.className = 'product-card';
    card.style.animationDelay = `${index * 0.1}s`;
    
    const priceDisplay = product.price_usd 
        ? `$${product.price_usd.toFixed(2)}` 
        : 'Contact for Price';
    
    const priceClass = product.price_usd ? 'product-price' : 'product-price no-price';
    const productImage = getProductImage(product.name);
    
    card.innerHTML = `
        <div class="product-image-container">
            <img src="${productImage}" alt="${product.name}" class="product-image" onclick="openImageModal('${productImage}', '${product.name}')">
            <div class="image-overlay">
                <span class="zoom-icon">🔍</span>
            </div>
        </div>
        <div class="product-info">
            <h3 class="product-name">${product.name}</h3>
            <p class="product-description">${product.description}</p>
            <div class="product-pricing">
                <div class="${priceClass}">${priceDisplay}</div>
                <span class="product-quantity">${product.quantity}</span>
            </div>
            <button class="buy-now-btn" onclick="handleBuyNow('${product.name}', ${product.price_usd || 0})">
                ${product.price_usd ? 'Buy Now' : 'Contact Us'}
            </button>
        </div>
    `;
    
    return card;
}

/**
 * Handle buy now button click
 * @param {string} productName - Name of the product
 * @param {number} price - Price of the product (0 if no price)
 */
async function handleBuyNow(productName, price) {
    if (price === 0) {
        // If no price, scroll to contact section
        document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
        return;
    }
    
    try {
        showLoading(true);
        
        // Create Stripe checkout session
        const response = await fetch('/create-checkout-session', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                productName: productName,
                price: price,
                quantity: 1
            })
        });
        
        if (!response.ok) {
            throw new Error('Failed to create checkout session');
        }
        
        const session = await response.json();
        
        // Redirect to Stripe Checkout
        const result = await stripe.redirectToCheckout({
            sessionId: session.id
        });
        
        if (result.error) {
            console.error('Stripe error:', result.error.message);
            alert('There was an error processing your payment. Please try again.');
        }
        
    } catch (error) {
        console.error('Error:', error);
        alert('Unable to process payment at this time. Please contact us directly.');
    } finally {
        showLoading(false);
    }
}

/**
 * Show or hide loading indicator
 * @param {boolean} show - Whether to show loading indicator
 */
function showLoading(show) {
    if (show) {
        loadingIndicator.classList.add('show');
    } else {
        loadingIndicator.classList.remove('show');
    }
}

/**
 * Setup event listeners for navigation and interactions
 */
function setupEventListeners() {
    // Navigation link clicks
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth' });
                
                // Update active nav link
                document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
                this.classList.add('active');
            }
        });
    });
    
    // Buy now button clicks (handled via onclick in HTML for better performance)
}

/**
 * Setup mobile menu functionality
 */
function setupMobileMenu() {
    if (mobileMenuToggle && nav) {
        mobileMenuToggle.addEventListener('click', function() {
            nav.classList.toggle('active');
            this.classList.toggle('active');
        });
        
        // Close mobile menu when clicking on a link
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', function() {
                nav.classList.remove('active');
                mobileMenuToggle.classList.remove('active');
            });
        });
    }
}

/**
 * Setup contact form functionality
 */
function setupContactForm() {
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const formData = new FormData(this);
            const name = this.querySelector('input[type="text"]').value;
            const email = this.querySelector('input[type="email"]').value;
            const message = this.querySelector('textarea').value;
            
            // Simple validation
            if (!name || !email || !message) {
                alert('Please fill in all fields.');
                return;
            }
            
            // Simulate form submission (replace with actual form handling)
            showLoading(true);
            
            setTimeout(() => {
                alert('Thank you for your message! We will get back to you soon.');
                this.reset();
                showLoading(false);
            }, 1500);
        });
    }
}

/**
 * Setup smooth scrolling for anchor links
 */
function setupSmoothScrolling() {
    // Add smooth scrolling behavior (CSS handles this, but we can add JS enhancements)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

/**
 * Update active navigation link based on scroll position
 */
window.addEventListener('scroll', function() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (scrollY >= (sectionTop - 200)) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

/**
 * Add to cart functionality (for future e-commerce expansion)
 */
function addToCart(productName, price, quantity = 1) {
    let cart = JSON.parse(localStorage.getItem('cart') || '[]');
    
    const existingItem = cart.find(item => item.name === productName);
    
    if (existingItem) {
        existingItem.quantity += quantity;
    } else {
        cart.push({
            name: productName,
            price: price,
            quantity: quantity
        });
    }
    
    localStorage.setItem('cart', JSON.stringify(cart));
    
    // Show feedback to user
    showCartNotification(`${productName} added to cart!`);
}

/**
 * Show cart notification
 * @param {string} message - Notification message
 */
function showCartNotification(message) {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = 'cart-notification';
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: #28a745;
        color: white;
        padding: 15px 20px;
        border-radius: 8px;
        z-index: 10000;
        animation: slideInRight 0.3s ease-out;
    `;
    
    document.body.appendChild(notification);
    
    // Remove notification after 3 seconds
    setTimeout(() => {
        notification.style.animation = 'slideOutRight 0.3s ease-out';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 3000);
}

/**
 * Get cart items count
 * @returns {number} Number of items in cart
 */
function getCartItemsCount() {
    const cart = JSON.parse(localStorage.getItem('cart') || '[]');
    return cart.reduce((total, item) => total + item.quantity, 0);
}

/**
 * Format currency
 * @param {number} amount - Amount to format
 * @returns {string} Formatted currency string
 */
function formatCurrency(amount) {
    return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD'
    }).format(amount);
}

/**
 * Open image modal for product viewing
 * @param {string} imageSrc - Source of the image
 * @param {string} productName - Name of the product
 */
function openImageModal(imageSrc, productName) {
    // Create modal if it doesn't exist
    let modal = document.getElementById('image-modal');
    if (!modal) {
        modal = document.createElement('div');
        modal.id = 'image-modal';
        modal.className = 'image-modal';
        modal.innerHTML = `
            <div class="modal-content">
                <span class="modal-close">&times;</span>
                <img class="modal-image" src="" alt="">
                <div class="modal-title"></div>
                <div class="modal-navigation">
                    <button class="nav-btn prev-btn" onclick="navigateImage(-1)">‹</button>
                    <button class="nav-btn next-btn" onclick="navigateImage(1)">›</button>
                </div>
            </div>
        `;
        document.body.appendChild(modal);
        
        // Add event listeners
        modal.querySelector('.modal-close').addEventListener('click', closeImageModal);
        modal.addEventListener('click', function(e) {
            if (e.target === modal) {
                closeImageModal();
            }
        });
        
        // Keyboard navigation
        document.addEventListener('keydown', function(e) {
            if (modal.classList.contains('show')) {
                if (e.key === 'Escape') closeImageModal();
                if (e.key === 'ArrowLeft') navigateImage(-1);
                if (e.key === 'ArrowRight') navigateImage(1);
            }
        });
    }
    
    // Set image and title
    modal.querySelector('.modal-image').src = imageSrc;
    modal.querySelector('.modal-title').textContent = productName;
    
    // Show modal
    modal.classList.add('show');
    document.body.style.overflow = 'hidden';
}

/**
 * Close image modal
 */
function closeImageModal() {
    const modal = document.getElementById('image-modal');
    if (modal) {
        modal.classList.remove('show');
        document.body.style.overflow = 'auto';
    }
}

/**
 * Navigate between images (placeholder for future gallery functionality)
 * @param {number} direction - Direction to navigate (-1 for previous, 1 for next)
 */
function navigateImage(direction) {
    // This could be expanded to show multiple images per product
    console.log('Navigate image:', direction);
}

// Add CSS animations for notifications
const style = document.createElement('style');
style.textContent = `
    @keyframes slideInRight {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOutRight {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(100%);
            opacity: 0;
        }
    }
    
    .nav.active {
        display: block;
        position: absolute;
        top: 100%;
        left: 0;
        right: 0;
        background: #1e3c72;
        padding: 1rem;
    }
    
    .nav.active .nav-list {
        flex-direction: column;
        gap: 0;
    }
    
    .nav.active .nav-link {
        display: block;
        padding: 1rem;
        border-bottom: 1px solid rgba(255,255,255,0.1);
    }
    
    @media (min-width: 769px) {
        .nav {
            display: block !important;
        }
    }
`;
document.head.appendChild(style);