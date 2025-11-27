// src/config/footer.js

// 🔹 Voci delle colonne nel footer
export const footerLists = [
  {
    title: 'About MSCA',
    items: [
      {
        title: 'Marie Skłodowska-Curie Actions',
        slug: 'https://marie-sklodowska-curie-actions.ec.europa.eu/',
      },
    ],
  },
  {
    title: 'Project',
    items: [
      { title: 'EvOCRO Project', slug: '/odyssey-theme/project' },
    ],
  },
  {
    title: 'Contact',
    items: [
      { title: 'Get in touch', slug: '/odyssey-theme/contact' },
    ],
  },

  // 🔹 Colonna Social (testi, non icone)
  {
    title: 'Social',
    items: [
      { title: 'Instagram', slug: 'https://www.instagram.com/evocroproject/' },
      { title: 'Facebook', slug: 'https://www.facebook.com/profile.php?id=61584270533357' },

      // Profili futuri con placeholder:
      { title: 'Twitter / X', slug: '#' },
      { title: 'Bluesky', slug: '#' },
      { title: 'TikTok', slug: '#' },
      { title: 'YouTube', slug: '#' },
    ],
  },
];

// 🔹 Icone social del footer (icone cliccabili)
export const footerSocials = [
  {
    name: 'Instagram',
    url: 'https://www.instagram.com/evocroproject/',
    icon: 'mdi:instagram',
  },
  {
    name: 'Facebook',
    url: 'https://www.facebook.com/profile.php?id=61584270533357',
    icon: 'mdi:facebook',
  },

  // Futuri, già pronti:
  {
    name: 'Twitter/X',
    url: '#',
    icon: 'mdi:twitter', // Nota: se vuoi l’icona “X” vera, te la preparo come SVG custom
  },
  {
    name: 'Bluesky',
    url: '#',
    icon: 'mdi:alpha-b-circle', // Placeholder fino a che esiste l’account
  },
  {
    name: 'TikTok',
    url: '#',
    icon: 'mdi:tiktok',
  },
  {
    name: 'YouTube',
    url: '#',
    icon: 'mdi:youtube',
  },
];

// 🔹 Loghi centrali del footer
export const footerLogos = [
  { src: '/odyssey-theme/assets/footer-logos/TitleCol.jpg',  alt: 'EvOCRO' },
  { src: '/odyssey-theme/assets/footer-logos/eulogo.png',    alt: 'European Union' },
  { src: '/odyssey-theme/assets/footer-logos/msca.png',      alt: 'MSCA' },
  { src: '/odyssey-theme/assets/footer-logos/aru.png',       alt: 'Anglia Ruskin University' },
];
