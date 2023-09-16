let person_name_2: string = "jhon ibraham";
const titleCase: string = person_name_2.split(' ')
  .map(w => w[0].toUpperCase() + w.substring(1).toLowerCase())
  .join(' ');

console.log(person_name_2.toLocaleLowerCase())
console.log(titleCase)
console.log(person_name_2.toLocaleUpperCase());