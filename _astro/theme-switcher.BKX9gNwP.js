import{j as U,w as x,x as d}from"./lit-html.x5FnikOf.js";/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const p=globalThis,_=p.ShadowRoot&&(p.ShadyCSS===void 0||p.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,y=Symbol(),b=new WeakMap;let S=class{constructor(t,e,i){if(this._$cssResult$=!0,i!==y)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(_&&t===void 0){const i=e!==void 0&&e.length===1;i&&(t=b.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&b.set(e,t))}return t}toString(){return this.cssText}};const O=s=>new S(typeof s=="string"?s:s+"",void 0,y),A=(s,...t)=>{const e=s.length===1?s[0]:t.reduce((i,r,o)=>i+(n=>{if(n._$cssResult$===!0)return n.cssText;if(typeof n=="number")return n;throw Error("Value passed to 'css' function must be a 'css' function result: "+n+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(r)+s[o+1],s[0]);return new S(e,s,y)},T=(s,t)=>{if(_)s.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(const e of t){const i=document.createElement("style"),r=p.litNonce;r!==void 0&&i.setAttribute("nonce",r),i.textContent=e.cssText,s.appendChild(i)}},v=_?s=>s:s=>s instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return O(e)})(s):s;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:L,defineProperty:M,getOwnPropertyDescriptor:R,getOwnPropertyNames:k,getOwnPropertySymbols:j,getPrototypeOf:F}=Object,f=globalThis,E=f.trustedTypes,z=E?E.emptyScript:"",D=f.reactiveElementPolyfillSupport,c=(s,t)=>s,u={toAttribute(s,t){switch(t){case Boolean:s=s?z:null;break;case Object:case Array:s=s==null?s:JSON.stringify(s)}return s},fromAttribute(s,t){let e=s;switch(t){case Boolean:e=s!==null;break;case Number:e=s===null?null:Number(s);break;case Object:case Array:try{e=JSON.parse(s)}catch{e=null}}return e}},$=(s,t)=>!L(s,t),w={attribute:!0,type:String,converter:u,reflect:!1,hasChanged:$};Symbol.metadata??=Symbol("metadata"),f.litPropertyMetadata??=new WeakMap;class h extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=w){if(e.state&&(e.attribute=!1),this._$Ei(),this.elementProperties.set(t,e),!e.noAccessor){const i=Symbol(),r=this.getPropertyDescriptor(t,i,e);r!==void 0&&M(this.prototype,t,r)}}static getPropertyDescriptor(t,e,i){const{get:r,set:o}=R(this.prototype,t)??{get(){return this[e]},set(n){this[e]=n}};return{get(){return r?.call(this)},set(n){const a=r?.call(this);o.call(this,n),this.requestUpdate(t,a,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??w}static _$Ei(){if(this.hasOwnProperty(c("elementProperties")))return;const t=F(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(c("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(c("properties"))){const e=this.properties,i=[...k(e),...j(e)];for(const r of i)this.createProperty(r,e[r])}const t=this[Symbol.metadata];if(t!==null){const e=litPropertyMetadata.get(t);if(e!==void 0)for(const[i,r]of e)this.elementProperties.set(i,r)}this._$Eh=new Map;for(const[e,i]of this.elementProperties){const r=this._$Eu(e,i);r!==void 0&&this._$Eh.set(r,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const r of i)e.unshift(v(r))}else t!==void 0&&e.push(v(t));return e}static _$Eu(t,e){const i=e.attribute;return i===!1?void 0:typeof i=="string"?i:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$EO??=new Set).add(t),this.renderRoot!==void 0&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const i of e.keys())this.hasOwnProperty(i)&&(t.set(i,this[i]),delete this[i]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return T(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$EC(t,e){const i=this.constructor.elementProperties.get(t),r=this.constructor._$Eu(t,i);if(r!==void 0&&i.reflect===!0){const o=(i.converter?.toAttribute!==void 0?i.converter:u).toAttribute(e,i.type);this._$Em=t,o==null?this.removeAttribute(r):this.setAttribute(r,o),this._$Em=null}}_$AK(t,e){const i=this.constructor,r=i._$Eh.get(t);if(r!==void 0&&this._$Em!==r){const o=i.getPropertyOptions(r),n=typeof o.converter=="function"?{fromAttribute:o.converter}:o.converter?.fromAttribute!==void 0?o.converter:u;this._$Em=r,this[r]=n.fromAttribute(e,o.type),this._$Em=null}}requestUpdate(t,e,i){if(t!==void 0){if(i??=this.constructor.getPropertyOptions(t),!(i.hasChanged??$)(this[t],e))return;this.P(t,e,i)}this.isUpdatePending===!1&&(this._$ES=this._$ET())}P(t,e,i){this._$AL.has(t)||this._$AL.set(t,e),i.reflect===!0&&this._$Em!==t&&(this._$Ej??=new Set).add(t)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[r,o]of this._$Ep)this[r]=o;this._$Ep=void 0}const i=this.constructor.elementProperties;if(i.size>0)for(const[r,o]of i)o.wrapped!==!0||this._$AL.has(r)||this[r]===void 0||this.P(r,this[r],o)}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$EO?.forEach(i=>i.hostUpdate?.()),this.update(e)):this._$EU()}catch(i){throw t=!1,this._$EU(),i}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$EO?.forEach(e=>e.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Ej&&=this._$Ej.forEach(e=>this._$EC(e,this[e])),this._$EU()}updated(t){}firstUpdated(t){}}h.elementStyles=[],h.shadowRootOptions={mode:"open"},h[c("elementProperties")]=new Map,h[c("finalized")]=new Map,D?.({ReactiveElement:h}),(f.reactiveElementVersions??=[]).push("2.0.4");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class l extends h{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=U(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return x}}l._$litElement$=!0,l.finalized=!0,globalThis.litElementHydrateSupport?.({LitElement:l});const B=globalThis.litElementPolyfillSupport;B?.({LitElement:l});(globalThis.litElementVersions??=[]).push("4.0.4");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Z=s=>(t,e)=>{e!==void 0?e.addInitializer(()=>{customElements.define(s,t)}):customElements.define(s,t)};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const I={attribute:!0,type:String,converter:u,reflect:!1,hasChanged:$},q=(s=I,t,e)=>{const{kind:i,metadata:r}=e;let o=globalThis.litPropertyMetadata.get(r);if(o===void 0&&globalThis.litPropertyMetadata.set(r,o=new Map),o.set(e.name,s),i==="accessor"){const{name:n}=e;return{set(a){const C=t.get.call(this);t.set.call(this,a),this.requestUpdate(n,C,s)},init(a){return a!==void 0&&this.P(n,void 0,s),a}}}if(i==="setter"){const{name:n}=e;return function(a){const C=this[n];t.call(this,a),this.requestUpdate(n,C,s)}}throw Error("Unsupported decorator location: "+i)};function N(s){return(t,e)=>typeof e=="object"?q(s,t,e):((i,r,o)=>{const n=r.hasOwnProperty(o);return r.constructor.createProperty(o,n?{...i,wrapped:!0}:i),n?Object.getOwnPropertyDescriptor(r,o):void 0})(s,t,e)}const V=d`<svg
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
</svg>`,H=d`<svg
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
</svg>`,J=d`<svg
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
</svg>`;var K=Object.defineProperty,W=Object.getOwnPropertyDescriptor,P=(s,t,e,i)=>{for(var r=i>1?void 0:i?W(t,e):t,o=s.length-1,n;o>=0;o--)(n=s[o])&&(r=(i?n(t,e,r):n(r))||r);return i&&r&&K(t,e,r),r};const g="/",G=[{name:"dark",icon:V,label:"Dark"},{name:"earth",icon:H,label:"Earth"},{name:"sand",icon:J,label:"Sand"}];let m=class extends l{constructor(){super(...arguments),this._doc=document.firstElementChild,this.theme=null}_getCurrentTheme(){const s=localStorage.getItem("theme");s?this._setTheme(s):this._setTheme("earth")}firstUpdated(){this._getCurrentTheme()}_setTheme(s){s==="earth"?this._doc?.removeAttribute("data-theme"):this._doc?.setAttribute("data-theme",s);const t=document.querySelector("#home-hero-image");t&&(s==="dark"&&(t.src=`${g}assets/images/home/CrocoBlack.jpg`),s==="earth"&&(t.src=`${g}assets/images/home/CrocoGreen.jpg`),s==="sand"&&(t.src=`${g}assets/images/home/CrocoYellow.jpg`)),localStorage.setItem("theme",s),this.theme=s}render(){return d`
      <div class="theme-switcher__container">
        ${G.map(s=>d`
            <div class="theme-select__container">
              <button
                @click=${()=>this._setTheme(s.name)}
                ?active=${this.theme===s.name}
                title=${`Enable ${s.label} Theme`}
              >
                ${s.icon}
              </button>
              <p>${s.label}</p>
            </div>
          `)}
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
