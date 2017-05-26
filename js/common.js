$(window).load(function(){ // вешаем скрипт на load ибо при ready chrome криво достаёт размеры
var hh = $('#head').height(); // берем высоту шапки и суем в переменную hh
var fh = $('footer').height(); // то же самое с подвалом
var wh = $(window).height(); // высота всего окна
var сh = wh - hh - fh; // считаем оптимальную высоту для блока с контентом
$('#cont').css('min-height', сh); // применяем посчитанную высоту
});

