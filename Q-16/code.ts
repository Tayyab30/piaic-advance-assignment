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



var name:any;

for(name in bigger_guest_list){
  console.log(`Hello Mr. ${bigger_guest_list[name]}.I'm inviting you for a dinner in my house.`);
}

console.log("\n Guest list for bigger table to inviting the dinner.", bigger_guest_list);


