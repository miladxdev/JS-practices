function slow(x) {
  // there can be a heavy CPU-intensive job here
  console.log(`called with ${x}`);
  return x;
}

function catchingDecorator(func) {
  let cache = new Map();

  return function (x) {
    if (cache.has(x)) {
      // if there's such key in cache
      return cache.get(x); // read the result from it
    }

    let result = func(x); // otherwise call func

    cache.set(x, result);
    return result;
  };
}

slow = catchingDecorator(slow);

console.warn("cached: " + slow(1)); // slow(1) is cached and the result returned
console.warn("return from cache: " + slow(1)); // slow(1) result returned from cache
