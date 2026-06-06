// ============================
//  COLOMBIA 5.0 — SCRIPT.JS
// ============================

/* ---- Set current year in footer ---- */
document.getElementById('year').textContent = new Date().getFullYear();

/* ---- Hamburger menu ---- */
const hamburger = document.getElementById('hamburger');
const navLinks  = document.getElementById('nav-links');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});
navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => navLinks.classList.remove('open'));
});

/* ---- Navbar scroll style ---- */
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.style.background = window.scrollY > 50
    ? 'rgba(8,12,20,0.98)' : 'rgba(8,12,20,0.92)';
});

/* ---- Language Toggle ---- */
let currentLang = 'both';
const langToggle = document.getElementById('langToggle');

langToggle.addEventListener('click', () => {
  if (currentLang === 'both' || currentLang === 'es') {
    currentLang = 'en';
    document.body.classList.remove('lang-es');
    document.body.classList.add('lang-en');
    langToggle.textContent = '🌐 ES';
    switchTextContent('en');
  } else {
    currentLang = 'es';
    document.body.classList.remove('lang-en');
    document.body.classList.add('lang-es');
    langToggle.textContent = '🌐 EN';
    switchTextContent('es');
  }
});

function switchTextContent(lang) {
  document.querySelectorAll('[data-es][data-en]').forEach(el => {
    el.textContent = lang === 'en' ? el.dataset.en : el.dataset.es;
  });
}

/* ---- Glossary Data (EN + ES traducción + definición en ES) ---- */
const glossaryData = [
  {
    en: "Artificial Intelligence",
    es: "Inteligencia Artificial",
    defEn: "Systems that simulate human cognitive abilities such as learning and problem-solving.",
    defEs: "Sistemas que simulan capacidades cognitivas humanas como el aprendizaje y la resolución de problemas."
  },
  {
    en: "Machine Learning",
    es: "Aprendizaje Automático",
    defEn: "AI branch where systems learn from data without explicit programming.",
    defEs: "Rama de la IA donde los sistemas aprenden de datos sin ser programados explícitamente."
  },
  {
    en: "Deep Learning",
    es: "Aprendizaje Profundo",
    defEn: "Machine learning using neural networks with many layers to model complex patterns.",
    defEs: "Aprendizaje automático que usa redes neuronales con múltiples capas para modelar patrones complejos."
  },
  {
    en: "Neural Network",
    es: "Red Neuronal",
    defEn: "Computing system inspired by the biological neural networks in the human brain.",
    defEs: "Sistema computacional inspirado en las redes neuronales biológicas del cerebro humano."
  },
  {
    en: "Big Data",
    es: "Macrodatos",
    defEn: "Extremely large data sets analyzed to reveal patterns, trends, and associations.",
    defEs: "Conjuntos de datos de gran tamaño analizados para revelar patrones, tendencias y asociaciones."
  },
  {
    en: "Cloud Computing",
    es: "Computación en la Nube",
    defEn: "Delivery of computing services over the internet, enabling on-demand resources.",
    defEs: "Entrega de servicios informáticos a través de internet, permitiendo recursos bajo demanda."
  },
  {
    en: "Cybersecurity",
    es: "Ciberseguridad",
    defEn: "Practice of protecting systems, networks, and programs from digital attacks.",
    defEs: "Práctica de proteger sistemas, redes y programas contra ataques digitales."
  },
  {
    en: "Algorithm",
    es: "Algoritmo",
    defEn: "Step-by-step set of instructions used by a computer to solve a problem.",
    defEs: "Conjunto de instrucciones paso a paso que usa una computadora para resolver un problema."
  },
  {
    en: "Automation",
    es: "Automatización",
    defEn: "Use of technology to perform tasks with minimal human intervention.",
    defEs: "Uso de tecnología para realizar tareas con mínima intervención humana."
  },
  {
    en: "Biometrics",
    es: "Biometría",
    defEn: "Measurement and analysis of unique physical or behavioral characteristics for identification.",
    defEs: "Medición y análisis de características físicas o de comportamiento únicas para identificar personas."
  },
  {
    en: "Bioengineering",
    es: "Bioingeniería",
    defEn: "Application of engineering principles to biological systems and medical technology.",
    defEs: "Aplicación de principios de ingeniería a sistemas biológicos y tecnología médica."
  },
  {
    en: "Digital Sovereignty",
    es: "Soberanía Digital",
    defEn: "A nation's ability to control its digital infrastructure, data, and technology independently.",
    defEs: "Capacidad de una nación para controlar de manera independiente su infraestructura digital, datos y tecnología."
  },
  {
    en: "Deepfake",
    es: "Deepfake",
    defEn: "Synthetic media created by AI that realistically replaces a person's likeness.",
    defEs: "Medio sintético creado con IA que reemplaza de forma realista la imagen o voz de una persona."
  },
  {
    en: "API",
    es: "Interfaz de Programación",
    defEn: "Application Programming Interface — rules allowing different software applications to communicate.",
    defEs: "Interfaz de Programación de Aplicaciones — conjunto de reglas que permite a diferentes programas comunicarse."
  },
  {
    en: "IoT",
    es: "Internet de las Cosas",
    defEn: "Network of physical devices embedded with sensors that connect and exchange data over the internet.",
    defEs: "Red de dispositivos físicos con sensores que se conectan e intercambian datos a través de internet."
  },
  {
    en: "Blockchain",
    es: "Cadena de Bloques",
    defEn: "Distributed ledger technology that records transactions across multiple computers securely.",
    defEs: "Tecnología de registro distribuido que almacena transacciones de forma segura en múltiples computadoras."
  },
  {
    en: "Prompt Engineering",
    es: "Ingeniería de Prompts",
    defEn: "Practice of designing inputs to AI language models to produce desired outputs.",
    defEs: "Práctica de diseñar instrucciones precisas para modelos de lenguaje IA y obtener resultados deseados."
  },
  {
    en: "Data Privacy",
    es: "Privacidad de Datos",
    defEn: "Appropriate handling, processing, and storage of personal data to protect individual rights.",
    defEs: "Manejo, procesamiento y almacenamiento adecuado de datos personales para proteger los derechos individuales."
  },
  {
    en: "Digital Transformation",
    es: "Transformación Digital",
    defEn: "Integration of digital technology into all areas of a business or society.",
    defEs: "Integración de tecnología digital en todas las áreas de una empresa o sociedad."
  },
  {
    en: "Hybrid Civilization",
    es: "Civilización Híbrida",
    defEn: "Future society where humans and artificial intelligence coexist and interact closely.",
    defEs: "Sociedad futura donde humanos e inteligencia artificial conviven e interactúan de manera cercana."
  },
  {
    en: "Retinal Analysis",
    es: "Análisis de Retina",
    defEn: "Technology that reads eye patterns to detect emotional states or verify identity.",
    defEs: "Tecnología que lee los patrones del ojo para detectar estados emocionales o verificar la identidad."
  },
  {
    en: "Avatar",
    es: "Avatar",
    defEn: "Digital representation of a person in virtual environments or online platforms.",
    defEs: "Representación digital de una persona en entornos virtuales o plataformas en línea."
  },
  {
    en: "Chatbot",
    es: "Bot de Conversación",
    defEn: "Software application designed to simulate human conversation through text or voice.",
    defEs: "Aplicación de software diseñada para simular conversaciones humanas mediante texto o voz."
  },
  {
    en: "Generative AI",
    es: "IA Generativa",
    defEn: "AI systems capable of generating new content such as text, images, video, or audio.",
    defEs: "Sistemas de IA capaces de generar nuevo contenido como texto, imágenes, video o audio."
  },
  {
    en: "Digital Ethics",
    es: "Ética Digital",
    defEn: "Set of moral principles and values that govern the use of technology and digital information.",
    defEs: "Conjunto de principios morales y valores que rigen el uso de la tecnología y la información digital."
  },
  {
    en: "Productivity",
    es: "Productividad",
    defEn: "Measure of efficiency in converting inputs into useful outputs, often enhanced by technology.",
    defEs: "Medida de eficiencia en convertir recursos en resultados útiles, frecuentemente mejorada por la tecnología."
  },
  {
    en: "Misinformation",
    es: "Desinformación",
    defEn: "False or inaccurate information spread regardless of intent to deceive.",
    defEs: "Información falsa o inexacta difundida independientemente de la intención de engañar."
  },
  {
    en: "TIC",
    es: "TIC",
    defEn: "Information and Communication Technologies — tools that handle information digitally.",
    defEs: "Tecnologías de la Información y las Comunicaciones — herramientas que gestionan información de forma digital."
  },
  {
    en: "Virtual Reality",
    es: "Realidad Virtual",
    defEn: "Simulated experience using computer technology that creates a three-dimensional environment.",
    defEs: "Experiencia simulada mediante tecnología informática que crea un entorno tridimensional inmersivo."
  },
  {
    en: "Technological Dependency",
    es: "Dependencia Tecnológica",
    defEn: "State in which individuals or societies cannot function normally without specific technologies.",
    defEs: "Estado en el que individuos o sociedades no pueden funcionar con normalidad sin ciertas tecnologías."
  },
];

/* ---- Render Glossary ---- */
const glossGrid = document.getElementById('glossaryGrid');

function renderGlossary(filter = '') {
  const lower = filter.toLowerCase();
  const filtered = glossaryData.filter(item =>
    item.en.toLowerCase().includes(lower) ||
    item.es.toLowerCase().includes(lower) ||
    item.defEs.toLowerCase().includes(lower) ||
    item.defEn.toLowerCase().includes(lower)
  );

  if (filtered.length === 0) {
    glossGrid.innerHTML = '<p style="color:var(--text-dim);text-align:center;grid-column:1/-1">No results found.</p>';
    return;
  }

  glossGrid.innerHTML = filtered.map(item => `
    <div class="gloss-card">
      <p class="gloss-en">${item.en}</p>
      <p class="gloss-es">${item.es}</p>
      <p class="gloss-def"><span class="def-flag">🇨🇴</span> ${item.defEs}</p>
      <p class="gloss-def-en"><span class="def-flag">🇺🇸</span> ${item.defEn}</p>
    </div>
  `).join('');
}

renderGlossary();

document.getElementById('glossSearch').addEventListener('input', (e) => {
  renderGlossary(e.target.value);
});

/* ---- Scroll-reveal ---- */
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, { threshold: 0.08 });

document.querySelectorAll('.conf-block, .lang-col').forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(20px)';
  el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
  observer.observe(el);
});

/* ---- Lightbox for gallery ---- */
const lightbox = document.getElementById('lightbox');
const lbImg    = document.getElementById('lbImg');
const lbCap    = document.getElementById('lbCaption');
const lbClose  = document.getElementById('lbClose');

document.querySelectorAll('.gal-item').forEach(item => {
  item.addEventListener('click', () => {
    const img = item.querySelector('img');
    const capEs = item.dataset.captionEs || '';
    const capEn = item.dataset.captionEn || '';
    lbImg.src = img.src;
    lbImg.alt = img.alt;
    // Show caption in current language
    const lang = document.body.classList.contains('lang-en') ? 'en' : 'es';
    lbCap.textContent = lang === 'en' ? capEn : capEs;
    lightbox.classList.add('open');
    document.body.style.overflow = 'hidden';
  });
});

lightbox.addEventListener('click', (e) => {
  if (e.target === lightbox) closeLightbox();
});
lbClose.addEventListener('click', closeLightbox);
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeLightbox();
});

function closeLightbox() {
  lightbox.classList.remove('open');
  document.body.style.overflow = '';
  lbImg.src = '';
}
