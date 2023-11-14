// f(n) = f(n-1) + f(n-2)

const fib = (num) => {
  if (num < 0) return "Ошибка! Число не может быть отрицательным!";
  if (num <= 1) return num;

  let arr = [0, 1];

  for (let i = 2; i <= num; i++) {
    arr[i] = arr[i - 1] + arr[i - 2];
  }

  return arr.pop();
};

export default fib;
