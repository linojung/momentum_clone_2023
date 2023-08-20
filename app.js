const age = parseInt(prompt("how old are you?"));

if (isNaN(age) || age < 0) {
  console.log("write a positive number");
} else if (age < 19) {
  console.log("too young!");
} else if (age >= 18 && age <= 50) {
  console.log("you can drink");
} else if (age > 50 && age <= 80) {
  console.log("you should exercise");
} else if (age > 80) {
  if (age === 100) {
    console.log("congrats!");
  } else {
    console.log("enjoy your life!");
  }
}
