
function openMoreOption() {
    $('.menubar .menu-more-option').css(
        {
            'left' : '0'
        }
    );
    $('.dark-screen').css({
        'display' : 'block'
    });
}

function closeMoreOption() {
    $('.menubar .menu-more-option').css(
        {
            'left' : '-50%'
        }
    );
    $('.dark-screen').css({
        'display' : 'none'
    });
    console.log('Close Menu');
}


$(document).click(function (event) {
    var $target = $(event.target);
    if (!$target.closest('.menu-more-option').length && $('.menu-more-option').is(":visible")) {
        if (parseInt($('.menubar .menu-more-option').css('left')) === 0) {
            $('.menubar .menu-more-option').css(
                {
                    'left' : '-50%'
                }
            );
            $('.dark-screen').css({
                'display' : 'none'
            });
            console.log('0K');
        }
    }
});

