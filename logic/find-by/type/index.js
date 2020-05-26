const type = (pokeArray, type) => {
  let res = pokeArray.map((el) => {
    if (el.type.includes(type)) {
      return { name: el.name, num: el.num };
    }
  });

  return res.filter(function (el) {
    return el != undefined;
  });
};

//for testing
// const dataSample2 = require("../../../data/samples/2.json");
// const actual = type(dataSample2, "Bug");
// console.log(actual);

module.exports = type;
