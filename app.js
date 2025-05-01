const hamMenu = document.querySelector(".ham-menu");
const offScreenMenu = document.querySelector(".off-screen-menu");
const pageContent = document.querySelector(".page-content");
const reviewsGallery = document.getElementById("reviews-gallery");
const backBtn = document.getElementById("back-btn");
const forwardBtn = document.getElementById("forward-btn");
const enBtn = document.getElementById("en-btn");
const jpBtn = document.getElementById("jp-btn");
const descText = document.getElementById("desc-text");
const stylesDesc = document.getElementById("styles-desc");
const stylesPageSubheader = document.getElementById("styles-page-subheader");
const stylesPageSubheaderLink = document.getElementById("styles-page-subheader-link");
const stylesPageDesc = document.getElementById("styles-page-desc");
const stylesPageDescLink = document.getElementById("styles-page-desc-link")

// Hamburger Menu
hamMenu.addEventListener("click", () => {
    hamMenu.classList.toggle("active");
    offScreenMenu.classList.toggle("active"); 
    pageContent.classList.toggle('menu-open');
});

const translation = {
     
    en: {

        // Home page
        descText: `Traditional and modern. Formal and casual. We will meet your needs with our reliable techniques and extensive menu. We await you in a private space with two seats for your relaxation, where you will be treated to the hospitality that only a barber can provide.`,
        stylesDesc: `Discover our latest styles — find the perfect look for you. Quality cuts, sharp fades, and timeless styles tailored to you.`,

        // Styles page 
        stylesPageSubheaderBeforeLink: "Looking for a cut? Visit our ",
        stylesPageSubheaderLinkText: "menu page",
        stylesPageSubheaderAfterLink: "to see a full list of services and prices, including student discounts with valid ID. We’ve got options for everyone.",
        stylesPageDescBeforeLink: "Check out more styles on our ",
        stylesPageDescLinkText: "Instagram"
    },

    jp: {

        // Home page
        descText: `伝統とモダン。フォーマルにもカジュアルにも。確かな技術と豊富なメニューで、お客様のご要望にお応えします。理容室ならではのおもてなしを、2席だけのプライベート空間でごゆっくりとお楽しみください。`,
        stylesDesc: `フレッシュなカット、洗練されたスタイル 最新のスタイルをご紹介。あなたにぴったりのヘアを見つけてください。フェードからクラシックまで、あなたらしさを引き立てるスタイルをご提案します。`,

        // Styles page 
        stylesPageSubheaderBeforeLink: "カットをお考えの方は、",
        stylesPageSubheaderLinkText: "メニュー",
        stylesPageSubheaderAfterLink: "をチェック！学生証のご提示で学割もご利用いただけます。あなたに合ったスタイル、きっと見つかります。",
        stylesPageDescBeforeLink: "もっとスタイルをチェックするには、私たちの ",
        stylesPageDescLinkText: "Instagram",
        stylesPageDescAfterLink: "をご覧ください。"
    }

};

enBtn.addEventListener("click", () => {
    // Home Page
    if(document.body.classList.contains("home-page")){
        descText.innerText = translation.en.descText;
        stylesDesc.innerText = translation.en.stylesDesc;
    }
    // Styles Page
    if(document.body.classList.contains("styles-page")){
        stylesPageSubheader.innerHTML = `
        ${translation.en.stylesPageSubheaderBeforeLink}
        <a href="menu.html" id="styles-page-subheader-link">${translation.en.stylesPageSubheaderLinkText}</a>
        ${translation.en.stylesPageSubheaderAfterLink}`;

        stylesPageDesc.innerHTML = `
        ${translation.en.stylesPageDescBeforeLink}
        <a id="styles-page-desc-link" href="https://www.instagram.com/barber_tategami" target="_blank">${translation.en.stylesPageDescLinkText}</a>`
    }
});

jpBtn.addEventListener("click", () => {
    // Home Page
    if(document.body.classList.contains("home-page")){
        descText.innerText = translation.jp.descText;
        stylesDesc.innerText = translation.jp.stylesDesc;
    }
    // Styles Page
    if(document.body.classList.contains("styles-page")){
        stylesPageSubheader.innerHTML = `
        ${translation.jp.stylesPageSubheaderBeforeLink}
        <a href="menu.html" id="styles-page-subheader-link">${translation.jp.stylesPageSubheaderLinkText}</a>
        ${translation.jp.stylesPageSubheaderAfterLink}`;

        stylesPageDesc.innerHTML = `
        ${translation.jp.stylesPageDescBeforeLink}
        <a id="styles-page-desc-link" href="https://www.instagram.com/barber_tategami" target="_blank">${translation.jp.stylesPageDescLinkText}</a>
        ${translation.jp.stylesPageDescAfterLink}`
    }

});

if(document.body.classList.contains("home-page")){
    
    // Forward Btn
    forwardBtn.addEventListener("click", () => {
        reviewsGallery.style.scrollBehavior = "smooth";
        reviewsGallery.scrollLeft += reviewsGallery.clientWidth;
    })

    // Back Btn
    backBtn.addEventListener("click", () => {
        reviewsGallery.style.scrollBehavior = "smooth";
        reviewsGallery.scrollLeft -= reviewsGallery.clientWidth;
    })
    
}