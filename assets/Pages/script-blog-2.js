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
    title.classList.add('title-post')
    category.classList.add('kategorija')
    const br=document.createElement('br')
        img.src=el.image
        img.alt=el.title
        category.textContent=el.category
        title.textContent=el.title
        caption.textContent=el.caption
       
        link.href=el.source_link


    link.appendChild(img);
	link.appendChild(category);
    link.appendChild(br)
	link.appendChild(title);
   
	
	mainWrap.appendChild(link)
    mainWrap.appendChild(caption);
mainContainer.appendChild(mainWrap);
    })
}

fetch("blogging.json")
.then(res => res.json())
.then(function(data){
    printCards(data.slice(0, 6))
    cards = data.slice(8)
})

loadMoreBtn.addEventListener('click', function() {
    printCards(cards.splice(0, 6))
    if (cards.length <= 0) {
        loadMoreBtn.style.visibility = 'hidden'
    }
})








var mainContainer2 = document.querySelector(".main-container2");
const loadMoreBtn2 = document.querySelector('.load-more2')
loadMoreBtn2.classList.add("btn")
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
    title.classList.add('title-post')
    const br=document.createElement('br')
    category.classList.add('kategorija')

        img.src=el.image
        img.alt=el.title
        category.textContent=el.category
        title.textContent=el.title
        caption.textContent=el.caption
       
        link.href=el.source_link


    link.appendChild(img);
	link.appendChild(category);
    link.appendChild(br)
	link.appendChild(title);
    
	
	mainWrap.appendChild(link)
    mainWrap.appendChild(caption);
mainContainer2.appendChild(mainWrap);
    })
}

fetch("affiliate.json")
.then(res => res.json())
.then(function(data){
    printCards2(data.slice(0, 6))
    cards2 = data.slice(8)
})

loadMoreBtn2.addEventListener('click', function() {
    printCards(cards2.splice(0, 6))
    if (cards2.length <= 0) {
        loadMoreBtn2.style.visibility = 'hidden'
    }
})






var mainContainer3 = document.querySelector(".main-container3");
const loadMoreBtn3 = document.querySelector('.load-more3')
loadMoreBtn3.classList.add("btn")
let cards3 = []

function printCards3(data) {
    data.forEach(el => {
       
    let mainWrap=document.createElement("div");
mainWrap.classList.add("whole-wrap")
let title=document.createElement("h4")
let category=document.createElement("span")
    let caption=document.createElement("p")
    let img=document.createElement("img")
    let link=document.createElement("a")
    title.classList.add('title-post')
    const br=document.createElement('br')
    category.classList.add('kategorija')

        img.src=el.image
        img.alt=el.title
        category.textContent=el.category
        title.textContent=el.title
        caption.textContent=el.caption
       
        link.href=el.source_link


    link.appendChild(img);
	link.appendChild(category);
    link.appendChild(br)
	link.appendChild(title);
   
	
	mainWrap.appendChild(link)
    mainWrap.appendChild(caption);
mainContainer3.appendChild(mainWrap);
    })
}

fetch("social-networks.json")
.then(res => res.json())
.then(function(data){
    printCards3(data.slice(0, 6))
    cards3= data.slice(8)
})

loadMoreBtn3.addEventListener('click', function() {
    printCards3(cards.splice(0, 6))
    if (cards3.length <= 0) {
        loadMoreBtn.style.visibility = 'hidden'
    }
})






var mainContainer4 = document.querySelector(".main-container4");
const loadMoreBtn4 = document.querySelector('.load-more4')
loadMoreBtn4.classList.add("btn")
let cards4 = []

function printCards4(data) {
    data.forEach(el => {
       
    let mainWrap=document.createElement("div");
mainWrap.classList.add("whole-wrap")
let title=document.createElement("h4")
let category=document.createElement("span")
    let caption=document.createElement("p")
    let img=document.createElement("img")
    let link=document.createElement("a")
    title.classList.add('title-post')
    const br=document.createElement('br')
    category.classList.add('kategorija')

        img.src=el.image
        img.alt=el.title
        category.textContent=el.category
        title.textContent=el.title
        caption.textContent=el.caption
       
        link.href=el.source_link


    link.appendChild(img);
	link.appendChild(category);
    link.appendChild(br)

	link.appendChild(title);
    link.appendChild(caption);
	
	mainWrap.appendChild(link)
    mainWrap.appendChild(caption);
mainContainer4.appendChild(mainWrap);
    })
}

fetch("gaming.json")
.then(res => res.json())
.then(function(data){
    printCards4(data.slice(0, 6))
    cards4 = data.slice(8)
})

loadMoreBtn4.addEventListener('click', function() {
    printCards4(cards4.splice(0, 6))
    if (cards4.length <= 0) {
        loadMoreBtn4.style.visibility = 'hidden'
    }
})





var mainContainer5 = document.querySelector(".main-container5");
const loadMoreBtn5 = document.querySelector('.load-more5')
loadMoreBtn5.classList.add("btn")
let cards5 = []

function printCards5(data) {
    data.forEach(el => {
       
    let mainWrap=document.createElement("div");
mainWrap.classList.add("whole-wrap")
let title=document.createElement("h4")
let category=document.createElement("span")
    let caption=document.createElement("p")
    let img=document.createElement("img")
    let link=document.createElement("a")
    title.classList.add('title-post')

    category.classList.add('kategorija')
    const br=document.createElement('br');

        img.src=el.image
        img.alt=el.title
        category.textContent=el.category
        title.textContent=el.title
        caption.textContent=el.caption
       
        link.href=el.source_link


    link.appendChild(img);
	link.appendChild(category);
    link.appendChild(br);
	link.appendChild(title);
    
	
	mainWrap.appendChild(link)
    mainWrap.appendChild(caption);
mainContainer5.appendChild(mainWrap);
    })
}

fetch("articles.json")
.then(res => res.json())
.then(function(data){
    printCards5(data.slice(0, 6))
    cards5 = data.slice(8)
})

loadMoreBtn5.addEventListener('click', function() {
    printCards5(cards5.splice(0, 6))
    if (cards5.length <= 0) {
        loadMoreBtn5.style.visibility = 'hidden'
    }
})


var mainContainer6 = document.querySelector(".main-container6");
const loadMoreBtn6 = document.querySelector('.load-more6')
loadMoreBtn6.classList.add("btn")
let cards6 = []

function printCards6(data) {
    data.forEach(el => {
       
    let mainWrap=document.createElement("div");
mainWrap.classList.add("whole-wrap")
let title=document.createElement("h4")
let category=document.createElement("span")
    let caption=document.createElement("p")
    let img=document.createElement("img")
    let link=document.createElement("a")
    title.classList.add('title-post')
    category.classList.add('kategorija')
    const br=document.createElement('br');

        img.src=el.image
        img.alt=el.title
        category.textContent=el.category
        title.textContent=el.title
        caption.textContent=el.caption
       
        link.href=el.source_link


    link.appendChild(img);
	link.appendChild(category);
    link.appendChild(br);

	link.appendChild(title);
    
	
	mainWrap.appendChild(link)
    mainWrap.appendChild(caption);
mainContainer6.appendChild(mainWrap);
    })
}

fetch("freelance.json")
.then(res => res.json())
.then(function(data){
    printCards6(data.slice(0, 6))
    cards6 = data.slice(8)
})

loadMoreBtn6.addEventListener('click', function() {
    printCards6(cards6.splice(0, 6))
    if (cards6.length <= 0) {
        loadMoreBtn6.style.visibility = 'hidden'
    }
})

let containerOne =document.querySelector(".container-wrap");
let containerTwo = document.querySelector(".container-wrap2");
let containerThree = document.querySelector(".container-wrap3");
let containerFour = document.querySelector(".container-wrap4");
let containerFive = document.querySelector(".container-wrap5");
let containerSix = document.querySelector(".container-wrap6");

let containerOneBtn = document.querySelector("#news");
let containerTwoBtn = document.querySelector("#personal-info");
let containerThreeBtn = document.querySelector("#crypto");
let containerFourBtn = document.querySelector("#realEstate");
let containerFiveBtn = document.querySelector("#stocks");
let containerSixBtn = document.querySelector("#freelance")
containerTwo.classList.add('display')
containerThree.classList.add('display')
containerFour.classList.add('display')
containerFive.classList.add('display')
containerSix.classList.add('display')
containerOneBtn.classList.add('blog-nav-active')


containerOneBtn.addEventListener('click',function(){
    containerOne.classList.remove('display')
    containerTwo.classList.add('display')
    containerThree.classList.add('display')
    containerFour.classList.add('display')
    containerFive.classList.add('display')
    containerSix.classList.add('display')
    containerOneBtn.classList.add('blog-nav-active')
containerTwoBtn.classList.remove('blog-nav-active')
containerThreeBtn.classList.remove('blog-nav-active')
containerFourBtn.classList.remove('blog-nav-active')
containerFiveBtn.classList.remove('blog-nav-active')
containerSixBtn.classList.remove('blog-nav-active')
})
containerTwoBtn.addEventListener('click',function(){
    containerOne.classList.add('display')
    containerTwo.classList.remove('display')
    containerThree.classList.add('display')
    containerFour.classList.add('display')
    containerFive.classList.add('display')
    containerSix.classList.add('display')
    containerOneBtn.classList.remove('blog-nav-active')
    containerTwoBtn.classList.add('blog-nav-active')
    containerThreeBtn.classList.remove('blog-nav-active')
    containerFourBtn.classList.remove('blog-nav-active')
    containerFiveBtn.classList.remove('blog-nav-active')
    containerSixBtn.classList.remove('blog-nav-active')
})

containerThreeBtn.addEventListener('click',function(){
    containerOne.classList.add('display')
    containerTwo.classList.add('display')
    containerThree.classList.remove('display')
    containerFour.classList.add('display')
    containerFive.classList.add('display')
    containerSix.classList.add('display')
    containerOneBtn.classList.remove('blog-nav-active')
    containerTwoBtn.classList.remove('blog-nav-active')
    containerThreeBtn.classList.add('blog-nav-active')
    containerFourBtn.classList.remove('blog-nav-active')
    containerFiveBtn.classList.remove('blog-nav-active')
    containerSixBtn.classList.remove('blog-nav-active')
})
containerFourBtn.addEventListener('click',function(){
    containerOne.classList.add('display')
    containerTwo.classList.add('display')
    containerThree.classList.add('display')
    containerFour.classList.remove('display')
    containerFive.classList.add('display')
    containerSix.classList.add('display')
    containerOneBtn.classList.remove('blog-nav-active')
    containerTwoBtn.classList.remove('blog-nav-active')
    containerThreeBtn.classList.remove('blog-nav-active')
    containerFourBtn.classList.add('blog-nav-active')
    containerFiveBtn.classList.remove('blog-nav-active')
    containerSixBtn.classList.remove('blog-nav-active')
})

containerFiveBtn.addEventListener('click',function(){
    containerOne.classList.add('display')
    containerTwo.classList.add('display')
    containerThree.classList.add('display')
    containerFour.classList.add('display')
    containerFive.classList.remove('display')
    containerSix.classList.add('display')
    containerOneBtn.classList.remove('blog-nav-active')
    containerTwoBtn.classList.remove('blog-nav-active')
    containerThreeBtn.classList.remove('blog-nav-active')
    containerFourBtn.classList.remove('blog-nav-active')
    containerFiveBtn.classList.add('blog-nav-active')
    containerSixBtn.classList.remove('blog-nav-active')
})



containerSixBtn.addEventListener('click',function(){
    containerOne.classList.add('display')
    containerTwo.classList.add('display')
    containerThree.classList.add('display')
    containerFour.classList.add('display')
    containerFive.classList.add('display')
containerSix.classList.remove('display')
    containerOneBtn.classList.remove('blog-nav-active')
    containerTwoBtn.classList.remove('blog-nav-active')
    containerThreeBtn.classList.remove('blog-nav-active')
    containerFourBtn.classList.remove('blog-nav-active')
    containerFiveBtn.classList.remove('blog-nav-active')
    containerSixBtn.classList.add('blog-nav-active')
})






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


let Education=document.querySelector(".menu__sub-list-education")
let li=document.createElement('li')
let linkHref=document.createElement("a")

let education=[
	{title:"How To Wiesly Invest 50k",
     direct:"../Articles/how_to_wiesly_invest_50k.html"},
	 {title:"5 Advantages of Investing in Your 20s",
     direct:"../Articles/5_advantages_of_investing_in_your_20s.html"},
	 {title:"Real Estate Investing Guide for Teens",
     direct:"../Articles/real-estate-investing-guide-for-teens.html"},
		 {title:"Best Long-Term Investments for Teens",
     direct:"../Articles/best-long-term-investments-for-teens.html"}
	
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
    {title:"Solana vs Ethereum",
     direct:"../Articles/solana_vs_ethereum_which_is_better.html"},
	{title:"Should You Invest in Crypto? (Deep Dive on the Risks in 2022)",
     direct:"../Articles/should_you_invest_in_crypto.html"},
	 {title:"Should You Invest in NFT? (Deep Dive on the Risks in 2023)",
     direct:"../Articles/should_you_invest_in_nft.html"}
	
	
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
    direct:"../Articles/best_states_to_invest_in_real_estate.html"},
	{title:"Best Paying Jobs In Real Estate Trusts",
     direct:"../Articles/best_paying_jobs_in_real_estate_investment_trusts.html"},
	 {title:"Pros and Cons of Real Estate Investing in 2023",
     direct:"../Articles/pros-and-cons-of-real-estate-investing-in-2023.html"},
	 {title:"Real Estate Investing Guide for Teens",
     direct:"../Articles/real-estate-investing-guide-for-teens.html"},
	 {title:"Best paying jobs in real estate investment trusts",
     direct:"../Articles/best_paying_jobs_in_real_estate_investment_trusts.html"}
	
	
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
    {title:"Should You Buy Tesla Stock?",
	direct:"../Articles/should_you_buy_tesla_stock.html"},
	{title:"7 Things you absolutely need to know before you Start Investing in Stocks",
     direct:"../Articles/7-things-you-need-to-know-before-you-start-investing-in-stocks.html"},
	 {title:"7-stocks-that-will-make-you-milionaire-in-2023",
     direct:"../Articles/7-software-stocks-that-will-make-you-milionaire-in-2023.html"},
     {title:"6 Best Retail Stocks to Buy During This Inflationary Environment",
     direct:"../Articles/6-best-retail-stocks-to-buy-during-this-infationary-enviroment.html"},
	
	
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



