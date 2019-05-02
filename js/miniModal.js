/**
 * 
 * @param {*} type 
 * @param {*} title 
 * @param {*} msg 
 * @param {*} styleClass 
 * @param {*} redirect 
 */
function newModal(type,title='',msg = '',styleClass = 'new-modal', redirect = null){
  let modal = document.createElement('article');
  let backdrop = document.createElement('section');
  let titulo = document.createElement('h3');
  let mensaje = document.createElement('p');
  const body = document.querySelector('body');
  titulo.innerHTML = title;
  mensaje.innerHTML = msg;
  modal.classList.add('modal-card');
  modal.classList.add(type);
  modal.classList.add('card');
  modal.classList.add(styleClass);
  backdrop.classList.add('backdrop');
  modal.appendChild(titulo);
  modal.appendChild(document.createElement('br'));
  modal.appendChild(mensaje);
  backdrop.appendChild(modal);
  body.appendChild(backdrop);
  modal = document.querySelector('.backdrop');
  modal.style.opacity = 1;
  modal.onclick = function(){
    modal.style.opacity = 0;
    body.removeChild(modal);
    if (redirect != null) {
      window.location.href = redirect;
    }
  };
}

// function modalMaker( obj )
// {
//   const MODAL    = document.createElement('article');
//   const BACKDROP = document.createElement('section');
//   const TITLE    = document.createElement('h3');
//   const MESSAGE  = document.createElement('p');
//   const BODY     = document.querySelector('.content');

//   TITLE.innerHTML   = obj.title;

//   MESSAGE.innerHTML = obj.message;

//   MODAL.classList.add('modal-card');
//   MODAL.classList.add('card');
//   MODAL.classList.add(obj.type);
//   MODAL.classList.add(obj.class);

//   BACKDROP.classList.add('backdrop');

//   MODAL.appendChild(TITLE);
//   MODAL.appendChild(document.createElement('br'));
//   MODAL.appendChild(MESSAGE);

//   BACKDROP.appendChild(MODAL);

//   BODY.appendChild(BACKDROP);

//   MODAL = BACKDROP;
//   // MODAL = document.querySelector('.backdrop');
//   MODAL.style.opacity = 1;
//   MODAL.onclick = function(){
//     MODAL.style.opacity = 0;
//     BODY.removeChild(MODAL);
//     if (obj.redirect != null) {
//       window.location.href = obj.redirect;
//     }
//   };
// }