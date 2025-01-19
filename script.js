const scroll = new LocomotiveScroll({
    el: document.querySelector('[data-scroll-container]'),
    smooth: true,
    lerp: 0.07, // lerp is the amount of time it takes to scroll to the next page
    
});

// the upper code is to make the page scroll smoothly the working of this is in the index.html file where the id of the main div is #main and the smooth: true is to make the page scroll smoothly and the el: document.querySelector('#main') is to select the main div 
