// Toggle Navbar
let nav = document.querySelector(".links");
let btnBars = document.querySelector("#icone_bars");

btnBars.onclick = () => {
    btnBars.classList.toggle("fa-times");
    nav.classList.toggle("active");
}

window.onscroll = () => {
    btnBars.classList.remove("fa-times");
    nav.classList.remove("active");
}

// Taps
let list = document.querySelectorAll(".list_tap li");
let listArray = Array.from(list);
let taps = document.querySelectorAll(".conten_taps");
let contenArray = Array.from(taps);

listArray.forEach((ele) => {
    ele.addEventListener("click", (e) => {
        // console.log(ele);
        listArray.forEach((ele) => {
            ele.classList.remove("active");
        });
        e.currentTarget.classList.add("active");
        contenArray.forEach((conten_taps) => {
            conten_taps.style.display = 'none';
        });
        // console.log(e.currentTarget.dataset.num);
        document.querySelector(e.currentTarget.dataset.num).style.display = 'flex';
    });
});

// Section FAQ
let faqs = document.querySelectorAll(".asked");
let faqArray = Array.from(faqs);

faqArray.forEach((faq) => {
    faq.addEventListener("click", (e) => {
        faq.classList.toggle("active");
    });
});

// Scroll Top Button
let scrollTop = document.querySelector(".scrollTop");

window.onscroll = () => {
    // console.log(this.scrollY);
    if (this.scrollY >= 800) {
        scrollTop.classList.add("show");
    } else {
        scrollTop.classList.remove("show");
    }
}

scrollTop.onclick = () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}