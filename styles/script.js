/////
//
// Title: Fullscreen Menu with jQuery and Flexbox
// Author: Steven Roberts
//
/////

// Functions

function openMenu() {
    $('.js-menu-container-l').addClass('is-open'); // Find element with the class 'js-menu-container' and apply an additional class of 'is-open'
    $('.js-menu-container-r').addClass('is-open');
}


function closeMenu() {
    $('.js-menu-container-l').removeClass('is-open');
    $('.js-menu-container-r').removeClass('is-open'); // Find element with the class 'js-menu-container' and remove the class 'is-open'
}

// Document Ready

jQuery(document).ready(function ($) { // When everything has finished loading

    $('.js-menu-button').click(function () { // When the element with the class 'js-menu-button' is clicked
        openMenu(); // Run the openMenu function
    });

    $('.js-menu-close').click(function () { // When the element with the class 'js-menu-close' is clicked
        closeMenu(); // Run the closeMenu function
    });

});

// Keyboard Accessibility

jQuery(document).keyup(function (e) { // Listen for keyboard presses

    if (e.keyCode === 27) { // 'Esc' key

        if ($('.js-menu-container-l').hasClass('is-open')) { // If the menu is open close it
            closeMenu(); // Run the closeMenu function
        }

    }

});
