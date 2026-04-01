function payRateCalculate() {
  let workDays = (document.getElementById("workDays").value).trim();
  let selectObj = document.getElementById("year");
  let yearOfStudy = parseInt(selectObj.options[selectObj.selectedIndex].value);
  //alert("yearOfStudy = "+yearOfStudy);
  let hourlyRate = 0;
  if (yearOfStudy === 1) {
    hourlyRate = 55;
  } else if (yearOfStudy === 2) {
    hourlyRate = 65;
  } else if (yearOfStudy === 3) {
    hourlyRate = 75;
  } else if (yearOfStudy === 4) {
    hourlyRate = 85;
  }
  return hourlyRate * parseInt(workDays);
}


