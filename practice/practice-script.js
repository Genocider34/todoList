const arr = [
  {
    id: 1,
    task: "hello",
  },
  {
    id: 2,
    task: "wow",
  },
  {
    id: 3,
    task: "world",
  },
];

const deletedID = 3;
const filteredID = arr.filter((item) => item.id !== deletedID);
// const filtered = arr.filter((item) => item.id <= 1);
// const mapped = arr.map((item) => item.task);

console.log(filteredID);
// console.log(mapped);
// console.log(filtered);
