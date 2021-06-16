document.getElementById('next').onclick = function() {
    document.getElementById('carousel').classList.add('toggle');
}
document.getElementById('prev').onclick = function() {
    document.getElementById('carousel').classList.remove('toggle');
}

document.getElementById('rarr').onclick = function() {
    document.getElementById('first__twit').classList.add('non__display');
    document.getElementById('second__twit').classList.remove('non__display');
}
document.getElementById('larr').onclick = function() {
    document.getElementById('second__twit').classList.add('non__display');
    document.getElementById('first__twit').classList.remove('non__display');
}

$(".projects__item").hover(function(){
    $(this).addClass('active');
    $('.active> .project__item__up> button').css('display','inline-block');
    $('.active> .project__item__down').css('background-color','rgb(47,66,77)');
    $('.active> .project__item__down> .project__item__heart> i').css('color','red');
},
function(){
    $('.active> .project__item__down> .project__item__heart> i').css('color','grey');
    $('.active> .project__item__down').css('background-color','rgb(35,50,58)');
    $('.active> .project__item__up> button').css('display','none');
    $(this).removeClass('active');
});

$(".accordeon__item").click(function(){
    $('.active__accordeon> .article__item__article').css('display','none');
    $('.active__accordeon> .accordeon__item__title> h4').removeClass('blue');
    $('.active__accordeon> .accordeon__item__title> button').text('+');
    $('.active__accordeon').removeClass('active__accordeon');

    $(this).addClass('active__accordeon');
    $('.active__accordeon> .accordeon__item__title> button').html('&ndash;');
    $('.active__accordeon> .accordeon__item__title> h4').addClass('blue');
    $('.active__accordeon>.article__item__article').css('display','block');
});

