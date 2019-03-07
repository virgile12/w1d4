var students = [
  { id: 1, name: "bruce",    age: 40 },
  { id: 2, name: "zoidberg", age: 22 },
  { id: 3, name: "alex",     age: 22 },
  { id: 4, name: "alex",     age: 30 }
];

students.sort(function compare(a, b) {
if (a.name < b.name) {
  return -1 ;
}
if (a.name > b.name) {
  return 1;
} else
return b.age - a.age

}
)

console.log(students)












//  sort in alphabetical order. If students have the same name, then we prioritize the older student first.

// Write a sorting function (sometimes called a custom comparator), that sorts the above array first by the name ascending alphabetically, and in cases where the names are equal sort by descending age.