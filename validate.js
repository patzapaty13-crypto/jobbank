function checkNID() {
	let nid = (document.getElementById("nid").value).trim();
  
	if (nid === "") {
	  alert("Please enter National ID!");
	  return false;
	}
	if (isNaN(nid) || !/^\d+$/.test(nid)) {
	  alert("National ID must contain numbers only!");
	  return false;
	}
	if (nid.length !== 13) {
	  alert("National ID must be exactly 13 digits!");
	  return false;
	}
	return true;
}

function checkGender() {
	let radios = document.getElementsByName("genderRad");
	for (let i = 0; i < radios.length; i++) {
	  if (radios[i].checked) return true;
	}
	return false;
}

function checkWorkDays() {
	let val = (document.getElementById("workDays").value).trim();
	if (val === "") return false;
	if (!/^[1-6]$/.test(val)) return false;
	return true;
}

function validateForm() {
	let fname = (document.getElementById("fname").value).trim();
	let lname = (document.getElementById("lname").value).trim();
	let workDaysVal = (document.getElementById("workDays").value).trim();
  
	if (!checkNID()) {
	  document.getElementById("nid").focus();
	  return false;
	}
  
	if (fname === "") {
	  alert("Please enter First Name!");
	  document.getElementById("fname").focus();
	  return false;
	}
  
	if (lname === "") {
	  alert("Please enter Last Name!");
	  document.getElementById("lname").focus();
	  return false;
	}
  
	if (!checkGender()) {
	  alert("Please select Gender!");
	  return false;
	}
  
	if (workDaysVal === "") {
	  alert("Please enter number of work days!");
	  document.getElementById("workDays").focus();
	  return false;
	}
  
	if (!checkWorkDays()) {
	  alert("Work days must be a number between 1 and 6!");
	  document.getElementById("workDays").focus();
	  return false;
	}
  
	let total = payRateCalculate();
	alert("Your weekly pay rate is " + total + " THB");
	return false;
}