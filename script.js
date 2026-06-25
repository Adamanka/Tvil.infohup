// ================================================
// МЯГКИЙ 3D ЭФФЕКТ ДЛЯ КАРТОЧЕК (Vanilla Tilt)
// ================================================

document.addEventListener('DOMContentLoaded', function() {
    
    const tiltElements = document.querySelectorAll('.tilt-card');
    
    if (tiltElements.length > 0) {
        VanillaTilt.init(tiltElements, {
            max: 5,
            speed: 600,
            perspective: 1200,
            easing: 'cubic-bezier(.25,.46,.45,.94)',
            glare: true,
            'glare-prerender': false,
            'max-glare': 0.15,
            scale: 1.02,
            'reset-to-start': true,
            'startX': 0,
            'startY': 0,
            gyroscope: true,
            gyroscopeMinAngleX: -30,
            gyroscopeMaxAngleX: 30,
            gyroscopeMinAngleY: -30,
            gyroscopeMaxAngleY: 30,
            // ВАЖНО: отключаем transform для дочерних элементов
            'transition': 'transform 0.4s cubic-bezier(.25,.46,.45,.94)'
        });
    }

    // Плавное появление карточек
    const cards = document.querySelectorAll('.card');
    cards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
        
        setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, 100 + index * 120);
    });

    console.log('🛡️ Инфо-хаб Tviltofer загружен!');
});
