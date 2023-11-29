'use strict';

const model = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModel = document.querySelector('.close-modal');
const closemodel = function () {
  model.classList.add('hidden');
  overlay.classList.add('hidden');
};
// const btnshowmodel = document.querySelectorAll('.show-model');
// console.log(btnshowmodel);
const btnopenmodel = document.querySelectorAll('.show-modal');
console.log(btnopenmodel);

for (let i = 0; i < btnopenmodel.length; i++) {
  btnopenmodel[i].addEventListener('click', function () {
    model.classList.remove('hidden');
    overlay.classList.remove('hidden');
  });
}

btnCloseModel.addEventListener('click', function () {
  closemodel();
});
overlay.addEventListener('click', function () {
  closemodel();
});

document.addEventListener('keydown', function (e) {
  console.log(e);
  if (e.key === 'Escape' && !model.classList.contains('hidden')) {
    closemodel();
  }
});

// for (let i = 0; i < btnshowmodel.length; i++) {
//   console.log('button clicked');
//   //   btnshowmodel[i].addEventListner('click', function () {
//   //     console.log('hhhj');
//   //     model.classList.remove('hidden');
//   //     overlay.classList.remove('hidden');
//   //   });
// }
