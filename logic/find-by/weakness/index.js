const weakness = (pokeArray, type) => {
  let res = pokeArray.map((el) => {
    if (el.weaknesses.includes(type)) {
      return { name: el.name, num: el.num };
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

const dataSample4 = require("../../../data/samples/4.json");
const actual = weakness(dataSample4, "Normal");
console.log(actual);

module.exports = weakness;
