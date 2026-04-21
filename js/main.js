// ===== CAROUSEL =====
let slides = [];
let currentSlide = 0;
let autoplayTimer = null;

async function loadSlides() {
  try {
    const manifestUrl = new URL('images/slideshowImages/manifest.json', document.baseURI);
    const res = await fetch(manifestUrl.href);
    if (!res.ok) throw new Error('HTTP ' + res.status);
    const data = await res.json();
    slides = data.images || [];
  } catch (e) {
    console.error('Could not load slideshow manifest, using fallback list:', e);
    slides = [
      'IMG_2999.jpeg',
      'IMG_3010.JPG',
      'IMG_3023.JPG',
      'IMG_3026.JPG',
      'IMG_3031.JPG',
      'IMG_3032.JPG',
      'IMG_3632.jpg',
      'IMG_3635.jpg',
    ];
  }
}

function buildCarousel() {
  const track = document.getElementById('carouselTrack');
  const dotsContainer = document.getElementById('carouselDots');
  if (!track || !dotsContainer) return;

  track.innerHTML = '';
  dotsContainer.innerHTML = '';

  slides.forEach((img, index) => {
    const slide = document.createElement('div');
    slide.className = 'carousel-slide';
    slide.innerHTML = `<img src="images/slideshowImages/${img}" alt="SparkArts photo" loading="lazy">`;
    track.appendChild(slide);

    const dot = document.createElement('button');
    dot.className = 'carousel-dot' + (index === 0 ? ' active' : '');
    dot.setAttribute('aria-label', `Go to slide ${index + 1}`);
    dot.addEventListener('click', () => goToSlide(index));
    dotsContainer.appendChild(dot);
  });

  updateCarousel();
  startAutoplay();
}

function updateCarousel() {
  const track = document.getElementById('carouselTrack');
  const dots = document.querySelectorAll('.carousel-dot');
  if (!track) return;
  track.style.transform = `translateX(-${currentSlide * 100}%)`;
  dots.forEach((dot, i) => {
    dot.classList.toggle('active', i === currentSlide);
  });
}

function goToSlide(index) {
  currentSlide = (index + slides.length) % slides.length;
  updateCarousel();
  resetAutoplay();
}

function prevSlide() {
  goToSlide(currentSlide - 1);
}

function nextSlide() {
  goToSlide(currentSlide + 1);
}

function startAutoplay() {
  if (slides.length === 0) return;
  autoplayTimer = setInterval(() => {
    goToSlide(currentSlide + 1);
  }, 7500);
}

function resetAutoplay() {
  if (autoplayTimer) clearInterval(autoplayTimer);
  startAutoplay();
}

async function initCarousel() {
  await loadSlides();
  buildCarousel();
}

// ===== TEAM MODAL =====
const teamMembers = [
  {
    name: 'Valerie Tsang',
    title: 'Founder and Executive Director',
    description: "Hi! My name is Valerie Tsang and I am the founder of SparkArts! I am currently a sophmore at Poolesville High School! I started SparkArts because I believe that every student should have the equal opportunity to have fun and create art without any barriers. I hope all children can learn and grow as artists and students. I love creating arts and crafts and cannot wait to share the joy with students!",
    image: 'valerietsang.jpg',
  },
  {
    name: 'Jessica Lema',
    title: 'Outreach Director',
    description: "Hi, my name is Jessica and I'm a sophmore at Quince Orchard HS and the Outreach Director at SparkArts! Seeing the joy of children and people who don't have much especially in times like these, brings nothing but joy to my heart. I'm incredibly blessed to be apart of this initiative and I hope to get as many people involved as possible.",
    image: 'jesslima.jpg',
  },
  {
    name: 'Cynthia Yu',
    title: 'Creative Director',
    description: "Hi, I'm Cynthia Yu and I'm the Creative Director of SparkArts! I'm currently a sophomore at Poolesville High School. I hope I can inspire many others to discover their passion for art. Art has been my way of expressing myself since I was in elementary school and I woul dlove to give back that love for art through SparkArts.",
    image: 'cynthia_photo.jpeg',
  },
  {
    name: 'Liam Chau',
    title: 'Treasurer',
    description: "Hi, I'm Liam Chau! I'm a 10th grader at Northwest HS and the Treasurer at SparkArts. I joined SparkArts because when I was in elementary school, whenever I helped other kids out with their work they would be happy that I helped them, and it really sparked my passion for helping other kids. With SparkArts, I hope I can help other kids with art to further their creativity and passion for art.",
    image: 'websitephoto_liam.jpg',
  },
  {
    name: 'Karla Cruz Velasquez',
    title: 'Communications Director',
    description: "Hello! My name is Karla Cruz Velasquez. I'm a sophmore at Quince Orchard High School, and my role is Communications Director in this program. As a child, I didn't have opportunities like my peers to express myself through art, which impacted me hard as I grew up. now, I joined SparkArts in hopes of making those kids who aren't very privileged experience something every kid should without any cost blocking it.",
    image: 'websitephoto_karla.jpg',
  },
  {
    name: 'Joshua Vu',
    title: 'Volunteer Engagement Director',
    description: "Hey, I'm Josh! I'm a sophmore at Poolesville High School and the Volunteer Director at SparkArts. As a kid, I didn't have the big interest in art, but now, I love the endless ways art can be expressed through. I want to help people find their creativity and passion through art early with a fostering community. I hope we can inspire and support everyone!",
    image: 'vujoshia.jpg',
  },
  {
    name: 'Gabriel Yee',
    title: 'Program Director',
    description: "Hey there! I'm a sophmore at the Montgomery College MC program at Northwest HS. As Program Director of SparkArts, I strive to organize a place where students have a creative outlet to explore and express their passions in the arts.",
    image: 'IMG_3654732.jpg',
  },
];

function initTeam() {
  const grid = document.getElementById('teamGrid');
  if (!grid) return;

  teamMembers.forEach((member) => {
    const card = document.createElement('div');
    card.className = 'team-card';
    card.innerHTML = `
      <img src="images/${member.image}" alt="${member.name}" loading="lazy">
      <div class="team-card-info">
        <h3>${member.name}</h3>
        <p>${member.title}</p>
      </div>
    `;
    card.addEventListener('click', (e) => {
      e.stopPropagation();
      openModal(member);
    });
    grid.appendChild(card);
  });
}

function openModal(member) {
  const overlay = document.getElementById('modalOverlay');
  document.getElementById('modalPhoto').src = `images/${member.image}`;
  document.getElementById('modalPhoto').alt = member.name;
  document.getElementById('modalName').textContent = member.name;
  document.getElementById('modalTitle').textContent = member.title;
  document.getElementById('modalDesc').textContent = `"${member.description}"`;
  overlay.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  const overlay = document.getElementById('modalOverlay');
  overlay.classList.remove('active');
  document.body.style.overflow = '';
}

// ===== FOOTER YEAR =====
function setFooterYear() {
  const yearEl = document.getElementById('footerYear');
  if (yearEl) yearEl.textContent = new Date().getFullYear();
}

// ===== INIT =====
document.addEventListener('DOMContentLoaded', () => {
  initCarousel();
  initTeam();
  setFooterYear();

  // Carousel buttons
  const prevBtn = document.getElementById('prevBtn');
  const nextBtn = document.getElementById('nextBtn');
  if (prevBtn) prevBtn.addEventListener('click', prevSlide);
  if (nextBtn) nextBtn.addEventListener('click', nextSlide);

  // Modal close
  const modalOverlay = document.getElementById('modalOverlay');
  const modalClose = document.getElementById('modalClose');
  if (modalOverlay) {
    modalOverlay.addEventListener('click', closeModal);
    const modalBox = modalOverlay.querySelector('.modal-box');
    if (modalBox) modalBox.addEventListener('click', (e) => e.stopPropagation());
  }
  if (modalClose) modalClose.addEventListener('click', closeModal);

  // Close modal on ESC
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeModal();
  });
});
