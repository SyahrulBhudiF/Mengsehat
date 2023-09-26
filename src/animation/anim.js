import anime from '../../node_modules/animejs/lib/anime.es';

export const animHome1 = () => {
    return anime({
        targets: '.animHome',
        translateX: ['-100%', '0%'],
        duration: 800,
        autoplay: true,
        delay: anime.stagger(100),
        easing: 'easeInOutSine',
    });
}

export const animHome2 = () => {
    return anime({
        targets: '.imgWomen',
        translateX: ['100%', '0%'],
        duration: 800,
        autoplay: true,
        delay: anime.stagger(100),
        easing: 'easeInOutSine',
    });
}

export const animNav = () => {
    return anime({
        targets: 'header',
        translateY: ['-100%', '0%'],
        duration: 800,
        autoplay: true,
        delay: anime.stagger(100),
        easing: 'easeInOutSine',
    });
}

export const animBelt = () => {
    return anime({
        targets: '.beltAnim',
        translateY: ['100%', '0%'],
        duration: 500,
        autoplay: true,
        delay: anime.stagger(100),
        easing: 'easeInOutSine',
    });
}
