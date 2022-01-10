function countSwaps(a) {
  let swaps = 0
  
  const swap = (x, y) => {
    const placeholder = a[x]
    a[x] = a[y]
    a[y] = placeholder
    swaps++
  }  
  
  for (let i = 0; i < a.length; i++) {  
    for (let j = 0; j < a.length - 1; j++) {
      if (a[j] > a[j + 1]) {
        swap(j, j + 1);
      }
    }
  }
  
  console.log(`Array is sorted in ${swaps} swaps.`)
  console.log(`First Element: ${a[0]}`)
  console.log(`Last Element: ${a[a.length - 1]}`)
}

countSwaps([3,2,1])