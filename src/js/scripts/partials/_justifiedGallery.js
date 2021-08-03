//justifiedGallery------------------------------------------------------------
if($('#gallery-single-5').length || $('#justified-gallery').length){
    initJustifiedGallery();
    var resizeTimeout;

    window.onresize = function () {
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(afterWindowResize, 100); 
    };

    //filters
    $('#filters').on( 'click', '.filter', function() {
        var filterValue = $(this).attr('data-filter');
        $('.gallery-wrapper').justifiedGallery({ filter: filterValue }); 
        $(this).addClass('active');
        $(this).siblings('.filter').removeClass('active');
    });

    $('.gallery-wrapper').justifiedGallery();
}


function afterWindowResize() {
    initJustifiedGallery();
}

function initJustifiedGallery() {
    let rowHeight = calculateRowHeight();
    let rowMaxHeight = calculateMaxRowHeight(rowHeight);

    $('.gallery-wrapper').justifiedGallery({
        rowHeight: rowHeight,
        maxRowHeight: rowMaxHeight,
        lastRow: 'justify',
        margins: 10,
        captions: false,
        randomize: true
    }); 
}

function calculateRowHeight() {
    let rowHeight = 300;

    if ($(window).width() < 991) {
        rowHeight = 280;
    }

    if ($(window).width() < 768) {
        rowHeight = 320;
    }
    return rowHeight;
}

function calculateMaxRowHeight(height) {
    let rowMaxHeight = 1.8 * height; 

    if ($(window).width() < 768) {
        rowMaxHeight = height;
    }
    return rowMaxHeight;
}


