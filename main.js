/*=============== SHOW MENU =================*/
const navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close')

 /*=============== MENU SHOW=================*/   
 /*validate if constant exists*/
 if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
 }

/*=============== MENU HIDDEN =================*/   
/*validate if constant exists*/
 if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
 }

/*=============== REMOVE MENU MOBILE =================*/   
const navLink = document.querySelectorAll('.nav__link')

const LinkAction = () =>{
    const navMenu = document.getElementById('nav-menu')
    //when we click on each nav__link, we  remove the show-menu//
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', LinkAction))

/*=============== BLUR HEADER =================*/  
const blurHeader = () => {
    const header = document.getElementById('header')
    //when the scroll is greater than 0 viewport height, add the blur-header class//
    this.scrollY >= 50 ? header.classList.add('blur-header')
                       : header.classList.remove('blur-header') 
}
window.addEventListener('scroll', blurHeader)

/*============== SHOW SCROLL UP ================*/
const scrollUp = () => {
    const scrollUp = document.getElementById('scroll-up')
    //when the scroll is higher than 350 viewport height, add the show-scroll class to the tag with the scrollup class//
    this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
                        : scrollUp.classList.remove('show-scroll')                    
}
window.addEventListener('scroll', scrollUp)

/*============== SCROLL SECTIONS ACTIVE LINK ================*/
const sections = document.querySelectorAll('section[id]')
    
const scrollActive = () =>{
  	const scrollDown = window.scrollY

	sections.forEach(current =>{
		const sectionHeight = current.offsetHeight,
			  sectionTop = current.offsetTop - 58,
			  sectionId = current.getAttribute('id'),
			  sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')

		if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight){
			sectionsClass.classList.add('active-link')
		}else{
			sectionsClass.classList.remove('active-link')
		}                                                    
	})
}
window.addEventListener('scroll', scrollActive)






const loadMoreButton = document.getElementById('loadmore');
const showlessButton = document.getElementById('showless');
const imageContainer = document.getElementById('image-container');


let totalImages = 1.5;
let initialImages = 1;
let currentImages = initialImages;


const initialImagesHTML = [];
for (let i = 0; i < initialImages; i++) {
  const newImage = `
    <article class="popular__card">
      <div class="popular__image">
        <img src="trinity/n1.jpg" alt="" class="popular__img">
        <div class="popular__shadow"></div>
      </div>

      <h2 class="popular__title">
        Logan Mountain
      </h2>

      <div class="popular__location">
        <i class="ri-map-pin-line"></i>
        <span>Canada</span>
      </div>
    </article>
  `;

  const newImage1 = `
    <article class="popular__card">
      <div class="popular__image">
        <img src="trinity/n2.jpg" alt="" class="popular__img">
        <div class="popular__shadow"></div>
      </div>

      <h2 class="popular__title">
        Capri
      </h2>

      <div class="popular__location">
        <i class="ri-map-pin-line"></i>
        <span>Italy</span>
      </div>
    </article>
  `;

  const newImage2 = `
    <article class="popular__card">
      <div class="popular__image">
        <img src="trinity/n3.jpg" alt="" class="popular__img">
        <div class="popular__shadow"></div>
      </div>

      <h2 class="popular__title">
        Tuskany
      </h2>

      <div class="popular__location">
        <i class="ri-map-pin-line"></i>
        <span>Italy</span>
      </div>
    </article>
  `;
  initialImagesHTML.push(newImage, newImage1,newImage2);
}
imageContainer.innerHTML = initialImagesHTML.join('');

loadMoreButton.addEventListener('click', () => {
  const newImages = [];
  for (let i = currentImages; i < currentImages + initialImages && i < totalImages; i++) {
    const newImage3 = `
      <article class="popular__card">
        <div class="popular__image">
          <img src="trinity/n4.jpg" alt="" class="popular__img">
          <div class="popular__shadow"></div>
        </div>

        <h2 class="popular__title">
          Santorini 
        </h2>

        <div class="popular__location">
          <i class="ri-map-pin-line"></i>
          <span>Greece</span>
        </div>
      </article>
    `;

    const newImage4 = `
      <article class="popular__card">
        <div class="popular__image">
          <img src="trinity/n5.jpg" alt="" class="popular__img">
          <div class="popular__shadow"></div>
        </div>

        <h2 class="popular__title">
          Garda Lake
        </h2>

        <div class="popular__location">
          <i class="ri-map-pin-line"></i>
          <span>Italy</span>
        </div>
      </article>
    `;

    const newImage5 = `
      <article class="popular__card">
        <div class="popular__image">
          <img src="trinity/n6.jpg" alt="" class="popular__img">
          <div class="popular__shadow"></div>
        </div>

        <h2 class="popular__title">
          Berden 
        </h2>

        <div class="popular__location">
          <i class="ri-map-pin-line"></i>
          <span>Norway</span>
        </div>
      </article>
    `;
    newImages.push(newImage3, newImage4, newImage5);
  }
  imageContainer.innerHTML += newImages.join('');
  currentImages += initialImages;
  if (currentImages >= totalImages) {
    loadMoreButton.style.display = 'none';
    showlessButton.style.display = 'inline-block';
  }
});

showlessButton.addEventListener('click', () => {
  imageContainer.innerHTML = initialImagesHTML.join('');
  currentImages = initialImages;
  loadMoreButton.style.display = 'inline-block';
  showlessButton.style.display = 'none';
});


/*============== Customer Service ==============*/
var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
(function(){
var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
s1.async=true;
s1.src='https://embed.tawk.to/670f41812480f5b4f58e03bd/1ia9pfovo';
s1.charset='UTF-8';
s1.setAttribute('crossorigin','*');
s0.parentNode.insertBefore(s1,s0);
})();






















