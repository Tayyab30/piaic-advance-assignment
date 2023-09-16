export{};
var guest_list:string[] = ["Yasir", "Bilal", "Sultan", "Hamza", "Waleed"];
var number_of_guest:number = guest_list.length;

function countGuestMember(number_of_guest:number): void {
  console.log(`\n I'm inviting ${number_of_guest} people for dinner \n`);
}
  
countGuestMember(number_of_guest);