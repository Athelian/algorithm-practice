function minimumSwaps(arr) {
  let swaps = 0
  const swap = (a, b) => {
    swaps++
    const placeholder = arr[a]
    arr[a] = arr[b]
    arr[b] = placeholder
  }
  
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== i + 1) {
      let j = i + 1
      while (arr[j] !== i + 1 && j < arr.length) {
        j++
      }
      swap(i, j)
    }
  } 
  return swaps
}