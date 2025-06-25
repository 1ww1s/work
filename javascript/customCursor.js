const cursor = document.getElementById('custom-cursor');

function setCursor(selector, img_link){
    document.querySelector(selector).addEventListener('mouseenter', () => {
        document.addEventListener('mousemove', onCursor);
        cursor.style.display = 'block';
        cursor.style.background = `url(${img_link}) no-repeat center/contain`;
    });
    
    // Скрываем фото, когда курсор ушёл
    document.querySelector(selector).addEventListener('mouseleave', () => {
        cursor.style.display = 'none';
        document.removeEventListener('mousemove', onCursor)
    });

    function onCursor(e){
        cursor.style.left = `${e.clientX + 10}px`; 
        cursor.style.top = `${e.clientY + 10}px`;
    }

}


setCursor('.block1', '../images/poster_cursor.png')
setCursor('.block2', '../images/artist_cursor.png')
setCursor('.block3', '../images/merch_cursor.png')
setCursor('.block4', '../images/tickets_cursor.png')