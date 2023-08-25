const seededRandom = function (seed) {
  var m = 2 ** 35 - 31;
  var a = 185852;
  var s = seed % m;
  return function () {
    return (s = (s * a) % m) / m;
  };
};

export const fetchAPI = function (date) {
  let result = [];
  let random = seededRandom(date.getDate());

  for (let i = 5; i <= 11; i++) {
    if (random() < 0.5) {
      result.push(i + ":00pm EST");
    }
    if (random() < 0.5) {
      result.push(i + ":30pm EST");
    }
  }
  return result;
};
export const submitAPI = function (formData) {
  return true;
};
