let a = [1 , 3 ,"Fares", "Mohamed", "Alaa", 5 , "Omar", "Ali" , 6];

let onlyNames = [];

for (let i = 0; i < a.length; i++) {
  if (typeof a[i] === "number") {
    onlyNames.push(a[i]);
  }
}

console.log(onlyNames);
