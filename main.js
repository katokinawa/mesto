(()=>{"use strict";function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var t=function(){function t(e,n,r,o){var i=r.handleCardClick,a=r.handleAddLike,u=r.handleRemoveLike,l=r.handleTrashClick;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),this._templateSelector=n,this._imageNameCard=e.name,this._imageLinkCard=e.link,this._owner=e.owner,this._handleCardClick=i,this._handleAddLike=a,this._handleRemoveLike=u,this._handleTrashClick=l,this._likes=e.likes,this._likeArr=e.likes,this._userId=o}var n,r;return n=t,(r=[{key:"_getTemplate",value:function(){return document.querySelector(this._templateSelector).content.querySelector("#container").cloneNode(!0)}},{key:"_handleClickImgOpenFullscreen",value:function(){this._handleCardClick(this._imageNameCard,this._imageLinkCard)}},{key:"handleClickDelete",value:function(){this._element.remove(),this._element=null}},{key:"_handleClickLike",value:function(){this._like.classList.contains("photo-flex__like-button_active")?this._handleRemoveLike(this):this._handleAddLike(this)}},{key:"_setLike",value:function(e){var t=this;e.find((function(e){return e._id===t._userId}))?this._like.classList.add("photo-flex__like-button_active"):this._like.classList.remove("photo-flex__like-button_active")}},{key:"setLikeInfo",value:function(e){this._likeArr=e,this._likeCount.textContent=this._likeArr.length,this._setLike(this._likeArr)}},{key:"generateCard",value:function(){return this._element=this._getTemplate(),this._imgCardName=this._element.querySelector(".photo-flex__title"),this._imgCardLink=this._element.querySelector(".photo-flex__image"),this._like=this._element.querySelector(".photo-flex__like-button"),this._trash=this._element.querySelector(".photo-flex__trash"),this._likeCount=this._element.querySelector(".photo__like-count"),this._imgCardName.textContent=this._imageNameCard,this._imgCardLink.src=this._imageLinkCard,this._imgCardLink.alt=this._imageNameCard,this._likeCount.textContent=this._likes.length,this._setLike(this._likes),this._userId!==this._owner._id&&this._trash.remove(),this._setEventListeners(),this._element}},{key:"_setEventListeners",value:function(){var e=this;this._imgCardLink.addEventListener("click",(function(){e._handleClickImgOpenFullscreen()})),this._trash.addEventListener("click",(function(){e._handleClickDelete()})),this._like.addEventListener("click",(function(){e._handleClickLike()}))}}])&&e(n.prototype,r),Object.defineProperty(n,"prototype",{writable:!1}),t}();function n(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var r=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._formSelector=t.formSelector,this._inputSelector=t.inputSelector,this._submitButtonSelector=t.submitButtonSelector,this._inactiveButtonClass=t.inactiveButtonClass,this._inputErrorClass=t.inputErrorClass,this._errorClass=t.errorClass,this._validationElement=n,this._inputs=Array.from(this._validationElement.querySelectorAll(this._inputSelector)),this._buttonElement=this._validationElement.querySelector(this._submitButtonSelector)}var t,r;return t=e,(r=[{key:"_showError",value:function(e){var t=this._validationElement.querySelector(".".concat(e.id,"-error"));t.classList.add(this._errorClass),t.classList.add(this.inputErrorClass),t.textContent=e.validationMessage}},{key:"_closeError",value:function(e){var t=this._validationElement.querySelector(".".concat(e.id,"-error"));t.classList.remove(this._errorClass),t.classList.remove(this.inputErrorClass),t.textContent=""}},{key:"_checkValidity",value:function(e){this._closeError(e),e.validity.valid?this._closeError(e):this._showError(e)}},{key:"_hasInvalid",value:function(){return this._inputs.some((function(e){return!e.validity.valid}))}},{key:"_setButtonStateSave",value:function(){this._hasInvalid()?(this._buttonElement.classList.add(this._inactiveButtonClass),this._buttonElement.setAttribute("disabled","")):(this._buttonElement.classList.remove(this._inactiveButtonClass),this._buttonElement.removeAttribute("disabled"))}},{key:"validityReset",value:function(){var e=this;this._inputs.forEach((function(t){e._closeError(t)})),this._setButtonStateSave()}},{key:"enableValidation",value:function(){var e=this;this._setButtonStateSave(),this._inputs.forEach((function(t){t.addEventListener("input",(function(){e._checkValidity(t),e._setButtonStateSave()}))}))}}])&&n(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),e}();function o(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var a=function(){function e(t){var n=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),i(this,"_handleClickOnOverlay",(function(e){e.target===e.currentTarget&&n.close()})),i(this,"_handleEscClose",(function(e){"Escape"===e.key&&n.close()})),this._popup=document.querySelector(t)}var t,n;return t=e,(n=[{key:"open",value:function(){this._popup.classList.add("popup_opened"),document.addEventListener("keydown",this._handleEscClose)}},{key:"close",value:function(){this._popup.classList.remove("popup_opened"),document.removeEventListener("keydown",this._handleEscClose)}},{key:"setEventListeners",value:function(){var e=this;this._popup.querySelector(".popup__close-button").addEventListener("click",(function(){e.close()})),this._popup.addEventListener("mousedown",this._handleClickOnOverlay)}}])&&o(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function u(e){return u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},u(e)}function l(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function s(){return s="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=c(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},s.apply(this,arguments)}function c(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=h(e)););return e}function f(e,t){return f=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},f(e,t)}function p(e,t){if(t&&("object"===u(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function h(e){return h=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},h(e)}var d=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&f(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=h(r);if(o){var n=h(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return p(this,e)});function a(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(t=i.call(this,e))._imageModal=t._popup.querySelector(".popup__image"),t._imageModalTitle=t._popup.querySelector(".popup__title-image"),t}return t=a,(n=[{key:"open",value:function(e){s(h(a.prototype),"open",this).call(this),this._imageModal.src=e.link,this._imageModal.alt=e.name,this._imageModalTitle.textContent=e.name}}])&&l(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),a}(a);function _(e){return _="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},_(e)}function y(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function v(){return v="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=m(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},v.apply(this,arguments)}function m(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=g(e)););return e}function b(e,t){return b=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},b(e,t)}function k(e,t){if(t&&("object"===_(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function g(e){return g=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},g(e)}var C=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&b(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=g(r);if(o){var n=g(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return k(this,e)});function a(e){var t,n=e.popupSelector,r=e.submitProfileFormHandler;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(t=i.call(this,n))._formPopup=t._popup.querySelector(".popup__form"),t._popupButton=t._popup.querySelector(".popup__button"),t._inputList=t._popup.querySelectorAll(".popup__input"),t._submitProfileFormHandler=r,t._initialText=t._popupButton.textContent,t}return t=a,(n=[{key:"getformPopup",value:function(){return this._formPopup}},{key:"_getInputValues",value:function(){var e=this;return this._formValues={},this._inputList.forEach((function(t){return e._formValues[t.name]=t.value})),this._formValues}},{key:"setInputValues",value:function(e){this._inputList.forEach((function(t){t.value=e[t.name]}))}},{key:"setEventListeners",value:function(){var e=this;v(g(a.prototype),"setEventListeners",this).call(this),this._formPopup.addEventListener("submit",(function(t){t.preventDefault(),e._popupButton.textContent="Сохранение...",e._submitProfileFormHandler(e._getInputValues()).then((function(){e.close()})).finally((function(){e._popupButton.textContent=e._initialText}))}))}},{key:"close",value:function(){v(g(a.prototype),"close",this).call(this),this._formPopup.reset()}}])&&y(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),a}(a);function w(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var S=function(){function e(t,n){var r=t.renderer;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._renderer=r,this._container=document.querySelector(n)}var t,n;return t=e,(n=[{key:"renderItems",value:function(e){var t=this;e.forEach((function(e){return t._renderer(e)}))}},{key:"addItem",value:function(e){this._container.prepend(e)}}])&&w(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function E(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var L=function(){function e(t){var n=t.name,r=t.job,o=t.avatar;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._name=document.querySelector(n),this._job=document.querySelector(r),this._avatar=document.querySelector(o)}var t,n;return t=e,(n=[{key:"getUserInfo",value:function(){return{name:this._name.textContent,job:this._job.textContent}}},{key:"setUserInfo",value:function(e){this._name.textContent=e.name,this._job.textContent=e.about,this._avatar.src=e.avatar}},{key:"setUserId",value:function(e){return e._id}},{key:"getUserId",value:function(){return this._id}},{key:"setUserAvatar",value:function(e){this._avatar.src=e.avatar}}])&&E(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function O(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var P=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._url=t.url,this._header=t.headers}var t,n;return t=e,n=[{key:"_getResponse",value:function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))}},{key:"getInitialCards",value:function(){var e=this;return fetch("".concat(this._url,"/cards"),{headers:this._header}).then((function(t){return e._getResponse(t)}))}},{key:"getUserInfo",value:function(){var e=this;return fetch("".concat(this._url,"/users/me"),{headers:this._header}).then((function(t){return e._getResponse(t)}))}},{key:"setUserInfo",value:function(e,t){var n=this;return fetch("".concat(this._url,"/users/me"),{headers:this._header,method:"PATCH",body:JSON.stringify({name:e,about:t})}).then((function(e){return n._getResponse(e)}))}},{key:"setUserAvatar",value:function(e){var t=this;return fetch("".concat(this._url,"/users/me/avatar"),{headers:this._header,method:"PATCH",body:JSON.stringify({item:e})}).then((function(e){return t._getResponse(e)}))}},{key:"generateCard",value:function(e,t){var n=this;return fetch("".concat(this._url,"/cards"),{headers:this._header,method:"POST",body:JSON.stringify({name:e,link:t})}).then((function(e){return n._getResponse(e)}))}},{key:"deleteCard",value:function(e){var t=this;return fetch("".concat(this._url,"/cards/").concat(e),{headers:this._header,method:"DELETE"}).then((function(e){return t._getResponse(e)}))}},{key:"addLikeCard",value:function(e){var t=this;return fetch("".concat(this._url,"/cards/").concat(e,"/likes"),{method:"PUT",headers:this._header}).then((function(e){return t._getResponse(e)}))}},{key:"removeLikeCard",value:function(e){var t=this;return fetch("".concat(this._url,"/cards/").concat(e,"/likes"),{method:"DELETE",headers:this._header}).then((function(e){return t._getResponse(e)}))}}],n&&O(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}(),j=document.querySelector(".name-input"),I=document.querySelector(".job-input"),R=document.querySelector(".profile__edit-button"),A=document.querySelector(".profile__add-button");function T(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}document.querySelector("profile__avatar");var q,x="",B="",U=new P({url:"https://mesto.nomoreparties.co/v1/cohort-52",headers:{authorization:"e5ef6c8f-bf2d-4d8f-9be9-29b7fb227f3e","Content-Type":"application/json"}}),D=new Object,F=new S({renderer:function(e){var n,r;F.addItem((r=new t(n=e,"#photo-template",{handleCardClick:function(){V.open(n)},handleAddLike:function(){U.addLikeCard(n._id).then((function(e){r.setLikeInfo(e.likes)})).catch((function(e){console.log("Ошибка при лайке",e)}))},handleRemoveLike:function(){U.removeLikeCard(n._id).then((function(e){r.setLikeInfo(e.likes)})).catch((function(e){console.log("Ошибка удаление лайка",e)}))},handleTrashClick:function(){z.open(n),B=n._id}},x)).generateCard())}},".photo-flex__list"),N=[U.getUserInfo(),U.getInitialCards()];Promise.all(N).then((function(e){var t,n,r=(n=2,function(e){if(Array.isArray(e))return e}(t=e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,i=[],a=!0,u=!1;try{for(n=n.call(e);!(a=(r=n.next()).done)&&(i.push(r.value),!t||i.length!==t);a=!0);}catch(e){u=!0,o=e}finally{try{a||null==n.return||n.return()}finally{if(u)throw o}}return i}}(t,n)||function(e,t){if(e){if("string"==typeof e)return T(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?T(e,t):void 0}}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),o=r[0],i=r[1];M.setUserInfo(o),M.setUserId(o),x=o._id,F.renderItems(i),console.log(i)})).catch((function(e){console.log("".concat(e))})),q={formSelector:".popup__form",inputSelector:".popup__input",submitButtonSelector:".popup__button",inactiveButtonClass:"popup__button_disabled",inputErrorClass:"popup__input_type_error",errorClass:"popup__error_visible"},Array.from(document.querySelectorAll(q.formSelector)).forEach((function(e){var t=new r(q,e),n=e.getAttribute("name");D[n]=t,t.enableValidation()}));var V=new d(".photo-fullscreen-popup");V.setEventListeners();var H=new C({popupSelector:".photo-item-popup",submitProfileFormHandler:function(e){return U.generateCard(e.name,e.link).then((function(e){F.addItem(generateCard(e))})).catch((function(e){console.log("Ошибка при добавлении карточки",e)}))}});H.setEventListeners(),A.addEventListener("click",(function(){H.open();var e=H.getformPopup();D[e.getAttribute("name")].validityReset()}));var M=new L({name:".profile__title",job:".profile__subtitle",avatar:".profile__avatar"}),J=new C({popupSelector:".profile-popup",submitProfileFormHandler:function(e){return U.setUserInfo(e.name,e.about).then((function(e){M.setUserInfo(e)})).catch((function(e){console.log("Ошибка при редактировании профиля",e)}))}});J.setEventListeners(),R.addEventListener("click",(function(){J.open();var e=J.getformPopup(),t=M.getUserInfo();j.value=t.name,I.value=t.job,D[e.getAttribute("name")].validityReset()})),new C({popupSelector:".update-avatar-popup",submitProfileFormHandler:function(e){return U.setUserAvatar(e.avatar).then((function(e){M.setUserAvatar(e)})).catch((function(e){console.log("Ошибка при редактировании аватара",e)}))}}).setEventListeners();var z=new C({popupSelector:".confirm-popup",submitProfileFormHandler:function(){return U.deleteCard(B).then((function(){cardForDelete.handleClickDelete()})).catch((function(e){console.log("Ошибка при подтверждении удаления карточки",e)}))}});z.setEventListeners()})();
//# sourceMappingURL=main.js.map