function countDown(fromNumber) {
  console.log(fromNumber);

  let nextNumber = fromNumber - 1;
  if (nextNumber > 0) {
      countDown(nextNumber);
  }
}

countDown(5);

// equevalent with

for (let i = 5; i > 0; i--) {
  console.log(i);
}