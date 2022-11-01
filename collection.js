var curr = 0;

function Display(value) {
    curr += value;
    var dot_arr = document.getElementsByClassName('dot');
    var len = dot_arr.length;
    if (curr < 0) curr = len - 1;
    if (curr >= len) curr = 0;
    var i;
    var value = -100 * curr;
    $('.collection .slider').css({
        'transform' : 'translate(' + value + '%, 0)'
    });
    for (i = 0; i < len; i++) {
        dot_arr[i].className = dot_arr[i].className.replace(/ active/g, '');
        console.log(dot_arr[i].className);
    }
    dot_arr[curr].className = dot_arr[curr].className.concat(' active');
}
