// === DOM Elements ===
const navbar = document.getElementById('navbar');
const menuBtn = document.getElementById('menu-btn');
const mobileMenu = document.getElementById('mobile-menu');
const mobileLinks = document.querySelectorAll('.mobile-link');

// === Initialization ===
// Initialize Icons
// @ts-ignore
if (window.lucide) {
    // @ts-ignore
    window.lucide.createIcons();
}

// === Logic: Navbar Scroll ===
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar?.classList.add('bg-transparent', 'backdrop-blur-md', 'py-4', 'shadow-lg', 'border-b', 'border-white/10');
        navbar?.classList.remove('bg-transparent', 'py-6');
    } else {
        navbar?.classList.remove('bg-transparent', 'backdrop-blur-md', 'py-4', 'shadow-lg', 'border-b', 'border-white/10');
        navbar?.classList.add('bg-transparent', 'py-6');
    }
});

// === Logic: Mobile Menu ===
menuBtn?.addEventListener('click', () => {
    mobileMenu?.classList.toggle('hidden');
});

mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu?.classList.add('hidden');
    });
});