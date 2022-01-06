function countTriplets(arr, r) {
  const list = Array(arr.length).fill("").map((e, i) => 1 * Math.pow(r, i))
  const dict = {}
  for (let i = 0; i < list.length - 2; i++) {
    const triplet = []
    for (let j = i; j < i + 3; j++) {
      triplet.push(list[j])
    }
    dict[triplet] = true
  }
  let pairs = 0
  
  for (let i = 0; i < arr.length - 2; i++) {
    if (arr[i] === arr[i + 1]) continue
    if (arr[i + 1] === arr[i + 2]) {
      i++
      continue
    }
    console.log([arr[i], arr[i + 1], arr[i + 3]])
    if (dict[[arr[i], arr[i + 1], arr[1 + 3]]]) pairs++
  }
}

countTriplets([1,4,6,7], 2)