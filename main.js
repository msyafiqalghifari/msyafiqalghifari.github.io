const passwordBenar = "1402";

const loginForm = document.getElementById("login-form");
const passwordInput = document.getElementById("password-input");
const errorMsg = document.getElementById("error-msg");

const heart = document.querySelector(".heart");
const textScene = document.getElementById("text-scene");
const message = document.getElementById("message");

loginForm.addEventListener("submit", function(e){

    e.preventDefault();

    if(passwordInput.value === passwordBenar){

        errorMsg.style.display = "none";

        // Jalankan animasi hati
        heart.classList.add("active");

        // Setelah hati membesar
        setTimeout(() => {

            textScene.classList.add("show");

            showMessages();

        }, 2300);

    } else {

        errorMsg.style.display = "block";
        passwordInput.value = "";
    }

});

function showMessages(){

    const texts = [
        "haii",
        "apa kabarr???"
    ];

    let index = 0;

    function nextText(){

        if(index >= texts.length){

textScene.classList.add("fade-white");

setTimeout(() => {

    storySection.classList.add("show");

}, 1700);

setTimeout(() => {

    storySection.classList.add("show");

}, 1800);

    return;
}

        message.textContent = texts[index];

        message.classList.remove("fade-in");

        void message.offsetWidth;

        message.classList.add("fade-in");

        index++;

        setTimeout(nextText, 2500);
    }

    nextText();
}

const stories = [

{
title: "Untuk Mooteyaa ",
text: "Haiii, halaman inii sapikk buat khusus mooteyaa."
},

{
title: "Untuk Apa Halaman Ini?",
text: "Halaman ini aku buat khusus tentang our story, tentang kita, tentang aku dan kamu. Aku ingin kita selalu ingat momen-momen indah yang telah kita lalui bersama."
},

{
title: "Mau Lihat Cerita Kita?",
text: "Tekan tombol Next untuk lanjut ke Halaman berikutnya yaaa"
}

];

const storyTitle =
document.getElementById("story-title");

const storyText =
document.getElementById("story-text");

const nextBtn =
document.getElementById("next-btn");

const wrapper =
document.getElementById("story-content-wrapper");

const storySection =
document.getElementById("story-section");

let currentStory = 0;

const storyCard = document.querySelector(".story-card");

nextBtn.addEventListener("click", () => {

    // Jika sedang di halaman "Mau Lihat Cerita Kita?"
    if (currentStory === stories.length - 1) {

    storyCard.classList.add("story-card-fade-out");

    // white -> burgundy
    storySection.classList.add("burgundy-bg");

    setTimeout(() => {

    storyCard.style.display = "none";

    musicSection.classList.add("show");

}, 1000);

    return;
    }

    wrapper.classList.remove("content-fade-in");
    wrapper.classList.add("content-fade-out");

    setTimeout(() => {
        currentStory++;

        storyTitle.textContent = stories[currentStory].title;
        storyText.textContent = stories[currentStory].text;

        // Ganti teks tombol
        if (currentStory === stories.length - 1) {
            nextBtn.textContent = "Mau";
        } else {
            nextBtn.textContent = "Next →";
        }

        wrapper.classList.remove("content-fade-out");
        void wrapper.offsetWidth;
        wrapper.classList.add("content-fade-in");
    }, 800);
});

const musicSection =
document.getElementById("music-section");

const musicBox =
document.getElementById("music-box");

const musicItems =
document.querySelectorAll(".music-item");

const musicPlayer =
document.getElementById("music-player");

const playerCover =
document.getElementById("player-cover");

const playerTitle =
document.getElementById("player-title");

const playerArtist =
document.getElementById("player-artist");

const audioPlayer =
document.getElementById("audio-player");

const playPauseBtn =
document.getElementById("playPauseBtn");

musicItems.forEach(item => {

    item.addEventListener("click", () => {

        const title =
        item.dataset.title;

        const artist =
        item.dataset.artist;

        const cover =
        item.dataset.cover;

        const audio =
        item.dataset.audio;

        musicBox.classList.add("music-box-hide");

        setTimeout(() => {
        musicSection.style.display = "none";
        playerTitle.textContent = title;
        playerArtist.textContent = artist;
        playerCover.src = cover;
        audioPlayer.src = audio;
        audioPlayer.loop = true;
        audioPlayer.play();

        musicPlayer.classList.add("show");

        showLoveTexts();
}, 800);

    });

});

playPauseBtn.addEventListener("click", () => {

    if(audioPlayer.paused){

        audioPlayer.play();

        playPauseBtn.textContent = "⏸";

    } else {

        audioPlayer.pause();

        playPauseBtn.textContent = "▶";

    }

});

const loveTextSection =
document.getElementById("love-text-section");

const mainLoveText =
document.getElementById("main-love-text");

const subLoveText =
document.getElementById("sub-love-text");

function showLoveTexts(){

    loveTextSection.classList.add("show");

    mainLoveText.classList.add("fade-text");

    setTimeout(() => {

        const texts = [
            "iya",
            "hanya",
            "Untuk"
        ];

        let index = 0;

        function nextText(){

            if(index >= texts.length){

                subLoveText.innerHTML =
                '<span class="kamu-red">kamu</span>';

                loveTextSection.classList.add(
                "fade-white"
                );


                subLoveText.classList.remove("fade-text");
                void subLoveText.offsetWidth;
                subLoveText.classList.add("fade-text");

                setTimeout(() => {

                    loveTextSection.style.display =
                    "none";

                    giftSection.classList.add("show");

                        setTimeout(() => {
                        loveTextSection.style.display = "none";
                        }, 100);

                }, 2000);

                return;
            }

            subLoveText.textContent = texts[index];

            subLoveText.classList.remove("fade-text");
            void subLoveText.offsetWidth;
            subLoveText.classList.add("fade-text");

            index++;

            setTimeout(nextText, 2000);
        }

        nextText();

    }, 2000);
}

const giftSection =
document.getElementById("gift-section");

const giftLid =
document.getElementById("gift-lid");

const giftContainer =
document.getElementById("gift-container");

giftContainer.addEventListener("click", () => {

    giftLid.classList.add("open");

    setTimeout(() => {

        for(let i = 0; i < 50; i++){

            setTimeout(() => {
                createFlower();
            }, i * 25);

        }

    }, 600);

    // setelah bunga menutup layar
    setTimeout(() => {

        flowerOverlay.classList.add(
            "flower-overlay-fade"
        );

        giftSection.classList.add(
            "fade-out"
        );

        // tampilkan halaman bloom setelah bunga memudar
        setTimeout(showBloomPage, 900);

    }, 6500);

});

const flowerOverlay =
document.getElementById("flower-overlay");

const flowerImages = [
    "flower/flower1.png",
    "flower/flower2.png",
    "flower/flower3.png"
];

function createFlower(){

    const flower =
    document.createElement("div");

    flower.className =
    "flower flower-bloom";

    const img =
    document.createElement("img");

    img.src =
    flowerImages[
        Math.floor(
            Math.random()
            * flowerImages.length
        )
    ];

    flower.appendChild(img);

    const size =
    Math.random() * 400 + 700;


    flower.style.width =
    size + "px";

    flower.style.height =
    size + "px";

    const vw = window.innerWidth;
    const vh = window.innerHeight;

    // posisi random seluruh layar
    const x =
    (Math.random() * vw) - (vw / 2);

    const y =
    (Math.random() * vh) - (vh / 2);

    flower.style.setProperty(
        "--x",
        x + "px"
    );

    flower.style.setProperty(
        "--y",
        y + "px"
    );

    flower.style.animationDelay =
    Math.random() * 1.2 + "s";

    flowerOverlay.appendChild(flower);
}

const vw = window.innerWidth;
const vh = window.innerHeight;

const size =
Math.random() * (vw * 0.25)
+ (vw * 0.30);

/* ========================= */
/* BLOOM PAGE */
/* ========================= */

const bloomPage = document.getElementById("bloom-page");
const petalLayer = document.getElementById("petal-layer");

function showBloomPage(){

    bloomPage.classList.add("show");
    bloomPage.scrollTop = 0;

    startPetals();
    initReveal();

    setTimeout(() => {
        giftSection.style.display = "none";
        flowerOverlay.style.display = "none";
    }, 1500);

}

function initReveal(){

    const items = bloomPage.querySelectorAll(".b-reveal");

    const observer = new IntersectionObserver((entries) => {

        entries.forEach(entry => {

            if(entry.isIntersecting){

                // jeda kecil antar elemen dalam satu section
                const siblings = Array.from(
                    entry.target.parentElement.children
                );
                const delay =
                (siblings.indexOf(entry.target) % 6) * 120;

                setTimeout(() => {
                    entry.target.classList.add("in");
                }, delay);

                observer.unobserve(entry.target);
            }

        });

    }, {
        root: bloomPage,
        threshold: 0.18
    });

    items.forEach(el => observer.observe(el));

    // hero langsung muncul
    setTimeout(() => {
        bloomPage
        .querySelectorAll(".b-hero .b-reveal")
        .forEach((el, i) => {
            setTimeout(() => el.classList.add("in"), i * 450);
        });
    }, 400);
}

let petalsStarted = false;

function startPetals(){

    if(petalsStarted) return;
    petalsStarted = true;

    const bits = ["🌸","🌺","🌼","🌸","🌺"];

    function spawn(){

        const petal = document.createElement("div");
        const soft = Math.random() < 0.55;

        petal.className = "b-petal " + (soft ? "soft" : "bit");

        const duration = 9 + Math.random() * 10;

        petal.style.left = Math.random() * 100 + "vw";
        petal.style.animationDuration = duration + "s";
        petal.style.setProperty("--drift", (Math.random() * 240 - 120) + "px");
        petal.style.setProperty("--rot", (Math.random() * 720 - 360) + "deg");

        if(soft){

            const s = 14 + Math.random() * 34;
            petal.style.width = s + "px";
            petal.style.height = s * 1.25 + "px";
            petal.style.setProperty("--op", (0.25 + Math.random() * 0.4).toFixed(2));

        } else {

            petal.textContent =
            bits[Math.floor(Math.random() * bits.length)];

            petal.style.fontSize = (9 + Math.random() * 11) + "px";
            petal.style.setProperty("--op", (0.55 + Math.random() * 0.35).toFixed(2));
        }

        petalLayer.appendChild(petal);

        setTimeout(() => petal.remove(), duration * 1000);
    }

    // petal awal supaya layar langsung terisi
    for(let i = 0; i < 28; i++){
        setTimeout(spawn, i * 120);
    }

    setInterval(spawn, 380);
}

const envelopeWrapper =
document.getElementById("envelope-wrapper");

const envelope =
document.getElementById("envelope");

const typewriterText =
document.getElementById("typewriter-text");

const letterSubtext =
document.getElementById("letter-subtext");

const letterImage =
document.querySelector(".letter-image");

const nextLetterBtn =
document.getElementById("letter-next-btn");

const page2 =
document.getElementById("letter-page-2");



if(envelopeWrapper){

    envelopeWrapper.addEventListener("click", () => {

    if(envelopeWrapper.classList.contains("opened"))
    return;

    envelopeWrapper.classList.add("opened");

    /* buka flap */
    
    envelope.classList.add("open");

    setTimeout(() => {

        envelope.classList.add(
            "show-letter"
        );

    }, 1300);

    /* fade gambar */

    setTimeout(() => {

        letterImage.classList.add("show");

    }, 1800);

    /* typewriter */

    setTimeout(() => {

        startLetterTyping();

    }, 2200);

});
}

function startLetterTyping(){

    typewriterText.textContent = "";
    letterSubtext.innerHTML = "";
    letterSubtext.style.opacity = "0";

    const shortText = `
Hai Mooteyaa 🤍
Kalau kamu sampai membaca surat ini,
berarti kamu sudah melihat seluruh perjalanan yang aku buat.
Setiap halaman,
setiap bunga,
setiap foto,
dan setiap kata yang ada di website ini,
dibuat khusus untuk kamu.
`;

    let i = 0;

    function typing(){

        if(i < shortText.length){
    typewriterText.textContent +=
    shortText.charAt(i);

            i++;

            setTimeout(
                typing,
                35
            );

        }else{

    setTimeout(() => {

        letterSubtext.innerHTML = `
        Terima kasih sudah hadir,
        terima kasih sudah menjadi seseorang yang sangat berarti.

        Dan jika suatu hari nanti kamu lupa betapa berharganya dirimu,
        buka lagi halaman ini.

        Karena di sini akan selalu ada seseorang yang menganggapmu istimewa. 🌸

        <br><br>

        <b>Made with love ❤️</b>
        `;

        letterSubtext.animate([
            {
                opacity:0,
                transform:"translateY(30px)"
            },
            {
                opacity:1,
                transform:"translateY(0)"
            }
        ],{
            duration:1500,
            fill:"forwards",
            easing:"ease-out"
        });

    }, 1500); // jeda setelah typewriter selesai

}
    }

    typing();
}

const envelopeHint =
document.querySelector(".envelope-hint");

envelopeWrapper.addEventListener("click", () => {

    document.querySelector(".letter-title").style.display = "";
document.querySelector(".letter-top").style.display = "";
document.getElementById("letter-subtext").style.display = "";
nextLetterBtn.style.display = "";

page2.style.display = "none";
page2.style.opacity = "0";
page2.style.visibility = "hidden";
page2.style.pointerEvents = "none";

    if(envelopeWrapper.classList.contains("opened"))
        return;

    envelopeHint.style.display = "none";

    envelopeWrapper.classList.add("opened");

});


const page1Elements = [
    document.querySelector(".letter-title"),
    document.querySelector(".letter-top"),
    document.getElementById("letter-subtext")
];

nextLetterBtn.addEventListener("click", () => {

    page1Elements.forEach(el => {
        el.classList.add("page-fade-out");
    });

    nextLetterBtn.classList.add("page-fade-out");

    setTimeout(() => {

        page1Elements.forEach(el => {
            el.style.display = "none";
        });

        nextLetterBtn.style.display = "none";

        page2.style.display = "block";
        page2.style.visibility = "visible";
        page2.style.pointerEvents = "auto";

    requestAnimationFrame(() => {
        page2.classList.add("page-fade-in");
        page2.style.opacity = "1";
});

    }, 800);

});