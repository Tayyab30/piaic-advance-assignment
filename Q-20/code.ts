export{};

// Create an array of locations
var locations: string[] = [
    "New York",
    "London",
    "Tokyo",
    "Paris",
    "Sydney",
    "Berlin",
    "Beijing",
    "Rio de Janeiro",
  ];

  var name:any;

for(name in locations){
  console.log(`${locations[name]}`);
}