

const isMobile = {
	Android: function () {
		return navigator.userAgent.match(/Android/i);
	},
	BlackBerry: function () {
		return navigator.userAgent.match(/BlackBerry/i);
	},
	iOS: function () {
		return navigator.userAgent.match(/iPhone|iPad|iPod/i);
	},
	Opera: function () {
		return navigator.userAgent.match(/Opera Mini/i);
	},
	Windows: function () {
		return navigator.userAgent.match(/IEMobile/i);
	},
	any: function () {
		return (
			isMobile.Android() ||
			isMobile.BlackBerry() ||
			isMobile.iOS() ||
			isMobile.Opera() ||
			isMobile.Windows()
		);
	},
};

if (isMobile.any()) {
	document.body.classList.add('_touch');

	let menuArrows = document.querySelectorAll('.menu__arrow');
	if (menuArrows.length > 0) {
		for (let index = 0; index < menuArrows.length; index++) {
			const menuArrow = menuArrows[index];
			menuArrow.addEventListener('click', function (e) {
				menuArrow.parentElement.classList.toggle('_active');
			});
		}
	}
} else {
	document.body.classList.add('_pc');
}

// burger menu
const iconMenu = document.querySelector('.menu__icon');
const menuBody = document.querySelector('.menu__body');
if (iconMenu) {
	iconMenu.addEventListener('click', function (e) {
		document.body.classList.toggle('_lock');
		iconMenu.classList.toggle('_active');
		menuBody.classList.toggle('_active');
	});
}

// scroll on click
const menuLinks = document.querySelectorAll('.menu__link[data-goto]');
if (menuLinks.length > 0) {
	menuLinks.forEach((menuLink) => {
		menuLink.addEventListener('click', onMenuLinkClick);
	});

	function onMenuLinkClick(e) {
		const menuLink = e.target;
		if (
			menuLink.dataset.goto &&
			document.querySelector(menuLink.dataset.goto)
		) {
			const gotoBlock = document.querySelector(menuLink.dataset.goto);
			const gotoBlockValue =
				gotoBlock.getBoundingClientRect().top +
				pageYOffset -
				document.querySelector('.header').offsetHeight;

			if (iconMenu.classList.contains('_active')) {
				document.body.classList.remove('_lock');
				iconMenu.classList.remove('_active');
				menuBody.classList.remove('_active');

				// auto close sub-menu
				if (
					menuBody.dataset.sub_menu_auto_close &&
					document.body.classList.contains('_touch')
				) {
					let menuArrows = document.querySelectorAll('.menu__arrow');
					for (let index = 0; index < menuArrows.length; index++) {
						menuArrows[index].parentElement.classList.remove('_active');
					}
				}
			}

			window.scrollTo({
				top: gotoBlockValue,
				behavior: 'smooth',
			});
			e.preventDefault();
		}
	}
}










var mainContainer = document.querySelector(".main-container");
const loadMoreBtn = document.querySelector('.load-more')
loadMoreBtn.classList.add("btn")
let cards = []

function printCards(data) {
    data.forEach(el => {
       
    let mainWrap=document.createElement("div");
mainWrap.classList.add("whole-wrap")
let title=document.createElement("h4")
let category=document.createElement("span")
    let caption=document.createElement("p")
    let img=document.createElement("img")
    let link=document.createElement("a")
	let linkButton=document.createElement("a")
let button=document.createElement("button")
    title.classList.add('title-post')
	category.classList.add('kategorija')
        img.src=el.image
		img.alt=el.title
        category.textContent=el.category
        title.textContent=el.title
        caption.textContent=el.caption
		linkButton.href=el.source_link
        link.href=el.source_link
		button.textContent="Read More"
		linkButton.appendChild(button)
		const breakLane=document.createElement('br');
const br=document.createElement('br');
button.classList.add("read-more")
    link.appendChild(img);
	link.appendChild(breakLane);
	link.appendChild(category);
	link.appendChild(br);
	link.appendChild(title);

	
	mainWrap.appendChild(link)
	mainWrap.appendChild(caption)
	mainWrap.appendChild(linkButton)

mainContainer.appendChild(mainWrap);
    })
}

fetch("data.json")
.then(res => res.json())
.then(function(data){
    printCards(data.slice(0, 6))
    cards = data.slice(6)
})

loadMoreBtn.addEventListener('click', function() {
    printCards(cards.splice(0, 4))
    if (cards.length <= 0) {
        loadMoreBtn.style.visibility = 'hidden'
    }
})




var mainContainer2 = document.querySelector(".main-container-2");
const loadMoreBtn2 = document.querySelector('.load-more-2')
loadMoreBtn.classList.add("btn")
let cards2 = []

function printCards2(data) {
    data.forEach(el => {
		let mainWrap=document.createElement("div");
		mainWrap.classList.add("whole-wrap")
		let title=document.createElement("h4")
		let category=document.createElement("span")
			let caption=document.createElement("p")
			let img=document.createElement("img")
			let link=document.createElement("a")
			let linkButton=document.createElement("a")
		let button=document.createElement("button")
			title.classList.add('title-post')
			category.classList.add('kategorija')
				img.src=el.image
				img.alt=el.title
				category.textContent=el.category
				title.textContent=el.title
				caption.textContent=el.caption
				linkButton.href=el.source_link
				link.href=el.source_link
				button.textContent="Read More"
				linkButton.appendChild(button)
				const breakLane=document.createElement('br');
		const br=document.createElement('br');
		button.classList.add("read-more")
			link.appendChild(img);
			link.appendChild(breakLane);
			link.appendChild(category);
			link.appendChild(br);
			link.appendChild(title);
		
			
			mainWrap.appendChild(link)
			mainWrap.appendChild(caption)
			mainWrap.appendChild(linkButton)
		
		mainContainer2.appendChild(mainWrap);
    })
}

fetch("data-2.json")
.then(res => res.json())
.then(function(data){
    printCards2(data.slice(0, 4))
    cards2 = data.slice(4)
})

loadMoreBtn2.addEventListener('click', function() {
    printCards2(cards2.splice(0, 4))
    if (cards2.length <= 0) {
        loadMoreBtn2.style.visibility = 'hidden'
    }
})


var mainContainer3 = document.querySelector(".main-container-3");

let cards3 = []

function printCards3(data) {
    data.forEach(el => {
       
		let mainWrap=document.createElement("div");
		mainWrap.classList.add("whole-wrap-3")
		let title=document.createElement("span")
		let category=document.createElement("h5")
			let caption=document.createElement("p")
			let img=document.createElement("img")
			let link=document.createElement("a")
			
				img.src=el.image
				category.textContent=el.category
				title.textContent=el.title
				
			   
				link.href=el.source_link
		
				
			link.appendChild(img);
		title.appendChild(category)
	
			link.appendChild(caption);
			
			mainWrap.appendChild(link)
			mainWrap.appendChild(title)
		mainContainer3.appendChild(mainWrap);
    })
}

fetch("data-3.json")
.then(res => res.json())
.then(function(data){
    printCards3(data.slice(0, 3))
    cards3 = data.slice(3)
})








const prev  = document.querySelector('.prev');
const next = document.querySelector('.next');

const track = document.querySelector('.track');

let carouselWidth = document.querySelector('.carousel-container').offsetWidth;

window.addEventListener('resize', () => {
  carouselWidth = document.querySelector('.carousel-container').offsetWidth;
})

let index = 0;

next.addEventListener('click', () => {
  index++;
  prev.classList.add('show');
  track.style.transform = `translateX(-${index * carouselWidth}px)`;
  
  if (track.offsetWidth - (index * carouselWidth) < carouselWidth) {
    next.classList.add('hide');
  }
})

prev.addEventListener('click', () => {
  index--;
  next.classList.remove('hide');
  if (index === 0) {
    prev.classList.remove('show');
  }
  track.style.transform = `translateX(-${index * carouselWidth}px)`;
})

/*
var i = 0; 			// Start Point
var images = [];	// Images Array
var time = 3000;	// Time Between Switch

// image list
images[0] = 'img/real-estate.svg';
images[1] = 'img/financial-education.svg';
images[2] = 'img/crypto-nft.svg';
images[3] = 'img/trade-stocks.svg';

// Change Image
function changeImg(){
	document.slide.src = images[i];

	// Check If Index Is Under Max
	if(i < images.length - 1){
	  // Add 1 to Index
	  i++; 
	} else { 
		// Reset Back To O
		i = 0;
	}

	// Run function every x seconds
	setTimeout("changeImg()", time);
}

// Run function when page loads
window.onload=changeImg;
*/

let Education=document.querySelector(".menu__sub-list-education")
let li=document.createElement('li')
let linkHref=document.createElement("a")

let education=[
	{title:"How To Wiesly Invest 50k",
     direct:"./assets/Articles/how_to_wiesly_invest_50k.html"},
	 {title:"5 Advantages of Investing in Your 20s",
     direct:"./assets/Articles/5_advantages_of_investing_in_your_20s.html"},
	 {title:"Real Estate Investing Guide for Teens",
     direct:"./assets/Articles/real-estate-investing-guide-for-teens.html"},
		 {title:"Best Long-Term Investments for Teens",
     direct:"./assets/Articles/best-long-term-investments-for-teens.html"}
	
]

education.forEach(el=>{
	let educationMain=document.querySelector(".menu__sub-list-education")
	
let li=document.createElement('li')
let linkHref=document.createElement("a")
linkHref.href=el.direct
linkHref.textContent=el.title
li.appendChild(linkHref);
educationMain.appendChild(li)
li.classList.add("linksNav")


	
})

let crypto=[
	{title:"Should You Invest in Crypto? (Deep Dive on the Risks in 2022)",
     direct:"./assets/Articles/should_you_invest_in_crypto.html"},
	 {title:"Should You Invest in NFT? (Deep Dive on the Risks in 2023)",
     direct:"./assets/Articles/should_you_invest_in_nft.html"}
	
	
]

crypto.forEach(el=>{
	let educationMain=document.querySelector(".menu__sub-list-crypto")
	
let li=document.createElement('li')
let linkHref=document.createElement("a")
linkHref.href=el.direct
linkHref.textContent=el.title
li.appendChild(linkHref);
educationMain.appendChild(li)
li.classList.add("linksNav")


	
})



let realEstate=[
	{title:"Best States to Invest in Real Estate",
	direct:"./assets/Articles/best_states_to_invest_in_real_estate.html"},
	{title:"Best Paying Jobs In Real Estate Trusts",
     direct:"./assets/Articles/best_paying_jobs_in_real_estate_investment_trusts.html"},
	 {title:"Pros and Cons of Real Estate Investing in 2023",
     direct:"./assets/Articles/pros-and-cons-of-real-estate-investing-in-2023.html"},
	 {title:"Real Estate Investing Guide for Teens",
     direct:"./assets/Articles/real-estate-investing-guide-for-teens.html"},
	 {title:"Best paying jobs in real estate investment trusts",
     direct:"./assets/Articles/best_paying_jobs_in_real_estate_investment_trusts.html"}
	
	
]

realEstate.forEach(el=>{
	let educationMain=document.querySelector(".menu__sub-list-estate")
	
let li=document.createElement('li')
let linkHref=document.createElement("a")
linkHref.href=el.direct
linkHref.textContent=el.title
li.appendChild(linkHref);
educationMain.appendChild(li)
li.classList.add("linksNav")


	
})



let stocks=[
	{title:"7 Things you absolutely need to know before you Start Investing in Stocks",
     direct:"./assets/Articles/7-things-you-need-to-know-before-you-start-investing-in-stocks.html"},
	 {title:"7-stocks-that-will-make-you-milionaire-in-2023",
     direct:"./assets/Articles/7-software-stocks-that-will-make-you-milionaire-in-2023.html"},
	 {title:"6 Best Retail Stocks to Buy During This Inflationary Environment",
     direct:"./assets/Articles/6-best-retail-stocks-to-buy-during-this-infationary-enviroment.html"},
	
]

stocks.forEach(el=>{
	let educationMain=document.querySelector(".menu__sub-list-stocks");
	
let li=document.createElement('li')
let linkHref=document.createElement("a")
linkHref.href=el.direct
linkHref.textContent=el.title
li.appendChild(linkHref);
educationMain.appendChild(li)
li.classList.add("linksNav")


	
})

