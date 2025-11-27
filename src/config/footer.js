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
    icon: 'local:insta-rounded',
  },
  {
    name: 'Facebook',
    url: 'https://www.facebook.com/profile.php?id=61584270533357',
    icon: 'local:fb-rounded',
  },
  {
    name: 'Twitter/X',
    url: '#',
    icon: 'local:twitter-rounded',
  },
  {
    name: 'Bluesky',
    url: '#',
    icon: 'local:bsky-rounded',
  },
  {
    name: 'TikTok',
    url: '#',
    icon: 'local:tiktok-rounded',
  },
  {
    name: 'YouTube',
    url: '#',
    icon: 'local:youtube-rounded',
  },
];

// 🔹 Loghi centrali del footer
export const footerLogos = [
  { src: '/odyssey-theme/assets/footer-logos/TitleCol.jpg',  alt: 'EvOCRO' },
  { src: '/odyssey-theme/assets/footer-logos/eulogo.png',    alt: 'European Union' },
  { src: '/odyssey-theme/assets/footer-logos/msca.png',      alt: 'MSCA' },
  { src: '/odyssey-theme/assets/footer-logos/aru.png',       alt: 'Anglia Ruskin University' },
];
