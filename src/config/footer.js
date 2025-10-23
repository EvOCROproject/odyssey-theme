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
      // Per ora vuoto. Quando avremo i profili:
      // { title: 'Instagram', slug: 'https://instagram.com/...' },
      // { title: 'Facebook',  slug: 'https://facebook.com/...' },
      // ecc.
    ],
  },
];

// Icone social (barra sotto al logo nel footer)
// Le lascio vuote per ora: le aggiungeremo quando avrai gli URL.
export const footerSocials = [
  // Esempio (quando pronti):
  // { name: 'Instagram', url: 'https://instagram.com/..', icon: 'mdi:instagram' },
  // { name: 'Facebook',  url: 'https://facebook.com/..', icon: 'mdi:facebook' },
  // { name: 'X',         url: 'https://x.com/..',        icon: 'mdi:twitter' },
  // { name: 'Bluesky',   url: 'https://bsky.app/profile/..', icon: 'mdi:feather' },
  // { name: 'TikTok',    url: 'https://tiktok.com/@..',  icon: 'ic:baseline-tiktok' },
];
