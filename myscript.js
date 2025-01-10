document.addEventListener('DOMContentLoaded', function() {
    const header = document.getElementById('header');
    const menuToggle = document.getElementById('menu-toggle');
    const menu = document.getElementById('menu');

    // Función para manejar el menú sticky
    function handleStickyHeader() {
        if (window.scrollY > 0) {
            header.classList.add('sticky');
        } else {
            header.classList.remove('sticky');
        }
    }

    // Función para alternar el menú móvil
    function toggleMobileMenu() {
        menuToggle.classList.toggle('active');
        menu.classList.toggle('active');
    }

    // Event listeners
    window.addEventListener('scroll', handleStickyHeader);
    menuToggle.addEventListener('click', toggleMobileMenu);

    // Cerrar el menú móvil al hacer clic en un enlace
    const menuLinks = menu.querySelectorAll('a');
    menuLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (menu.classList.contains('active')) {
                toggleMobileMenu();
            }
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const header = document.getElementById('header');
    const menuToggle = document.getElementById('menuToggle');
    const mobileNav = document.getElementById('mobileNav');
    let lastScrollTop = 0;

    window.addEventListener('scroll', function() {
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        if (scrollTop > lastScrollTop && scrollTop > 500) {
            // Scrolling down & past 100px
            header.classList.remove('-translate-y-full');
            header.classList.add('translate-y-0');
        };
        if (scrollTop == 0) {
            header.classList.remove('-translate-y-full');
            header.classList.remove('translate-y-0');
        }
        
        lastScrollTop = scrollTop;
    });

    menuToggle.addEventListener('click', function() {
        mobileNav.classList.toggle('hidden');
    });

    // Cerrar el menú móvil al hacer clic en un enlace
    document.querySelectorAll('#mobileNav a').forEach(link => {
        link.addEventListener('click', () => {
            mobileNav.classList.add('hidden');
        });
    });
});
document.addEventListener('DOMContentLoaded', function() {
    const slides = [
        document.getElementById('slide1'),
        document.getElementById('slide2'),
        document.getElementById('slide3')
    ];
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    let currentSlide = 0;

    function showSlide(n) {
        slides[currentSlide].classList.remove('opacity-100');
        slides[currentSlide].classList.add('opacity-0');
        currentSlide = (n + slides.length) % slides.length;
        slides[currentSlide].classList.remove('opacity-0');
        slides[currentSlide].classList.add('opacity-100');
    }

    function nextSlide() {
        showSlide(currentSlide + 1);
    }

    function prevSlide() {
        showSlide(currentSlide - 1);
    }

    nextBtn.addEventListener('click', nextSlide);
    prevBtn.addEventListener('click', prevSlide);

    // Cambio automático de diapositivas cada 5 segundos
    setInterval(nextSlide, 5000);
});