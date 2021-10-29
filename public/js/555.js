(self.webpackChunk=self.webpackChunk||[]).push([[555],{6555:(t,e,a)=>{"use strict";a.r(e),a.d(e,{default:()=>v});const s={data:function(){return{}},methods:{},computed:{}};var i=a(1900);const n={components:{Hero:(0,i.Z)(s,(function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)}),[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"custom-centering hero"},[a("div",{staticClass:"mb-0"},[a("div",{staticClass:"text-center"},[a("h1",{staticClass:"text-white my-4"},[t._v("Paul-Emile ANTOINE")]),t._v(" "),a("h2",{staticClass:"text-white my-4"},[t._v("Développeur web")]),t._v(" "),a("div",{staticClass:"my-4"},[a("a",{staticClass:"btn btn-primary btn-lg text-white",attrs:{href:"#contact",role:"button"}},[t._v("Contactez-moi")])])])])])}],!1,null,null,null).exports},data:function(){return{isOpen:!1,isSticky:!1,scrollPosition:0}},methods:{openHamburgerMenu:function(){this.isOpen=!this.isOpen},handleScroll:function(t){this.scrollPosition=window.scrollY,this.scrollPosition>=200?this.isSticky=!0:this.isSticky=!1}},computed:{},created:function(){window.addEventListener("scroll",this.handleScroll)}};const r={data:function(){return{}},methods:{},computed:{}};const l={data:function(){return{}},methods:{},computed:{}};const o={data:function(){return{formData:{name:"",email:"",message:""}}},methods:{sendContactMail:function(){var t=this;axios.post("/api/send-contact-mail",this.formData).then((function(e){200===e.data.status_code&&(t.$notify.success({msg:"Votre email a bien été envoyé"}),t.formData.name="",t.formData.email="",t.formData.message="")})).catch((function(e){500===e.response.status&&t.$notify.error({msg:"Veuillez remplir tous les champs du formulaire"})}))}},computed:{}};const c={data:function(){return{}},methods:{},computed:{}};const m={name:"Homepage",components:{Header:(0,i.Z)(n,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"section-sizing bg-header"},[a("header",{staticClass:"sticky"},[a("nav",{staticClass:"navbar navbar-light bg-transparent",class:{visibleNav:t.isSticky}},[a("div",{staticClass:"container"},[t._m(0),t._v(" "),a("router-link",{staticClass:"navbar-brand text-primary",attrs:{to:{name:"homepage"}}},[t._v("PEA")]),t._v(" "),a("button",{staticClass:"navbar-toggler border-0",attrs:{type:"button","data-toggle":"collapse","data-target":"#navbarNavDropdown","aria-controls":"navbarNavDropdown","aria-expanded":"false","aria-label":"Toggle navigation"}},[a("div",{staticClass:"animated-icon1",class:{open:t.isOpen},on:{click:t.openHamburgerMenu}},[a("span"),t._v(" "),a("span"),t._v(" "),a("span")])]),t._v(" "),t._m(1)],1)])]),t._v(" "),a("Hero")],1)}),[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"social-header"},[a("ul",{staticClass:"d-flex justify-content-center align-items-center m-0"},[a("li",{staticClass:"mr-4"},[a("a",{attrs:{href:"https://codepen.io/peantoine-dev",target:"_blank",rel:"noopener noreferrer","aria-label":"CodePen"}},[a("i",{staticClass:"fab fa-codepen"})])]),t._v(" "),a("li",{staticClass:"mr-4"},[a("a",{attrs:{href:"https://github.com/elimeluap",target:"_blank",rel:"noopener noreferrer","aria-label":"GitHub"}},[a("i",{staticClass:"fab fa-github"})])]),t._v(" "),a("li",[a("a",{attrs:{href:"https://www.linkedin.com/in/paul-emile-antoine-8628bb128/",target:"_blank",rel:"noopener noreferrer","aria-label":"Linkedin"}},[a("i",{staticClass:"fab fa-linkedin"})])])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"collapse navbar-collapse justify-content-end",attrs:{id:"navbarNavDropdown"}},[a("ul",{staticClass:"navbar-nav"},[a("li",{staticClass:"nav-item"},[a("a",{staticClass:"nav-link nav-link-homepage",attrs:{href:"#realisations"}},[t._v("Réalisations")])]),t._v(" "),a("li",{staticClass:"nav-item"},[a("a",{staticClass:"nav-link nav-link-homepage",attrs:{href:"#apropos"}},[t._v("À propos")])]),t._v(" "),a("li",{staticClass:"nav-item"},[a("a",{staticClass:"nav-link nav-link-homepage",attrs:{href:"#skills"}},[t._v("Skills et softwares")])]),t._v(" "),a("li",{staticClass:"nav-item"},[a("a",{staticClass:"nav-link nav-link-homepage",attrs:{href:"#contact"}},[t._v("Contact")])])])])}],!1,null,null,null).exports,About:(0,i.Z)(r,(function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)}),[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{staticClass:"section-sizing",attrs:{id:"apropos"}},[a("div",{staticClass:"container"},[a("h3",{staticClass:"text-white text-center custom-title"},[t._v("À propos")]),t._v(" "),a("div",{staticClass:"container-fluid"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-6 d-flex justify-content-center align-items-center"},[a("figure",{staticClass:"m-0"},[a("img",{staticClass:"rounded-circle custom-vertical-centering img-border",attrs:{src:"assets/images/0.jpg",alt:"Photo Paul-Emile ANTOINE"}}),t._v(" "),a("figcaption",{staticClass:"invisible"},[t._v("\n              Photo Paul-Emile ANTOINE\n            ")])])]),t._v(" "),a("div",{staticClass:"col-md-6"},[a("div",{staticClass:"text-white text-justify"},[a("p",{staticClass:"px-4"},[t._v("\n              Récemment diplômé de l’IEPS Fléron (Liège) en développement web,\n              je suis désormais à la recherche d’un poste de développeur\n              front-end junior dans lequel m’investir et grandir.\n            ")]),t._v(" "),a("p",{staticClass:"px-4"},[t._v("\n              Lors de mes études, j’ai appris le HTML sémantique, le CSS et\n              j’ai pu mettre en place un framework CSS personnalisé.\n            ")]),t._v(" "),a("p",{staticClass:"px-4"},[t._v("\n              Je me suis familiarisé avec la structure MVC en réalisant divers\n              projets en PHP procédural avant de découvrir le framework\n              Laravel.\n            ")]),t._v(" "),a("p",{staticClass:"px-4"},[t._v("\n              Côté front j’ai créé divers projets en Vanilla JavaScript avant\n              de me diriger vers le framework Vue.js.\n            ")]),t._v(" "),a("p",{staticClass:"px-4"},[t._v("\n              Ayant reçu une solide formation, j’aimerais approfondir mes\n              connaissances auprès de développeurs confirmés.\n            ")])]),t._v(" "),a("div",{staticClass:"text-center text-md-left cv-btn-container"},[a("a",{staticClass:"btn btn-primary btn-lg",attrs:{href:"https://drive.google.com/file/d/1hDUFMVcychR0jvOuKuuJuf2wj4AgBpvR/view?usp=sharing",target:"_blank",rel:"noopener noreferrer",role:"button"}},[t._v("Mon CV")])])])])])])])}],!1,null,null,null).exports,Skills:(0,i.Z)(l,(function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)}),[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{staticClass:"bg-white section-sizing bg-image",attrs:{id:"skills"}},[a("div",{staticClass:"container"},[a("h3",{staticClass:"text-white text-center custom-title"},[t._v("Skills et softwares")]),t._v(" "),a("div",{staticClass:"custom-centering skills-container"},[a("span",{staticClass:"skill"},[t._v("#html")]),t._v(" "),a("span",{staticClass:"skill"},[t._v("#css")]),t._v(" "),a("span",{staticClass:"skill"},[t._v("#sass")]),t._v(" "),a("span",{staticClass:"skill"},[t._v("#javascript")]),t._v(" "),a("span",{staticClass:"skill"},[t._v("#vuejs")]),t._v(" "),a("span",{staticClass:"skill"},[t._v("#php")]),t._v(" "),a("span",{staticClass:"skill"},[t._v("#laravel")]),t._v(" "),a("span",{staticClass:"skill"},[t._v("#git")]),t._v(" "),a("span",{staticClass:"skill"},[t._v("#wordpress")]),t._v(" "),a("span",{staticClass:"skill"},[t._v("#adobexd")])])])])}],!1,null,null,null).exports,Contact:(0,i.Z)(o,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{staticClass:"section-sizing",attrs:{id:"contact"}},[a("div",{staticClass:"container"},[a("h3",{staticClass:"text-white text-center custom-title"},[t._v("Contact")]),t._v(" "),a("div",{staticClass:"container-fluid"},[a("div",{staticClass:"row"},[t._m(0),t._v(" "),a("div",{staticClass:"col-md-6"},[a("form",{staticClass:"p-4",on:{submit:function(e){return e.preventDefault(),t.sendContactMail(e)}}},[a("div",{staticClass:"form-row"},[a("div",{staticClass:"form-group col-md-12"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.formData.name,expression:"formData.name"}],staticClass:"form-control",attrs:{type:"text",id:"inputName",placeholder:"Nom"},domProps:{value:t.formData.name},on:{input:function(e){e.target.composing||t.$set(t.formData,"name",e.target.value)}}})]),t._v(" "),a("div",{staticClass:"form-group col-md-12"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.formData.email,expression:"formData.email"}],staticClass:"form-control",attrs:{type:"email",id:"inputEmail",placeholder:"Email"},domProps:{value:t.formData.email},on:{input:function(e){e.target.composing||t.$set(t.formData,"email",e.target.value)}}})]),t._v(" "),a("div",{staticClass:"form-group col-md-12"},[a("textarea",{directives:[{name:"model",rawName:"v-model",value:t.formData.message,expression:"formData.message"}],staticClass:"form-control",attrs:{rows:"5",id:"inputMessage",placeholder:"Message"},domProps:{value:t.formData.message},on:{input:function(e){e.target.composing||t.$set(t.formData,"message",e.target.value)}}})])]),t._v(" "),t._m(1)])])])])])])}),[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"col-md-6"},[a("div",{staticClass:"p-4 text-white text-justify"},[a("h3",{staticClass:"px-4 text-white"},[t._v("HEY !")]),t._v(" "),a("p",{staticClass:"px-4"},[t._v("\n              Vous avez une idée, un projet de site web en tête mais vous ne\n              savez pas comment vous y prendre ?\n            ")]),t._v(" "),a("p",{staticClass:"px-4"},[t._v("\n              Que vous soyez un particulier, un artiste ou une petite\n              entreprise, n’hésitez pas à me contacter à l’aide du formulaire\n              ci-contre.\n            ")]),t._v(" "),a("p",{staticClass:"px-4"},[t._v("\n              Ensemble, nous discturerons de votre projet et établirons un\n              devis juste et adapté à vos besoins.\n            ")]),t._v(" "),a("p",{staticClass:"px-4"},[t._v("À bientôt ! 😊")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"py-5 text-center text-md-left"},[a("button",{staticClass:"btn btn-primary btn-lg mt-3",attrs:{type:"submit"}},[t._v("\n                Envoyer\n              ")])])}],!1,null,null,null).exports,Footer:(0,i.Z)(c,(function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)}),[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("footer",{staticClass:"main-footer"},[a("div",{staticClass:"container"},[a("div",{staticClass:"\n        d-flex\n        flex-column flex-md-row\n        justify-content-md-end\n        align-items-center\n      "},[a("div",{staticClass:"d-flex justify-content-end align-items-center"},[a("div",{staticClass:"mr-md-4 social-footer"},[a("ul",{staticClass:"\n              d-flex\n              justify-content-center\n              align-items-center\n              mb-1 mb-md-0\n            "},[a("li",{staticClass:"mr-4"},[a("a",{attrs:{href:"https://codepen.io/peantoine-dev",target:"_blank",rel:"noopener noreferrer","aria-label":"CodePen"}},[a("i",{staticClass:"fab fa-codepen"})])]),t._v(" "),a("li",{staticClass:"mr-4"},[a("a",{attrs:{href:"https://github.com/elimeluap",target:"_blank",rel:"noopener noreferrer","aria-label":"GitHub"}},[a("i",{staticClass:"fab fa-github"})])]),t._v(" "),a("li",[a("a",{attrs:{href:"https://www.linkedin.com/in/paul-emile-antoine-8628bb128/",target:"_blank",rel:"noopener noreferrer","aria-label":"Linkedin"}},[a("i",{staticClass:"fab fa-linkedin"})])])])])]),t._v(" "),a("div",{staticClass:"text-white text-center text-md-left"},[t._v("\n        © Paul-Emile ANTOINE 2021\n      ")])])])])}],!1,null,null,null).exports},data:function(){return{}},methods:{modalId:function(t){return"modal"+t}},computed:{realisations:function(){return this.$store.getters.getRealisations},tags:function(){return this.$store.getters.getTags}}};const v=(0,i.Z)(m,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("Header"),t._v(" "),a("section",{staticClass:"bg-white section-sizing",attrs:{id:"realisations"}},[a("div",{staticClass:"container"},[a("h3",{staticClass:"text-center custom-title"},[t._v("Réalisations")]),t._v(" "),a("div",{staticClass:"\n          d-flex\n          flex-column flex-md-row flex-wrap\n          justify-content-md-center\n          align-items-center align-items-md-start\n        "},t._l(t.realisations,(function(e){return a("div",{key:e.id},[a("div",{staticClass:"card mb-4 mr-md-4",staticStyle:{width:"18rem"}},[a("a",{directives:[{name:"b-modal",rawName:"v-b-modal.modal-lg",value:t.modalId(e.id),expression:"modalId(realisation.id)",modifiers:{"modal-lg":!0}}]},[a("img",{staticClass:"card-img-top",attrs:{src:"assets/images/realisations/"+e.image,alt:"Screen "+e.name}})]),t._v(" "),a("div",{staticClass:"card-body"},[a("h5",{staticClass:"card-title"},[t._v(t._s(e.name))]),t._v(" "),a("div",{staticClass:"works-links"},[null!==e.github_link?a("a",{staticClass:"btn btn-primary btn-lg",attrs:{href:e.github_link,target:"_blank",rel:"noopener noreferrer"}},[t._v("GitHub")]):t._e(),t._v(" "),null!==e.live_link?a("a",{staticClass:"btn btn-secondary btn-lg",attrs:{href:e.live_link,target:"_blank",rel:"noopener noreferrer"}},[t._v("Live")]):t._e()])])]),t._v(" "),a("b-modal",{attrs:{"header-class":"border-0","body-class":"p-0","footer-class":"justify-content-between border-0",id:"modal"+e.id,size:"lg",title:e.name},scopedSlots:t._u([{key:"modal-footer",fn:function(s){var i=s.close;return[a("div",[a("i",{staticClass:"fa fa-tag mr-1"}),t._v(" "),t._l(e.tags,(function(e){return a("span",{key:e.id,staticClass:"badge badge-light mr-1"},[t._v(t._s(e.name))])}))],2),t._v(" "),a("b-button",{attrs:{size:"md",variant:"dark"},on:{click:function(t){return i()}}},[t._v("\n                Fermer\n              ")])]}}],null,!0)},[a("img",{staticClass:"img-fluid",attrs:{src:"assets/images/realisations/"+e.image,alt:"Screen "+e.name}}),t._v(" "),a("p",{staticClass:"modal-text",domProps:{innerHTML:t._s(e.description)}},[t._v("\n              "+t._s(e.description)+"\n            ")])])],1)})),0)])]),t._v(" "),a("About"),t._v(" "),a("Skills"),t._v(" "),a("Contact"),t._v(" "),a("Footer")],1)}),[],!1,null,null,null).exports}}]);