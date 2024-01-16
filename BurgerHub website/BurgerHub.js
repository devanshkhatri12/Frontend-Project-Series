//       NAV Functionality

const hamburger = document.getElementById('hamburger-menu');
const navMenu = document.getElementById('nav-menu');
const navClose = document.getElementById('nav-close');
const navlink = document.querySelectorAll('.nav--link');

navlink.forEach(link => 
    link.addEventListener('click', () => {
        navMenu.classList.add('hidden');
    })
)

hamburger.addEventListener('click', () => {
    navMenu.classList.remove('hidden');
});

navClose.addEventListener('click', () => {
    navMenu.classList.add('hidden');
})


// TABS
const tabs = document.querySelectorAll('.tabs-wrap ul li')
const all = document.querySelectorAll('.item-wrap');
const foods = document.querySelectorAll('.food');
const snacks = document.querySelectorAll('.snack');
const beverages = document.querySelectorAll('.beverage');

tabs.forEach(tab => {
    tab.addEventListener("click", () => {
        tabs.forEach(tab => {
            tab.classList.remove('active')
        })

        tab.classList.add('active')

        // MENU SECTION
        const tabvalue = tab.getAttribute('data-tab')

        all.forEach(item => {
            item.style.display = 'none';
        })

        if(tabvalue == 'food')
        {
            foods.forEach(item => {
                item.style.display = 'block';
            })
        }
        else if(tabvalue == 'snack') 
        {
            snacks.forEach(item => {
                item.style.display = 'block';
            })
        }
        else if(tabvalue == 'beverage') 
        {
            beverages.forEach(item => {
                item.style.display = 'block';
            })
        }
        else
        {
            all.forEach(item => {
                item.style.display = 'block';
            })
        }
    })
})

// DARK LIGHT THEME
const html = document.querySelector('html')
const Changetheme = document.getElementById('theme');

const darkmode = () => {
    html.classList.add('dark');
    Changetheme.classList.replace("ri-moon-line", "ri-sun-line");
    localStorage.setItem("mode", "dark")
}

const lightmode = () => {
    html.classList.remove('dark');
    Changetheme.classList.replace("ri-sun-line", "ri-moon-line");
    localStorage.setItem("mode", "light")
}

if(localStorage.getItem("mode") == 'dark') {
    darkmode();
}
else
{
    lightmode();
}

Changetheme.addEventListener('click', (e) => {
    if(localStorage.getItem("mode") == 'light') {
        darkmode();
    }
    else
    {
        lightmode();
    }
})

// Active link
const activelink = () => {
    const sections = document.querySelectorAll('section');

    const navlinks = document.querySelectorAll('nav--link');

    let current = 'home';

    sections.forEach(section => {
        const sectionTop = section.offsetTop;

        if(this.scrollY >= sectionTop -60)
        {
            current = section.getAttribute('id');
        }
    })

    navlinks.forEach((item) => {
        item.classList.remove("text-SecondaryColor");
        if(item.href.include(current)) {
            item.classList.remove("text-SecondaryColor");
        }
    });
};

window.addEventListener('scroll',activelink);

