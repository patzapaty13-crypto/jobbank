function payRateCalculate() {
  let workDays = parseInt((document.getElementById("workDays").value).trim());
  let selectObj = document.getElementById("year");
  let yearOfStudy = parseInt(selectObj.options[selectObj.selectedIndex].value);

  let hourlyRate = 0;
  if (yearOfStudy === 1) {
    hourlyRate = 55;       // 1st Year
  } else if (yearOfStudy === 2) {
    hourlyRate = 65;       // 2nd Year
  } else if (yearOfStudy === 3) {
    hourlyRate = 75;       // 3rd Year
  } else if (yearOfStudy === 4) {
    hourlyRate = 85;       // 4th Year or Greater
  }

  // Weekly pay rate = hourly rate × number of work days per week
  return hourlyRate * workDays;
}