// "value" will always be a string, because params always are!
// consider using loose equality for your comparison
// (later you will learn about req.body to pass any type)

const keyValue = (pokeArray, key, value) => {
  let element = pokeArray.find((el) => el[key]);
  if (element === undefined) {
    return null;
  }
  //let type = typeof pokeArray.find((el) => el[key])[key];
  let type = typeof element[key];
  if (type === "number") {
    value = Number(value);
  }
  let output = pokeArray.filter((el) => el[key] === value);
  if (output.length === 0) {
    return null;
  }
  return output.map((el) => {
    return { name: el.name, num: el.num };
  });
};

const dataSample2 = require("../../../data/samples/2.json");
const actual = keyValue(dataSample2, "doesnit", "43");
console.log(actual);

module.exports = keyValue;
