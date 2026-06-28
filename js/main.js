const translations = {
  pt: {
    'nav.home': 'Início',
    'nav.about': 'Sobre',
    'nav.services': 'Serviços',
    'nav.stack': 'Stack',
    'nav.projects': 'Projetos',
    'nav.contact': 'Contacto',
    'hero.greeting': 'Olá, eu sou',
    'hero.title': 'Programador Fullstack',
    'hero.subtitle': 'Especializado em PHP & MySQL, com experiência em desenvolvimento web completo — do backend à interface.',
    'hero.cta.projects': 'Ver Projetos',
    'hero.cta.contact': 'Contactar',
    'about.tag': 'Sobre mim',
    'about.title': 'Quem sou eu',
    'about.p1': 'Tenho 26 anos, sou de Portugal, e há dois anos que me dedico profissionalmente à programação fullstack com foco em <strong>PHP</strong> e <strong>MySQL</strong>.',
    'about.p2': 'Sou eficiente, aprendo rápido e tenho uma forte predisposição para a tecnologia. Adoro estar a par das novidades do setor e só paro quando as coisas estão feitas — sacrifico o presente pelo futuro.',
    'about.p3': 'Comecei a minha carreira como técnico de multimédia, o que me deu uma visão completa do digital: desde o design visual até à arquitetura de software. Hoje canalizo essa experiência no desenvolvimento web.',
    'about.stat1': 'Anos de PHP',
    'about.stat2': 'Projetos entregues',
    'about.stat3': 'Backend & Frontend',
    'about.stat4': 'Baseado em',
    'services.tag': 'O que faço',
    'services.title': 'Serviços',
    'services.s1.title': 'Backend & APIs',
    'services.s1.desc': 'Desenvolvimento de lógica de negócio, APIs REST, bases de dados MySQL e arquitetura server-side com PHP.',
    'services.s2.title': 'Frontend & UI',
    'services.s2.desc': 'Interfaces responsivas e modernas com HTML, CSS, JavaScript e frameworks como Bootstrap, React e Vue.',
    'services.s3.title': 'Aplicações Web',
    'services.s3.desc': 'Sistemas completos de gestão, painéis administrativos, plataformas com autenticação e fluxos complexos.',
    'stack.tag': 'Tecnologias',
    'stack.title': 'Stack & Ferramentas',
    'stack.backend': 'Backend & Base de Dados',
    'stack.frontend': 'Frontend',
    'stack.tools': 'Ferramentas',
    'stack.multimedia': 'Multimédia',
    'stack.bonus': 'bónus',
    'projects.tag': 'Portfolio',
    'projects.title': 'Projetos',
    'projects.tab.personal': 'Projetos Pessoais',
    'projects.tab.company': 'Projetos Empresa',
    'contact.tag': 'Contacto',
    'contact.title': 'Vamos trabalhar juntos',
    'contact.desc': 'Estou disponível para novos projetos e oportunidades. Entra em contacto!',
    'contact.email': 'Email',
    'contact.linkedin': 'Perfil profissional',
    'contact.github': 'Repositórios & código',
    'footer.rights': 'Todos os direitos reservados.'
  },
  en: {
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.services': 'Services',
    'nav.stack': 'Stack',
    'nav.projects': 'Projects',
    'nav.contact': 'Contact',
    'hero.greeting': 'Hello, I am',
    'hero.title': 'Fullstack Developer',
    'hero.subtitle': 'Specialized in PHP & MySQL, with experience in complete web development — from backend to interface.',
    'hero.cta.projects': 'View Projects',
    'hero.cta.contact': 'Get in Touch',
    'about.tag': 'About me',
    'about.title': 'Who I am',
    'about.p1': 'I\'m 26 years old, based in Portugal, and for the past two years I\'ve been professionally dedicated to fullstack development with a focus on <strong>PHP</strong> and <strong>MySQL</strong>.',
    'about.p2': 'I\'m efficient, a fast learner, and have a strong predisposition for technology. I love staying up to date with industry trends and I don\'t stop until things are done — I sacrifice the present for the future.',
    'about.p3': 'I started my career as a multimedia technician, which gave me a complete view of the digital world: from visual design to software architecture. Today I channel that experience into web development.',
    'about.stat1': 'Years of PHP',
    'about.stat2': 'Projects delivered',
    'about.stat3': 'Backend & Frontend',
    'about.stat4': 'Based in',
    'services.tag': 'What I do',
    'services.title': 'Services',
    'services.s1.title': 'Backend & APIs',
    'services.s1.desc': 'Business logic development, REST APIs, MySQL databases, and server-side architecture with PHP.',
    'services.s2.title': 'Frontend & UI',
    'services.s2.desc': 'Responsive and modern interfaces with HTML, CSS, JavaScript, and frameworks like Bootstrap, React, and Vue.',
    'services.s3.title': 'Web Applications',
    'services.s3.desc': 'Complete management systems, admin panels, platforms with authentication and complex workflows.',
    'stack.tag': 'Technologies',
    'stack.title': 'Stack & Tools',
    'stack.backend': 'Backend & Database',
    'stack.frontend': 'Frontend',
    'stack.tools': 'Tools',
    'stack.multimedia': 'Multimedia',
    'stack.bonus': 'bonus',
    'projects.tag': 'Portfolio',
    'projects.title': 'Projects',
    'projects.tab.personal': 'Personal Projects',
    'projects.tab.company': 'Company Projects',
    'contact.tag': 'Contact',
    'contact.title': 'Let\'s work together',
    'contact.desc': 'I\'m available for new projects and opportunities. Get in touch!',
    'contact.email': 'Email',
    'contact.linkedin': 'Professional profile',
    'contact.github': 'Repositories & code',
    'footer.rights': 'All rights reserved.'
  }
};

let currentLang = localStorage.getItem('lang') || 'pt';

function setLanguage(lang) {
  currentLang = lang;
  localStorage.setItem('lang', lang);
  document.documentElement.lang = lang;

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (translations[lang][key]) {
      el.innerHTML = translations[lang][key];
    }
  });

  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });
}

function renderProjectCard(project, isCompany) {
  const typeLabel = isCompany
    ? project.company
    : (project.type === 'webapp' ? 'Web App' : 'Website');

  const typeClass = isCompany ? 'project-type project-type-company' : 'project-type';

  const techTags = project.tech.map(t => `<span class="tech-tag">${t}</span>`).join('');

  return `
    <article class="project-card fade-in">
      <div class="project-image">
        <img src="${project.image}" alt="${project.title}" onerror="this.src='images/placeholder-project.svg'">
        <div class="project-overlay">
          <a href="${project.url}" target="_blank" rel="noopener" class="project-link">
            <i class="fas fa-external-link-alt"></i>
          </a>
        </div>
      </div>
      <div class="project-info">
        <span class="${typeClass}">${typeLabel}</span>
        <h3>${project.title}</h3>
        <p>${project.description}</p>
        <div class="project-tech">${techTags}</div>
      </div>
    </article>
  `;
}

function initSiteData() {
  const { name, email, github, linkedin, heroImage, personalProjects, companyProjects } = siteData;

  document.title = `${name} | Fullstack Developer`;
  document.getElementById('heroName').textContent = name;
  document.getElementById('footerName').textContent = name;
  document.getElementById('footerYear').textContent = new Date().getFullYear();
  document.getElementById('heroImage').src = heroImage;
  document.getElementById('heroImage').alt = name;
  document.getElementById('contactEmailText').textContent = email;

  const totalProjects = personalProjects.length + companyProjects.length;
  document.getElementById('projectCount').textContent = `${totalProjects}+`;

  const linkIds = ['navGithub', 'heroGithub', 'contactGithub', 'footerGithub'];
  linkIds.forEach(id => { document.getElementById(id).href = github; });

  const linkedinIds = ['navLinkedin', 'heroLinkedin', 'contactLinkedin', 'footerLinkedin'];
  linkedinIds.forEach(id => { document.getElementById(id).href = linkedin; });

  document.getElementById('contactEmail').href = `mailto:${email}`;

  document.getElementById('personalProjects').innerHTML =
    personalProjects.map(p => renderProjectCard(p, false)).join('');

  document.getElementById('companyProjects').innerHTML =
    companyProjects.map(p => renderProjectCard(p, true)).join('');
}

document.querySelectorAll('.lang-btn').forEach(btn => {
  btn.addEventListener('click', () => setLanguage(btn.dataset.lang));
});

const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 50);
});

const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');
navToggle.addEventListener('click', () => {
  navMenu.classList.toggle('open');
});
document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', () => navMenu.classList.remove('open'));
});

const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(section => {
    const top = section.offsetTop - 100;
    if (window.scrollY >= top) current = section.getAttribute('id');
  });
  navLinks.forEach(link => {
    link.classList.toggle('active', link.getAttribute('href') === `#${current}`);
  });
});

document.querySelectorAll('.tab-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
    document.querySelectorAll('.projects-panel').forEach(p => p.classList.remove('active'));
    btn.classList.add('active');
    document.getElementById(`tab-${btn.dataset.tab}`).classList.add('active');
  });
});

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.1 });

function observeElements() {
  document.querySelectorAll('.section-header, .service-card, .project-card, .stat-card, .contact-card, .stack-category').forEach(el => {
    el.classList.add('fade-in');
    observer.observe(el);
  });
}

initSiteData();
observeElements();
setLanguage(currentLang);
