// const $nav = document.querySelector('#nav');
// const navItems = Array.from($nav.children);
// const $contents = document.querySelector('#contents');
// const contentItems = Array.from($contents.children);
// const offsetTops = contentItems.map(el => {
//   const [ofs, clh] = [el.offsetTops, el.clientHeight];
//   return [ofs-clh / 2, ofs + clh / 2];
// });

// window.addEventListener('scroll', e => {
//   const scrollTop = e.target.scrollingElement;
//   // do something
  
// });

// $nav.addEventListener('click', e => {
//   const target = e.target;
//   if(target.tagName === 'BUTTON') {
//     const targetIdx = navItems.indexOf(target.parentElement);
//     contentItems[targetIdx].scrollIntoView({
//       block: 'start',
//       behavior: 'smooth',
//     });
//   }
// });