// src/config/footer.js

// Colonne del footer (4 colonne)
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
      { title: 'Instagram', slug: 'https://www.instagram.com/evocroproject/' },
      {
        title: 'Facebook',
        slug: 'https://www.facebook.com/profile.php?id=61584270533357',
      },
      { title: 'Twitter / X', slug: '#' },
      { title: 'Bluesky', slug: '#' },
      { title: 'TikTok', slug: '#' },
      { title: 'YouTube', slug: '#' },
    ],
  },
];

// ⬇️ questo DEVE esserci, anche se vuoto, perché Page.astro lo importa
export const footerSocials = [];

// Loghi in basso al footer
export const footerLogos = [
  { src: '/odyssey-theme/assets/footer-logos/logofooter.png', alt: 'logofooter' },
];
