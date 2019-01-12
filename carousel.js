(function() {
    const interval = 5000;
    const carouselItems = document.querySelectorAll('.carousel li');
    let currentIndex = 0;

    const nextIndex = (current, { length }) => current + 1 >= length ? 0 : current + 1;

    const hide = item => {
        item.classList.toggle('to-left');
        const removeClasses = () => {
            //item.removeEventListener('animationend');
            item.classList.remove('active', 'to-left');
        }
        item.addEventListener('animationend', removeClasses);
    };

    const show = item => {
        item.classList.add('next', 'from-right');
        const removeClasses = () => {
            //item.removeEventListener('animationend');
            item.classList.add('active');
            item.classList.remove('next', 'from-right');
        }
        item.addEventListener('animationend', removeClasses);
    };

    setInterval(() => {
        hide(carouselItems[currentIndex]);
        currentIndex = nextIndex(currentIndex, carouselItems);
        show(carouselItems[currentIndex]);
    }, interval);    
})();
