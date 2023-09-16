"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var guest_list = ["Yasir", "Bilal", "Sultan", "Hamza", "Waleed"];
var rmoved_guest = guest_list.indexOf("Waleed");
var removered_person = guest_list.splice(rmoved_guest, 1);
guest_list.splice(4, 0, "Zeshan");
var name;
for (name in guest_list) {
    console.log(`Hello Mr. ${guest_list[name]}.I'm inviting you for a dinner in my house.`);
}
console.log("\n Waleen is not inviting the dinner.", removered_person.join());
