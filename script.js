
// Navigācijas pogu atlase
const navButtons = document.querySelectorAll('nav .btn[data-section]');

// Iestatīt aktīvo navigācijas pogu
function setActiveNav(sectionId) {
    navButtons.forEach(btn => {
        btn.classList.toggle('active', btn.dataset.section === sectionId);
    });
}

// Noteikt pašreizējo sadaļu, pamatojoties uz ritināšanas pozīciju
function getCurrentSection() {
    const sections = ['sakums','par-mums','pakalpojumi','buj','blogs','komanda','kontakti'];
    const scrollPos = window.scrollY + 120;

    for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (!section) continue;
        if (scrollPos >= section.offsetTop) {
            return sections[i];
        }
    }
    return 'sakums';
}

// Klausīties ritināšanas notikumus un atjaunināt aktīvo navigāciju
window.addEventListener('scroll', () => {
    setActiveNav(getCurrentSection());
});

// Gludi ritināt uz sadaļu
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
        setActiveNav(sectionId);
    }
}

// Scroll to top poga
const scrollToTopBtn = document.getElementById('scrollToTopBtn');

// Parādīt/paslēpt pogu, pamatojoties uz ritināšanas pozīciju
window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        scrollToTopBtn.classList.add('show');
    } else {
        scrollToTopBtn.classList.remove('show');
    }
});

// Ritināt uz augšu, kad noklikšķina uz pogas
scrollToTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});
