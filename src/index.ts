/** Generics
 * ---------------
 * Generics allow us to parameterize types, which unlocks great opportunity to reuse types broadly across a project.
 *
 */

const phoneList = [
  { customerId: "0001", areaCode: "321", num: "123-4566" },
  { customerId: "0002", areaCode: "174", num: "142-3626" },
  { customerId: "0003", areaCode: "192", num: "012-7190" },
  { customerId: "0005", areaCode: "402", num: "652-5782" },
  { customerId: "0004", areaCode: "301", num: "184-8501" },
];

// The goal is this 👇
const phoneDict = {
  "0001": {
    customerId: "0001",
    areaCode: "321",
    num: "123-4566",
  },
  "0002": {
    customerId: "0002",
    areaCode: "174",
    num: "142-3626",
  },
  /*... and so on */
};

interface PhoneInfo {
  customerId: string;
  areaCode: string;
  num: string;
}

function listToDict<T>(
  list: T[],
  idGen: (arg: T) => string
): { [k: string]: T } {
  // create an empty dictionary
  const dict: { [k: string]: T } = {};

  // Loop through the array
  list.forEach((element) => {
    const dictKey = idGen(element);
    dict[dictKey] = element; // store element under key
  });

  return dict;
}

const result = listToDict(phoneList, (item) => item.customerId);
console.log(result);
// {
//   '0001': { customerId: '0001', areaCode: '321', num: '123-4566' },
//   '0002': { customerId: '0002', areaCode: '174', num: '142-3626' },
//   '0003': { customerId: '0003', areaCode: '192', num: '012-7190' },
//   '0005': { customerId: '0005', areaCode: '402', num: '652-5782' },
//   '0004': { customerId: '0004', areaCode: '301', num: '184-8501' }
// }

// Note: When calling the listToDict function, we are not passing the type arg; the typescript is smart enough to catch the type from the function arg `phoneList`.
