
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
     direct:"how_to_wiesly_invest_50k.html"},
	 {title:"5 Advantages of Investing in Your 20s",
     direct:"5_advantages_of_investing_in_your_20s.html"},
	 {title:"Real Estate Investing Guide for Teens",
     direct:"real-estate-investing-guide-for-teens.html"},
		 {title:"Best Long-Term Investments for Teens",
     direct:"best-long-term-investments-for-teens.html"}
	
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
     direct:"solana_vs_ethereum_which_is_better.html"},
	{title:"Should You Invest in Crypto? (Deep Dive on the Risks in 2022)",
     direct:"should_you_invest_in_crypto.html"},
	 {title:"Should You Invest in NFT? (Deep Dive on the Risks in 2023)",
     direct:"should_you_invest_in_nft.html"}
	
	
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
     direct:"best_states_to_invest_in_real_estate.html"},
	{title:"Best Paying Jobs In Real Estate Trusts",
     direct:"best_paying_jobs_in_real_estate_investment_trusts.html"},
	 {title:"Pros and Cons of Real Estate Investing in 2023",
     direct:"pros-and-cons-of-real-estate-investing-in-2023.html"},
	 {title:"Real Estate Investing Guide for Teens",
     direct:"real-estate-investing-guide-for-teens.html"},
	 {title:"Best paying jobs in real estate investment trusts",
     direct:"best_paying_jobs_in_real_estate_investment_trusts.html"}
	
	
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
	direct:"should_you_buy_tesla_stock.html"},
	{title:"7 Things you absolutely need to know before you Start Investing in Stocks",
     direct:"7-things-you-need-to-know-before-you-start-investing-in-stocks.html"},
	 {title:"7-stocks-that-will-make-you-milionaire-in-2023",
     direct:"7-software-stocks-that-will-make-you-milionaire-in-2023.html"},
	 {title:"6 Best Retail Stocks to Buy During This Inflationary Environment",
     direct:"6-best-retail-stocks-to-buy-during-this-infationary-enviroment.html"},
	
	
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


let latestPosts=[
    {
        image:"../img/best_paying_jobs_in_real_estate_investment_trusts.jpg",
        category:"Real Estate",
        title:"Best paying jobs in real estate investment trusts",
        caption:"With gas prices reaching record highs, you may be looking for ways to save money at the pump and the new BP rewards card does",
        date:"08.19.2022",
        source:"../Articles/best_paying_jobs_in_real_estate_investment_trusts.html"
    },
	{
        image:"../img/should_you_invest_in_crypto.jpg",
        category:"Crypto/NFT",
        title:"Should You Invest in Crypto? (Deep Dive on the Risks in 2022)",
        caption:"Cryptocurrencies are digital or virtual tokens that use cryptography to secure their transactions and to control the creation of new units of currency.",
        date:"06.19.2022",
        source:"../Articles/should_you_invest_in_crypto.html"
    },
	{
        image:"../img/how_to_wiesly_invest_50k.jpg",
        category:"Education",
        title:"How to Wisely Invest $50K",
        caption:"Think about how much you would be paid for each share. There are many things you can do if investing 50k is your target.",
		date:"06.18.2022",
        source:"../Articles/how_to_wiesly_invest_50k.html"
    }
]
let mainContainer=document.querySelector(".post-bottom-wrap")
latestPosts.forEach(el=>{
    let wholeWrap=document.createElement('div');
    let image=document.createElement("img");
    let kategorija=document.createElement('span');
    let title=document.createElement('h3');
    let caption=document.createElement("p");
    let date=document.createElement('span');
    let linkuvani=document.createElement('a')
    linkuvani.href=el.source
    image.src=el.image;
	image.alt=el.title
    kategorija.textContent=el.category;
    title.textContent=el.title;
    caption.textContent=el.caption;
    date.textContent=el.date;
linkuvani.appendChild(image);
linkuvani.appendChild(kategorija);
linkuvani.appendChild(title);
    wholeWrap.appendChild(linkuvani);
    wholeWrap.appendChild(caption);
    wholeWrap.appendChild(date)
    mainContainer.appendChild(wholeWrap);
	wholeWrap.classList.add("post-bottom-box")
	kategorija.classList.add("kategorija");
	title.classList.add("title-post")

})