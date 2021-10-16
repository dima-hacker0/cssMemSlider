const img = document.querySelector('#img');
let currenrSlide = 1;

const allImages = document.querySelectorAll('.slider-buttom');

document.querySelector('#button-1').addEventListener('click', function() {
    for(let i = 0; i < 4; i++) {
        if(allImages[i].classList.contains('current-button')) {
            allImages[i].classList.remove('current-button');
        }
    }
    document.querySelector('#text').innerHTML = 'something is wrong here';
    document.querySelector('.img-div').style.backgroundImage = 'url(photos/mem1.2.jpg)';
    document.querySelector('#button-1').classList.add('current-button');
});

document.querySelector('#button-2').addEventListener('click', function() {
    for(let i = 0; i < 4; i++) {
        if(allImages[i].classList.contains('current-button')) {
            allImages[i].classList.remove('current-button');
        }
    }
    document.querySelector('.img-div').style.backgroundImage = 'url(photos/mem2.jpg)';
    document.querySelector('#button-2').classList.add('current-button');
    document.querySelector('#text').innerHTML = 'Кто-то здесь сказал слово "семья"?';
});

document.querySelector('#button-3').addEventListener('click', function() {
    for(let i = 0; i < 4; i++) {
        if(allImages[i].classList.contains('current-button')) {
            allImages[i].classList.remove('current-button');
        }
    }
    document.querySelector('#text').innerHTML = "you can't just write code without errors";
    document.querySelector('.img-div').style.backgroundImage = 'url(photos/mem3.jpg)';
    document.querySelector('#button-3').classList.add('current-button');
});

document.querySelector('#button-4').addEventListener('click', function() {
    for(let i = 0; i < 4; i++) {
        if(allImages[i].classList.contains('current-button')) {
            allImages[i].classList.remove('current-button');
        }
    }
    document.querySelector('#text').innerHTML = 'when I got the maximum score on croos-check';
    document.querySelector('.img-div').style.backgroundImage = 'url(photos/mem4.jpg)';
    document.querySelector('#button-4').classList.add('current-button');
});

