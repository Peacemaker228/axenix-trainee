import lodash from 'https://cdn.jsdelivr.net/npm/lodash@4.17.21/+esm';

const barChart = (arr) => {
  const space = ' ';
  const star = '*';
  const sharp = '#';

  const max = lodash.max(arr);
  const min = lodash.min(arr);

  const rangedArr = lodash.range(min, max + 1);

  const result = rangedArr.reduceRight((acc, rangedEl) => {
    // можно ли так обработать 0?
    if (rangedEl === 0) return acc;
    //
    const colItem = arr.map((el) => {
      if (rangedEl > 0) {
        return el >= rangedEl ? star : space;
      }
      return el < 0 && el <= rangedEl ? sharp : space;
    });

    // return (acc += colItem.join('') + '\n');
    return [...acc, colItem.join('')];
    // }, '');
  }, []);

  //   return result;
  return result.join('\n');
};

export default barChart;

//
//         // if (el >= rangedEl) return star;
//         // return space;
//       }
//       // if (el < 0 && el <= rangedEl) return sharp;
//       // return space;
