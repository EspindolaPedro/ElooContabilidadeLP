function scrollAnimation() {
    const sectionLeft = document.querySelectorAll('.anima-left');
    const sectionRight = document.querySelectorAll('.anima-right');
    const fadeLeft = document.querySelectorAll('.fade-right');
    const fadeRight = document.querySelectorAll('.fade-left');
    const appear = document.querySelectorAll('.appear');
    const zoomIn = document.querySelectorAll('.zoom-in');
    const zoomOut = document.querySelectorAll('.zoom-out');
    const rotate = document.querySelectorAll('.rotate');
    const slideUp = document.querySelectorAll('.slide-up');
    const slideDown = document.querySelectorAll('.slide-down');
    
    const sections = [
        ...sectionLeft,
        ...sectionRight,
        ...fadeLeft,
        ...fadeRight,
        ...appear,
        ...zoomIn,
        ...zoomOut,
        ...rotate,
        ...slideUp,
        ...slideDown
    ];

    if (sections.length) {
        const windowMetade = window.innerHeight * 0.8;

        function animaScroll() {
            sections.forEach((section) => {
                const sectionTop = section.getBoundingClientRect().top;
                const isVisible = (sectionTop - windowMetade) < 0;

                if (isVisible) {
                    section.classList.add("ativo");
                } else {
                    section.classList.remove("ativo");
                }
            });
        }
        window.addEventListener('scroll', animaScroll);

        document.addEventListener('DOMContentLoaded', () => {
            animaScroll();
        });
    }
}
scrollAnimation();
