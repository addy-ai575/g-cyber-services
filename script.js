// ============================================
// G-CYBER SERVICES - MAIN JAVASCRIPT
// ============================================

// Blog Data
const blogPosts = [
    {
        id: 1,
        title: "The Rise of AI-Powered Cyber Threats in 2026",
        excerpt: "How artificial intelligence is being weaponized by cybercriminals and what you can do to protect your organization.",
        date: "June 10, 2026",
        category: "threats",
        readTime: "5 min read",
        author: "Dr. Sarah Chen"
    },
    {
        id: 2,
        title: "10 Essential Security Practices for Remote Workers",
        excerpt: "Protect your distributed workforce with these proven security strategies and tools.",
        date: "June 8, 2026",
        category: "tips",
        readTime: "4 min read",
        author: "Marcus Rodriguez"
    },
    {
        id: 3,
        title: "Major Data Breach: Lessons Learned from the Latest Attack",
        excerpt: "Analysis of a recent high-profile breach and key takeaways for security teams.",
        date: "June 5, 2026",
        category: "news",
        readTime: "6 min read",
        author: "Jennifer Okonkwo"
    },
    {
        id: 4,
        title: "Ransomware Evolution: What's New in 2026",
        excerpt: "Understanding the latest ransomware tactics and how to defend against them.",
        date: "June 3, 2026",
        category: "threats",
        readTime: "7 min read",
        author: "Dr. Sarah Chen"
    },
    {
        id: 5,
        title: "Zero Trust Architecture: Implementation Guide",
        excerpt: "Step-by-step guide to implementing zero trust security in your organization.",
        date: "May 30, 2026",
        category: "tips",
        readTime: "8 min read",
        author: "Marcus Rodriguez"
    },
    {
        id: 6,
        title: "Cybersecurity Predictions for 2026",
        excerpt: "Industry experts share their predictions for the cybersecurity landscape.",
        date: "May 28, 2026",
        category: "news",
        readTime: "5 min read",
        author: "Jennifer Okonkwo"
    }
];

// Mobile Navigation Toggle
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-menu');

if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });
}

// Close mobile menu when clicking a link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
    });
});

// Sticky Navigation on Scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.style.background = 'rgba(10, 14, 39, 0.98)';
        navbar.style.boxShadow = 'var(--shadow-md)';
    } else {
        navbar.style.background = 'rgba(10, 14, 39, 0.95)';
        navbar.style.boxShadow = 'none';
    }
});

// Counter Animation
const counters = document.querySelectorAll('.counter');
const speed = 200;

const animateCounter = (counter) => {
    const target = parseInt(counter.getAttribute('data-target'));
    let count = 0;
    const increment = target / speed;
    
    const updateCount = () => {
        if (count < target) {
            count += increment;
            counter.innerText = Math.ceil(count);
            setTimeout(updateCount, 10);
        } else {
            counter.innerText = target;
        }
    };
    
    updateCount();
};

// Intersection Observer for Counters
const observerOptions = {
    threshold: 0.5
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const counter = entry.target;
            animateCounter(counter);
            observer.unobserve(counter);
        }
    });
}, observerOptions);

counters.forEach(counter => {
    observer.observe(counter);
});

// Load Blog Posts
function loadBlogPosts(containerId, filter = 'all') {
    const container = document.getElementById(containerId);
    if (!container) return;
    
    let posts = blogPosts;
    if (filter !== 'all') {
        posts = blogPosts.filter(post => post.category === filter);
    }
    
    const postsHTML = posts.map(post => `
        <div class="blog-card" data-category="${post.category}">
            <div class="blog-image">
                <i class="fas fa-shield-alt"></i>
            </div>
            <div class="blog-content">
                <div class="blog-meta">
                    <span><i class="fas fa-calendar"></i> ${post.date}</span>
                    <span><i class="fas fa-clock"></i> ${post.readTime}</span>
                    <span><i class="fas fa-tag"></i> ${post.category}</span>
                </div>
                <h3 class="blog-title">${post.title}</h3>
                <p class="blog-excerpt">${post.excerpt}</p>
                <div class="blog-meta">
                    <span><i class="fas fa-user"></i> ${post.author}</span>
                </div>
                <a href="#" class="read-more">Read More <i class="fas fa-arrow-right"></i></a>
            </div>
        </div>
    `).join('');
    
    container.innerHTML = postsHTML;
}

// Load blog preview (latest 3 posts)
function loadBlogPreview() {
    const previewContainer = document.getElementById('blogPreview');
    if (!previewContainer) return;
    
    const latestPosts = blogPosts.slice(0, 3);
    const previewHTML = latestPosts.map(post => `
        <div class="blog-card">
            <div class="blog-image">
                <i class="fas fa-shield-alt"></i>
            </div>
            <div class="blog-content">
                <div class="blog-meta">
                    <span><i class="fas fa-calendar"></i> ${post.date}</span>
                    <span><i class="fas fa-clock"></i> ${post.readTime}</span>
                </div>
                <h3 class="blog-title">${post.title}</h3>
                <p class="blog-excerpt">${post.excerpt.substring(0, 100)}...</p>
                <a href="blog.html" class="read-more">Read More <i class="fas fa-arrow-right"></i></a>
            </div>
        </div>
    `).join('');
    
    previewContainer.innerHTML = previewHTML;
}

// Load all blogs on blog page
function loadAllBlogs() {
    const allBlogsContainer = document.getElementById('allBlogs');
    if (!allBlogsContainer) return;
    
    loadBlogPosts('allBlogs', 'all');
    
    // Add filter functionality
    const filterBtns = document.querySelectorAll('.filter-btn');
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            const filter = btn.getAttribute('data-filter');
            loadBlogPosts('allBlogs', filter);
        });
    });
}

// Contact Form Handling
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;
        const statusDiv = document.getElementById('formStatus');
        
        if (name && email && message) {
            statusDiv.innerHTML = '<div style="color: green; margin-top: 1rem;">✓ Thank you! We\'ll get back to you within 24 hours.</div>';
            contactForm.reset();
            
            setTimeout(() => {
                statusDiv.innerHTML = '';
            }, 5000);
        } else {
            statusDiv.innerHTML = '<div style="color: red; margin-top: 1rem;">✗ Please fill in all required fields.</div>';
        }
    });
}

// Smooth Scroll for Anchor Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#') {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }
    });
});

// Add scroll reveal animations
const revealElements = () => {
    const elements = document.querySelectorAll('.service-card, .blog-card, .stat-item, .team-member');
    
    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < window.innerHeight - elementVisible) {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }
    });
};

// Set initial styles for animation
document.querySelectorAll('.service-card, .blog-card, .stat-item, .team-member').forEach(element => {
    element.style.opacity = '0';
    element.style.transform = 'translateY(30px)';
    element.style.transition = 'all 0.6s ease';
});

window.addEventListener('scroll', revealElements);
window.addEventListener('load', revealElements);

// Initialize page-specific functions
document.addEventListener('DOMContentLoaded', () => {
    loadBlogPreview();
    loadAllBlogs();
});

// Add typing animation to hero text (optional)
const heroTitle = document.querySelector('.hero-content h1');
if (heroTitle && heroTitle.innerText === 'Secure Your Digital Future') {
    // Already has text - no animation needed
}

// Console message (professional touch)
console.log('%c🔐 G-Cyber Services | Professional Cybersecurity Solutions', 'color: #00d4ff; font-size: 16px; font-weight: bold;');
console.log('%cWebsite loaded successfully!', 'color: #28a745; font-size: 12px;');
