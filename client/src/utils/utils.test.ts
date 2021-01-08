import { sortNames } from './utils';

const testNames = [
  {
    name: "test1",
    amount: 22
  },
  {
    name: "test3",
    amount: 21
  },
  {
    name: "test2",
    amount: 3
  }
]

test('Names are sorted alphabetically to right order', () => {
  const result = sortNames(testNames, "alph");
  expect(result[0].name).toBe("test1");
  expect(result[1].name).toBe("test2");
});

test('Names are sorted to right order based on amounts', () => {
  const result = sortNames(testNames, "desc");
  console.log(result)
  expect(result[0].amount).toBe(22);
  expect(result[1].amount).toBe(21);
});