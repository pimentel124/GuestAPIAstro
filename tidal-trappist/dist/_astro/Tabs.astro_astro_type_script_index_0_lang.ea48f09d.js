class n extends HTMLElement{tabs;panels;constructor(){super();const e=this.querySelector('[role="tablist"]');this.tabs=[...e.querySelectorAll('[role="tab"]')],this.panels=[...this.querySelectorAll(':scope > [role="tabpanel"]')],this.tabs.forEach((s,r)=>{s.addEventListener("click",t=>{t.preventDefault();const i=e.querySelector("[aria-selected]");t.currentTarget!==i&&this.switchTab(t.currentTarget,r)}),s.addEventListener("keydown",t=>{const i=this.tabs.indexOf(t.currentTarget),a=t.key==="ArrowLeft"?i-1:t.key==="ArrowRight"?i+1:t.key==="Home"?0:t.key==="End"?this.tabs.length-1:null;a!==null&&this.tabs[a]&&(t.preventDefault(),this.switchTab(this.tabs[a],a))})})}switchTab(e,s){if(!e)return;this.tabs.forEach(t=>{t.removeAttribute("aria-selected"),t.setAttribute("tabindex","-1")}),this.panels.forEach(t=>{t.hidden=!0});const r=this.panels[s];r&&(r.hidden=!1),e.removeAttribute("tabindex"),e.setAttribute("aria-selected","true"),e.focus()}}customElements.define("starlight-tabs",n);
