let arr = [2, 4, 5, 7, 9, 4, 1, 16];
let min = getMin(arr);
function getMin(arr) {
  let min = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (min > arr[i]) min = arr[i];
  }
  return min;
}
console.log(min);

function getEvent(arr) {
  let result = arr.filter(function (e) {
    return e % 2 == 0;
  });
  console.log(result);
}
getEvent([2, 4, 5, 7, 9, 4, 1, 16]);

let arr = [
  { name: "Jonny Walker", birthDate: "1995-12-17" },
  { name: "Andrew", birthDate: "2001-10-29" },
  { name: "Viktor", birthDate: "1998-11-09" },
  { name: "Andrew", birthDate: "2011-05-09" },
];
function searchByName(hero) {
  var result = arr.filter(function (hero) {
    return hero.name == "Andrew";
  });
  console.log(result);
}

searchByName("Andrew");
