//СЛАЙДЕР


function ClickArrow(obj){

    ArrowRigth = document.getElementsByClassName('rigth')[0];
    ArrowLeft = document.getElementsByClassName('left')[0];
    slider_img = document.getElementsByClassName('truck_js')[0];
    txt = document.getElementsByClassName('txt_js')[0];
    paragraf = document.getElementsByClassName('paragraf')[0];
    switch(obj){
        case 1:
            slider_img.src= 'img/liner.png';
            txt.innerHTML = 'АВИАПЕРЕВОЗКИ <br> ПО ВСЕМУ МИРУ'
            paragraf.innerHTML = 'Страны континентов: США,<br>Индонезия со всеми документами.'
        break;
        case 2:
           slider_img.src = 'img/truck.png'
           txt.innerHTML = 'ГРУЗОПЕРЕВОЗКИ <br>  ПО ЕВРОПЕ'
           paragraf.innerHTML = 'Страны Евросоюза, а также Украина,<br>Белоруссия со всеми документами.'
    }
}