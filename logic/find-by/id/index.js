const id = (pokeData, id) => {
  let poke = pokeData.find((el) => el.id === id);
  if (!poke) {
    return null;
  }
  return poke;
};
module.exports = id;
