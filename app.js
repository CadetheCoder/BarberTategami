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

// Hamburger Menu
hamMenu.addEventListener("click", () => {
    hamMenu.classList.toggle("active");
    offScreenMenu.classList.toggle("active"); 
    pageContent.classList.toggle('menu-open');
});

const translation = {
     
    en: {
        descText: `Traditional and modern. Formal and casual. We will meet your needs with our reliable techniques and extensive menu. We await you in a private space with two seats for your relaxation, where you will be treated to the hospitality that only a barber can provide.`,
        stylesDesc: `Discover our latest styles — find the perfect look for you. Quality cuts, sharp fades, and timeless styles tailored to you.`,

    },

    jp: {
        descText: `伝統とモダン。フォーマルにもカジュアルにも。確かな技術と豊富なメニューで、お客様のご要望にお応えします。理容室ならではのおもてなしを、2席だけのプライベート空間でごゆっくりとお楽しみください。`,
        stylesDesc: `フレッシュなカット、洗練されたスタイル 最新のスタイルをご紹介。あなたにぴったりのヘアを見つけてください。フェードからクラシックまで、あなたらしさを引き立てるスタイルをご提案します。`,
    }

};

enBtn.addEventListener("click", () => {
    descText.innerText = translation.en.descText;
    stylesDesc.innerText = translation.en.stylesDesc;
});

jpBtn.addEventListener("click", () => {
    descText.innerText = translation.jp.descText;
    stylesDesc.innerText = translation.jp.stylesDesc;
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