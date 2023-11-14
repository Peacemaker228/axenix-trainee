const isHappyTicket = (number) => {
  if (isNaN(+number)) return "Ошибка! Введите число!";

  if (number.length % 2 !== 0) {
    return "Ошибка! Входное число должно быть четным!";
  }

  let res = 0;

  const last = number.length;

  for (let i = 0, j = last / 2; i < last / 2, j < last; i++, j++) {
    res += Number(number[i]) - Number(number[j]);

    if (j === last - 1) return res === 0;
  }
};

export default isHappyTicket;
