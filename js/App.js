window.addEventListener('load', () => {
    const messageBox = document.querySelectorAll(".messageBox > div");
    const interViewPlugin = {
        name: 'debugger',
        params: {
            debugger: false,
        },
        on: {
            slideChange: function (swiper) {
                if (!swiper.params.debugger) return;
                // console.log('slideChange', this.previousIndex, '->', this.activeIndex);
                messageBox[this.previousIndex].classList.remove("d-block");
                messageBox[this.previousIndex].querySelectorAll("img").forEach(el => {
                    el.classList.remove("active");
                });
                messageBox[this.previousIndex].classList.add("d-none");

                messageBox[this.activeIndex].classList.add("d-block");
                messageBox[this.activeIndex].querySelectorAll("img").forEach(el => {
                    el.classList.add("active");
                });
                messageBox[this.activeIndex].classList.remove("d-none");
            }
        },
    };

    const textBox = document.querySelectorAll("#analysis .text");
    const iconBox = document.querySelectorAll("#analysis .swiper-pagination-bullets .swiper-pagination-bullet");
    const analysisPlugin = {
        name: 'analys',
        params: {
            analys: false,
        },
        on: {
            slideChange: function (swiper) {
                if (!swiper.params.analys) return;
                console.log('slideChange', this.previousIndex, '->', this.activeIndex);
                textBox[this.previousIndex].classList.remove("show");
                textBox[this.activeIndex].classList.add("show");
                iconBox[this.previousIndex].classList.remove("swiper-pagination-bullet-active");
                iconBox[this.activeIndex].classList.add("swiper-pagination-bullet-active");
            }
        },
    };

    Swiper.use(interViewPlugin);
    Swiper.use(analysisPlugin);
    
    // #info section slider
    const infoSwiper = new Swiper('#info .phone .slider .swiper-container', {
        loop: true,
        autoplay: {
            delay: 1000,
            disableOnInteraction: false,
        }
    });

    // #interView section slider
    const interViewSwiper = new Swiper('#interView .phone .slider .swiper-container', {
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        debugger: true
    });

    // #analysis section slider
    const analysisSwiper = new Swiper('#analysis .phone .slider .swiper-container', {
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        analys: true
    });

    // #info section down
    const down = document.querySelector("#info .down");
    setInterval(() => {
        if (down.classList.contains('downAni')) {
            down.classList.remove('downAni');
        } else {
            down.classList.add('downAni');
        }
    }, 1000);

    const header = document.getElementById('header');
    const infoCH = document.getElementById('info').clientHeight - header.clientHeight;
    const interViewCH = document.getElementById('interView').clientHeight;
    const examCH = document.getElementById('exam').clientHeight;
    const analysisCH = document.getElementById('analysis').clientHeight;
    const downloadCH = document.getElementById('download').clientHeight;
    const links = document.querySelectorAll('#header ul li');

    // scroll event header class update
    window.addEventListener('scroll', () => {
        let y = document.documentElement.scrollTop;
        if (y < infoCH) {
            header.classList.add('menu1');
        } else {
            header.classList.remove('menu1');
        }

        if (y > infoCH && y < infoCH + interViewCH) {
            header.classList.add('menu2');
            links[0].classList.add('active');
        } else {
            header.classList.remove('menu2');
            links[0].classList.remove('active');
        }

        if (y > infoCH + interViewCH && y < infoCH + interViewCH + examCH) {
            header.classList.add('menu3');
            links[1].classList.add('active');
        } else {
            header.classList.remove('menu3');
            links[1].classList.remove('active');
        }

        if (y > infoCH + interViewCH + examCH && y < infoCH + interViewCH + examCH + analysisCH) {
            header.classList.add('menu4');
            links[2].classList.add('active');
        } else {
            header.classList.remove('menu4');
            links[2].classList.remove('active');
        }

        if (y > infoCH + interViewCH + analysisCH + downloadCH) {
            links[2].classList.remove('active');
            links[3].classList.add('active');
        } else {
            links[3].classList.remove('active');
        }
    });
});