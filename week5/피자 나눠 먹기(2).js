function solution(n) {
  let pizzaSlice = 6;
  while (pizzaSlice % n !== 0) {
    pizzaSlice += 6;
  }
  return pizzaSlice / 6;
}
