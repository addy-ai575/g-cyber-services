// G-Net Services Interactive JavaScript

// Configuration
const config = {
    phoneNumber: '254715061546',
    emailAddress: 'info@gnetcyber26.co.ke',
    googleMapsUrl: 'https://maps.google.com/?q=G-Net+Services+Nairobi',
    facebookUrl: 'https://www.facebook.com/people/G-Net-Services/100064382197214/',
    twitterUrl: 'https://twitter.com/gnetservices_ke',
    instagramUrl: 'https://www.instagram.com/gnetservices_ke/',
    whatsappMessage: 'Hello G-Net Services, I am interested in your services. Could you assist me?'
};

// Service details for popup
const serviceDetails = {
    'Network Installation': 'Structured cabling, router setup, Wi-Fi optimization, and complete LAN/WAN installation.',
    'CCTV Systems': 'High-definition IP cameras, analog systems, remote monitoring & 24/7 recording solutions.',
    'Computer Repair': 'Hardware diagnostics, virus removal, OS installation, data recovery, and upgrades.',
    'IT Consulting': 'Network audits, IT infrastructure design, cloud solutions, and cybersecurity advisory.',
    'Printing Services': 'High-quality document printing, binding, laminating, and bulk print jobs.',
    'Document Scanning': 'Fast document digitization, OCR, archiving, and secure data storage.',
    'KRA PIN Application': 'Assistance with KRA PIN registration, returns filing, and tax compliance.',
    'Passport Services': 'Guidance on passport application, appointment booking, and document verification.'
};

// Helper Functions
function showServiceDetail(serviceName) {
    const msg = serviceDetails[serviceName] || `${serviceName} service — expert support with fast turnaround. Contact us for quote!`;
    alert(`🔧 ${serviceName}\n\n${msg}\n\nReach us via WhatsApp or call for immediate assistance.`);
}

function sendWhatsApp() {
    const url = `https://wa.me/${config.phoneNumber}?text=${encodeURIComponent(config.whatsappMessage)}`;
    window.open(url, '_blank');
}

function sendEmail() {
    window.location.href = `mailto:${config.emailAddress}?subject=Service Inquiry from Website&body=Hi G-Net, I would like more information about your IT and networking solutions.`;
}

function callPhone() {
    window.location.href = `tel:+${config.phoneNumber}`;
}

function openGoogleProfile() {
    window.open(config.googleMapsUrl, '_blank');
}

function openFacebook() {
    window.open(config.facebookUrl, '_blank');
}

function openTwitter() {
    window.open(config.twitterUrl, '_blank');
}

function openInstagram() {
    window.open(config.instagramUrl, '_blank');
}

// Bind Service Item Clicks
function bindServiceClicks() {
    const serviceItems = document.querySelectorAll('.service-item');
    serviceItems.forEach(item => {
        const serviceName = item.getAttribute('data-service') || item.innerText.trim();
        item.addEventListener('click', () => showServiceDetail(serviceName));
    });
}

// Bind Contact Item Clicks (for better UX)
function bindContactItems() {
    const contactItems = document.querySelectorAll('.contact-item');
    contactItems.forEach(item => {
        item.addEventListener('click', (e) => {
            if (e.target.tagName === 'A') return;
            const link = item.querySelector('a');
            if (link && link.href) {
                window.open(link.href, '_blank');
            }
        });
    });
}

// Main initialization
function init() {
    // Bind service clicks
    bindServiceClicks();
    bindContactItems();
    
    // Button bindings
    const openGoogleBtn = document.getElementById('openGoogleBtn');
    const googleProfileLink = document.getElementById('googleProfileLink');
    const sendWhatsAppBtn = document.getElementById('sendWhatsAppBtn');
    const whatsappNumberLink = document.getElementById('whatsappNumberLink');
    const visitFacebookBtn = document.getElementById('visitFacebookBtn');
    const facebookPageLink = document.getElementById('facebookPageLink');
    
    // Social buttons
    const whatsappBtn = document.getElementById('whatsappBtn');
    const callBtn = document.getElementById('callBtn');
    const emailBtn = document.getElementById('emailBtn');
    const facebookBtn = document.getElementById('facebookBtn');
    const twitterBtn = document.getElementById('twitterBtn');
    const instagramBtn = document.getElementById('instagramBtn');
    
    // Google buttons
    if (openGoogleBtn) openGoogleBtn.addEventListener('click', openGoogleProfile);
    if (googleProfileLink) googleProfileLink.addEventListener('click', (e) => {
        e.preventDefault();
        openGoogleProfile();
    });
    
    // WhatsApp buttons
    if (sendWhatsAppBtn) sendWhatsAppBtn.addEventListener('click', sendWhatsApp);
    if (whatsappNumberLink) whatsappNumberLink.addEventListener('click', (e) => {
        e.preventDefault();
        sendWhatsApp();
    });
    
    // Facebook buttons
    if (visitFacebookBtn) visitFacebookBtn.addEventListener('click', openFacebook);
    if (facebookPageLink) facebookPageLink.addEventListener('click', (e) => {
        e.preventDefault();
        openFacebook();
    });
    
    // Social media buttons
    if (whatsappBtn) whatsappBtn.addEventListener('click', sendWhatsApp);
    if (callBtn) callBtn.addEventListener('click', callPhone);
    if (emailBtn) emailBtn.addEventListener('click', sendEmail);
    if (facebookBtn) facebookBtn.addEventListener('click', openFacebook);
    if (twitterBtn) twitterBtn.addEventListener('click', openTwitter);
    if (instagramBtn) instagramBtn.addEventListener('click', openInstagram);
    
    console.log('G-Net Services website initialized');
}

// Run when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}
