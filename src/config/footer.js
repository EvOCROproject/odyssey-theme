// src/config/footer.js

// Voci a colonne nel footer
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
  {
    title: 'Social',
    items: [
      // (da popolare quando avremo i profili)
    ],
  },
];

// Icone social (vuoto per ora)
export const footerSocials = [
  // Esempio futuro:
  // { name: 'Instagram', url: 'https://instagram.com/...', icon: 'mdi:instagram' },
];

// 🔻 NUOVO: loghi in basso al footer (metti i file in public/assets/footer-logos/)
export const footerLogos = [
  { src: '/odyssey-theme/assets/footer-logos/TitleCol.jpg', alt: 'EvOCRO' },
  { src: '/odyssey-theme/assets/footer-logos/eulogo.png',           alt: 'European Union' },
  { src: '/odyssey-theme/assets/footer-logos/msca.png',         alt: 'MSCA' },
  { src: '/odyssey-theme/assets/footer-logos/aru.png',          alt: 'Anglia Ruskin University' },
];
