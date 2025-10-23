import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

import {
  darkThemeIcon,
  earthThemeIcon,
  orangeThemeIcon, // usato per "sand"
} from './icons';

// Funziona anche su GitHub Pages (es: /odyssey-theme/)
const BASE: string = (import.meta as any).env?.BASE_URL ?? '/';

const themes = [
  { name: 'dark',  icon: darkThemeIcon,   label: 'Dark'  },
  { name: 'earth', icon: earthThemeIcon,  label: 'Earth' },
  { name: 'sand',  icon: orangeThemeIcon, label: 'Sand'  },
];

@customElement('theme-switcher')
export class ThemeSwitcher extends LitElement {
  static styles = [
    css`
      :host { display: block; }
      .theme-switcher__container {
        margin: 2rem 0;
        display: grid;
        grid-template-columns: repeat(3, minmax(0, 1fr));
        gap: 0.75rem;
      }
      .theme-select__container {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
      }
      button {
        display: inline-flex;
        outline: none;
        border: none;
        background-color: transparent;
        border: 2px solid transparent;
        border-radius: 20rem;
        padding: 1px;
        cursor: pointer;
        transition: border var(--theme-transition), box-shadow var(--theme-transition);
      }
      button[active] {
        border: 2px solid var(--theme-primary);
        box-shadow: 0 0 12px 1px var(--theme-primary);
      }
      button:hover {
        border: 2px solid var(--theme-primary);
      }
      .theme-select__container p {
        font-size: var(--font-size-sm);
        margin-top: 0.25rem;
      }

      @media (max-width: 640px) {
        .theme-switcher__container {
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 0.5rem;
        }
      }
    `,
  ];

  // Radice documento per l'attributo data-theme
  private _doc = document.firstElementChild;

  @property({ type: String })
  theme: string | null = null;

  // Earth di default (senza guardare preferenze OS)
  private _getCurrentTheme() {
    const localStorageTheme = localStorage.getItem('theme');
    if (localStorageTheme) {
      this._setTheme(localStorageTheme);
    } else {
      this._setTheme('earth');
    }
  }

  firstUpdated() {
    this._getCurrentTheme();
  }

  private _setTheme(theme: string) {
    this._doc?.setAttribute('data-theme', theme);

    // Aggiorna immagine hero se presente
    const hero = document.querySelector('#home-hero-image') as HTMLImageElement | null;
    if (hero) {
      if (theme === 'dark')  hero.src = `${BASE}assets/images/home/dark-hero.jpg`;
      if (theme === 'earth') hero.src = `${BASE}assets/images/home/earth-hero.jpg`;
      if (theme === 'sand')  hero.src = `${BASE}assets/images/home/sand-hero.jpg`;
    }

    localStorage.setItem('theme', theme);
    this.theme = theme;
  }

  render() {
    return html`
      <div class="theme-switcher__container">
        ${themes.map(
          (t) => html`
            <div class="theme-select__container">
              <button
                @click=${() => this._setTheme(t.name)}
                ?active=${this.theme === t.name}
                title=${`Enable ${t.label} Theme`}
              >
                ${t.icon}
              </button>
              <p>${t.label}</p>
            </div>
          `
        )}
      </div>
    `;
  }
}
