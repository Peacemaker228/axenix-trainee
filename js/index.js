// const fetchPokemon = () => {
//   return new Promise((res) => {
//     setTimeout(() => {
//       res({ data: { name: "Pickachu", power: 20 } });
//     }, 2000);
//   });
// };

// console.log("Program starting...");

// part 2
const fetchPokemon = () => {
  return new Promise((_, rej) => {
    rej(new Error("Danger, danger!"));
  });
};
const getPokemon = async () => {
  try {
    const { data } = await fetchPokemon();
    console.log(data);
  } catch (error) {
    console.error(error);
  } finally {
    console.log("Program complete!");
  }
};

getPokemon();
