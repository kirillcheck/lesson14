$(document).ready(function(){ // пишем обработчик события , который работает 
    // запрещает работу скрипта до его полной загрузки 
    $('.main_btna, .main_btn, a[href*="#sheldure"] ').on('click', ()=>{
        // достучались до 3 элементов на странице , повесив на них 
        //  обработчик событий 
        $('.overlay').fadeIn(); // доступ к overlay + ставим анимацию fadein
        $('.modal').slideDown(); // доступ к модальному окну + разворачиваем его
    });

    $('.close').on('click', ()=>{  // реализация закрытия модального окна при 
        // нажатии на крестик 
        $('.overlay').fadeOut(); // анимация 
        $('.modal').slideUp(); // сворачиваем наверх
    });

});