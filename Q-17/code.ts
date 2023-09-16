export{};

var guest_list:string[] = ["Yasir", "Bilal", "Sultan", "Hamza", "Waleed"];
// Added person at the start of array.
guest_list.unshift("Cheema Saib");

// Added paerson at the middle of the array.
const middleIndex: number = Math.floor(guest_list.length / 2);
guest_list.splice(middleIndex, 0, "Sohail Maqsood");

// Added person at the end of array.
guest_list.push("Usama Khalid");
var bigger_guest_list:string[] = guest_list

console.log("\n I'm inviting only two people for a dinner.");

// Removing person form guest list until remining 2 person.
while (bigger_guest_list.length > 2 ) {
 var removed_person:any = bigger_guest_list.pop()
 console.log(`\n${removed_person} you’re sorry you can’t invite them to dinner.\n`)
}
console.log(bigger_guest_list, bigger_guest_list.length);

// Showing messages for invited people.
var name:any;
for(name in bigger_guest_list) {
  console.log(`\nHi ${bigger_guest_list[name]} you are still invited for a dinner.`)
}

while (bigger_guest_list.length > 0 ) {
  var removed_person:any = bigger_guest_list.pop()
}
console.log(`\nEmpty List----------------------- [${bigger_guest_list}].\n`)
