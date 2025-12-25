const tl = gsap.timeline({
    scrollTrigger: {
        trigger: '.hero-section',
        start: 'top top',
        end: '+=200%',
        pin: true,
        scrub: true,
    }
});

tl.to('.hero-section__bg', {y: 40, scale: .97})
.to('.hero-section', {scale: .7})
.to('.hero-section', {borderRadius: '50px', filter: 'blur(5px)'}, '<');

const tl2 = gsap.timeline({
    scrollTrigger: {
        trigger: '.main-contents',
        start: 'top center',
    }
});

tl2.from('.main-contents__title h1', {alpha: 0, duration: 1});

gsap.from('.main-contents__text-area',{
    scrollTrigger: {
        trigger: '.main-contents__text-area',
        start: 'top center',
    },
    alpha: 0,
    duration: 1,
});

const tl3 = gsap.timeline({
    scrollTrigger: {
        trigger: '.comunity-contents__container',
        start: 'top center',
    }
});

tl3.from('.comunity-contents__image', {scale: 0, ease: 'power4.out', duration: 1})
.from('.comunity-contents__title h1', {alpha: 0, duration: .5, stagger: .01}, '<')
.from('.comunity-contents__text', {alpha: 0, duration: .5, delay: .2}, '<')
.from('.join-btn', {alpha: 0, duration: .5, delay: .4}, '<');

const tl4 = gsap.timeline({
    scrollTrigger: {
        trigger: '.hero2-section__container',
        start: 'top center',
    }
});

tl4.from('.hero2-section__contents h1', {x: '-100', alpha: 0, duration: 1, ease: 'power4.out'})
.from('.hero2-section__text', {x: '-100', alpha: 0, duration: 1, ease: 'power4.out', delay: .5}, '<');

const tl5 = gsap.timeline({
    scrollTrigger: {
        trigger: '.contact-section',
        start: 'top center',
    }
});

tl5.from('.contact-contents__left', {scale: 0, duration: 1, ease: 'power4.out'});


const counterNumber = document.querySelector('.counter-contents__counter span');
const countRate = 0.01;

function onWin() {
    const counterNumber = document.querySelector('.counter-contents__counter span');
    let count = Number(counterNumber.innerText);
    count += 1;
    counterNumber.textContent = count;
}

const timerId = setInterval(() => {
    const hit = Math.random() < countRate;
    if (hit) onWin();
  }, 10);