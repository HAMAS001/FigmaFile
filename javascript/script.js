const slider = document.querySelector('.slider');
const slides = document.querySelector('.slides');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
const dotsContainer = document.querySelector('.dots');

let currentIndex = 0;
const totalSlides = document.querySelectorAll('.slide').length;
const slideWidth = document.querySelector('.slide').clientWidth;


for (let i = 0; i < totalSlides; i++) {
    const dot = document.createElement('button');
    dot.classList.add('dot');
    if (i === 0) dot.classList.add('active');
    dot.addEventListener('click', () => goToSlide(i));
   
}

const dots = document.querySelectorAll('.dot');

function updateSlider() {
    slides.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
    dots.forEach(dot => dot.classList.remove('active'));
    dots[currentIndex].classList.add('active');
}

function goToSlide(index) {
    currentIndex = index;
    if (currentIndex >= totalSlides) currentIndex = 0;
    if (currentIndex < 0) currentIndex = totalSlides - 1;
    updateSlider();
}

function nextSlide() {
    currentIndex++;
    if (currentIndex >= totalSlides) currentIndex = 0;
    updateSlider();
}

function prevSlide() {
    currentIndex--;
    if (currentIndex < 0) currentIndex = totalSlides - 1;
    updateSlider();
}


nextBtn.addEventListener('click', nextSlide);
prevBtn.addEventListener('click', prevSlide);

let autoSlide = setInterval(nextSlide, 5000);


slider.addEventListener('mouseenter', () => clearInterval(autoSlide));
slider.addEventListener('mouseleave', () => autoSlide = setInterval(nextSlide, 5000));


const Menubtn = document.querySelector("#menuBtn");
const closebtn =  document.querySelector("#closebtn");
const mainHeader = document.querySelector(".main-header")


Menubtn.addEventListener("clicke",()=>{
    mainHeader.style.display = "block"
})
