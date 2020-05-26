// "value" will always be a string, because params always are!
// consider using loose equality for your comparison
// (later you will learn about req.body to pass any type)

const value = (pokeArray, value) => {
  let res = pokeArray.map((el) => {
    for (let key of Object.keys(el)) {
      if (String(el[key]) === value) {
        return { name: el.name, num: el.num };
      }
    }
  });
  res = res.filter(function (el) {
    return el != undefined;
  });
  if (res.length === 0) {
    return null;
  }
  return res;
};

const dataSample2 = require("../../../data/samples/2.json");
const actual = value(dataSample2, "Bug");
console.log(actual);

module.exports = value;
