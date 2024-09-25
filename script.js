// Language Switcher Toggle
const languageSwitch = document.getElementById('language-switch');
languageSwitch.addEventListener('click', function () {
    if (languageSwitch.classList.contains('off')) {
        languageSwitch.classList.remove('off');
        languageSwitch.classList.add('on');
        languageSwitch.textContent = 'English';
    } else {
        languageSwitch.classList.remove('on');
        languageSwitch.classList.add('off');
        languageSwitch.textContent = 'বাংলা';
    }
});

// Back to top button
const backToTopButton = document.getElementById('back-to-top');
window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        backToTopButton.classList.add('show');
    } else {
        backToTopButton.classList.remove('show');
    }
});

backToTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});


const books = document.querySelector('.books');
const nextBtn = document.querySelector('.next');
const prevBtn = document.querySelector('.prev');
let scrollAmount = 0;

nextBtn.addEventListener('click', () => {
    books.scrollBy({
        top: 0,
        left: 300,
        behavior: 'smooth'
    });
});

prevBtn.addEventListener('click', () => {
    books.scrollBy({
        top: 0,
        left: -300,
        behavior: 'smooth'
    });
});



let currentPage = 1;
const rowsPerPage = 10;

function displayTablePage(page) {
    const table = document.getElementById('branchesTable').getElementsByTagName('tbody')[0];
    const rows = table.getElementsByTagName('tr');
    const totalRows = rows.length;
    const start = (page - 1) * rowsPerPage;
    const end = start + rowsPerPage;

    for (let i = 0; i < totalRows; i++) {
        rows[i].style.display = (i >= start && i < end) ? '' : 'none';
    }

    document.getElementById('prevBtn').disabled = page === 1;
    document.getElementById('nextBtn').disabled = end >= totalRows;
}

function nextPage() {
    currentPage++;
    displayTablePage(currentPage);
}

function prevPage() {
    currentPage--;
    displayTablePage(currentPage);
}

function searchTable() {
    const input = document.getElementById('searchBox').value.toLowerCase();
    const table = document.getElementById('branchesTable').getElementsByTagName('tbody')[0];
    const rows = table.getElementsByTagName('tr');

    let visibleRows = 0;

    for (let i = 0; i < rows.length; i++) {
        const cells = rows[i].getElementsByTagName('td');
        let match = false;

        for (let j = 0; j < cells.length - 1; j++) { // Exclude the last column (Action)
            if (cells[j].innerText.toLowerCase().includes(input)) {
                match = true;
                break;
            }
        }

        if (match) {
            rows[i].style.display = '';
            visibleRows++;
        } else {
            rows[i].style.display = 'none';
        }
    }

    // If there are fewer than rowsPerPage visible rows, disable pagination buttons
    document.getElementById('prevBtn').disabled = visibleRows <= rowsPerPage;
    document.getElementById('nextBtn').disabled = visibleRows <= rowsPerPage;
}

window.onload = function() {
    displayTablePage(currentPage);
};

var bg = document.querySelector('.item-bg');
var items = document.querySelectorAll('.news__item');
var item = document.querySelector('.news__item');

function cLog(content) {
    console.log(content)
}

if($(window).width() > 800) {
    $(document).on("mouseover", ".news__item", function (_event, _element) {

        var newsItem = document.querySelectorAll('.news__item');
        newsItem.forEach(function (element, index) {
            element.addEventListener('mouseover', function () {
                var x = this.getBoundingClientRect().left;
                var y = this.getBoundingClientRect().top;
                var width = this.getBoundingClientRect().width;
                var height = this.getBoundingClientRect().height;

                $('.item-bg').addClass('active');
                $('.news__item').removeClass('active');
                // $('.news__item').removeClass('active');


                bg.style.width = width + 'px';
                bg.style.height = height + 'px';
                bg.style.transform = 'translateX(' + x + 'px ) translateY(' + y + 'px)';
            });

            element.addEventListener('mouseleave', function () {
                $('.item-bg').removeClass('active');
                $('.news__item').removeClass('active');
            });

        });

    });
}


var swiper = new Swiper('.news-slider', {
    effect: 'coverflow',
    grabCursor: true,
    loop: true,
    centeredSlides: true,
    keyboard: true,
    spaceBetween: 0,
    slidesPerView: 'auto',
    speed: 300,
    coverflowEffect: {
        rotate: 0,
        stretch: 0,
        depth: 0,
        modifier: 3,
        slideShadows: false
    },
    breakpoints: {
        480: {
            spaceBetween: 0,
            centeredSlides: true
        }
    },
    simulateTouch: true,
    navigation: {
        nextEl: '.news-slider-next',
        prevEl: '.news-slider-prev'
    },
    pagination: {
        el: '.news-slider__pagination',
        clickable: true
    },
    on: {
        init: function () {
            var activeItem = document.querySelector('.swiper-slide-active');

            var sliderItem = activeItem.querySelector('.news__item');

            $('.swiper-slide-active .news__item').addClass('active');

            var x = sliderItem.getBoundingClientRect().left;
            var y = sliderItem.getBoundingClientRect().top;
            var width = sliderItem.getBoundingClientRect().width;
            var height = sliderItem.getBoundingClientRect().height;


            $('.item-bg').addClass('active');

            bg.style.width = width + 'px';
            bg.style.height = height + 'px';
            bg.style.transform = 'translateX(' + x + 'px ) translateY(' + y + 'px)';
        }
    }
});

swiper.on('touchEnd', function () {
    $('.news__item').removeClass('active');
    $('.swiper-slide-active .news__item').addClass('active');
});

swiper.on('slideChange', function () {
    $('.news__item').removeClass('active');
});

swiper.on('slideChangeTransitionEnd', function () {
    $('.news__item').removeClass('active');
    var activeItem = document.querySelector('.swiper-slide-active');

    var sliderItem = activeItem.querySelector('.news__item');

    $('.swiper-slide-active .news__item').addClass('active');

    var x = sliderItem.getBoundingClientRect().left;
    var y = sliderItem.getBoundingClientRect().top;
    var width = sliderItem.getBoundingClientRect().width;
    var height = sliderItem.getBoundingClientRect().height;


    $('.item-bg').addClass('active');

    bg.style.width = width + 'px';
    bg.style.height = height + 'px';
    bg.style.transform = 'translateX(' + x + 'px ) translateY(' + y + 'px)';
});


