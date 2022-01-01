export const throttle = (func, delay) => {
  let throttleId = false;
  return (...args) => {
    if(!throttleId) {
      throttleId = true;
      setTimeout(() => {
        func(...args);
        throttleId = false;
      }, delay);
    }
  }
}

export const debounce = (func, delay) => {
  let timeoutId = null;
  return (...args) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(func.bind(null, ...args), delay);
  }
}