/*  abre e fecha o menu quando clicar no icone: hamburguer e x */
const nav = document.querySelector('#header nav')
const toggle = document.querySelectorAll('nav .toggle')

for (const element of toggle) {
  element.addEventListener('click', function () {
    nav.classList.toggle('show')
  })
}

/* quando clicar em um item do menu, esconder o menu */
const links = document.querySelectorAll('nav ul li a')

for (const link of links) {
  link.addEventListener('click', function () {
    nav.classList.remove('show')
  })
}

/* mudar o header da página quando der scroll */
const header = document.querySelector('#header')
const navHeight = header.offsetHeight

window.addEventListener('scroll', function () {
  if (window.scrollY >= navHeight) {
    // scroll é maior que a altura do header
    header.classList.add('scroll')
  } else {
    // menor que a altura do header
    header.classList.remove('scroll')
  }
})

/* Testimonials carousel slider swiper */
const swiper = new Swiper('.swiper-container', {
  slidesPerView: 1,
  pagination: {
    el: '.swiper-pagination'
  },
  keyboard: true,
  breakpoints: {
    767: {
      slidesPerView: 2,
      setWrapperSize: true
    }
  }
})

/* scroll reveal */
const scrollReveal = ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 1300,
  reset: true
})

scrollReveal.reveal(
  `#home .image, #home .text,
  #about .image, #about .text,
  #services header, #services .card,
  #testimonials header, #testimonials .testimonials,
  #contact .text, #contact .links,
  footer .brand, footer .social`,
  { interval: 225 }
)

/* Menu ativo conforme a seção visível na página */








const sections = document.querySelectorAll('main section[id]')

function activatemenuAtCurrenteSection() {
  const checkpoint = window.pageYOffset + (window.innerHeight/8)*4

  for(const section of sections) {
    const sectionTop = section.offsetTop
    const sectionHeight = section.offsetHeight
    const sectionId = section.getAttribute('id')

    const checkpointStart = checkpoint >= sectionTop
    const checkpointEnd = checkpoint <= sectionTop + sectionHeight

    if(checkpointStart && checkpointEnd){
      document
      .querySelector('nav ul li a[href*=' + sectionId + ']')
      .classList.add('active')
    }else{
      document
      .querySelector('nav ul li a[href*=' + sectionId + ']')
      .classList.remove('active')
    }
  }
}

window.addEventListener('scroll', function () {
  activatemenuAtCurrenteSection();
})

/*const cards = [
  {
    titulo: "Crédito Consignado",
    descricao:
      "Crédito Consignado com a menor taxa de juros e maior prazo. Dinheiro na sua conta em até 48h!",
    icon: "icon-creditcard",
  },
  {
    titulo: "Crédito Pessoal",
    descricao:
      "rédito Pessoal com taxas personalizadas. Dinheiro na sua conta em até 30h!",
    icon: "icon-money",
  },
  {
    titulo: "Financiamento de Veículo",
    descricao:
      "Financiamento de até 100% de seu carro zero ou usado com até 60 meses para pagar e as melhores condições!",
    icon: "icon-car",
  },
];

for (const element of toggle) {
  element.addEventListener("click", function () {
    nav.classList.toggle("show");
  });
}

// Quando clicar em um item do Menu, esconder/Fechar Menu
const links = document.querySelectorAll("nav ul li a");

for (const link of links) {
  link.addEventListener("click", function () {
    nav.classList.remove("show");
  });
}

const renderCards = () => {
  const grid = document.querySelector("#services > div > div");
  cards.map((card) => {
    grid.innerHTML += `
        <div class="card">
              <div class="${card.icon}"></div>
              <h3 class="title">${card.titulo}</h3>
              <p>${card.descricao}</p><br>
            </div>
        `;
  });
};

renderCards();*/
