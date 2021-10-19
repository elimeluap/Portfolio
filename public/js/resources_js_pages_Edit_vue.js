(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_pages_Edit_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/auth/Header.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/auth/Header.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {};
  },
  methods: {
    /**
     * Réinitialisation du session storage et des infos de l'utilisateur dans le state
     */
    logoutUser: function logoutUser() {
      sessionStorage.clear();
      this.$store.dispatch("logoutUser");

      if (!sessionStorage.length) {
        this.$notify.success({
          msg: "Vous êtes déconnecté"
        });
        this.$router.push({
          name: "login"
        });
      }
    }
  },
  computed: {}
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/Edit.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/Edit.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _components_auth_Header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/auth/Header */ "./resources/js/components/auth/Header.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "Edit",
  components: {
    Header: _components_auth_Header__WEBPACK_IMPORTED_MODULE_0__.default
  },
  data: function data() {
    return {
      formData: {
        id: this.$route.params.id,
        name: "",
        description: "",
        image: null,
        tags: [],
        github_link: "",
        live_link: "",
        user_id: this.$store.state.user.id
      },
      options: {
        modules: {
          toolbar: [["bold", "italic", "underline", "strike"], [{
            list: "ordered"
          }, {
            list: "bullet"
          }, {
            indent: "-1"
          }, {
            indent: "+1"
          }]]
        }
      },
      imagePreview: null
    };
  },
  methods: {
    /**
     * Edition d'une réalisation
     */
    edit: function edit() {
      var _this = this;

      var formData = new FormData();
      formData.append("id", this.formData.id);
      formData.append("name", this.formData.name);
      formData.append("description", this.formData.description);
      formData.append("image", this.formData.image);
      formData.append("tags", this.formData.tags);
      formData.append("github_link", this.formData.github_link);
      formData.append("live_link", this.formData.live_link);
      formData.append("user_id", this.formData.user_id);
      axios.post("/api/edit", formData).then(function (res) {
        if (res.data.status_code === 200) {
          _this.$notify.success({
            msg: "Votre réalisation a bien été modifiée"
          });

          _this.$store.dispatch("setRealisations", res.data);

          _this.$router.push("/dashboard");
        }
      });
    },

    /**
     * Gestion de l'upload de l'image et de sa preview
     */
    imageHandling: function imageHandling(e) {
      var _this2 = this;

      this.formData.image = e.target.files[0];
      var reader = new FileReader();
      reader.readAsDataURL(this.formData.image);

      reader.onload = function (e) {
        _this2.imagePreview = e.target.result;
      };
    }
  },
  computed: {
    /**
     * Permet d'obtenir les infos de la réalisation qu'on consulte
     */
    realisation: function realisation() {
      var id = this.$route.params.id;
      return this.$store.getters.getRealisationById(id);
    },

    /**
     * Permet d'obtenir un tableau d'objets contenant les tags de la réalisation qu'on consulte
     */
    realisationTags: function realisationTags() {
      var id = this.$route.params.id;
      return this.$store.getters.getTagsByRealisation(id);
    },

    /**
     * Permet d'afficher correctement les tags (un par un)
     */
    realisationTagsCorrectlyDisplayed: function realisationTagsCorrectlyDisplayed() {
      var tagItems = [];

      for (var i = 0; i < this.realisationTags[0].length; i++) {
        if (!tagItems.includes(this.realisationTags[0][i].name)) {
          tagItems.push(this.realisationTags[0][i].name);
        }
      }

      return tagItems;
    }
  },

  /**
   * Hydratation des données de la réalisation à la création de l'instance de Vue
   */
  created: function created() {
    this.formData.name = this.realisation.name;
    this.formData.description = this.realisation.description;
    this.formData.image = this.realisation.image;
    this.formData.tags = this.realisationTagsCorrectlyDisplayed;
    this.formData.github_link = this.realisation.github_link;
    this.formData.live_link = this.realisation.live_link;
  }
});

/***/ }),

/***/ "./resources/js/components/auth/Header.vue":
/*!*************************************************!*\
  !*** ./resources/js/components/auth/Header.vue ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Header_vue_vue_type_template_id_3a7f640e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Header.vue?vue&type=template&id=3a7f640e& */ "./resources/js/components/auth/Header.vue?vue&type=template&id=3a7f640e&");
/* harmony import */ var _Header_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Header.vue?vue&type=script&lang=js& */ "./resources/js/components/auth/Header.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _Header_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _Header_vue_vue_type_template_id_3a7f640e___WEBPACK_IMPORTED_MODULE_0__.render,
  _Header_vue_vue_type_template_id_3a7f640e___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/auth/Header.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/pages/Edit.vue":
/*!*************************************!*\
  !*** ./resources/js/pages/Edit.vue ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Edit_vue_vue_type_template_id_22950413___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Edit.vue?vue&type=template&id=22950413& */ "./resources/js/pages/Edit.vue?vue&type=template&id=22950413&");
/* harmony import */ var _Edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Edit.vue?vue&type=script&lang=js& */ "./resources/js/pages/Edit.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _Edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _Edit_vue_vue_type_template_id_22950413___WEBPACK_IMPORTED_MODULE_0__.render,
  _Edit_vue_vue_type_template_id_22950413___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/Edit.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/auth/Header.vue?vue&type=script&lang=js&":
/*!**************************************************************************!*\
  !*** ./resources/js/components/auth/Header.vue?vue&type=script&lang=js& ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Header_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Header.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/auth/Header.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Header_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/pages/Edit.vue?vue&type=script&lang=js&":
/*!**************************************************************!*\
  !*** ./resources/js/pages/Edit.vue?vue&type=script&lang=js& ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Edit.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/Edit.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/components/auth/Header.vue?vue&type=template&id=3a7f640e&":
/*!********************************************************************************!*\
  !*** ./resources/js/components/auth/Header.vue?vue&type=template&id=3a7f640e& ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Header_vue_vue_type_template_id_3a7f640e___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Header_vue_vue_type_template_id_3a7f640e___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Header_vue_vue_type_template_id_3a7f640e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Header.vue?vue&type=template&id=3a7f640e& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/auth/Header.vue?vue&type=template&id=3a7f640e&");


/***/ }),

/***/ "./resources/js/pages/Edit.vue?vue&type=template&id=22950413&":
/*!********************************************************************!*\
  !*** ./resources/js/pages/Edit.vue?vue&type=template&id=22950413& ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_template_id_22950413___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_template_id_22950413___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_template_id_22950413___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Edit.vue?vue&type=template&id=22950413& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/Edit.vue?vue&type=template&id=22950413&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/auth/Header.vue?vue&type=template&id=3a7f640e&":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/auth/Header.vue?vue&type=template&id=3a7f640e& ***!
  \***********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("header", [
    _c("nav", { staticClass: "navbar navbar-expand-lg navbar-dark bg-dark" }, [
      _c(
        "div",
        { staticClass: "container" },
        [
          _c(
            "router-link",
            {
              staticClass: "navbar-brand",
              attrs: { to: { name: "dashboard" } }
            },
            [_vm._v("Tableau de bord")]
          ),
          _vm._v(" "),
          _vm._m(0),
          _vm._v(" "),
          _c(
            "div",
            {
              staticClass: "collapse navbar-collapse justify-content-end",
              attrs: { id: "navbarNavDropdown" }
            },
            [
              _c("ul", { staticClass: "navbar-nav" }, [
                _c(
                  "li",
                  { staticClass: "nav-item" },
                  [
                    _c(
                      "router-link",
                      {
                        staticClass: "nav-link text-white",
                        attrs: { to: { name: "homepage" } }
                      },
                      [_vm._v("Accueil")]
                    )
                  ],
                  1
                ),
                _vm._v(" "),
                _c("li", { staticClass: "nav-item" }, [
                  _c(
                    "a",
                    {
                      staticClass: "nav-link text-white",
                      attrs: { href: "#" },
                      on: { click: _vm.logoutUser }
                    },
                    [_vm._v("Se déconnecter")]
                  )
                ])
              ])
            ]
          )
        ],
        1
      )
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "button",
      {
        staticClass: "navbar-toggler",
        attrs: {
          type: "button",
          "data-toggle": "collapse",
          "data-target": "#navbarNavDropdown",
          "aria-controls": "navbarNavDropdown",
          "aria-expanded": "false",
          "aria-label": "Toggle navigation"
        }
      },
      [_c("span", { staticClass: "navbar-toggler-icon" })]
    )
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/Edit.vue?vue&type=template&id=22950413&":
/*!***********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/Edit.vue?vue&type=template&id=22950413& ***!
  \***********************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c("Header"),
      _vm._v(" "),
      _c("section", { staticClass: "my-4" }, [
        _c("div", { staticClass: "container" }, [
          _c("div", { staticClass: "row justify-content-center" }, [
            _c("div", { staticClass: "col-md-6" }, [
              _c(
                "form",
                {
                  staticClass: "card",
                  on: {
                    submit: function($event) {
                      $event.preventDefault()
                      return _vm.edit($event)
                    }
                  }
                },
                [
                  _c("h3", { staticClass: "card-header bg-light" }, [
                    _vm._v("Editer une réalisation")
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "card-body" }, [
                    _c("div", { staticClass: "form-group" }, [
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.formData.name,
                            expression: "formData.name"
                          }
                        ],
                        staticClass: "custom-form-control",
                        attrs: {
                          type: "text",
                          name: "name",
                          placeholder: "Nom"
                        },
                        domProps: { value: _vm.formData.name },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(_vm.formData, "name", $event.target.value)
                          }
                        }
                      }),
                      _vm._v(" "),
                      _c("p", { staticClass: "text-danger" })
                    ]),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "form-group" },
                      [
                        _c("editor", {
                          attrs: {
                            name: "description",
                            placeholder: "Description",
                            theme: "snow",
                            options: _vm.options
                          },
                          model: {
                            value: _vm.formData.description,
                            callback: function($$v) {
                              _vm.$set(_vm.formData, "description", $$v)
                            },
                            expression: "formData.description"
                          }
                        })
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c("div", { staticClass: "form-group" }, [
                      _c("input", {
                        staticClass: "form-control-file",
                        attrs: { type: "file", name: "image" },
                        on: { change: _vm.imageHandling }
                      }),
                      _vm._v(" "),
                      _c("div", { staticClass: "mt-4" }, [
                        !_vm.imagePreview
                          ? _c("img", {
                              staticClass: "figure-img img-fluid rounded",
                              attrs: {
                                src:
                                  "assets/images/realisations/" +
                                  _vm.realisation.image
                              }
                            })
                          : _vm._e(),
                        _vm._v(" "),
                        _vm.imagePreview
                          ? _c("img", {
                              staticClass: "figure-img img-fluid rounded",
                              attrs: { src: _vm.imagePreview }
                            })
                          : _vm._e()
                      ])
                    ]),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "form-group" },
                      [
                        _c("b-form-tags", {
                          staticClass: "custom-form-control",
                          attrs: {
                            "tag-variant": "dark",
                            size: "md",
                            separator: " ",
                            "add-button-variant": "dark",
                            placeholder: "Tags"
                          },
                          model: {
                            value: _vm.formData.tags,
                            callback: function($$v) {
                              _vm.$set(_vm.formData, "tags", $$v)
                            },
                            expression: "formData.tags"
                          }
                        })
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c("div", { staticClass: "form-group" }, [
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.formData.github_link,
                            expression: "formData.github_link"
                          }
                        ],
                        staticClass: "custom-form-control",
                        attrs: {
                          type: "text",
                          name: "github_link",
                          placeholder: "GitHub"
                        },
                        domProps: { value: _vm.formData.github_link },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(
                              _vm.formData,
                              "github_link",
                              $event.target.value
                            )
                          }
                        }
                      })
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "form-group" }, [
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.formData.live_link,
                            expression: "formData.live_link"
                          }
                        ],
                        staticClass: "custom-form-control",
                        attrs: {
                          type: "text",
                          name: "live_link",
                          placeholder: "Live"
                        },
                        domProps: { value: _vm.formData.live_link },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(
                              _vm.formData,
                              "live_link",
                              $event.target.value
                            )
                          }
                        }
                      })
                    ]),
                    _vm._v(" "),
                    _vm._m(0)
                  ])
                ]
              )
            ])
          ])
        ])
      ])
    ],
    1
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "row" }, [
      _c("div", { staticClass: "col-md-6" }, [
        _c("div", { staticClass: "form-group" }, [
          _c("button", { staticClass: "btn btn-dark custom-border-btn" }, [
            _vm._v("\n                      Editer\n                    ")
          ])
        ])
      ])
    ])
  }
]
render._withStripped = true



/***/ })

}]);