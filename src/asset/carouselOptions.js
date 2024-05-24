import { left, right } from "./staticData"

const options = {
    items: 3,
    loop: false,
    nav: true,
    dots: false,
    margin: 20,
    autoplay: true,
    autoplayTimeout: 5000,
    navText: [`<button className='p-0 carosolBtn backBtn left-0 xl:-left-8 -translate-x-1/2'><span><svg xmlns="http://www.w3.org/2000/svg" className="h-full w-full" viewBox="0 0 20 20" fill="currentColor">
    <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
</svg></span> </button>`,
        `  <button className='p-0 carosolBtn forwardBtn right-0 xl:-right-8 translate-x-1/2'><span><svg xmlns="http://www.w3.org/2000/svg" className="h-full w-full" viewBox="0 0 20 20" fill="currentColor">
    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
</svg></span></button>`],
    responsive: {
        0: {
            items: 1,
        },
        300: {
            items: 1,
        },
        450: {
            items: 2,
        },
        570: {
            items: 2,
        },
        768: {
            items: 3,
        },
        992: {
            items: 3,
        },
        1024: {
            items: 4,
        },
        1400: {
            items: 5,
        },

    }
}
const projectDetailsImagesOptions = {
    items: 1,
    loop: false,
    nav: true,
    dots: false,
    autoplay: false,
    autoplayTimeout: 5000,
    navText: [` <span><svg xmlns="http://www.w3.org/2000/svg" className="h-full w-full" viewBox="0 0 20 20" fill="currentColor">
    <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
</svg></span>`, `<span><svg xmlns="http://www.w3.org/2000/svg" className="h-full w-full" viewBox="0 0 20 20" fill="currentColor">
<path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
</svg></span>`],

}
const options2 = {
    items: 3,
    loop: false,
    nav: true,
    dots: false,
    margin: 20,
    autoplay: true,
    autoplayTimeout: 5000,
    navText: [`<button className='p-0 carosolBtn backBtn left-0 xl:-left-8 -translate-x-1/2'><span><svg xmlns="http://www.w3.org/2000/svg" className="h-full w-full" viewBox="0 0 20 20" fill="currentColor">
    <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
</svg></span> </button>`,
        `  <button className='p-0 carosolBtn forwardBtn right-0 xl:-right-8 translate-x-1/2'><span><svg xmlns="http://www.w3.org/2000/svg" className="h-full w-full" viewBox="0 0 20 20" fill="currentColor">
    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
</svg></span></button>`],
    responsive: {
        0: {
            items: 2,
        },
        300: {
            items: 3,
        },
        450: {
            items: 5,
        },
        570: {
            items: 5,
        },
        768: {
            items: 6,
        },
        992: {
            items: 7,
        },
        1024: {
            items: 7,
        },
        1400: {
            items: 8,
        },

    }
}
const options3 = {
    items: 3,
    loop: false,
    nav: false,
    dots: false,
    margin: 0,
    autoplay: true,
    autoplayTimeout: 5000,
    navText: [`<button className='p-0 hide carosolBtn backBtn left-0 xl:-left-8 -translate-x-1/2'><span><svg xmlns="http://www.w3.org/2000/svg" className="h-full w-full" viewBox="0 0 20 20" fill="currentColor">
    <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
</svg></span> </button>`,
        `  <button className='p-0 hide carosolBtn forwardBtn right-0 xl:-right-8 translate-x-1/2'><span><svg xmlns="http://www.w3.org/2000/svg" className="h-full w-full" viewBox="0 0 20 20" fill="currentColor">
    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
</svg></span></button>`],

    responsive: {
        0: {
            items: 1,
        },
        570: {
            items: 2,
        },
        768: {
            items: 2,
        },
        992: {
            items: 3,
        },


    }
}
const options4 = {
    items: 3,
    loop: true,
    nav: true,
    dots: false,
    margin: 20,
    autoplay: true,
    autoplayTimeout: 5000,
    navText: [`<button className='p-0  carosolBtn backBtn left-0 xl:-left-8 -translate-x-1/2'><span><svg xmlns="http://www.w3.org/2000/svg" className="h-full w-full" viewBox="0 0 20 20" fill="currentColor">
    <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
</svg></span> </button>`,
        `  <button className='p-0  carosolBtn forwardBtn right-0 xl:-right-8 translate-x-1/2'><span><svg xmlns="http://www.w3.org/2000/svg" className="h-full w-full" viewBox="0 0 20 20" fill="currentColor">
    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
</svg></span></button>`],

    responsive: {
        0: {
            items: 1,
        },
        570: {
            items: 2,
        },
        768: {
            items: 2,
        },
        992: {
            items: 3,
        },


    }
}


export { options, options2, options3, options4, projectDetailsImagesOptions }