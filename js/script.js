// анимация каррточек
const observer = new IntersectionObserver((entries) => { 
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    }
  });
}, {
  threshold: 0.2
});

document.querySelectorAll('.card').forEach(card => {
  observer.observe(card);
});

document.addEventListener('DOMContentLoaded', () => {

  const path = window.location.pathname.toLowerCase();
  const currentLang = path.startsWith('/en/') ? 'en' : 'ru';
  const langLinks = document.querySelectorAll('.lang a');

  langLinks.forEach(link => {
    if (link.dataset.lang === currentLang) {
      link.classList.add('active');
      link.style.pointerEvents = 'none';
    } else {
      link.classList.remove('active');
      link.style.pointerEvents = 'auto';
    }
  });



  // массив проектов
  const allProjects = [
    {
      link: 'portfolio/project1.html',
      subtitle: 'Белозерский областной краеведческий музей',
      title: 'Музей этнографии',
      desc: 'Белозерск | 2023',
      images: [
        '/img/Портфолио/Белозерск Этнография/фото 1.jpg',
        '/img/Портфолио/Белозерск Этнография/фото 2.jpg',
        
      ]
    },
    {
      link: 'portfolio/project2.html',
      subtitle: 'Белозерский областной краеведческий музей',
      title: 'Мемориальный дом-музей поэта С.С. Орлова',
      desc: 'Белозерск | 2023',
      images: [
        '/img/Портфолио/Белозерск Музей Орлова/фото 1.jpg',
        
      ]
    },
    {
      link: 'portfolio/project3.html',
      subtitle: 'Визит-центр Валдайского национального парка',
      title: 'не указан',
      desc: 'Валдай | 2016',
      images: [

      ]
    },
    {
      link: 'portfolio/project4.html',
      subtitle: 'Ювелирное искусство ХVII-XIV веков "Новгородский государственный объединённый музей-заповедник"',
      title: 'Грановитая палата',
      desc: 'Великий Новгород | 2016',
      images: [

      ]
    },
    {
      link: 'portfolio/project5.html',
      subtitle: 'ФБГУК «Новгородский государственный объединённый музей-заповедник»',
      title: 'Проект экспозиция «Музей Великого моста»',
      desc: 'Великий Новгород | 2021-2022',
      images: [

      ]
    },
    {
      link: 'portfolio/project6.html',
      subtitle: 'ФБГУК «Новгородский государственный объединённый музей-заповедник»',
      title: 'Экспозиция «Музей письменности»',
      desc: 'Великий Новгород | 2021',
      images: [

      ]
    },
    {
      link: 'portfolio/project7.html',
      subtitle: 'Зал спортивной славы ГОАУ ДО «СШ» Спорт-индустрия»',
      title: 'не указан',
      desc: 'Великий Новгород | 2023',
      images: [

      ]
    },
    {
      link: 'portfolio/project8.html',
      subtitle: 'ФБГУК «Новгородский государственный объединённый музей-заповедник»',
      title: 'Экспозиция «Эволюция власти. Памятники сфрагистики и нумизматики из собрания Новгородского музея-заповедника»',
      desc: 'Великий Новгород | 2018',
      images: [

      ]
    },
    {
      link: 'portfolio/project9.html',
      subtitle: 'не указан',
      title: 'Передвижной выставочный проект «Волжская Булгария. Великое наследие»',
      desc: '2022',
      images: [

      ]
    },
    {
      link: 'portfolio/project10.html',
      subtitle: 'Музей «ГАЗПРОМ ДОБЫЧА УРЕНГОЙ»',
      title: 'Не указан',
      desc: 'Новый Уренгой | 2011',
      images: [

      ]
    },    
    {
      link: 'portfolio/project11.html',
      subtitle: 'Краеведческий музей им. Ф.И. Пыжьянова',
      title: 'Неизвестно',
      desc: 'Южно-Курильск | 2018',
      images: [

      ]
    }, 
    {
      link: 'portfolio/project12.html',
      subtitle: 'Не указан',
      title: 'Предпроект «Портсмут»',
      desc: 'Кронштадт | 2017',
      images: [

      ]
    }, 
    {
      link: 'portfolio/project13.html',
      subtitle: '«Музей театрального и музыкального искусства»',
      title: 'Неизвестно',
      desc: 'Санкт-Петербург | 2015',
      images: [

      ]
    },
    {
      link: 'portfolio/project14.html',
      subtitle: 'Музей не указан',
      title: 'Историческая экспозиция',
      desc: 'Остров 2015 | 2016',
      images: [

      ]
    },
    {
      link: 'portfolio/project15.html',
      subtitle: 'Военно-исторический комплекс «Линия Сталина» в деревне Холматка Островского района Псковской области',
      title: 'Не указан',
      desc: 'Псков | 2018',
      images: [

      ]
    },
    {
      link: 'portfolio/project16.html',
      subtitle: 'Музей Боевой славы Третьего ратного поля России',
      title: 'Экспозиция раздела «История края». Село Прохоровка Белгородской области',
      desc: 'Белгородск| Прохоровка | 2012',
      images: [

      ]
    },
    {
      link: 'portfolio/project17.html',
      subtitle: 'Музей «РОСПАН»',
      title: 'Не указан',
      desc: 'Новый Уренгой | 2015',
      images: [

      ]
    },
    {
      link: 'portfolio/project18.html',
      subtitle: 'Российский этнографический музей',
      title: 'Передвижной выставочный проект «Волжская Булгария. Великое наследие»',
      desc: 'Волжск | 2022',
      images: [

      ]
    },
    {
      link: 'portfolio/project19.html',
      subtitle: 'Музей железнодоржных дорог',
      title: 'Не указан',
      desc: 'Санкт-Петербург | 2018',
      images: [

      ]
    },
    {
      link: 'portfolio/project20.html',
      subtitle: 'Музей хлеба',
      title: 'не указан',
      desc: 'Санкт-Петербург | 2017',
      images: [

      ]
    },
    {
      link: 'portfolio/project21.html',
      subtitle: 'Музей романа Ф. М. Достоевского «Братья Карамазовы»',
      title: 'не указан',
      desc: 'Старая Русса | 2018',
      images: [

      ]
    }, 
    {
      link: 'portfolio/project22.html',
      subtitle: 'МБУК «Устьянский краеведческий музей»',
      title: 'Экспозиция',
      desc: 'Устьянск | 2022-2023',
      images: [

      ]
    }, 
    {
      link: 'portfolio/project23.html',
      subtitle: 'Музей соборов Царскосельского благочиния',
      title: 'Не указан',
      desc: 'Царское село | 2015',
      images: [

      ]
    }, 
    {
      link: 'portfolio/project24.html',
      subtitle: '«Центр исторического наследия Южно-Уральской железной дороги»',
      title: 'Не указан',
      desc: 'Челябинск | 2019-2020',
      images: [

      ]
    },
    {
      link: 'portfolio/project25.html',
      subtitle: 'Мемориальный комплекс «Победа»',
      title: 'Зал, посвященный жизни и работе в тылу',
      desc: 'Южно-Сахалинск | 2017',
      images: [

      ]
    },                                
       
  ];

  const cardsPerLoad = 6; 
  let renderedCards = 0;

  function renderCards() {
    const grid = document.querySelector('.card-grid');
    if (!grid) return;
    for (let i = 0; i < cardsPerLoad && renderedCards < allProjects.length; i++) {
      const project = allProjects[renderedCards];
      // Рандомное фото
      const img = project.images.length
        ? project.images[Math.floor(Math.random() * project.images.length)].replace(/ /g, '%20')
        : '';
      const card = document.createElement('div');
      card.className = 'card hidden';
      card.innerHTML = `
        <a href="${project.link}" style="display:block; height:100%;">
          <div class="card-image" style="background-image: url('${img}')"></div>
          <div class="card-content">
            <div class="card-subtitle">${project.subtitle}</div>
            <div class="card-title">${project.title}</div>
            <div class="card-desc">${project.desc}</div>
          </div>
        </a>
      `;
      grid.appendChild(card);
      observer.observe(card);
      renderedCards++;
    }
  }

  // lazy load
  window.addEventListener('scroll', () => {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 300) {
      renderCards();
    }
  });

  renderCards();

  
  document.querySelectorAll('.card-grid .card').forEach((card, idx) => {
    const cardImg = card.querySelector('.card-image');
    if (projects[idx] && cardImg) {
      const { folder, files } = projects[idx];
      const rnd = Math.floor(Math.random() * files.length);
      const imgPath = `${folder}/${files[rnd]}`.replace(/ /g, '%20');
      cardImg.style.backgroundImage = `url('${imgPath}')`;
    }
  });
  const mainHeader = document.querySelector('.main-header');
  const heroBlock = document.getElementById('hero-video-bg');
  const heroBgVideo = document.getElementById('heroBgVideo');
  const heroOverlay = document.getElementById('heroOverlay');
  const openBtn = document.getElementById('openModalBtn');
  const modal = document.getElementById('videoModal');
  const closeModal = document.getElementById('closeVideoModal');
  const modalVideo = document.getElementById('modalVideo');

  // Хедер становится прозрачным только на hero
  if (mainHeader && heroBlock && heroBgVideo && heroOverlay) {
    function updateHeaderOnScroll() {
      if (window.scrollY > (window.innerHeight - 120)) {
        heroBgVideo.style.opacity = '0';
        heroOverlay.style.background = 'rgba(0,0,0,1)';
        mainHeader.classList.remove('transparent');
      } else {
        heroBgVideo.style.opacity = '1';
        heroOverlay.style.background = 'rgba(0,0,0,0.35)';
        mainHeader.classList.add('transparent');
      }
    }
    mainHeader.classList.add('transparent');
    updateHeaderOnScroll();
    window.addEventListener('scroll', updateHeaderOnScroll);
  } else if (mainHeader) {
    mainHeader.classList.remove('transparent');
  }

  if (openBtn && modal && closeModal && modalVideo) {
    openBtn.addEventListener('click', function(e) {
      e.preventDefault();
      modal.classList.add('open');
      modalVideo.currentTime = 0;
      modalVideo.play();
    });
    closeModal.addEventListener('click', function() {
      modal.classList.remove('open');
      modalVideo.pause();
    });
    document.addEventListener('keydown', function(e) {
      if (e.key === 'Escape' && modal.classList.contains('open')) {
        modal.classList.remove('open');
        modalVideo.pause();
      }
    });
    modal.addEventListener('click', function(e) {
      if (e.target === modal) {
        modal.classList.remove('open');
        modalVideo.pause();
      }
    });
  }

}); // DOMContentLoaded END

function createCounter(containerId, digitsCount = 5) {
  const container = document.getElementById(containerId);
  container.innerHTML = '';
  for (let i = 0; i < digitsCount; i++) {
    const span = document.createElement('span');
    span.classList.add('digit');
    container.appendChild(span);
  }
}

function updateCounter(containerId, numberStr) {
  const container = document.getElementById(containerId);
  const digits = container.querySelectorAll('.digit');

  for (let i = 0; i < digits.length; i++) {
    const digit = digits[i];
    const newChar = numberStr[i] || ' ';
    if (digit.textContent !== newChar) {
      digit.classList.add('spin');
      setTimeout(() => {
        digit.textContent = newChar;
        digit.classList.remove('spin');
        digit.classList.add('visible');
      }, 250);
    }
  }
}

function animateCounter(containerId, target, duration) {
  const digitsCount = target.toString().length;
  createCounter(containerId, digitsCount);

  const steps = 240; 
  const stepTime = duration / steps;
  let currentStep = 0;

  function step() {
    currentStep++;
    const progress = currentStep / steps;
    const currentNumber = Math.floor(progress * target);
    const numberStr = currentNumber.toString().padStart(digitsCount, '0');
    updateCounter(containerId, numberStr);

    if (currentStep < steps) {
      setTimeout(step, stepTime);
    } else {
      updateCounter(containerId, target.toString().padStart(digitsCount, '0'));
    }
  }

  step();
}

animateCounter('counter1', 120000, 500);
animateCounter('counter2', 40058, 500);
animateCounter('counter3', 15000, 500);

document.querySelectorAll('.mobile-submenu > a').forEach(item => {
  item.addEventListener('click', function(e) {
    e.preventDefault();
    this.parentElement.classList.toggle('active');
  });
});

function setCookie(name, value, days) {
  const expires = new Date();
  expires.setTime(expires.getTime() + days * 24 * 60 * 60 * 1000);
  document.cookie = `${name}=${encodeURIComponent(value)};expires=${expires.toUTCString()};path=/`;
}
function getCookie(name){
  const cookies = 
  document.cookie.split(";");
  for(let cookie of cookies){ 
    const[cookieName,cookieValue] = cookie.trim().split('=');
    if(cookieName===name){
      return decodeURIComponent(cookieValue);
    }
  }
  return null;
}
