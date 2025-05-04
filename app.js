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
const stylesPageDescLink = document.getElementById("styles-page-desc-link");
const teamPageDesc = document.getElementById("team-page-desc");
const nameOne = document.getElementById("name1");
const nameOnep1 = document.getElementById("name1-p1");
const nameOnep2 = document.getElementById("name1-p2");
const nameOnep3 = document.getElementById("name1-p3");
const nameTwo = document.getElementById("name2");
const nameTwop1 = document.getElementById("name2-p1");
const nameTwop2 = document.getElementById("name2-p2");
const nameTwop3 = document.getElementById("name2-p3");
const menuBtn = document.getElementById("menu-btn");
const bookBtn = document.getElementById("book-btn");
const seeMoreBtn = document.getElementById("see-more-btn");
const locationDesc = document.getElementById("location-desc");
const address = document.getElementById("address");
const weekdayHours = document.getElementById("weekday-hours");
const weekendHours = document.getElementById("weekend-hours");
const closedTime = document.getElementById("closed-time");

// Hamburger Menu
hamMenu.addEventListener("click", () => {
    hamMenu.classList.toggle("active");
    offScreenMenu.classList.toggle("active"); 
    pageContent.classList.toggle('menu-open');
});

// Home Page
if(document.body.classList.contains("home-page")){
    
    // Forward Btn
    forwardBtn.addEventListener("click", () => {
        reviewsGallery.style.scrollBehavior = "smooth";
        reviewsGallery.scrollLeft += reviewsGallery.clientWidth;
    });

    // Back Btn
    backBtn.addEventListener("click", () => {
        reviewsGallery.style.scrollBehavior = "smooth";
        reviewsGallery.scrollLeft -= reviewsGallery.clientWidth;
    });

    // Menu Btn
    menuBtn.addEventListener("click", () => {
        window.location.href = "menu.html";
    });

    // Book Btn
    bookBtn.addEventListener("click", () => {
        window.location.href = "booking.html";
    });

    // See More Btn
    seeMoreBtn.addEventListener("click", () => {
        window.location.href = "styles.html";
    });

}

// Menu Page
if(document.body.classList.contains("menu-page")){
    const courseBtns = document.querySelectorAll(".course-btn");
    courseBtns.forEach(button => {
        button.addEventListener("click", () => {
            window.location.href = "booking.html";
        })
    })
}

const translation = {
     
    en: {

        // Home page
        descText: `Traditional and modern. Formal and casual. We will meet your needs with our reliable techniques and extensive menu. We await you in a private space with two seats for your relaxation, where you will be treated to the hospitality that only a barber can provide.`,
        stylesDesc: `Discover our latest styles — find the perfect look for you. Quality cuts, sharp fades, and timeless styles tailored to you.`,

        // Styles Page 
        stylesPageSubheaderBeforeLink: "Looking for a cut? Visit our ",
        stylesPageSubheaderLinkText: "menu page",
        stylesPageSubheaderAfterLink: "to see a full list of services and prices, including student discounts with valid ID. We’ve got options for everyone.",
        stylesPageDescBeforeLink: "Check out more styles on our ",
        stylesPageDescLinkText: "Instagram",

        // Team Page
        teamPageDesc: "Get to know the skilled hands behind every cut. Our experienced team is here to bring your best look to life.",
        nameOne: "Kyōhei Yanagisawa",
        nameOnep1: "From Komoro City, Nagano Prefecture",
        nameOnep2: "Trained in Jiyūgaoka, Kamata, and Kachidoki.",
        nameOnep3: "Opened barber TATEGAMI in Shimomeguro in December 2015.",
        nameTwo: "Yui Yanagisawa",
        nameTwop1: "From Kiryu City, Gunma Prefecture",
        nameTwop2: "Trained in Urawa and Kachidoki.",
        nameTwop3: "Joined barber TATEGAMI in January 2016.",

        // Location Page 
        locationDesc: "Located in the heart of Shimomeguro — just a short walk from the station. Come relax, refresh, and leave looking your best.",
        address: "1st Floor, Tanaka Building, 2-4-15 Shimomeguro, Meguro-ku, Tokyo 153-0064, Japan",
        weekdayHours: "Weekdays: 10:00 AM – 8:00 PM",
        weekendHours: "Weekends: 9:00 AM – 7:00 PM",
        closedTime: "Closed: Every Monday",
    },

    jp: {

        // Home page
        descText: `伝統とモダン。フォーマルにもカジュアルにも。確かな技術と豊富なメニューで、お客様のご要望にお応えします。理容室ならではのおもてなしを、2席だけのプライベート空間でごゆっくりとお楽しみください。`,
        stylesDesc: `フレッシュなカット、洗練されたスタイル 最新のスタイルをご紹介。あなたにぴったりのヘアを見つけてください。フェードからクラシックまで、あなたらしさを引き立てるスタイルをご提案します。`,

        // Styles Page 
        stylesPageSubheaderBeforeLink: "カットをお考えの方は、",
        stylesPageSubheaderLinkText: "メニュー",
        stylesPageSubheaderAfterLink: "をチェック！学生証のご提示で学割もご利用いただけます。あなたに合ったスタイル、きっと見つかります。",
        stylesPageDescBeforeLink: "もっとスタイルをチェックするには、私たちの ",
        stylesPageDescLinkText: "Instagram",
        stylesPageDescAfterLink: "をご覧ください。",

        // Team Page
        teamPageDesc: "確かな技術と丁寧な接客。あなたのスタイルをつくる理容師たちをご紹介します。",
        nameOne: "柳沢 京平",
        nameOnep1: "長野県小諸市出身",
        nameOnep2: "自由が丘・蒲田・勝どきにて修業。",
        nameOnep3: "平成27年12月、下目黒にて barber TATEGAMI を開業。",
        nameTwo: "柳沢 由唯",
        nameTwop1: "群馬県桐生市出身",
        nameTwop2: "浦和・勝どきにて修業。",
        nameTwop3: "平成28年1月より barber TATEGAMI 入店。",
        
        // Location Page
        locationDesc: "下目黒の中心、駅から徒歩すぐの便利な立地。リラックスしてリフレッシュ、最高のスタイルでお帰りいただけます。",
        address: "〒153-0064 東京都目黒区下目黒二丁目4番15号 田中ビル 1階",
        weekdayHours: "平日：10:00〜20:00",
        weekendHours: "土日：9:00〜19:00",
        closedTime: "定休日：毎週月曜日",
    },

};

enBtn.addEventListener("click", () => {

    // Home Page
    if(document.body.classList.contains("home-page")){
        descText.innerText = translation.en.descText;
        stylesDesc.innerText = translation.en.stylesDesc;
    }

    // Styles Page
    if(document.body.classList.contains("styles-page")){
        stylesPageDesc.innerHTML = `
        ${translation.en.stylesPageDescBeforeLink}
        <a id="styles-page-desc-link" href="https://www.instagram.com/barber_tategami" target="_blank">${translation.en.stylesPageDescLinkText}</a>`
    }

    // Subheader linking to Menu
    if(document.body.classList.contains("subheader")){
        stylesPageSubheader.innerHTML = `
        ${translation.en.stylesPageSubheaderBeforeLink}
        <a href="menu.html" id="styles-page-subheader-link">${translation.en.stylesPageSubheaderLinkText}</a>
        ${translation.en.stylesPageSubheaderAfterLink}`;
    };
    
    // Team Page
    if(document.body.classList.contains("team-page")){
        teamPageDesc.innerText = translation.en.teamPageDesc;
        nameOne.innerText = translation.en.nameOne;
        nameOnep1.innerText = translation.en.nameOnep1;
        nameOnep2.innerText = translation.en.nameOnep2;
        nameOnep3.innerText = translation.en.nameOnep3;
        nameTwo.innerText = translation.en.nameTwo;
        nameTwop1.innerText = translation.en.nameTwop1;
        nameTwop2.innerText = translation.en.nameTwop2;
        nameTwop3.innerText = translation.en.nameTwop3;
    }

    // Location Page
    if(document.body.classList.contains("location-page")){
        locationDesc.innerText = translation.en.locationDesc;
        address.innerText = translation.en.address;
        weekdayHours.innerText = translation.en.weekdayHours;
        weekendHours.innerText = translation.en.weekendHours;
        closedTime.innerText = translation.en.closedTime;
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

    // Styles Page Subheader for other pages
    if(document.body.classList.contains("subheader")){
        stylesPageSubheader.innerHTML = `
        ${translation.jp.stylesPageSubheaderBeforeLink}
        <a href="menu.html" id="styles-page-subheader-link">${translation.jp.stylesPageSubheaderLinkText}</a>
        ${translation.jp.stylesPageSubheaderAfterLink}`;
    };

    // Team Page
    if(document.body.classList.contains("team-page")){
        teamPageDesc.innerText = translation.jp.teamPageDesc;
        nameOne.innerText = translation.jp.nameOne;
        nameOnep1.innerText = translation.jp.nameOnep1;
        nameOnep2.innerText = translation.jp.nameOnep2;
        nameOnep3.innerText = translation.jp.nameOnep3;
        nameTwo.innerText = translation.jp.nameTwo;
        nameTwop1.innerText = translation.jp.nameTwop1;
        nameTwop2.innerText = translation.jp.nameTwop2;
        nameTwop3.innerText = translation.jp.nameTwop3;
    }

    // Location Page
    if(document.body.classList.contains("location-page")){
        locationDesc.innerText = translation.jp.locationDesc;
        address.innerText = translation.jp.address;
        weekdayHours.innerText = translation.jp.weekdayHours;
        weekendHours.innerText = translation.jp.weekendHours;
        closedTime.innerText = translation.jp.closedTime;
    }

});

