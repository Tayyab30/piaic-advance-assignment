export{};

var friends_name:string[] = ["Yasir", "Bilal", "Sultan", "Hamza", "Waleed"];
var name:any;

for(name in friends_name){
  console.log(`Hello Mr. ${friends_name[name]}. How are you?`);
}