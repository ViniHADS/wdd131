//for loop
for (let i = 0; i < studentReport.length; i++) {
  if (studentReport[i] < LIMIT) {
    console.log(studentReport[i]);
  }
}
//explanation:
//Loops from index 0 to the end of the array.?
//Checks if each value is less than 30, and prints it.?


//while loop
let i = 0;
while (i < studentReport.length) {
  if (studentReport[i] < LIMIT) {
    console.log(studentReport[i]);
  }
  i++;
}
//explanation:
//Works similarly to the for loop, but we control the counter manually (i++).?

//forEach loop
studentReport.forEach(function(score) {
  if (score < LIMIT) {
    console.log(score);
  }
});
//explanation:
//forEach goes through each item in the array.?
//score is the current element being processed.?

//for...in loop
for (let index in studentReport) {
  if (studentReport[index] < LIMIT) {
    console.log(studentReport[index]);
  }
}
//explanation:
//for...in loops through the indexes of the array.?
//You use the index to access the value.?


//Print the next DAYS day names from today's date
const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

let today = new Date();

for (let i = 0; i <= DAYS; i++) {
  let futureDate = new Date();
  futureDate.setDate(today.getDate() + i);
  let dayIndex = futureDate.getDay();
  console.log(dayNames[dayIndex]);
}
//explanation:
//dayNames maps the numbers 0?6 to the names of the days.?
//We use Date() to get today?s date.?
//setDate() moves the date forward by i days.?
//getDay() gives us the day index (0 = Sunday, 1 = Monday, etc.).?
//We then print the corresponding day name.?