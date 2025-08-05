// Menu Data
const entrantes = [
    {
        name: "Burrata Mediterránea <br> (veggie)",
        mini: "img/Burrata Mediterranea.jpeg",
        full: "img/Burrata Mediterranea-grande.jpeg",
        description: "Una cremosa burrata con rodajas de tomate maduro, pesto aromático de albahaca y aceite de oliva virgen extra.",
        price: "€11.90"
    },
    {
        name: "Ensalada de Mozzarella y Atun ",
        mini: "img/mozzarellayatún.jpeg",
        full: "img/mozzarellayatún-grande.jpeg",
        description: "Ensalada ligera con atún, mozzarella fresca y tomates cherry, sobre una base de rucula y aceite de oliva virgen extra.",
        price: "€8.90"
    },
    {
        name: "Ensalada Caprese con Provola <br> Especialidad (veggie)",
        mini: "img/ensaladacapresa.jpeg",
        full: "img/ensaladacapresa-grande.jpeg",
        description: "Clásica ensalada Caprese, con lonchas de mozzarella fresca ahumada, tomates frescos, hojas de albahaca y de aceite de oliva virgen extra.",
        price: "€9.90"
    },
    {
        name: "Ingredientes extra",
        mini: "img/napolinato.webp",
        description: "",
        price: "€2.00"
    }
]

const pizzasTradicionales = [
    {
        name: "Marinara",
        mini: "img/Marina.jpeg",
        full: "img/Marina-grande.jpeg",
        description: "Tomate, orégano, ajo, albahaca, aceite de oliva virgen extra.",
        price:
         "€9.00"
    },
    {
        name: "Margherita",
         mini: "img/margharita.jpeg",
        full: "img/margharita-grande.jpeg",
        description: "Tomate, mozzarella, queso parmesano, aceite de oliva virgen extra y albahaca.",
        price: "€10.00"
    },,
    {
        name: "Prosciutto e Funghi",
        mini: "img/Prosciutto e Funghi.jpeg",
        full: "img/Prosciutto e Funghi-grande.jpeg",
        description: "Tomaquet, mozzarella, pernil cuit, xampinyons, formatge parmesà, alfàbrega, oli d’oliva verge extra. <br> Tomate, mozzarella, jamon cocido, champinones, queso parmesano, albahaca, aceite de oliva virgen extra.",
        price: "€12.50"
    },
    {
        name: "Diavola",
        mini: "img/Diavola.jpeg",
        full: "img/Diavola-grande.jpeg",
        description: "Tomaquet, mozzarella, salami de napoli, bitxo, formatge parmesà, alfàbrega, oli d’oliva verge extra. <br> Tomate, mozzarella, salami de Napoli, guindilla, queso parmesano, albahaca, aceite de oliva virgen extra.",
        price: "€11.50"
    },
    {
        name: "4 Formaggi",
        mini: "img/4 Formaggi.jpeg",
        full: "img/4 Formaggi-grande.jpeg",
        description: "Queso ricotta, mozzarella, formatge parmesà, formatge Gorgonzola, alfàbrega, oli d’oliva verge extra. <br>  Ricotta queso, mozzarella queso parmesano, queso Gorgonzola albahaca, aceite de oliva virgen extra.",
        price: "€13.00"
    },
    {
        name: "Capricciosa",
        mini: "img/Capricciosa.jpeg",
        full: "img/Capricciosa-grande.jpeg",
        description: "Tomaquet, mozzarella, pernil cuit, xampinyones, salami de Napoli, carxofes, olives negres, formatge parmesà, alfabrega, oli d’oliva verge extra. <br> Tomate, mozzarella, jamón cocido, champiñones, salami de Napoli, alcachofas, aceitunas negras, queso parmesano, albahaca, aceite de oliva virgen extra.",
        price: "€14.00"
    },
    {
        name: "Napoli",
        mini: "img/Napoli.jpeg",
        full: "img/Napoli-grande.jpeg",
        description: "Tomaquet, mozzarella, anxoves, olives negres, tàperes, orenga, alfabrega, oli d’oliva verge extra. <br> Tomate, mozzarella, anchoas, aceitunas negras, alcaparras, oregano, albahaca, aceite de oliva virgen extra.",
        price: "€12.50"
    },
    {
        name: "Calzone al Forno",
        mini: "img/Calzone al forno.jpeg",
        full: "img/Calzone al forno-grande.jpeg",
        description: "Pizza farcida de: ricotta, provola, tomaquet, salami de Napoli, pebre negre, formatge parmesà, tomaquet, alfabrega, oli d’oliva verge extra. <br> Pizza rellena de: queso ricotta, provola, tomate, salami de Napoli, pimienta negra, queso parmesano, albahaca, aceite de oliva virgen extra.",
        price: "€14.50"
    },
    {
        name: "Filetto",
          mini: "img/filetto.jpeg",
         full: "img/filetto-grande.jpeg",
        description: "Mozzarella, tomàquets cherry, formatge parmesà, alfabrega, oli d’oliva verge extra. <br> Mozzarella, tomate cherry, queso parmesano, albahaca, aceite de oliva virgen extra.",
        price: "€11.00"
    },
    {
        name: "Vegetariana <br> (veggie)",
         mini: "img/Vegetariana.jpeg",
         full: "img/Vegetariana-grande.jpeg",
        description: "Tomaquet, mozzarella, verdures de temporada. formatge parmesà, alfabrega, oli d’oliva verge extra. <br> Tomate, mozzarella, verdures de temporada, queso parmesano, albahaca, aceite de oliva virgen extra",
        price: "€13.50"
    },
    {
        name: "Provola e Pepe",
        mini: "img/napolinato.webp",
        description: "Formatge provola, tomaquet, pebre negre, formatge parmesà, alfabrega, oli d’oliva verge extra. <br> Queso provola, tomate, pimienta negra, queso parmesano, albahaca, aceite de oliva virgen extra.",
        price: "€11.50"
    }
];

const pizzasDeLaCasa = [
    {
        name: "Crudaiola",
        mini: "img/Crudaiola.jpeg",
        full: "img/Crudaiola-grande.jpeg",
        description: "Base de pizza, condimentada amb Rucula, Tomàquet Cherry frescos, Pernil Cru de Parma, Escames de Formatge Parmesà, Oli d'Olives Verge Extra. <br> Base de pizza, condimentada con Rucula, Tomate Cherry frescos, Jamón Crudo de Parma, Escamas de Queso Parmesano, Aceite de Olivas Virgen extra.",
        price: "€14.50"
    },
    {
        name: "Maradona",
        mini: "img/Maradona.jpeg",
        full: "img/Maradona-grande.jpeg",
        description: "Mozzarella fiordilatte, Mortadella I.G.P. de Bologna, Burratina fresca, Pesta de Festucs, Festucs picats, Alfàbrega, Oli d'Olives Verge Extra. <br> Mozzarella fiordilatte, Mortadella I.G.P. de Bologna, Burratina fresca, Pesto de Pistachos, Pistachos picados, Albahaca, Aceite de Olivas Virgen Extra.",
        price: "€16.50"
    },
    {
        name: "La Rustica",
         mini: "img/rustica.jpeg",
         full: "img/rustica-grande.jpeg",
        description: "Provola (Mozzarella fresca fumada), Botifarra Napolitana, Patates al forn condimentates amb Pebre i Romero, Crema de Formatge Parmesà casolana, Alfàbrega, Oli d'Olives Verge Extra. <br> Provola (Mozzarella fresca ahumada), Butifarra Napolitana, Patates al horno condimentatas con Pimienta y Romero, Crema de Queso Parmesano casera, Albahaca, Aceite de Olivas Virgen Extra.",
        price: "€15.50"
    },
    {
        name: "Don Antonio",
        mini: "img/don_antonio.jpeg",
        full: "img/don_antonio-grande.jpeg",
        description: "Mozzarella fiordilatte, Salsa de Tomàquet, Salame napoletà, mató, Olives negres, Alfàbrega, Oli d'Olives Verge Extra. <br> Mozzarella fiordilatte, Salsa de Tomate, Salame napoletano, requesón, Olivas negras, Albahaca, Aceite de Olivas Virgen Extra.",
        price: "€15.00"
    },
    {
        name: "La Piccolina",
        mini: "img/La Piccolina.jpeg",
        full: "img/La Piccolina.jpeg",
        description: "Pesto d'Albahaca, Tomàquets sec, Tomàquet Cherry groc, Stracciatella fresca, Oli d'Olives Verge Extra. <br> Pesto de Albahaca, Tomates seco, Tomate Cherry amarillo, Stracciatella fresca, Aceite de Olivas Virgen Extra.",
        price: "€14.50"
    },
    {
        name: "Tonno",
        mini: "img/tonno.jpeg",
        full: "img/tonno-grande.jpg",
        description: "Mozzarrella fiordilatte, Tomàquet, Tonyina, Ceba morada, Alfàbrega, Oli d'Olives Verge Extra. <br> Mozzarrella fiordilatte, Tomate, Atún, Cebolla morada, Albahaca, Aceite de Olivas Virgen Extra.",
        price: "€14.50"

    }
]

const pizzasEspeciales = [
    {
        name: "Guanciale",
        mini: "img/guanciale.jpeg",
        full: "img/guanciale-grande.jpeg",
        description: "Mozzarella fiordilatte, guanciale curat italià, tomàquet Cherry groc, Stracciatella fresca, Alfàbrega, Oli d'Olives Verge Extra. <br> Mozzarella fiordilatte, guanciale curado italiano, tomate Cherry amarillo, Stracciatella fresca, Albahaca, Aceite de Olivas Virgen Extra.",
        price: "€17.50"
    },
    {
        name: "Cami Ral 510",
        mini: "img/La Cami Ral.jpeg",
        full: "img/La cami Ral-grande.jpeg",

        description: "Mozzarella, salame napoletà, formatge gorgonzola dop, pebre, Alfàbrega, Oli d'Olives Verge Extra. <br> Mozzarella, salame napoletano, queso gorgonzola dop, pimienta, Albahaca, Aceite de Olivas Virgen Extra.",
        price: "€16.00"
    },
    {
        name: "Stella del Sud",
        mini: "img/Stella del Sud.jpeg",
        full: "img/Stella del Sud-grande.jpeg",
        description: "Tomàquet, Anchoves, Stracciatella fresca, Tomàquet Cherry groc, pell de llimona ratllada, Alfàbrega, Oli d'Olives Verge Extra. <br> Pomodoro, Anchoas, Stracciatella fresca, Tomate cherry amarillo, piel de limon rallada, Albahaca, Aceite de Olivas Virgen Extra.",
        price: "€19.00"
    },
    {
        name: "La Zia",
        mini: "img/La Zia.jpeg",
        full: "img/La Zia-grande.jpeg",
        description: "Mozzarella, Tomàquet cherry vermell i groc, guanciale curat italià, nuca, alfàbrega, formatge parmesà, oli d'oliva verge extra. <br> Mozzarella, Tomate cherry rojo y amarillo, guanciale curado italiano, nduja, albahaca, queso parmesano, aceite de oliva virgen extra.",
        price: "€16.50"
    },
    {
        name: "Trufada",
         mini: "img/trufada.jpeg",
         full: "img/trufada-grande.jpeg",
        description: "Mozzarella fresca, xampinons, botifarra, crema de tòfona negra, formatge parmesà, oli d'oliva verge extra. <br> Mozzarella fresca, champinones, butifarra, crema de trufa negra, queso parmesano, aceite de oliva virgen extra.",
        price: "€15.00"
    },  
     {
        name: "Prosciutto",
         mini: "img/Prosciutto.jpeg",
         full: "img/Prosciutto-grande.jpeg",
        description: "Tomate, mozzarella, jamon cocido,  queso parmesano, albahaca, aceite de oliva virgen extra..",
        price: "€11,50"
    }

];

const postres = [
    {
        name: "Tiramisú Classic - Clásico",
        mini: "img/tiramisut.jpeg",
        full: "img/tiramisut-grande.jpeg",
        description: "",
        price: "€6.00"
    },
    {
        name: "Tiramisú de Festuc - Pistacho",
        mini: "img/tiramisup.jpeg",
        full: "img/tiramisup-grande.jpeg",
        description: "",
        price: "€6.00"
    },
    {
        name: "Torta Caprese (cacao, almendras)<br> Tarta Caprese (Cacau, Ametlles)",
        mini: "img/capresa.jpeg",
        full: "img/capresa-grande.jpeg",
        description: "(Cacao, almendras)",
        price: "€5.00"
    },
    {
        name: "Delicia de Limón - Delicia de LLimona",
        mini: "img/limone.jpeg",
        full: "img/limone-grande.jpeg",
        description: "",
        price: "€5.00"
    }
]

const bebidas = [
    {
        name: "Agua",
        mini: "img/agua.jpeg",
        description: "",
        price: "€2.00"
    },
    {
        name: "Agua con Gas",
        mini: "img/agua.jpeg",
        description: "",
        price: "€2.50"
    },
    {
        name: "Coca Cola",
        mini: "img/cocacola.jpeg",
        description: "",
        price: "€2.50"
    },
    {
        name: "Coca Cola Zero",
         mini: "img/cocacola zero.jpeg",
        description: "",
        price: "€2.50"
    },
    {
        name: "Fanta Naranja",
        mini: "img/fanta.jpeg",
        description: "",
        price: "€2.50"
    },
    {
        name: "Fanta Limón",
        mini: "img/fanta_limon.jpeg",
        description: "",
        price: "€2.50"
    },
    {
        name: "Nestea",
        mini: "img/nestea.jpeg",
        description: "",
        price: "€2.50"
    },
    {
        name: "Aquarius",
        mini: "img/aquarius.jpeg",
        description: "",
        price: "€2.50"
    },
    {
        name: "Seven Up",
        mini: "img/seven.jpeg",
        description: "",
        price: "€2.50"
    },
    {
        name: "Zumos",
        mini: "img/zumo.jpeg",
        description: "",
        price: "€2.20"
    }
]

const vinos = [
    {
        name: "Roca Xica Blanco",
        mini: "img/blanco.jpeg",
        full: "img/blanco-grande.jpeg",
        description: "",
        price: "€3.50 / €15.00"
    },
    {
        name: "Roca Xica Tinto",
        mini: "img/tinto.jpeg",
        full: "img/tinto-grande.jpeg",
        description: "",
        price: "€3.50 / €15.00"
    },
    {
        name: "Roca Xica Rosado",
        mini: "img/rosado.jpeg",
        full: "img/rosado-grande.jpeg",
        description: "",
        price: "€3.50 / €15.00"
    },
    {
        name: "Gran Amat Cava Brut Nature",
        mini: "img/amat.jpeg",
        full: "img/amat-grande.jpeg",
        description: "",
        price: "€4.00 / €15.00"
    }
]

const cafe = [
    {
        name: "Café",
        description: "",
        mini: "img/cafe.jpeg",
        price: "€1.30"
    },
    {
        name: "Cortado",
        description: "",
         mini: "img/cortado.jpeg",
        price: "€1.50"
    },
    {
        name: "Capuccino",
        description: "",
         mini: "img/cappuccino.jpeg",
        price: "€2.00"
    },
    {
        name: "Americano",
        description: "",
         mini: "img/americano.jpeg",
        price: "€2.00"
    },
    {
        name: "Carajillo",
        description: "",
         mini: "img/carajillo.jpeg",
        price: "€2.00"
    }
]

const cervezas = [
    {
        name: "Alhambra 1925 de Barril",
        description: "",
        mini: "img/1925.jpeg",
        full: "img/1925-grande.jpeg",
        price: "€3.00 / €5.00"
    },
    {
        name: "Nastro Azurro Botella",
        mini: "img/nastro.jpeg",
        full: "img/nastro-grande.jpeg",
        description: "",
        price: "€3.20"
    },
    {
        name: "Alhambra Especial",
        mini: "img/alambraa.jpeg",
        full: "img/alambraa-grande.jpeg",
        description: "",
        price: "€2.90"
    },
    {
        name: "Alhambra Padler",
        mini: "img/alambra.jpeg",
        full: "img/alambra-grande",
        description: "",
        price: "€2.90"
    },
    {
        name: "Mahou 0.0",
        mini:"img/mahou.jpeg",
        description: "",
        price: "€2.90"
    },
    {
        name: "Mahou 0.0 Tostada",
        mini: "img/mahouu.jpeg",
        description: "",
        price: "€2.90"
    }
]



// Mobile menu state
let isMobileMenuOpen = false;

// Initialize the page
document.addEventListener('DOMContentLoaded', function() {
    // Initialize Lucide icons
    lucide.createIcons();
    
    // Populate menu items
    populateMenu();
});

// Navigation Functions
function scrollToSection(sectionId) {
  const element = document.getElementById(sectionId);
  const header = document.querySelector('.navigation');
  const headerHeight = header ? header.offsetHeight : 0;
  if (element) {
    const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
    window.scrollTo({
      top: elementPosition - headerHeight,
      behavior: 'smooth'
    });
    // Cierra el menú móvil si está abierto
    if (typeof isMobileMenuOpen !== 'undefined' && isMobileMenuOpen) {
      toggleMobileMenu();
    }
  }
}

function toggleMobileMenu() {
    const mobileMenu = document.getElementById('mobile-menu');
    const menuBtn = document.getElementById('mobile-menu-btn');
    
    isMobileMenuOpen = !isMobileMenuOpen;
    
    if (isMobileMenuOpen) {
        mobileMenu.classList.remove('hidden');
        menuBtn.innerHTML = '<i data-lucide="x"></i>';
    } else {
        mobileMenu.classList.add('hidden');
        menuBtn.innerHTML = '<i data-lucide="menu"></i>';
    }
    
    // Reinitialize icons after changing content
    lucide.createIcons();
}

// Menu Population
function populateMenu() {
    const entrantesContainer = document.getElementById('entrantes');
    const tradicionalesContainer = document.getElementById('pizzas-tradicionales');
    const deLaCasaContainer = document.getElementById('pizzas-de-la-casa');
    const especialesContainer = document.getElementById('pizzas-especiales');
    const postresContainer = document.getElementById('postres');
    const bebidasContainer = document.getElementById('bebidas');
    const vinosContainer = document.getElementById('vinos');
    const cafeContainer = document.getElementById('cafe');
    const cervezasContainer = document.getElementById('cervezas');


 // Populate salad (if needed)// Populate house pizzas
    entrantes.forEach(pizza => {
        const menuItem = createMenuItem(pizza);
        entrantesContainer.appendChild(menuItem);
    });

    // Populate traditional pizzas
    pizzasTradicionales.forEach(pizza => {
        const menuItem = createMenuItem(pizza);
        tradicionalesContainer.appendChild(menuItem);
    });
    
    // Populate house pizzas
    pizzasDeLaCasa.forEach(pizza => {
        const menuItem = createMenuItem(pizza);
        deLaCasaContainer.appendChild(menuItem);
    });

    // Populate specialty pizzas
    pizzasEspeciales.forEach(pizza => {
        const menuItem = createMenuItem(pizza);
        especialesContainer.appendChild(menuItem);
    });

    // Populate desserts
    postres.forEach(pizza => {
        const menuItem = createMenuItem(pizza);
        postresContainer.appendChild(menuItem);
    });

    // Populate drinks
    bebidas.forEach(pizza => {
        const menuItem = createMenuItem(pizza);
        bebidasContainer.appendChild(menuItem);
    });

    // Populate wines
    vinos.forEach(pizza => {
        const menuItem = createMenuItem(pizza);
        vinosContainer.appendChild(menuItem);
    });

    // Populate coffee
    cafe.forEach(pizza => {
        const menuItem = createMenuItem(pizza);
        cafeContainer.appendChild(menuItem);
    });

    // Populate beers
    cervezas.forEach(pizza => {
        const menuItem = createMenuItem(pizza);
        cervezasContainer.appendChild(menuItem);
    });
}

function createMenuItem(pizza) {
    const item = document.createElement('div');
    item.className = 'menu-item';
    
    item.innerHTML = `
        <div class="menu-item-image">
            <a href="${pizza.full}" target="_blank"><img src="${pizza.mini}" alt="${pizza.name}"></a>
        </div>
        <div class="menu-item-content">
            <h4 class="menu-item-name">${pizza.name}</h4>
            <p class="menu-item-description">${pizza.description}</p>
            <span class="menu-item-price">${pizza.price}</span>
        </div>
        
    `;
    
    return item;
}




// Smooth scrolling for navigation
window.addEventListener('scroll', function() {
    const navigation = document.querySelector('.nav-container');

    var alpha = Math.min((window.scrollY / 100), 1.0);
    navigation.style.backgroundColor = `rgba(var(--header-background), ${alpha})`;

});

// Handle window resize for mobile menu
window.addEventListener('resize', function() {
    if (window.innerWidth >= 768 && isMobileMenuOpen) {
        toggleMobileMenu();
    }
});

window.addEventListener('resize', function() {
    if (window.innerWidth >= 768 && isMobileMenuOpen) {
        toggleMobileMenu();
    }
});

/*
// Close mobile menu when clicking outside
document.addEventListener('click', function(event) {
    const mobileMenu = document.getElementById('mobile-menu');
    const menuToggle = document.getElementById('mobile-menu-btn');
    
    if (isMobileMenuOpen && 
        !mobileMenu.contains(event.target) && 
        !menuToggle.contains(event.target)) {
        toggleMobileMenu();
    }
}); */

// Intersection Observer for animations (optional enhancement)
function initializeScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
            }
        });
    }, observerOptions);
    
    // Observe elements for animation
    document.querySelectorAll('.menu-card, .contact-item').forEach(el => {
        observer.observe(el);
    });
}

// Initialize scroll animations when page loads
document.addEventListener('DOMContentLoaded', function() {
    // Small delay to ensure all content is loaded
    setTimeout(initializeScrollAnimations, 100);
});

// Mostrar/ocultar menú desplegable
const langMenu = document.getElementById("langMenu");
const selectedLangBtn = document.getElementById("selectedLangBtn");
const langOptions = document.getElementById("langOptions");



// ...existing code...

/*const translations = {
  es: {
    'hero-title': 'Bienvenidos a<br /><span class="hero-subtitle">Partenope Pizzeria</span>',
    'hero-description': 'La auténtica pizza napolitana, directo al corazón de Mataró.',
    // Añade aquí todos los IDs y textos en español
  },
  ca: {
    'hero-title': 'Benvinguts a<br /><span class="hero-subtitle">Partenope Pizzeria</span>',
    'hero-description': "L'autèntica pizza napolitana, al cor de Mataró.",
    // Traducciones al catalán
  },
  en: {
    'hero-title': 'Welcome to<br /><span class="hero-subtitle">Partenope Pizzeria</span>',
    'hero-description': 'Authentic Neapolitan pizza, right in the heart of Mataró.',
    // Traducciones al inglés
  },
  it: {
    'hero-title': 'Benvenuti a<br /><span class="hero-subtitle">Partenope Pizzeria</span>',
    'hero-description': 'La vera pizza napoletana, nel cuore di Mataró.',
    // Traducciones al italiano
  }
};

function changeLanguage(lang) {
  for (const id in translations[lang]) {
    const el = document.getElementById(id);
    if (el) el.innerHTML = translations[lang][id];
  }
}

// Opcional: Detectar idioma del navegador al cargar
window.onload = function() {
  const userLang = navigator.language.slice(0,2);
  if (['es','ca','en','it'].includes(userLang)) {
    document.getElementById('language-select').value = null;
    changeLanguage(userLang);
  }
};*/



