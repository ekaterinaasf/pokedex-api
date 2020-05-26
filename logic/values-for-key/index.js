const isEqual = require("lodash").isEqual;

const valuesForKey = (pokeArray, key) => {
  let res = [];
  let output = pokeArray.map((el) => {
    if (!Object.keys(el).includes(key)) {
      return;
    }
    //output.push(el[key]);
    return el[key];
  });
  //console.log(output);

  //remove null elements
  //res = output.filter(function (el) {
  //   return el != null;
  // });

  //remove duplications
  let uniq = [...new Set(output)];
  return uniq;
};

module.exports = valuesForKey;

/* https://lodash.com/docs/4.17.15#isEqual

  isEqual is a function to compare objects and arrays.

  it will come in handy on this challenge

*/
