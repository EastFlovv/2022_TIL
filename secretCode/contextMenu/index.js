const $items = document.querySelectorAll('.item');
// const $wrapper = document.querySelector('.wrapper');


// $wrapper.addEventListener('click', e => {
//   const target = e.target;
//   // console.log(target);
//   // 이벤트 확산 방지
//   e.stopPropagation();
//   if(!target.classList.contains('item')) return;
//   target.classList.toggle('open');
//   $items.forEach(el => {
//       if(target !== el) el.classList.remove('open');
//     })
// });

// 리스너가 줄어듦
// 단 조건문이 많아져야함
document.body.addEventListener('click', e => {
  const targetClassList = e.target.classList;
  // console.log(targetClassList);
  if(targetClassList.contains('context')) return;
  if(targetClassList.contains('item')) {
    targetClassList.toggle('open');
    $items.forEach(el => {
      if(el !== e.target) el.classList.remove('open');
    });
    return;
  }

  $items.forEach(el => el.classList.remove('open'));
});

