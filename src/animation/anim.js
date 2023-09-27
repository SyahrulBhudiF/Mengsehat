import anime from '../../node_modules/animejs/lib/anime.es';

export const animHome1 = (refText) => {
    return anime({
        targets: refText,
        translateX: ['-100%', '0%'],
        duration: 800,
        autoplay: true,
        delay: anime.stagger(100),
        easing: 'easeInOutSine',
    });
}

export const animHome2 = (refImg) => {
    return anime({
        targets: refImg,
        translateX: ['100%', '0%'],
        duration: 800,
        autoplay: true,
        delay: anime.stagger(100),
        easing: 'easeInOutSine',
    });
}

export const animNav = (refNav) => {
    return anime({
        targets: refNav,
        translateY: ['-100%', '0%'],
        duration: 800,
        autoplay: true,
        delay: anime.stagger(100),
        easing: 'easeInOutSine',
    });
}
