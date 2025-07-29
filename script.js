// Menu Data
const pizzasTradicionales = [
    {
        name: "Marinara",
        description: "Tomate, orégano, ajo, albahaca, aceite de oliva virgen extra.",
        price: "€9.00"
    },
    {
        name: "Margherita",
        description: "Tomate, mozzarella, queso parmesano, aceite de oliva virgen extra y albahaca.",
        price: "€10.00"
    },
    {
        name: "Prosciutto e Funghi",
        description: "Tomate, mozzarella, jamón cocido, champiñones, queso parmesano, albahaca, aceite de oliva virgen extra.",
        price: "€12.50"
    },
    {
        name: "Diavola",
        description: "Tomate, mozzarella, salami de Napoli, guindilla, queso parmesano, albahaca, aceite de oliva virgen extra.",
        price: "€11.50"
    },
    {
        name: "4 Formaggi",
        description: "Queso Ricota, mozzarella, queso parmesano, queso gorgonzola, albahaca, aceite de oliva virgen extra.",
        price: "€13.00"
    },
    {
        name: "Capricciosa",
        description: "Tomate, mozzarella, jamón cocido, champiñones, salami de Napoli, alcachofas, aceitunas negras, queso parmesano, albahaca, aceite de oliva virgen extra.",
        price: "€14.00"
    },
    {
        name: "Napoli",
        description: "Tomate, mozzarella, anchoas, aceitunas negras, alcaparras, orégano, albahaca, aceite de oliva virgen extra.",
        price: "€12.50"
    },
    {
        name: "Calzone al Forno",
        description: "Pizza rellena de queso ricota, provola, tomate, salami de Napoli, pimienta negra, queso parmesano, albahaca, aceite de oliva virgen extra.",
        price: "€14.50"
    },
    {
        name: "Filetto",
        description: "Mozzarella, tomate cherry, queso parmesano, albahaca, aceite de oliva virgen extra.",
        price: "€11.00"
    },
    {
        name: "Vegetariana",
        description: "Tomate, mozzarella, verduras de temporada, queso parmesano, albahaca, aceite de oliva virgen extra.",
        price: "€13.50"
    },
    {
        name: "Provola e Pepe",
        description: "Queso provola, tomate, pimienta negra, queso parmesano, albahaca, aceite de oliva virgen extra.",
        price: "€11.50"
    }
];

const pizzasEspeciales = [
    {
        name: "Guanciale",
        description: "Mozzarella fiordilatte, guanciale curado italiano, tomate cherry amarillo, stracciatella fresca, albahaca, aceite de oliva virgen extra.",
        price: "€17.50"
    },
    {
        name: "Cami Ral 510",
        description: "Mozzarella, salami Napoletano, queso gorgonzola dop, pimienta, albahaca, aceite de oliva virgen extra.",
        price: "€16.00"
    },
    {
        name: "Stella del Sud",
        description: "Pomodoro, anchoas, stracciatella fresca, tomate cherry amarillo, piel de limón rallado, albahaca, aceite de oliva virgen extra.",
        price: "€19.00"
    },
    {
        name: "La Zia",
        description: "Mozzarella, tomate cherry rojo y amarillo, guanciale curado italiano, nuca, albahaca, queso parmesano, aceite de oliva virgen extra.",
        price: "€16.50"
    },
    {
        name: "Trufada",
        description: "Mozzarella fresca, champiñones, butifarra, crema de trufa negra, queso parmesano, aceite de oliva virgen extra.",
        price: "€15.00"
    }    
];

const pizzasDeLaCasa = [
    {
        name: "Crudaiola",
        description: "Base de pizza condimentada con rúcula, tomate cherry fresco, jamón crudo de Parma, escamas de queso parmesano, aceite de oliva virgen extra.",
        price: "€14.50"
    },
    {
        name: "Maradona",
        description: "Mozzarella fiordilatte, mortadella IGP de Bologna, burratina fresca, pesto de pistachos, albahaca, aceite de oliva virgen extra.",
        price: "€16.50"
    },
    {
        name: "La Rustica",
        description: "Provola (Mozzarella fresca fumada), butifarra Napolitana, patatas al horno condimentadas con pimienta y romero, crema de queso parmesano casera, albahaca, aceite de oliva virgen extra.",
        price: "€15.50"
    },
    {
        name: "Don Antonio",
        description: "Mozzarella fiordilatte, salsa de tomate, salami Napoletano, requesón, olivas negras, albahaca, aceite de oliva virgen extra.",
        price: "€15.00"
    },
    {
        name: "La Piccolina",
        description: "Pesto d'albahaca, tomate cherry amarillo, stracciatella fresca, aceite de oliva virgen extra.",
        price: "€14.50"
    },
    {
        name: "Tonno",
        description: "Mozzarella fiordilatte, tomate, atún, cebolla morada, albahaca, aceite de oliva virgen extra.",
        price: "€14.50"
    }
]

const ensalada = [
    {
        name: "Burrata mediterránea",
        description: "Una cremosa burrata con rodajas de tomate maduro, pesto aromático de albahaca, aceite de oliva virgen extra.",
        price: "€11.90"
    },
    {
        name: "Mozarella i Atún",
        description: "Ensalada ligera con atún, mozzarella fresca, tomate cherry sobre una base de rúcula, aceite de oliva virgen extra.",
        price: "€8.90"
    },
    {
        name: "Caprese con Provola",
        description: "Clásica ensalada caprese con lonchas de mozzarella fresca ahumada, tomate fresco, hojas de albahaca, aceite de oliva virgen extra.",
        price: "€9.90"
    }
]

const postres = [
    {
        name: "Tiramisú Clásico",
        description: "",
        price: "€6.00"
    },
    {
        name: "Tiramisú de Pistacho",
        description: "",
        price: "€6.00"
    },
    {
        name: "Torta Caprese",
        description: "(Cacao, almendras)",
        price: "€5.00"
    },
    {
        name: "Delicia de Limón",
        description: "",
        price: "€5.00"
    }
]

const bebidas = [
    {
        name: "Agua",
        description: "",
        price: "€2.00"
    },
    {
        name: "Agua con Gas",
        description: "",
        price: "€2.50"
    },
    {
        name: "Coca Cola",
        description: "",
        price: "€2.50"
    },
    {
        name: "Coca Cola Zero",
        description: "",
        price: "€2.50"
    },
    {
        name: "Fanta Naranja",
        description: "",
        price: "€2.50"
    },
    {
        name: "Fanta Limón",
        description: "",
        price: "€2.50"
    },
    {
        name: "Nestea",
        description: "",
        price: "€2.50"
    },
    {
        name: "Aquarius",
        description: "",
        price: "€2.50"
    },
    {
        name: "Seven Up",
        description: "",
        price: "€2.50"
    },
    {
        name: "Zumos",
        description: "",
        price: "€2.20"
    }
]

const vinos = [
    {
        name: "Roca Xica Blanco",
        description: "",
        price: "€3.50 / €15.00"
    },
    {
        name: "Roca Xica Tinto",
        description: "",
        price: "€3.50 / €15.00"
    },
    {
        name: "Roca Xica Rosado",
        description: "",
        price: "€3.50 / €15.00"
    },
    {
        name: "Gran Amat Cava Brut Nature",
        description: "",
        price: "€4.00 / €15.00"
    }
]

const cafe = [
    {
        name: "Café",
        description: "",
        price: "€1.30"
    },
    {
        name: "Cortado",
        description: "",
        price: "€1.50"
    },
    {
        name: "Capuccino",
        description: "",
        price: "€2.00"
    },
    {
        name: "Americano",
        description: "",
        price: "€2.00"
    },
    {
        name: "Carajillo",
        description: "",
        price: "€2.00"
    }
]

const cervezas = [
    {
        name: "Alhambra 1925 de Barril",
        description: "",
        price: "€3.00 / €5.00"
    },
    {
        name: "Nastro Azurro Botella",
        description: "",
        price: "€3.20"
    },
    {
        name: "Alhambra Especial",
        description: "",
        price: "€2.90"
    },
    {
        name: "Alhambra Padler",
        description: "",
        price: "€2.90"
    },
    {
        name: "Mahou 0.0",
        description: "",
        price: "€2.90"
    },
    {
        name: "Mahou 0.0 Tostada",
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
    const tradicionalesContainer = document.getElementById('pizzas-tradicionales');
    const especialesContainer = document.getElementById('pizzas-especiales');
    const deLaCasaContainer = document.getElementById('pizzas-de-la-casa');
    const ensaladaContainer = document.getElementById('ensalada');
    const postresContainer = document.getElementById('postres');
    const bebidasContainer = document.getElementById('bebidas');
    const vinosContainer = document.getElementById('vinos');
    const cafeContainer = document.getElementById('cafe');
    const cervezasContainer = document.getElementById('cervezas');

    // Populate traditional pizzas
    pizzasTradicionales.forEach(pizza => {
        const menuItem = createMenuItem(pizza);
        tradicionalesContainer.appendChild(menuItem);
    });
    
    // Populate specialty pizzas
    pizzasEspeciales.forEach(pizza => {
        const menuItem = createMenuItem(pizza);
        especialesContainer.appendChild(menuItem);
    });

    // Populate house pizzas
    pizzasDeLaCasa.forEach(pizza => {
        const menuItem = createMenuItem(pizza);
        deLaCasaContainer.appendChild(menuItem);
    });

    // Populate salad (if needed)// Populate house pizzas
    ensalada.forEach(pizza => {
        const menuItem = createMenuItem(pizza);
        ensaladaContainer.appendChild(menuItem);
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
        <div class="menu-item-content">
            <h4 class="menu-item-name">${pizza.name}</h4>
            <p class="menu-item-description">${pizza.description}</p>
        </div>
        <span class="menu-item-price">${pizza.price}</span>
    `;
    
    return item;
}



// Smooth scrolling for navigation
window.addEventListener('scroll', function() {
    const navigation = document.querySelector('.nav-container');

    var alpha = Math.min((window.scrollY / 100), 1.0);
    navigation.style.backgroundColor = `rgba(var(--header-background), ${alpha})`;

});

// window.addEventListener('scroll', function() {
//     const navigation = document.getElementById('navigation');
//     if (window.scrollY > 100) {
//         navigation.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
//         navigation.style.backdropFilter = 'blur(10px)';
//     } else {
//         navigation.style.backgroundColor = 'var(--white)';
//         navigation.style.backdropFilter = 'none';
//     }
// });

// Handle window resize for mobile menu
window.addEventListener('resize', function() {
    if (window.innerWidth >= 768 && isMobileMenuOpen) {
        toggleMobileMenu();
    }
});

// Close mobile menu when clicking outside keviniiiiii<-------> quitar el codigo
// document.addEventListener('click', function(event) {
//     const mobileMenu = document.getElementById('mobile-menu');
//     const menuToggle = document.getElementById('mobile-menu-btn');
    
//     if (isMobileMenuOpen && 
//         !mobileMenu.contains(event.target) && 
//         !menuToggle.contains(event.target)) {
//         toggleMobileMenu();
//     }
// });

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




