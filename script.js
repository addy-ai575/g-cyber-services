function openGoogleProfile() {
    window.open('https://g.page/your-google-business-profile', '_blank');
}

function sendWhatsApp() {
    const phone = '254715061546';
    const message = 'Hi G-Net Services, I would like to inquire about your services.';
    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`, '_blank');
}

function sendEmail() {
    window.location.href = 'mailto:info@gnetservices.co.ke?subject=Inquiry about G-Net Services';
}

function callPhone() {
    window.location.href = 'tel:+254715061546';
}

function openFacebook() {
    window.open('https://www.facebook.com/gnetservices', '_blank');
}

function openTwitter() {
    window.open('https://www.twitter.com/gnetservices', '_blank');
}

function openInstagram() {
    window.open('https://www.instagram.com/gnetservices', '_blank');
}