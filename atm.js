document.addEventListener('DOMContentLoaded', (event) => {
    const slider = document.querySelector('.sliderInfos');
    const indicators = document.querySelectorAll('.indicator');
    let isScrolling;

    function updateIndicators(currentGroup) {
        indicators.forEach((indicator, index) => {
            if (index === currentGroup) {
                indicator.classList.add('active');
            } else {
                indicator.classList.remove('active');
            }
        });
    }

    slider.addEventListener('scroll', (event) => {
        window.clearTimeout(isScrolling);
        isScrolling = setTimeout(function() {
            const scrollLeft = slider.scrollLeft;
            const maxScrollLeft = slider.scrollWidth - slider.clientWidth;
            const groupWidth = slider.clientWidth;
            const currentGroup = Math.round(scrollLeft / groupWidth);

            updateIndicators(currentGroup);
        }, 66);
    }, false);

    indicators.forEach((indicator, index) => {
        indicator.addEventListener('click', () => {
            slider.scrollTo({
                left: slider.clientWidth * index,
                behavior: 'smooth'
            });
            updateIndicators(index);
        });
    });
});
