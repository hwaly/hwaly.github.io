---
---

const $ = (selector, context = document) => context.querySelector(selector);
const $$ = (selector, context = document) => Array.from(context.querySelectorAll(selector));
const $on = (target, type, callback, capture) => target.addEventListener(type, callback, !!capture);

const scrollSiteMenu = () => {
    const header = $('.site-header');
    const onScroll = () => {
        header.classList[window.pageYOffset ? 'add' : 'remove']('site-header--fixed');
    };

    $on(window, 'scroll', onScroll);
};

const app = () => {
    scrollSiteMenu();
};

$on(document, 'DOMContentLoaded', app);