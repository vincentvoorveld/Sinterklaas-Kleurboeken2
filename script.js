const books = [
    {
        title: "Sinterklaas Kleurboek – Creatieve Kleurplaten voor de Feestdagen: Leuke en Traditionele Sinterklaas Illustraties voor Jong en Oud",
        targetAge: "voor alle leeftijden",
        description: "Een mix van traditionele Sinterklaas, Pieten, pakjesboot en cadeaus. Leuk voor gezinnen.",
        cover: "images/alle-leeftijden.png",
        link: "https://www.amazon.nl/dp/B0DJGD4ZS3"
    },
    {
        title: "Sinterklaas Kleurboek voor Peuters en Kleuters: Leuke en Makkelijke Kleurplaten van Piet, Cadeautjes en Pakjesavond voor Kinderen 3, 4, 5 en 6 jaar",
        targetAge: "3–6 jaar",
        description: "Grote vormen, makkelijke lijnen, ideaal om in te kleuren.",
        cover: "images/3-6-jaar.png",
        link: "https://www.amazon.nl/dp/B0FSLR654C"
    },
    {
        title: "Sinterklaas Kleurboek voor Kinderen van 6 tot 8 Jaar: Creatieve en Leuke Kleurplaten van Piet, Cadeaus en Pakjesavond",
        targetAge: "6–8 jaar",
        description: "Iets meer details, leuke Sinterklaasmomenten en surprises.",
        cover: "images/6-8-jaar.png",
        link: "https://www.amazon.nl/dp/B0FV2NK32K"
    },
    {
        title: "Sinterklaas Kleurboek voor Kinderen van 8 tot 10 Jaar: Creatieve en Mooie Kleurplaten van Piet, Cadeaus en Pakjesavond",
        targetAge: "8–10 jaar",
        description: "Voor kinderen die al beter kunnen kleuren en meer variatie willen.",
        cover: "images/8-10-jaar.png",
        link: "https://www.amazon.nl/dp/B0FXGMZGGK"
    },
    {
        title: "Sinterklaas Kleurboek voor Kinderen van 10 tot 12 Jaar: Surprises, Pakjes en Creatieve Kleurplaten om Zelf in te Kleuren",
        targetAge: "10–12 jaar",
        description: "Meer detail, meer scènes, leuk voor oudere kinderen.",
        cover: "images/10-12-jaar.png",
        link: "https://www.amazon.nl/dp/B0FXXBTQPN"
    }
];

function renderBooks() {
    const booksGrid = document.getElementById('books-grid');
    
    books.forEach(book => {
        const bookCard = document.createElement('div');
        bookCard.className = 'book-card';
        
        bookCard.innerHTML = `
            <img src="${book.cover}" alt="${book.title}" class="book-cover">
            <div class="book-content">
                <h3 class="book-title">${book.title}</h3>
                <span class="book-badge">${book.targetAge}</span>
                <p class="book-description">${book.description}</p>
                <a href="${book.link}" class="btn btn-secondary">Bekijk op Amazon</a>
            </div>
        `;
        
        booksGrid.appendChild(bookCard);
    });
}

document.addEventListener('DOMContentLoaded', function() {
    renderBooks();
    
    const navLinks = document.querySelectorAll('.nav-menu a');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 70;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
});
