const typeStats = (pokeArray, type) => {
  let typeCount = 0;
  let weakCount = 0;
  pokeArray.map((el) => {
    if (el.type.includes(type)) {
      typeCount++;
    }
    if (el.weaknesses.includes(type)) {
      weakCount++;
    }
  });
  return { typeName: type, typeCount: typeCount, weaknessCount: weakCount };
};

const dataSample2 = require("../../data/samples/2.json");
const actual = typeStats(dataSample2, "Grass");
console.log(actual);

module.exports = typeStats;
