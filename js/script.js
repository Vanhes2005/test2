document.addEventListener('DOMContentLoaded', function() {
    // Создаем элементы видео для каждого квадрата
    const videoSquares = document.querySelectorAll('.video-square');
    
    // Функция для создания видео элемента
    function createVideoElement() {
        const video = document.createElement('video');
        video.autoplay = true;
        video.muted = true;
        video.loop = true;
        
        const source = document.createElement('source');
        source.src = 'video/background.mp4';
        source.type = 'video/mp4';
        
        video.appendChild(source);
        return video;
    }
    
    // Добавляем видео в каждый квадрат
    videoSquares.forEach(square => {
        const video = createVideoElement();
        square.appendChild(video);
        
        // Обработка ошибок
        video.addEventListener('error', function() {
            square.innerHTML = '<p>Video not available</p>';
            square.style.display = 'flex';
            square.style.justifyContent = 'center';
            square.style.alignItems = 'center';
            square.style.color = '#fff';
        });
    });
    
    // Попытка запуска видео на мобильных устройствах
    function attemptVideoPlay() {
        videoSquares.forEach(square => {
            const video = square.querySelector('video');
            if (video) {
                video.play().catch(e => console.log('Autoplay prevented:', e));
            }
        });
    }
    
    // Запускаем видео после взаимодействия пользователя
    document.body.addEventListener('click', attemptVideoPlay, { once: true });
});