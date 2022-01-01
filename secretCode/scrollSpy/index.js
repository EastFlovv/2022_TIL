// throttle
const throttle = (func, delay) => {
  let throttled = false;
  return (...args) => {
    if(!throttled) {
      throttled = true;
      setTimeout(() => {
        func(...args);
        throttled = false;
      }, delay);
    }
  }
}

// debounce
const debounce = (func, delay) => {
  let timeoutId = null;
  return (...args) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(func.bind(null, ...args), delay);
  }
}



const navElem = document.querySelector("#nav");
const navItems = Array.from(navElem.children);
const contentsElem = document.querySelector("#contents");
const contentItems = Array.from(contentsElem.children);
// const offsetTops = contentItems.map((elem) => {
//   const [ofs, clh] = [elem.offsetTop, elem.clientHeight];
//   return [ofs - clh / 2, ofs + clh / 2];
// });
let offsetTops = [];
const getoffsetTops = () => {
  offsetTops = contentItems.map(el => {
    const [ofs, clh] = [el.offsetTop, el.clientHeight];
    return [ofs - clh /2, ofs + clh/2];
  });
}
getoffsetTops();
// 클로저를 이용하여 매 스크롤마다 리사이즈 검사
// const getoffsetTops = (() => {
//   let ofst = 0;
//   let res = [];
//   return () => {
//     if(window.innerHeight === ofst) return res;
//     ofst = window.innerHeight;
//     res = contentItems.map(el => {
//       const [ofs, clh] = [el.offsetTop, el.clientHeight];
//       return [ofs - clh / 2, ofs + clh / 2];  
//     });
//     return res;
//   }
// })();

window.addEventListener("scroll", throttle(e => {
  const { scrollTop } = e.target.scrollingElement;
  console.log(scrollTop);
  // do something
  // resize시 제대로 동작하지 않음
  // const targetIndex = getoffsetTops().findIndex(([from, to]) => (
  //   scrollTop >= from && scrollTop < to
  // ));
  const targetIndex = offsetTops.findIndex(([from, to]) => (
    scrollTop >= from && scrollTop < to
  ));
  Array.from(navElem.children).forEach((c, i) => {
    if(i !== targetIndex) c.classList.remove('on');
    else c.classList.add('on');
  })
}, 300));

navElem.addEventListener("click", e => {
  const targetElem = e.target;
  if (targetElem.tagName === "BUTTON") {
    const targetIndex = navItems.indexOf(targetElem.parentElement);
    contentItems[targetIndex].scrollIntoView({
      block: "start",
      behavior: "smooth",
    });
  }
});

window.addEventListener('resize', debounce(getoffsetTops, 300)); // 리사이즈 리스너 사용
