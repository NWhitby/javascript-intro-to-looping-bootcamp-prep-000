function forLoop(array) {
   for ( let i = 0; i < 25; i += 1) {
     if (i === 1) {
       array.push(`I am 1 strange loop.`)
     } else {
       array.push(`I am ${i} strange loops.`)
     }
  }
  return array;
}

function whileLoop(n) {
  let countdown = n;

    while (countdown > 0) {
      console.log(--countdown)
    }
    return "done";
  }

function doWhileLoop(array) {
  do {
  array.pop();
}
  while (array.length > 1 && maybeTrue());
  return array;
}