// src/config/footer.js

// Colonne del footer (3 colonne → tutte allineate)
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
    title: 'Contact & Social',
    items: [
      { title: 'Get in touch', slug: '/odyssey-theme/contact' },
      { title: 'Instagram', slug: 'https://www.instagram.com/evocroproject/' },
      { title: 'Facebook', slug: 'https://www.facebook.com/profile.php?id=61584270533357' },
      { title: 'Twitter / X', slug: '#' },
      { title: 'Bluesky', slug: '#' },
      { title: 'TikTok', slug: '#' },
      { title: 'YouTube', slug: '#' },
    ],
  },
];

// Nessuna icona social (solo link testuali)
export const footerSocials = [];

// Loghi in basso al footer
export const footerLogos = [
  { src: '/odyssey-theme/assets/footer-logos/TitleCol.jpg', alt: 'EvOCRO' },
  { src: '/odyssey-theme/assets/footer-logos/eulogo.png', alt: 'European Union' },
  { src: '/odyssey-theme/assets/footer-logos/msca.png', alt: 'MSCA' },
  { src: '/odyssey-theme/assets/footer-logos/aru.png', alt: 'Anglia Ruskin University' },
];
