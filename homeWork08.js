let names = ["Семен", "Иван", "Петр", "Татьяна"];
let ages = [18, 27, 74, 34];
let namesAndAges = [];
for (let i = 0; i < names.length; i++) {
  namesAndAges.push(names[i] + " - " + ages[i] + " лет/годов");
}
console.log(namesAndAges);
