export{};

interface UserInfo {
  name: string,
  age: number,
  cnic: string,
  marks: string   
}
var user_info: UserInfo = {
  name: "Tayyab",
  age: 28,
  cnic: "32094-2094989-1",
  marks: "80"
}

console.log(`name: ${user_info.name},\nage: ${user_info.age},\ncnic: ${user_info.cnic},\nmarks: ${user_info.marks},`);
