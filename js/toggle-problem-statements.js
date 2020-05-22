// Update display to reflect the selected year
var $ = require('jquery');


// console.log('toggle problem statement connected');

$('.problem-statements').on('click', function (e) {
    var problemSet = e.target.id
    // console.log(problemSet)
    $('.yr-btn').removeClass('yr-btn-active');
    $('.ps-active').addClass('ps-inactive');
    $('.ps-active').removeClass('ps-active');

    $('#' + problemSet).addClass('yr-btn-active');
    $('.ps-' + problemSet).addClass('ps-active');
    $('.ps-' + problemSet).removeClass('ps-inactive');
});
