// ============================================================
// WOODLAND — shared interaction layer
// ============================================================
//
// NOTE (Next.js conversion): everything the site needs — including the
// homepage's door-opening intro and the collections page's filter pills,
// which used to live in their own inline <script> tags at the bottom of
// index.html / collections.html — now lives in this one file. Raw inline
// <script> tags rendered from a Next.js Server Component (App Router) are
// not guaranteed to execute reliably, which is what was originally causing
// the stuck loader / missing hero text / stuck door-transition image on
// the homepage. This file is a normal external script loaded via
// next/script, so it always runs.
//
// IMPORTANT: this script loads with strategy="afterInteractive", while
// GSAP/ScrollTrigger/Lenis load with strategy="beforeInteractive" from
// components/VendorScripts.tsx. That component dispatches a
// "vendor-scripts:ready" event on window once all three have *actually*
// finished loading. We use that event (rather than assuming `gsap` is
// already defined the instant this file runs) so nothing — especially
// the door-opening animation — silently no-ops if the CDN scripts are
// slow for any reason.

// ---- Fail-safe: if GSAP never loads at all, force everything visible ----
setTimeout(function(){
    if (typeof gsap === 'undefined' || !document.body.classList.contains('gsap-ready')) {
        document.documentElement.classList.add('force-visible');
    }
}, 5000);

// ---- Back/forward-cache (bfcache) fail-safe ----
// When the user navigates away and then hits the browser's Back/Forward
// button, the browser can restore the page from bfcache instead of doing
// a real reload — none of this script re-runs in that case. If they left
// the homepage before the door-opening intro finished, bfcache freezes
// that half-finished frame (doors mid-swing, hero text still hidden) and
// nothing ever continues it. `pageshow` with `event.persisted === true`
// is how the browser tells us this happened, so we jump straight to the
// fully-revealed state instead of leaving it stuck.
window.addEventListener('pageshow', function (e) {
    if (e.persisted) {
        document.documentElement.classList.add('force-visible');
    }
});

// ---- Mobile menu toggle (independent of GSAP) ----
const navToggle = document.getElementById('navToggle');
const mobileMenu = document.getElementById('mobileMenu');
if (navToggle && mobileMenu){
    navToggle.addEventListener('click', () => {
        navToggle.classList.toggle('open');
        mobileMenu.classList.toggle('open');
    });
    mobileMenu.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
        navToggle.classList.remove('open');
        mobileMenu.classList.remove('open');
    }));
}

// ---- Collections page: filter pills (safe no-op on pages without them) ----
document.querySelectorAll('.filter-pill').forEach(pill => {
    pill.addEventListener('click', () => {
        document.querySelectorAll('.filter-pill').forEach(p => p.classList.remove('active'));
        pill.classList.add('active');
        const cat = pill.dataset.filter;
        document.querySelectorAll('.cat-item').forEach(item => {
            const show = cat === 'all' || item.dataset.cat === cat;
            if (typeof gsap !== 'undefined') {
                gsap.to(item, { opacity: show ? 1 : .12, duration: .4 });
            } else {
                item.style.opacity = show ? 1 : .12;
            }
        });
    });
});

// ---- Everything below needs GSAP. Run it once GSAP is confirmed ready,
//      instead of assuming it's already on window. ----
let gsapFeaturesHaveRun = false;
function initGsapFeatures(){
    if (gsapFeaturesHaveRun) return;
    if (typeof gsap === 'undefined') return; // not actually ready yet
    gsapFeaturesHaveRun = true;

    document.body.classList.add('gsap-ready');
    gsap.registerPlugin(ScrollTrigger);

    // ---- Smooth scroll (Lenis) ----
    if (typeof Lenis !== 'undefined'){
        const lenis = new Lenis({ lerp: 0.09 });
        function raf(time){ lenis.raf(time); requestAnimationFrame(raf); }
        requestAnimationFrame(raf);
        lenis.on('scroll', ScrollTrigger.update);
    }

    // ---- Preloader (+ homepage door-opening intro, chained into the
    //      same timeline so it always plays right after the loader) ----
    let preloaderHasRun = false;
    function runPreloader(){
        if (preloaderHasRun) return;
        preloaderHasRun = true;
        const tl = gsap.timeline();
        tl.to('#loader .bar span', { scaleX: 1, duration: .9, ease: 'power3.inOut' })
          .to('#loader', { yPercent: -100, duration: 1, ease: 'expo.inOut' }, '+=.15')
          .add(() => window.dispatchEvent(new Event('woodland:ready')), '-=.4');

        // ---- Homepage-only: door-opening intro (safe no-op on other pages) ----
        if (document.getElementById('doorStage')) {
            tl.to('.door-leaf.left', { rotateY: -108, duration: 1.5, ease: 'expo.inOut' }, 0)
              .to('.door-leaf.right', { rotateY: 108, duration: 1.5, ease: 'expo.inOut' }, 0)
              .to('#doorStage', { autoAlpha: 0, duration: .5 }, '-=.3')
              .to('#heroTag', { opacity: 1, duration: .8 }, '-=.5')
              .to('#heroEyebrow', { opacity: 1, duration: .8 }, '-=1.1')
              .to('#heroTitle', { opacity: 1, y: 0, duration: 1.1, ease: 'power4.out' }, '-=.9')
              .fromTo('#heroTitle', { y: 30 }, { y: 0, duration: 1.1, ease: 'power4.out' }, '<')
              .to('#heroSub', { opacity: 1, duration: .9 }, '-=.8')
              .to('#heroRow', { opacity: 1, duration: .9 }, '-=.7')
              .to('#heroNum', { opacity: 1, duration: .9 }, '-=.7');
        }
    }
    if (document.readyState === 'complete') {
        runPreloader();
    } else {
        window.addEventListener('load', runPreloader);
        setTimeout(runPreloader, 2500); // safety net: never let the loader hang indefinitely
    }

    // ---- Homepage-only: craft-banner image parallax (safe no-op elsewhere) ----
    if (document.getElementById('craftImg')) {
        gsap.to('#craftImg', {
            yPercent: 18, ease: 'none',
            scrollTrigger: { trigger: '.craft-banner', scrub: true, start: 'top bottom', end: 'bottom top' }
        });
    }

    // ---- Custom cursor ----
    const cursor = document.getElementById('cursor');
    const ring = document.getElementById('cursor-ring');
    if (cursor && ring && matchMedia('(hover:hover)').matches){
        let rx = 0, ry = 0;
        window.addEventListener('mousemove', e => {
            gsap.to(cursor, { x: e.clientX, y: e.clientY, duration: .1 });
            rx = e.clientX; ry = e.clientY;
        });
        gsap.ticker.add(() => gsap.to(ring, { x: rx, y: ry, duration: .35, ease: 'power2.out' }));
        document.querySelectorAll('a, button, .cursor-grow').forEach(el => {
            el.addEventListener('mouseenter', () => gsap.to(ring, { scale: 2.2, opacity: .5, duration: .3 }));
            el.addEventListener('mouseleave', () => gsap.to(ring, { scale: 1, opacity: 1, duration: .3 }));
        });
    } else if (cursor && ring){
        cursor.style.display = 'none'; ring.style.display = 'none';
    }

    // ---- Nav scroll state ----
    const nav = document.getElementById('siteNav');
    ScrollTrigger.create({
        start: 'top -60',
        onEnter: () => nav.classList.add('scrolled'),
        onLeaveBack: () => nav.classList.remove('scrolled'),
    });

    // ---- Generic scroll reveals ----
    gsap.utils.toArray('[data-reveal]').forEach(el => {
        gsap.fromTo(el, { y: 60, opacity: 0 }, {
            y: 0, opacity: 1, duration: 1.1, ease: 'power3.out',
            scrollTrigger: { trigger: el, start: 'top 88%' }
        });
    });

    gsap.utils.toArray('.img-reveal').forEach(el => {
        gsap.to(el, {
            clipPath: 'inset(0% 0% 0% 0%)', duration: 1.4, ease: 'expo.inOut',
            scrollTrigger: { trigger: el, start: 'top 88%' }
        });
        const img = el.querySelector('img');
        if (img) gsap.to(img, {
            scale: 1, duration: 1.8, ease: 'power2.out',
            scrollTrigger: { trigger: el, start: 'top 88%' }
        });
    });

    // ---- Subtle 3D tilt on cards ----
    document.querySelectorAll('[data-tilt]').forEach(card => {
        const strength = 10;
        card.addEventListener('mousemove', e => {
            const r = card.getBoundingClientRect();
            const px = (e.clientX - r.left) / r.width - .5;
            const py = (e.clientY - r.top) / r.height - .5;
            gsap.to(card, { rotateY: px * strength, rotateX: -py * strength, duration: .5, ease: 'power2.out', transformPerspective: 800 });
        });
        card.addEventListener('mouseleave', () => gsap.to(card, { rotateY: 0, rotateX: 0, duration: .6, ease: 'power3.out' }));
    });
}

// Try immediately (covers the common case where GSAP loaded in time)...
initGsapFeatures();
// ...and also listen for the explicit "ready" signal from VendorScripts,
// which covers the case where GSAP was still loading when this line ran.
window.addEventListener('vendor-scripts:ready', initGsapFeatures);
// Final safety net: keep checking for a few seconds in case both of the
// above somehow missed it (e.g. event fired before this listener attached).
let gsapPollAttempts = 0;
const gsapPollId = setInterval(() => {
    gsapPollAttempts++;
    if (typeof gsap !== 'undefined') {
        initGsapFeatures();
        clearInterval(gsapPollId);
    } else if (gsapPollAttempts > 40) { // ~4 seconds at 100ms
        clearInterval(gsapPollId);
    }
}, 100);
