// ================================================
// МЯГКИЙ 3D ЭФФЕКТ ДЛЯ КАРТОЧЕК (Vanilla Tilt)
// ================================================

document.addEventListener('DOMContentLoaded', function() {
    
    const tiltElements = document.querySelectorAll('.tilt-card');
    
    if (tiltElements.length > 0) {
        VanillaTilt.init(tiltElements, {
            // ---- ОСНОВНЫЕ НАСТРОЙКИ ----
            max: 5,                     // МАКСИМАЛЬНЫЙ УГОЛ НАКЛОНА (было 12 → стало 5)
            speed: 600,                 // БОЛЕЕ ПЛАВНАЯ АНИМАЦИЯ (было 400 → стало 600)
            perspective: 1200,          // БОЛЕЕ ГЛУБОКАЯ ПЕРСПЕКТИВА (было 1000 → стало 1200)
            easing: 'cubic-bezier(.25,.46,.45,.94)', // МЯГКОЕ ЗАТУХАНИЕ
            
            // ---- БЛИК ----
            glare: true,                // Включить эффект блика
            'glare-prerender': false,
            'max-glare': 0.15,          // МЯГКИЙ БЛИК (было 0.2 → стало 0.15)
            
            // ---- ПОДЪЁМ ВВЕРХ (3D эффект) ----
            scale: 1.03,                // ЛЁГКОЕ УВЕЛИЧЕНИЕ (было 1.02 → стало 1.03)
            'reset-to-start': true,     // Возврат в исходное положение
            'startX': 0,
            'startY': 0,
            
            // ---- ГИРОСКОП ДЛЯ МОБИЛЬНЫХ ----
            gyroscope: true,
            gyroscopeMinAngleX: -30,
            gyroscopeMaxAngleX: 30,
            gyroscopeMinAngleY: -30,
            gyroscopeMaxAngleY: 30
        });
    }

    // ================================================
    // ДОПОЛНИТЕЛЬНЫЕ ЭФФЕКТЫ
    // ================================================

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

    // Дополнительный эффект: карточка слегка приподнимается при наведении
    // (уже есть через scale в Vanilla Tilt, но добавим свойство для плавности)
    document.querySelectorAll('.tilt-card').forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transition = 'transform 0.4s cubic-bezier(.25,.46,.45,.94)';
        });
        card.addEventListener('mouseleave', function() {
            this.style.transition = 'transform 0.6s cubic-bezier(.25,.46,.45,.94)';
        });
    });

    console.log('🛡️ Инфо-хаб Tviltofer загружен! (Мягкий 3D эффект)');
});