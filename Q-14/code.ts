export{};

var guest_list:string[] = ["Yasir", "Bilal", "Sultan", "Hamza", "Waleed"];
var name:any;

for(name in guest_list){
  console.log(`Hello Mr. ${guest_list[name]}.I'm inviting you for a dinner in my house.`);
}