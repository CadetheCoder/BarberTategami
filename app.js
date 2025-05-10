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
const subheader = document.querySelector(".subheader")
const subheaderLink = document.querySelector(".subheader-link");
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
const menuDesc = document.getElementById("menu-desc");
const menuPageSubheader = document.getElementById("menu-page-subheader");
const menuPageSubheaderLink = document.getElementById("menu-page-subheader-link");
const bookingDesc = document.getElementById("booking-desc");
const basicCutHeader = document.getElementById("basic-cut-header");
const basicCutDesc = document.getElementById("basic-cut-desc");
const basicCutHeaderHs = document.getElementById("basic-cut-header-hs");
const basicCutPriceHs = document.getElementById("basic-cut-price-hs");
const basicCutDescHs = document.getElementById("basic-cut-desc-hs");
const basicCutHeaderJhs = document.getElementById("basic-cut-header-jhs");
const basicCutPriceJhs = document.getElementById("basic-cut-price-jhs");
const basicCutDescJhs = document.getElementById("basic-cut-desc-jhs");
const basicCutHeaderEs = document.getElementById("basic-cut-header-es");
const basicCutPriceEs = document.getElementById("basic-cut-price-es");
const basicCutDescEs = document.getElementById("basic-cut-desc-es");
const headCourseHeader = document.getElementById("head-course-header");
const headCourseDesc = document.getElementById("head-course-desc");
const faceCourseHeader = document.getElementById("face-course-header");
const faceCourseDesc = document.getElementById("face-course-desc");
const cutOnlyHeader = document.getElementById("cut-only-header");
const cutOnlyDesc = document.getElementById("cut-only-desc");
const cutOnlyHeaderStu = document.getElementById("cut-only-header-stu");
const cutOnlyPriceStu = document.getElementById("cut-only-price-stu");
const cutOnlyDescStu = document.getElementById("cut-only-desc-stu");
const hairColoringHeader = document.getElementById("hair-coloring-header");
const hairColoringDesc =  document.getElementById("hair-coloring-desc");
const grayBlendingHeader = document.getElementById("gray-blending-header");
const grayBlendingDesc = document.getElementById("gray-blending-desc");
const hairManicureHeader = document.getElementById("hair-manicure-header");
const hairManicureDesc = document.getElementById("hair-manicure-desc");
const bleachHeader = document.getElementById("bleach-header");
const bleachDesc = document.getElementById("bleach-desc");
const permHeader = document.getElementById("perm-header");
const permDesc = document.getElementById("perm-desc");
const specialPermHeader = document.getElementById("special-perm-header");
const specialPermDesc = document.getElementById("special-perm-desc");
const hairStraighteningHeader = document.getElementById("hair-straightening-header");
const hairStraighteningDesc = document.getElementById("hair-straightening-desc");
const pointPermHeader = document.getElementById("point-perm-header");
const pointPermDesc = document.getElementById("point-perm-desc");
const ladiesShaveHeader = document.getElementById("ladies-shave-header");
const ladiesShaveDesc = document.getElementById("ladies-shave-desc");
const bookingNum = document.getElementById("booking-num");
const selectedCourse = document.getElementById("selected-course");
const selectedPrice = document.getElementById("selected-price");
const selectedDesc = document.getElementById("selected-desc");

// Hamburger Menu
hamMenu.addEventListener("click", () => {
    hamMenu.classList.toggle("active");
    offScreenMenu.classList.toggle("active"); 
    pageContent.classList.toggle('menu-open');
    document.body.classList.toggle("no-scroll");
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

const translation = {
     
    en: {

        // Home page
        descText: `Traditional and modern. Formal and casual. We will meet your needs with our reliable techniques and extensive menu. We await you in a private space with two seats for your relaxation, where you will be treated to the hospitality that only a barber can provide.`,
        stylesDesc: `Discover our latest styles — find the perfect look for you. Quality cuts, sharp fades, and timeless styles tailored to you.`,
        
        // Subheader
        subheaderBeforeLink: "Looking for a cut? Visit our ",
        subheaderLinkText: "menu page",
        subheaderAfterLink: "to see a full list of services and prices, including student discounts with valid ID. We've got options for everyone.",

        // Styles Page 
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
        weekdayHours: "Weekdays: 10:00 AM - 8:00 PM",
        weekendHours: "Weekends: 9:00 AM - 7:00 PM",
        closedTime: "Closed: Every Monday",

        // Menu Page
        menuDesc: "Explore our range of haircuts, shaves, and grooming services. Student discounts available with valid ID.",
        menuPageSubheaderBeforeLink: "See our latest styles and shop updates on ",
        menuPageSubheaderLink: "Instagram",
        menuPageSubheaderAfterLink: " — Follow us!",
        basicCutHeader: "Basic Cut Course",
        basicCutPrice: "¥5,000",
        basicCutDesc: "Cut + Shampoo + Quick Massage + Shaving",
        basicCutHeaderHs: "Basic Cut Course (High School Students)",
        basicCutPriceHs: "¥4,510 (10% OFF)",
        basicCutDescHs: "Cut + Shampoo + Quick Massage + Shaving",
        basicCutHeaderJhs: "Basic Cut Course (Junior High Students)",
        basicCutPriceJhs: "¥4,070 (20% OFF)",
        basicCutDescJhs: "Cut + Shampoo + Quick Massage + Shaving",
        basicCutHeaderEs: "Basic Cut Course (Elementary Students)",
        basicCutPriceEs: "¥3,850 (25% OFF)",
        basicCutDescEs: "Cut + Shampoo + Quick Massage + Shaving",
        headCourseHeader: "Head Course",
        headCoursePrice: "¥6,100",
        headCourseDesc: "Basic + scalp cleansing + massage shampoo + scalp treatment",
        faceCourseHeader: "Face Course",
        faceCoursePrice: "¥6,870",
        faceCourseDesc: "Basic + face cleansing + steam shaving + face massage + pack",
        cutOnlyHeader: "Cut Only",
        cutOnlyPrice: "¥3,410",
        cutOnlyDesc: "A quick and clean haircut—nothing more, nothing less. Perfect for those who want to refresh their look without the extras.",
        cutOnlyHeaderStu: "Cut Only (Students)",
        cutOnlyPriceStu: "¥3,300 (¥110 Off)",
        cutOnlyDescStu: "A quick and clean haircut—nothing more, nothing less. Perfect for those who want to refresh their look without the extras.",
        hairColoringHeader: "Hair Coloring (prices vary depending on hair length and volume)",
        hairColoringPrice: "+¥3,500",
        hairColoringDesc: "Transform your look with expert color application tailored to your style. Whether it's a bold new hue or a subtle touch-up, we'll blend your color with precision to achieve a sharp, fresh look that complements your cut.",
        grayBlendingHeader: "Gray Blending (prices vary depending on hair length and volume)",
        grayBlendingPrice: "+¥2,200",
        grayBlendingDesc: "Achieve a natural, subtle blend that softens the appearance of gray hair. This service gently blends gray strands with your natural color, creating a youthful and refreshed look without the harsh lines of full coverage.",
        hairManicureHeader: "Hair Manicure (prices vary depending on hair length and volume)",
        hairManucurePrice: "+¥4,400",
        hairManicureDesc: "Enhance your hair with a vibrant, glossy finish using a gentle, semi-permanent color treatment. This service coats the hair with rich color, adding shine and depth without the commitment of traditional dyes. Perfect for clients looking to refresh their look with a subtle touch of color or add a glossy shine to their natural shade.",
        bleachHeader: "Bleach & Lightening (prices vary depending on hair length and volume)",
        bleachPrice: "+¥4,400",
        bleachDesc: "Achieve the perfect blonde or lightened look with our professional bleach service. Whether you're going for a full platinum transformation or subtle highlights, we carefully lighten your hair to the desired shade while maintaining its strength and health.",
        permHeader: "Perm Styling (Rod or Iron) (prices vary depending on hair length and volume)",
        permPrice: "+¥4,500",
        permDesc: "Add texture, volume, or wave to your style with our customizable perm service. Whether you're after natural curls with rods or a more defined shape using irons, we tailor the technique to suit your hair length and condition.",
        specialPermHeader: "Special Perm Styling (Twist, Spiral, etc) (prices vary depending on hair length and volume)",
        specialPermPrice: "+¥6,500",
        specialPermDesc: "Take your style to the next level with our special perm techniques. From tight twists to flowing spirals, these advanced styles add bold texture and personality to your hair.",
        hairStraighteningHeader: "Hair Straightening (prices vary depending on hair length and volume)",
        hairStraighteningPrice: "+¥10,000",
        hairStraighteningDesc: "Smooth, sleek, and long-lasting—our hair straightening service tames frizz and transforms waves or curls into a polished, straight finish.",
        pointPermHeader: "Point Perms (prices vary depending on hair length and volume)",
        pointPermPrice: "+¥2,500",
        pointPermDesc: "Add volume or texture exactly where you need it with our point perm service. Whether it's lifting the roots, shaping the bangs, or adding movement to specific areas, this targeted treatment enhances your hairstyle without a full perm.",
        ladiesShaveHeader: "Ladies Shave (prices vary depending on hair length and volume)",
        ladiesShavePrice: "+¥3,630",
        ladiesShaveDesc: "A gentle, professional shave that leaves your skin smooth, refreshed, and glowing.",

        // Booking Page
        bookingDesc: "Give us a call to reserve your spot. We're happy to help you find the perfect time. Call us at",
        bookingNum: "03-1234-5678",
        selectedCourse: "No course selected yet.",
        selectedDesc: "You can still book without choosing a course—just give us a call, and we'll help you decide or set up your appointment.",
    },

    jp: {

        // Home page
        descText: `伝統とモダン。フォーマルにもカジュアルにも。確かな技術と豊富なメニューで、お客様のご要望にお応えします。理容室ならではのおもてなしを、2席だけのプライベート空間でごゆっくりとお楽しみください。`,
        stylesDesc: `フレッシュなカット、洗練されたスタイル 最新のスタイルをご紹介。あなたにぴったりのヘアを見つけてください。フェードからクラシックまで、あなたらしさを引き立てるスタイルをご提案します。`,

        // Subheader
        subheaderBeforeLink: "カットをお考えの方は、",
        subheaderLinkText: "メニュー",
        subheaderAfterLink: "をチェック！学生証のご提示で学割もご利用いただけます。あなたに合ったスタイル、きっと見つかります。",

        // Styles Page 
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
        weekdayHours: "平日: 10:00〜20:00",
        weekendHours: "土日: 9:00〜19:00",
        closedTime: "定休日：毎週月曜日",

        // Menu Page 
        menuDesc: "カットやシェービングなど多彩なメニューをご用意。学生証提示で割引あり。",
        menuPageSubheaderBeforeLink: "最新のスタイルやショップ情報は ",
        menuPageSubheaderLink: "Instagram",
        menuPageSubheaderAfterLink: " でチェック — フォローもお忘れなく!",
        basicCutHeader: "ベーシックカットコース",
        basicCutPrice: "¥5,000",
        basicCutDesc: "カット＋シャンプー＋クイックマッサージ＋シェービング",
        basicCutHeaderHs: "ベーシックカットコース（高校生）",
        basicCutPriceHs: "¥4,510 (10%オフ）",
        basicCutDescHs: "カット＋シャンプー＋クイックマッサージ＋シェービング",
        basicCutHeaderJhs: "ベーシックカットコース（中学生）",
        basicCutPriceJhs: "¥4,070(20%オフ）",
        basicCutDescJhs: "カット＋シャンプー＋クイックマッサージ＋シェービング",
        basicCutHeaderEs: "ベーシックカットコース（小学生）",
        basicCutPriceEs: "¥3,850(25%オフ)",
        basicCutDescEs: "カット＋シャンプー＋クイックマッサージ＋シェービング",
        headCourseHeader: "ヘッドコース",
        headCoursePrice: "¥6,100",
        headCourseDesc: "ベーシック + 頭皮クレンジング + マッサージシャンプー + 頭皮トリートメント",
        faceCourseHeader: "フェイスコース",
        faceCoursePrice: "¥6,870",
        faceCourseDesc: "ベーシック + フェイスクレンジング + スチームシェービング + フェイスマッサージ + パック",
        cutOnlyHeader: "カットのみ",
        cutOnlyPrice: "¥3,410",
        cutOnlyDesc: "カットだけのシンプルなコース。さっと整えて、すっきりしたい方におすすめ。",
        cutOnlyHeaderStu: "カットのみ（学生）",
        cutOnlyPriceStu: "¥3,300 (¥110オフ)",
        cutOnlyDescStu: "カットだけのシンプルなコース。余計なサービスは不要、サッと整えたい学生におすすめ。",
        hairColoringHeader: "ヘアカラー（長さ・量により料金変動）",
        hairColoringPrice: "+¥3,500",
        hairColoringDesc: "あなたのスタイルに合わせたプロのカラーリングで印象チェンジ。大胆なカラーチェンジから自然なリタッチまで、カットと調和する清潔感のある仕上がりに整えます。",
        grayBlendingHeader: "白髪ぼかし（長さ・量により料金変動）",
        grayBlendingPrice: "+¥2,200",
        grayBlendingDesc: "白髪を自然になじませることで、若々しく清潔感のある印象に。全体染めのような強い仕上がりではなく、地毛との自然なバランスでやわらかく整えます。",
        hairManicureHeader: "ヘアマニキュア（長さ・量により料金変動）",
        hairManucurePrice: "+¥4,400",
        hairManicureDesc: "髪にやさしい半永久的なカラーで、つやと深みをプラス。髪の表面をコーティングすることで、ダメージを抑えながら自然な色味や輝きを与えます。ナチュラルな色味を整えたい方や、髪にツヤを出したい方におすすめです。",
        bleachHeader: "ブリーチ・ライトニング（長さ・量により料金変動）",
        bleachPrice: "+¥4,400",
        bleachDesc: "全体のハイトーンからハイライトまで、理想の明るさに近づけるプロのブリーチ技術。髪のコンディションを保ちながら、しっかりと色を抜いて仕上げます。明るめのスタイルにチャレンジしたい方におすすめです。",
        permHeader: "パーマスタイリング（ロッド・アイロン｜長さ・量により料金変動）",
        permPrice: "+¥4,500",
        permDesc: "ロッドで自然なカールを、アイロンでしっかりとした形を。髪の長さや状態に合わせて、ボリューム感や動きを加えるパーマスタイルをご提案します。",
        specialPermHeader: "特殊パーマ（ツイスト・スパイラル等｜長さ・量により料金変動）",
        specialPermPrice: "+¥6,500",
        specialPermDesc: "ツイストやスパイラルなど、個性を際立たせる特殊パーマでワンランク上のスタイルへ。力強い動きと立体感で、印象に残るヘアに仕上げます。",
        hairStraighteningHeader: "ストレートパーマ（長さ・量により料金変動）",
        hairStraighteningPrice: "+¥10,000",
        hairStraighteningDesc: "うねりやくせ毛を抑え、まとまりのある自然なストレートヘアに。持続性のある仕上がりで、清潔感と洗練された印象を与えます。",
        pointPermHeader: "ポイントパーマ（長さ・量により料金変動）",
        pointPermPrice: "+¥2,500",
        pointPermDesc: "必要な部分にだけボリュームや動きを加えるポイントパーマ。根元の立ち上げ、前髪の形作り、特定の部分に動きを出すなど、部分的にスタイルを強調できます。",
        ladiesShaveHeader: "レディースシェービング（長さ・量により料金変動）",
        ladiesShavePrice: "+¥3,630",
        ladiesShaveDesc: "A肌を滑らかに、リフレッシュさせる優しいプロのシェービング。シェービング後はしっとりとした仕上がりで、明るく輝く肌を実感できます。",
        selectedCourse: "現在、コースは選択されていません。",
        selectedDesc: "コースを選ばずにご予約いただくことも可能です。お電話いただければ、ご希望に合わせてご案内いたします。",

        // Booking Page
        bookingDesc: "ご予約はお電話でどうぞ。ご希望の時間をご案内いたします。お電話はこちら：",
        bookingNum: "03-1234-5678",
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

    // Subheader 
    if(document.body.classList.contains("subheader-page")){
        subheader.innerHTML = `
        ${translation.en.subheaderBeforeLink}
        <a href="menu.html" id="styles-page-subheader-link">${translation.en.subheaderLinkText}</a>
        ${translation.en.subheaderAfterLink}`;
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

    // Menu Page 
    if(document.body.classList.contains("menu-page")){
        menuDesc.innerText = translation.en.menuDesc;
        menuPageSubheader.innerHTML = `${translation.en.menuPageSubheaderBeforeLink}<a id="menu-page-subheader-link" href="https://www.instagram.com/barber_tategami" target="_blank">${translation.en.menuPageSubheaderLink}</a>${translation.en.menuPageSubheaderAfterLink}`;
        basicCutHeader.innerText = translation.en.basicCutHeader;
        basicCutDesc.innerText = translation.en.basicCutDesc;
        basicCutHeaderHs.innerText = translation.en.basicCutHeaderHs;
        basicCutPriceHs.innerText = translation.en.basicCutPriceHs;
        basicCutDescHs.innerText = translation.en.basicCutDescHs;
        basicCutHeaderJhs.innerText = translation.en.basicCutHeaderJhs;
        basicCutPriceJhs.innerText = translation.en.basicCutPriceJhs;
        basicCutDescJhs.innerText = translation.en.basicCutDescJhs;
        basicCutHeaderEs.innerText = translation.en.basicCutHeaderEs;
        basicCutPriceEs.innerText = translation.en.basicCutPriceEs;
        basicCutDescEs.innerText = translation.en.basicCutDescEs;
        headCourseHeader.innerText = translation.en.headCourseHeader;
        headCourseDesc.innerText =  translation.en.headCourseDesc;
        faceCourseHeader.innerText = translation.en.faceCourseHeader;
        faceCourseDesc.innerText = translation.en.faceCourseDesc;
        cutOnlyHeader.innerText = translation.en.cutOnlyHeader;
        cutOnlyDesc.innerText = translation.en.cutOnlyDesc;
        cutOnlyHeaderStu.innerText = translation.en.cutOnlyHeaderStu;
        cutOnlyPriceStu.innerText = translation.en.cutOnlyPriceStu;
        cutOnlyDescStu.innerText = translation.en.cutOnlyDescStu;
        hairColoringHeader.innerText = translation.en.hairColoringHeader;
        hairColoringDesc.innerText = translation.en.hairColoringDesc;
        grayBlendingHeader.innerText = translation.en.grayBlendingHeader;
        grayBlendingDesc.innerText = translation.en.grayBlendingDesc;
        hairManicureHeader.innerText = translation.en.hairManicureHeader;
        hairManicureDesc.innerText = translation.en.hairManicureDesc;
        bleachHeader.innerText = translation.en.bleachHeader;
        bleachDesc.innerText = translation.en.bleachDesc;
        permHeader.innerText = translation.en.permHeader;
        permDesc.innerText = translation.en.permDesc;
        specialPermHeader.innerText = translation.en.specialPermHeader;
        specialPermDesc.innerText = translation.en.specialPermDesc;
        hairStraighteningHeader.innerText = translation.en.hairStraighteningHeader;
        hairStraighteningDesc.innerText = translation.en.hairStraighteningDesc;
        pointPermHeader.innerText = translation.en.pointPermHeader;
        pointPermDesc.innerText = translation.en.pointPermDesc;
        ladiesShaveHeader.innerText = translation.en.ladiesShaveHeader;
        ladiesShaveDesc.innerText = translation.en.ladiesShaveDesc;
    }

    // Booking Page
    if(document.body.classList.contains("booking-page")){
        bookingDesc.innerHTML = `${translation.en.bookingDesc}<a href="tel:0312345678" id="booking-num"> ${translation.en.bookingNum}</a>`;
        selectedCourse.innerText = translation.en.selectedCourse;
        selectedDesc.innerText = translation.en.selectedDesc;

        const urlParams = new URLSearchParams(window.location.search);
        const query = urlParams.get("course");

        if(query === "basiccut"){
            selectedCourse.innerText = `${translation.en.basicCutHeader}`;
            selectedPrice.innerText =  `${translation.en.basicCutPrice}`;
            selectedDesc.innerText = `${translation.en.basicCutDesc}`;
        }

        if(query === "basiccuths"){
            selectedCourse.innerText = `${translation.en.basicCutHeaderHs}`;
            selectedPrice.innerText =  `${translation.en.basicCutPriceHs}`;
            selectedDesc.innerText = `${translation.en.basicCutDescHs}`;
        }

        if(query === "basiccutjhs"){
            selectedCourse.innerText = `${translation.en.basicCutHeaderJhs}`;
            selectedPrice.innerText =  `${translation.en.basicCutPriceJhs}`;
            selectedDesc.innerText = `${translation.en.basicCutDescJhs}`;
        }

        if(query === "basiccutes"){
            selectedCourse.innerText = `${translation.en.basicCutHeaderEs}`;
            selectedPrice.innerText =  `${translation.en.basicCutPriceEs}`;
            selectedDesc.innerText = `${translation.en.basicCutDescEs}`;
        }

        if(query === "headcourse"){
            selectedCourse.innerText = `${translation.en.headCourseHeader}`;
            selectedPrice.innerText =  `${translation.en.headCoursePrice}`;
            selectedDesc.innerText = `${translation.en.headCourseDesc}`;
        }

        if(query === "facecourse"){
            selectedCourse.innerText = `${translation.en.faceCourseHeader}`;
            selectedPrice.innerText =  `${translation.en.faceCoursePrice}`;
            selectedDesc.innerText = `${translation.en.faceCourseDesc}`;
        }

        if(query === "cutonly"){
            selectedCourse.innerText = `${translation.en.cutOnlyHeader}`;
            selectedPrice.innerText =  `${translation.en.cutOnlyPrice}`;
            selectedDesc.innerText = `${translation.en.cutOnlyDesc}`;
        }

        if(query === "cutonlystu"){
            selectedCourse.innerText = `${translation.en.cutOnlyHeaderStu}`;
            selectedPrice.innerText =  `${translation.en.cutOnlyPriceStu}`;
            selectedDesc.innerText = `${translation.en.cutOnlyDescStu}`;
        }

        if(query === "haircoloring"){
            selectedCourse.innerText = `${translation.en.hairColoringHeader}`;
            selectedPrice.innerText =  `${translation.en.hairColoringPrice}`;
            selectedDesc.innerText = `${translation.en.hairColoringDesc}`;
        }

        if(query === "grayblending"){
            selectedCourse.innerText = `${translation.en.grayBlendingHeader}`;
            selectedPrice.innerText =  `${translation.en.grayBlendingPrice}`;
            selectedDesc.innerText = `${translation.en.grayBlendingDesc}`;
        }

        if(query === "manicure"){
            selectedCourse.innerText = `${translation.en.hairManicureHeader}`;
            selectedPrice.innerText =  `${translation.en.hairManucurePrice}`;
            selectedDesc.innerText = `${translation.en.hairManicureDesc}`;
        }

        if(query === "bleach"){
            selectedCourse.innerText = `${translation.en.bleachHeader}`;
            selectedPrice.innerText =  `${translation.en.bleachPrice}`;
            selectedDesc.innerText = `${translation.en.bleachDesc}`;
        }

        if(query === "perm"){
            selectedCourse.innerText = `${translation.en.permHeader}`;
            selectedPrice.innerText =  `${translation.en.permPrice}`;
            selectedDesc.innerText = `${translation.en.permDesc}`;
        }

        if(query === "specialperm"){
            selectedCourse.innerText = `${translation.en.specialPermHeader}`;
            selectedPrice.innerText =  `${translation.en.specialPermPrice}`;
            selectedDesc.innerText = `${translation.en.specialPermDesc}`;
        }

        if(query === "hairstraightening"){
            selectedCourse.innerText = `${translation.en.hairStraighteningHeader}`;
            selectedPrice.innerText =  `${translation.en.hairStraighteningPrice}`;
            selectedDesc.innerText = `${translation.en.hairStraighteningDesc}`;
        }

        if(query === "pointperm"){
            selectedCourse.innerText = `${translation.en.pointPermHeader}`;
            selectedPrice.innerText =  `${translation.en.pointPermPrice}`;
            selectedDesc.innerText = `${translation.en.pointPermDesc}`;
        }

        if(query === "ladiesshave"){
            selectedCourse.innerText = `${translation.en.ladiesShaveHeader}`;
            selectedPrice.innerText =  `${translation.en.ladiesShavePrice}`;
            selectedDesc.innerText = `${translation.en.ladiesShaveDesc}`;
        }
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
        stylesPageDesc.innerHTML = `
        ${translation.jp.stylesPageDescBeforeLink}
        <a id="styles-page-desc-link" href="https://www.instagram.com/barber_tategami" target="_blank">${translation.jp.stylesPageDescLinkText}</a>
        ${translation.jp.stylesPageDescAfterLink}`;
    }

    // Subheader
    if(document.body.classList.contains("subheader-page")){
        subheader.innerHTML = `
        ${translation.jp.subheaderBeforeLink}<a href="menu.html" id="styles-page-subheader-link">${translation.jp.subheaderLinkText}</a>${translation.jp.subheaderAfterLink}`;
    }

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

    // Menu Page 
    if(document.body.classList.contains("menu-page")){
        menuDesc.innerText = translation.jp.menuDesc;
        menuPageSubheader.innerHTML = `
        ${translation.jp.menuPageSubheaderBeforeLink}<a id="menu-page-subheader-link" href="https://www.instagram.com/barber_tategami" target="_blank">${translation.jp.menuPageSubheaderLink}</a>${translation.jp.menuPageSubheaderAfterLink}`;
        basicCutHeader.innerText = translation.jp.basicCutHeader;
        basicCutDesc.innerText = translation.jp.basicCutDesc;
        basicCutHeaderHs.innerText = translation.jp.basicCutHeaderHs;
        basicCutPriceHs.innerText = translation.jp.basicCutPriceHs;
        basicCutDescHs.innerText = translation.jp.basicCutDescHs;
        basicCutHeaderJhs.innerText = translation.jp.basicCutHeaderJhs;
        basicCutPriceJhs.innerText = translation.jp.basicCutPriceJhs;
        basicCutDescJhs.innerText = translation.jp.basicCutDescJhs;
        basicCutHeaderEs.innerText = translation.jp.basicCutHeaderEs;
        basicCutPriceEs.innerText = translation.jp.basicCutPriceEs;
        basicCutDescEs.innerText = translation.jp.basicCutDescEs;
        headCourseHeader.innerText = translation.jp.headCourseHeader;
        headCourseDesc.innerText =  translation.jp.headCourseDesc;
        faceCourseHeader.innerText = translation.jp.faceCourseHeader;
        faceCourseDesc.innerText = translation.jp.faceCourseDesc;
        cutOnlyHeader.innerText = translation.jp.cutOnlyHeader;
        cutOnlyDesc.innerText = translation.jp.cutOnlyDesc;
        cutOnlyHeaderStu.innerText = translation.jp.cutOnlyHeaderStu;
        cutOnlyPriceStu.innerText = translation.jp.cutOnlyPriceStu;
        cutOnlyDescStu.innerText = translation.jp.cutOnlyDescStu;
        hairColoringHeader.innerText = translation.jp.hairColoringHeader;
        hairColoringDesc.innerText = translation.jp.hairColoringDesc;
        grayBlendingHeader.innerText = translation.jp.grayBlendingHeader;
        grayBlendingDesc.innerText = translation.jp.grayBlendingDesc;
        hairManicureHeader.innerText = translation.jp.hairManicureHeader;
        hairManicureDesc.innerText = translation.jp.hairManicureDesc;
        bleachHeader.innerText = translation.jp.bleachHeader;
        bleachDesc.innerText = translation.jp.bleachDesc;
        permHeader.innerText = translation.jp.permHeader;
        permDesc.innerText = translation.jp.permDesc;
        specialPermHeader.innerText = translation.jp.specialPermHeader;
        specialPermDesc.innerText = translation.jp.specialPermDesc;
        hairStraighteningHeader.innerText = translation.jp.hairStraighteningHeader;
        hairStraighteningDesc.innerText = translation.jp.hairStraighteningDesc;
        pointPermHeader.innerText = translation.jp.pointPermHeader;
        pointPermDesc.innerText = translation.jp.pointPermDesc;
        ladiesShaveHeader.innerText = translation.jp.ladiesShaveHeader;
        ladiesShaveDesc.innerText = translation.jp.ladiesShaveDesc;
    }

    // Booking Page
    if(document.body.classList.contains("booking-page")){
        bookingDesc.innerHTML = `${translation.jp.bookingDesc}<a href="tel:0312345678" id="booking-num">${translation.jp.bookingNum}</a>`;
        selectedCourse.innerText = translation.jp.selectedCourse;
        selectedDesc.innerText = translation.jp.selectedDesc;

        const urlParams = new URLSearchParams(window.location.search);
        const query = urlParams.get("course");

        if(query === "basiccut"){
            selectedCourse.innerText = `${translation.jp.basicCutHeader}`;
            selectedPrice.innerText =  `${translation.jp.basicCutPrice}`;
            selectedDesc.innerText = `${translation.jp.basicCutDesc}`;
        }

        if(query === "basiccuths"){
            selectedCourse.innerText = `${translation.jp.basicCutHeaderHs}`;
            selectedPrice.innerText =  `${translation.jp.basicCutPriceHs}`;
            selectedDesc.innerText = `${translation.jp.basicCutDescHs}`;
        }

        if(query === "basiccutjhs"){
            selectedCourse.innerText = `${translation.jp.basicCutHeaderJhs}`;
            selectedPrice.innerText =  `${translation.jp.basicCutPriceJhs}`;
            selectedDesc.innerText = `${translation.jp.basicCutDescJhs}`;
        }

        if(query === "basiccutes"){
            selectedCourse.innerText = `${translation.jp.basicCutHeaderEs}`;
            selectedPrice.innerText =  `${translation.jp.basicCutPriceEs}`;
            selectedDesc.innerText = `${translation.jp.basicCutDescEs}`;
        }

        if(query === "headcourse"){
            selectedCourse.innerText = `${translation.jp.headCourseHeader}`;
            selectedPrice.innerText =  `${translation.jp.headCoursePrice}`;
            selectedDesc.innerText = `${translation.jp.headCourseDesc}`;
        }

        if(query === "facecourse"){
            selectedCourse.innerText = `${translation.jp.faceCourseHeader}`;
            selectedPrice.innerText =  `${translation.jp.faceCoursePrice}`;
            selectedDesc.innerText = `${translation.jp.faceCourseDesc}`;
        }

        if(query === "cutonly"){
            selectedCourse.innerText = `${translation.jp.cutOnlyHeader}`;
            selectedPrice.innerText =  `${translation.jp.cutOnlyPrice}`;
            selectedDesc.innerText = `${translation.jp.cutOnlyDesc}`;
        }

        if(query === "cutonlystu"){
            selectedCourse.innerText = `${translation.jp.cutOnlyHeaderStu}`;
            selectedPrice.innerText =  `${translation.jp.cutOnlyPriceStu}`;
            selectedDesc.innerText = `${translation.jp.cutOnlyDescStu}`;
        }

        if(query === "haircoloring"){
            selectedCourse.innerText = `${translation.jp.hairColoringHeader}`;
            selectedPrice.innerText =  `${translation.jp.hairColoringPrice}`;
            selectedDesc.innerText = `${translation.jp.hairColoringDesc}`;
        }

        if(query === "grayblending"){
            selectedCourse.innerText = `${translation.jp.grayBlendingHeader}`;
            selectedPrice.innerText =  `${translation.jp.grayBlendingPrice}`;
            selectedDesc.innerText = `${translation.jp.grayBlendingDesc}`;
        }

        if(query === "manicure"){
            selectedCourse.innerText = `${translation.jp.hairManicureHeader}`;
            selectedPrice.innerText =  `${translation.jp.hairManucurePrice}`;
            selectedDesc.innerText = `${translation.jp.hairManicureDesc}`;
        }

        if(query === "bleach"){
            selectedCourse.innerText = `${translation.jp.bleachHeader}`;
            selectedPrice.innerText =  `${translation.jp.bleachPrice}`;
            selectedDesc.innerText = `${translation.jp.bleachDesc}`;
        }

        if(query === "perm"){
            selectedCourse.innerText = `${translation.jp.permHeader}`;
            selectedPrice.innerText =  `${translation.jp.permPrice}`;
            selectedDesc.innerText = `${translation.jp.permDesc}`;
        }

        if(query === "specialperm"){
            selectedCourse.innerText = `${translation.jp.specialPermHeader}`;
            selectedPrice.innerText =  `${translation.jp.specialPermPrice}`;
            selectedDesc.innerText = `${translation.jp.specialPermDesc}`;
        }

        if(query === "hairstraightening"){
            selectedCourse.innerText = `${translation.jp.hairStraighteningHeader}`;
            selectedPrice.innerText =  `${translation.jp.hairStraighteningPrice}`;
            selectedDesc.innerText = `${translation.jp.hairStraighteningDesc}`;
        }

        if(query === "pointperm"){
            selectedCourse.innerText = `${translation.jp.pointPermHeader}`;
            selectedPrice.innerText =  `${translation.jp.pointPermPrice}`;
            selectedDesc.innerText = `${translation.jp.pointPermDesc}`;
        }

        if(query === "ladiesshave"){
            selectedCourse.innerText = `${translation.jp.ladiesShaveHeader}`;
            selectedPrice.innerText =  `${translation.jp.ladiesShavePrice}`;
            selectedDesc.innerText = `${translation.jp.ladiesShaveDesc}`;
        }
    }

});

// Menu Page Btns
if(document.body.classList.contains("menu-page")){
    const basicCut = document.getElementById("basic-cut-btn");
    basicCut.addEventListener("click", () => {
        window.location.href = "booking.html?course=basiccut";
    });

    const basicCutBtnHs = document.getElementById("basic-cut-btn-hs");
    basicCutBtnHs.addEventListener("click", () => {
        window.location.href = "booking.html?course=basiccuths";
    });

    const basicCutBtnJhs = document.getElementById("basic-cut-btn-jhs");
    basicCutBtnJhs.addEventListener("click", () => {
        window.location.href = "booking.html?course=basiccutjhs";
    });

    const basicCutBtnEs = document.getElementById("basic-cut-btn-es");
    basicCutBtnEs.addEventListener("click", () => {
        window.location.href = "booking.html?course=basiccutes";
    });

    const headCourseBtn = document.getElementById("head-course-btn");
    headCourseBtn.addEventListener("click", () => {
        window.location.href = "booking.html?course=headcourse";
    });

    const faceCourseBtn = document.getElementById("face-course-btn");
    faceCourseBtn.addEventListener("click", () => {
        window.location.href = "booking.html?course=facecourse";
    });

    const cutOnlyBtn = document.getElementById("cut-only-btn");
    cutOnlyBtn.addEventListener("click", () => {
        window.location.href = "booking.html?course=cutonly";
    });

    const cutOnlyBtnStu = document.getElementById("cut-only-btn-stu");
    cutOnlyBtnStu.addEventListener("click", () => {
        window.location.href = "booking.html?course=cutonlystu";
    });

    const hairColoringBtn = document.getElementById("hair-coloring-btn");
    hairColoringBtn.addEventListener("click", () => {
        window.location.href = "booking.html?course=haircoloring";
    });

    const grayBlendingBtn = document.getElementById("gray-blending-btn");
    grayBlendingBtn.addEventListener("click", () => {
        window.location.href = "booking.html?course=grayblending";
    });

    const manicureBtn = document.getElementById("manicure-btn");
    manicureBtn.addEventListener("click", () => {
        window.location.href = "booking.html?course=manicure";
    });

    const bleachBtn = document.getElementById("bleach-btn");
    bleachBtn.addEventListener("click", () => {
        window.location.href = "booking.html?course=bleach";
    });

    const permBtn = document.getElementById("perm-btn");
    permBtn.addEventListener("click", () => {
        window.location.href = "booking.html?course=perm";
    });

    const specialPermBtn = document.getElementById("special-perm-btn");
    specialPermBtn.addEventListener("click", () => {
        window.location.href = "booking.html?course=specialperm";
    });

    const straighteningBtn = document.getElementById("straightening-btn");
    straighteningBtn.addEventListener("click", () => {
        window.location.href = "booking.html?course=hairstraightening";
    });

    const pointPermBtn = document.getElementById("point-perm-btn");
    pointPermBtn.addEventListener("click", () => {
        window.location.href = "booking.html?course=pointperm";
    });

    const ladiesShaveBtn = document.getElementById("ladies-shave-btn");
    ladiesShaveBtn.addEventListener("click", () => {
        window.location.href = "booking.html?course=ladiesshave";
    });
}

// Booking Page
if(document.body.classList.contains("booking-page")){
    const urlParams = new URLSearchParams(window.location.search);
    const query = urlParams.get("course")

    if(query === "basiccut"){
        selectedCourse.innerText = `${translation.jp.basicCutHeader}`;
        selectedPrice.innerText =  `${translation.jp.basicCutPrice}`;
        selectedDesc.innerText = `${translation.jp.basicCutDesc}`;
    }

    if(query === "basiccuths"){
        selectedCourse.innerText = `${translation.jp.basicCutHeaderHs}`;
        selectedPrice.innerText =  `${translation.jp.basicCutPriceHs}`;
        selectedDesc.innerText = `${translation.jp.basicCutDescHs}`;
    }

    if(query === "basiccutjhs"){
        selectedCourse.innerText = `${translation.jp.basicCutHeaderJhs}`;
        selectedPrice.innerText =  `${translation.jp.basicCutPriceJhs}`;
        selectedDesc.innerText = `${translation.jp.basicCutDescJhs}`;
    }

    if(query === "basiccutes"){
        selectedCourse.innerText = `${translation.jp.basicCutHeaderEs}`;
        selectedPrice.innerText =  `${translation.jp.basicCutPriceEs}`;
        selectedDesc.innerText = `${translation.jp.basicCutDescEs}`;
    }

    if(query === "headcourse"){
        selectedCourse.innerText = `${translation.jp.headCourseHeader}`;
        selectedPrice.innerText =  `${translation.jp.headCoursePrice}`;
        selectedDesc.innerText = `${translation.jp.headCourseDesc}`;
    }

    if(query === "facecourse"){
        selectedCourse.innerText = `${translation.jp.faceCourseHeader}`;
        selectedPrice.innerText =  `${translation.jp.faceCoursePrice}`;
        selectedDesc.innerText = `${translation.jp.faceCourseDesc}`;
    }

    if(query === "cutonly"){
        selectedCourse.innerText = `${translation.jp.cutOnlyHeader}`;
        selectedPrice.innerText =  `${translation.jp.cutOnlyPrice}`;
        selectedDesc.innerText = `${translation.jp.cutOnlyDesc}`;
    }

    if(query === "cutonlystu"){
        selectedCourse.innerText = `${translation.jp.cutOnlyHeaderStu}`;
        selectedPrice.innerText =  `${translation.jp.cutOnlyPriceStu}`;
        selectedDesc.innerText = `${translation.jp.cutOnlyDescStu}`;
    }

    if(query === "haircoloring"){
        selectedCourse.innerText = `${translation.jp.hairColoringHeader}`;
        selectedPrice.innerText =  `${translation.jp.hairColoringPrice}`;
        selectedDesc.innerText = `${translation.jp.hairColoringDesc}`;
    }

    if(query === "grayblending"){
        selectedCourse.innerText = `${translation.jp.grayBlendingHeader}`;
        selectedPrice.innerText =  `${translation.jp.grayBlendingPrice}`;
        selectedDesc.innerText = `${translation.jp.grayBlendingDesc}`;
    }

    if(query === "manicure"){
        selectedCourse.innerText = `${translation.jp.hairManicureHeader}`;
        selectedPrice.innerText =  `${translation.jp.hairManucurePrice}`;
        selectedDesc.innerText = `${translation.jp.hairManicureDesc}`;
    }

    if(query === "bleach"){
        selectedCourse.innerText = `${translation.jp.bleachHeader}`;
        selectedPrice.innerText =  `${translation.jp.bleachPrice}`;
        selectedDesc.innerText = `${translation.jp.bleachDesc}`;
    }

    if(query === "perm"){
        selectedCourse.innerText = `${translation.jp.permHeader}`;
        selectedPrice.innerText =  `${translation.jp.permPrice}`;
        selectedDesc.innerText = `${translation.jp.permDesc}`;
    }

    if(query === "specialperm"){
        selectedCourse.innerText = `${translation.jp.specialPermHeader}`;
        selectedPrice.innerText =  `${translation.jp.specialPermPrice}`;
        selectedDesc.innerText = `${translation.jp.specialPermDesc}`;
    }

    if(query === "hairstraightening"){
        selectedCourse.innerText = `${translation.jp.hairStraighteningHeader}`;
        selectedPrice.innerText =  `${translation.jp.hairStraighteningPrice}`;
        selectedDesc.innerText = `${translation.jp.hairStraighteningDesc}`;
    }

    if(query === "pointperm"){
        selectedCourse.innerText = `${translation.jp.pointPermHeader}`;
        selectedPrice.innerText =  `${translation.jp.pointPermPrice}`;
        selectedDesc.innerText = `${translation.jp.pointPermDesc}`;
    }

    if(query === "ladiesshave"){
        selectedCourse.innerText = `${translation.jp.ladiesShaveHeader}`;
        selectedPrice.innerText =  `${translation.jp.ladiesShavePrice}`;
        selectedDesc.innerText = `${translation.jp.ladiesShaveDesc}`;
    }
}