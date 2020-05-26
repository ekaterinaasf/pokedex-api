const dataSample1 = require("../../data/samples/1.json");

const evolutionOf = (pokeArray, name) => {
  let res = [];
  let poke = pokeArray.find((el) => el.name === name);
  if (!poke) {
    return null;
  }
  if (poke.prev_evolution) {
    res.push(...poke.prev_evolution);
  }
  const current = { num: poke.num, name: name };
  res.push(current);
  if (poke.next_evolution) {
    res.push(...poke.next_evolution);
  }

  return res;
};

module.exports = evolutionOf;

/*
  return an array with all evolutions of a pokemon, including itself:

    [
      { "num": "007", "name": "Squirtle" },
      { "num": "008", "name": "Wartortle" },
      { "num": "009", "name": "Blastoise" }
    ]

  if a pokemon does not exist in the pokeArray, return null

    null

  read the ./spec.js file & study the data samples for a better understanding
*/
