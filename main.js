

//карусель в news

if (window.matchMedia("(max-width: 1439px)").matches) {
    const carousel = document.getElementById('news__inner');
    const nextButtonCaruosel = document.getElementById('news__btn-next');
    const prevButtonCarousel = document.getElementById('news__btn-prev');
    nextButtonCaruosel.removeAttribute("disabled");
    prevButtonCarousel.removeAttribute("disabled");
    nextButtonCaruosel.addEventListener('click', () => {
        carousel.classList.remove('translate-prevent');
        carousel.classList.add('translate-next');
    });
    prevButtonCarousel.addEventListener('click', () => {
        carousel.classList.remove('translate-next');
        carousel.classList.add('translate-prevent');
    });
};



const profile = document.getElementById('headerCallback');
profile.addEventListener('click', () => {
    const modal = document.getElementById('callbackModal');
    modal.style.display = 'block';
    const close = document.getElementById('modalClose');
    close.onclick = () => {
        modal.style.display = "none";
    };
    window.onclick = (event) => {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    };
})

