import{j as U,w as x,x as c}from"./lit-html.x5FnikOf.js";/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const p=globalThis,C=p.ShadowRoot&&(p.ShadyCSS===void 0||p.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,_=Symbol(),w=new WeakMap;let S=class{constructor(t,e,s){if(this._$cssResult$=!0,s!==_)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(C&&t===void 0){const s=e!==void 0&&e.length===1;s&&(t=w.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),s&&w.set(e,t))}return t}toString(){return this.cssText}};const O=i=>new S(typeof i=="string"?i:i+"",void 0,_),A=(i,...t)=>{const e=i.length===1?i[0]:t.reduce((s,r,o)=>s+(n=>{if(n._$cssResult$===!0)return n.cssText;if(typeof n=="number")return n;throw Error("Value passed to 'css' function must be a 'css' function result: "+n+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(r)+i[o+1],i[0]);return new S(e,i,_)},T=(i,t)=>{if(C)i.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(const e of t){const s=document.createElement("style"),r=p.litNonce;r!==void 0&&s.setAttribute("nonce",r),s.textContent=e.cssText,i.appendChild(s)}},b=C?i=>i:i=>i instanceof CSSStyleSheet?(t=>{let e="";for(const s of t.cssRules)e+=s.cssText;return O(e)})(i):i;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:L,defineProperty:M,getOwnPropertyDescriptor:R,getOwnPropertyNames:k,getOwnPropertySymbols:j,getPrototypeOf:D}=Object,f=globalThis,E=f.trustedTypes,F=E?E.emptyScript:"",z=f.reactiveElementPolyfillSupport,l=(i,t)=>i,u={toAttribute(i,t){switch(t){case Boolean:i=i?F:null;break;case Object:case Array:i=i==null?i:JSON.stringify(i)}return i},fromAttribute(i,t){let e=i;switch(t){case Boolean:e=i!==null;break;case Number:e=i===null?null:Number(i);break;case Object:case Array:try{e=JSON.parse(i)}catch{e=null}}return e}},$=(i,t)=>!L(i,t),v={attribute:!0,type:String,converter:u,reflect:!1,hasChanged:$};Symbol.metadata??=Symbol("metadata"),f.litPropertyMetadata??=new WeakMap;class h extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=v){if(e.state&&(e.attribute=!1),this._$Ei(),this.elementProperties.set(t,e),!e.noAccessor){const s=Symbol(),r=this.getPropertyDescriptor(t,s,e);r!==void 0&&M(this.prototype,t,r)}}static getPropertyDescriptor(t,e,s){const{get:r,set:o}=R(this.prototype,t)??{get(){return this[e]},set(n){this[e]=n}};return{get(){return r?.call(this)},set(n){const a=r?.call(this);o.call(this,n),this.requestUpdate(t,a,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??v}static _$Ei(){if(this.hasOwnProperty(l("elementProperties")))return;const t=D(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(l("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(l("properties"))){const e=this.properties,s=[...k(e),...j(e)];for(const r of s)this.createProperty(r,e[r])}const t=this[Symbol.metadata];if(t!==null){const e=litPropertyMetadata.get(t);if(e!==void 0)for(const[s,r]of e)this.elementProperties.set(s,r)}this._$Eh=new Map;for(const[e,s]of this.elementProperties){const r=this._$Eu(e,s);r!==void 0&&this._$Eh.set(r,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const s=new Set(t.flat(1/0).reverse());for(const r of s)e.unshift(b(r))}else t!==void 0&&e.push(b(t));return e}static _$Eu(t,e){const s=e.attribute;return s===!1?void 0:typeof s=="string"?s:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$EO??=new Set).add(t),this.renderRoot!==void 0&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const s of e.keys())this.hasOwnProperty(s)&&(t.set(s,this[s]),delete this[s]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return T(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,e,s){this._$AK(t,s)}_$EC(t,e){const s=this.constructor.elementProperties.get(t),r=this.constructor._$Eu(t,s);if(r!==void 0&&s.reflect===!0){const o=(s.converter?.toAttribute!==void 0?s.converter:u).toAttribute(e,s.type);this._$Em=t,o==null?this.removeAttribute(r):this.setAttribute(r,o),this._$Em=null}}_$AK(t,e){const s=this.constructor,r=s._$Eh.get(t);if(r!==void 0&&this._$Em!==r){const o=s.getPropertyOptions(r),n=typeof o.converter=="function"?{fromAttribute:o.converter}:o.converter?.fromAttribute!==void 0?o.converter:u;this._$Em=r,this[r]=n.fromAttribute(e,o.type),this._$Em=null}}requestUpdate(t,e,s){if(t!==void 0){if(s??=this.constructor.getPropertyOptions(t),!(s.hasChanged??$)(this[t],e))return;this.P(t,e,s)}this.isUpdatePending===!1&&(this._$ES=this._$ET())}P(t,e,s){this._$AL.has(t)||this._$AL.set(t,e),s.reflect===!0&&this._$Em!==t&&(this._$Ej??=new Set).add(t)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[r,o]of this._$Ep)this[r]=o;this._$Ep=void 0}const s=this.constructor.elementProperties;if(s.size>0)for(const[r,o]of s)o.wrapped!==!0||this._$AL.has(r)||this[r]===void 0||this.P(r,this[r],o)}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$EO?.forEach(s=>s.hostUpdate?.()),this.update(e)):this._$EU()}catch(s){throw t=!1,this._$EU(),s}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$EO?.forEach(e=>e.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Ej&&=this._$Ej.forEach(e=>this._$EC(e,this[e])),this._$EU()}updated(t){}firstUpdated(t){}}h.elementStyles=[],h.shadowRootOptions={mode:"open"},h[l("elementProperties")]=new Map,h[l("finalized")]=new Map,z?.({ReactiveElement:h}),(f.reactiveElementVersions??=[]).push("2.0.4");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class d extends h{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=U(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return x}}d._$litElement$=!0,d.finalized=!0,globalThis.litElementHydrateSupport?.({LitElement:d});const B=globalThis.litElementPolyfillSupport;B?.({LitElement:d});(globalThis.litElementVersions??=[]).push("4.0.4");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Z=i=>(t,e)=>{e!==void 0?e.addInitializer(()=>{customElements.define(i,t)}):customElements.define(i,t)};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const I={attribute:!0,type:String,converter:u,reflect:!1,hasChanged:$},q=(i=I,t,e)=>{const{kind:s,metadata:r}=e;let o=globalThis.litPropertyMetadata.get(r);if(o===void 0&&globalThis.litPropertyMetadata.set(r,o=new Map),o.set(e.name,i),s==="accessor"){const{name:n}=e;return{set(a){const g=t.get.call(this);t.set.call(this,a),this.requestUpdate(n,g,i)},init(a){return a!==void 0&&this.P(n,void 0,i),a}}}if(s==="setter"){const{name:n}=e;return function(a){const g=this[n];t.call(this,a),this.requestUpdate(n,g,i)}}throw Error("Unsupported decorator location: "+s)};function N(i){return(t,e)=>typeof e=="object"?q(i,t,e):((s,r,o)=>{const n=r.hasOwnProperty(o);return r.constructor.createProperty(o,n?{...s,wrapped:!0}:s),n?Object.getOwnPropertyDescriptor(r,o):void 0})(i,t,e)}const V=c`<svg
	width="24"
	height="24"
	viewBox="0 0 24 24"
	fill="none"
	xmlns="http://www.w3.org/2000/svg"
>
	<circle cx="12" cy="12" r="12" fill="#F2F2F2" />
	<path
		d="M12 22C10.6868 22 9.38642 21.7413 8.17316 21.2388C6.95991 20.7362 5.85752 19.9997 4.92893 19.0711C4.00035 18.1425 3.26375 17.0401 2.7612 15.8268C2.25866 14.6136 2 13.3132 2 12C2 10.6868 2.25866 9.38642 2.7612 8.17316C3.26375 6.95991 4.00035 5.85752 4.92893 4.92893C5.85752 4.00035 6.95991 3.26375 8.17317 2.7612C9.38642 2.25866 10.6868 2 12 2L12 12L12 22Z"
		fill="#050505"
	/>
	<path
		d="M22 12C22 13.3132 21.7413 14.6136 21.2388 15.8268C20.7362 17.0401 19.9997 18.1425 19.0711 19.0711C18.1425 19.9997 17.0401 20.7362 15.8268 21.2388C14.6136 21.7413 13.3132 22 12 22L12 12L22 12Z"
		fill="#333333"
	/>
	<path
		d="M12 2C13.3132 2 14.6136 2.25866 15.8268 2.7612C17.0401 3.26375 18.1425 4.00035 19.0711 4.92893C19.9997 5.85752 20.7362 6.95991 21.2388 8.17317C21.7413 9.38642 22 10.6868 22 12L12 12L12 2Z"
		fill="white"
	/>
</svg>`,H=c`<svg
	width="24"
	height="24"
	viewBox="0 0 24 24"
	fill="none"
	xmlns="http://www.w3.org/2000/svg"
>
	<circle cx="12" cy="12" r="12" fill="#F2F2F2" />
	<path
		d="M12 22C10.6868 22 9.38642 21.7413 8.17316 21.2388C6.95991 20.7362 5.85752 19.9997 4.92893 19.0711C4.00035 18.1425 3.26375 17.0401 2.7612 15.8268C2.25866 14.6136 2 13.3132 2 12C2 10.6868 2.25866 9.38642 2.7612 8.17316C3.26375 6.95991 4.00035 5.85752 4.92893 4.92893C5.85752 4.00035 6.95991 3.26375 8.17317 2.7612C9.38642 2.25866 10.6868 2 12 2L12 12L12 22Z"
		fill="#CFCDCA"
	/>
	<path
		d="M22 12C22 13.3132 21.7413 14.6136 21.2388 15.8268C20.7362 17.0401 19.9997 18.1425 19.0711 19.0711C18.1425 19.9997 17.0401 20.7362 15.8268 21.2388C14.6136 21.7413 13.3132 22 12 22L12 12L22 12Z"
		fill="#C7C2BA"
	/>
	<path
		d="M12 2C13.3132 2 14.6136 2.25866 15.8268 2.7612C17.0401 3.26375 18.1425 4.00035 19.0711 4.92893C19.9997 5.85752 20.7362 6.95991 21.2388 8.17317C21.7413 9.38642 22 10.6868 22 12L12 12L12 2Z"
		fill="#2C3E2D"
	/>
</svg>`,J=c`<svg
	width="24"
	height="24"
	viewBox="0 0 24 24"
	fill="none"
	xmlns="http://www.w3.org/2000/svg"
>
	<circle cx="12" cy="12" r="12" fill="#F2F2F2" />
	<path
		d="M12 22C10.6868 22 9.38642 21.7413 8.17316 21.2388C6.95991 20.7362 5.85752 19.9997 4.92893 19.0711C4.00035 18.1425 3.26375 17.0401 2.7612 15.8268C2.25866 14.6136 2 13.3132 2 12C2 10.6868 2.25866 9.38642 2.7612 8.17316C3.26375 6.95991 4.00035 5.85752 4.92893 4.92893C5.85752 4.00035 6.95991 3.26375 8.17317 2.7612C9.38642 2.25866 10.6868 2 12 2L12 12L12 22Z"
		fill="#FFFFFE"
	/>
	<path
		d="M22 12C22 13.3132 21.7413 14.6136 21.2388 15.8268C20.7362 17.0401 19.9997 18.1425 19.0711 19.0711C18.1425 19.9997 17.0401 20.7362 15.8268 21.2388C14.6136 21.7413 13.3132 22 12 22L12 12L22 12Z"
		fill="white"
	/>
	<path
		d="M12 2C13.3132 2 14.6136 2.25866 15.8268 2.7612C17.0401 3.26375 18.1425 4.00035 19.0711 4.92893C19.9997 5.85752 20.7362 6.95991 21.2388 8.17317C21.7413 9.38642 22 10.6868 22 12L12 12L12 2Z"
		fill="#FBA92C"
	/>
</svg>`;var K=Object.defineProperty,W=Object.getOwnPropertyDescriptor,P=(i,t,e,s)=>{for(var r=s>1?void 0:s?W(t,e):t,o=i.length-1,n;o>=0;o--)(n=i[o])&&(r=(s?n(t,e,r):n(r))||r);return s&&r&&K(t,e,r),r};const y="/odyssey-theme/",G=[{name:"dark",icon:V,label:"Dark"},{name:"earth",icon:H,label:"Earth"},{name:"sand",icon:J,label:"Sand"}];let m=class extends d{constructor(){super(...arguments),this._doc=document.firstElementChild,this.theme=null}_getCurrentTheme(){const i=localStorage.getItem("theme");if(i!==null)this._setTheme(i);else{const t=typeof window<"u"&&"matchMedia"in window&&window.matchMedia("(prefers-color-scheme: dark)").matches;this._setTheme(t?"dark":"earth")}}firstUpdated(){this._getCurrentTheme()}_setTheme(i){this._doc?.setAttribute("data-theme",i);const t=document.querySelector("#home-hero-image");t&&(i==="dark"&&(t.src=`${y}assets/images/home/dark-hero.jpg`),i==="earth"&&(t.src=`${y}assets/images/home/earth-hero.jpg`),i==="sand"&&(t.src=`${y}assets/images/home/sand-hero.jpg`)),localStorage.setItem("theme",i),this.theme=i}render(){const i=c`${G.map(t=>c`
        <div class="theme-select__container">
          <button
            @click=${()=>this._setTheme(t.name)}
            ?active=${this.theme===t.name}
            title=${`Enable ${t.label} Theme`}
          >
            ${t.icon}
          </button>
          <p>${t.label}</p>
        </div>
      `)}`;return c`
      <div class="theme-switcher__container">
        ${i}
      </div>
    `}};m.styles=[A`
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
    `];P([N({type:String})],m.prototype,"theme",2);m=P([Z("theme-switcher")],m);export{m as ThemeSwitcher};
