function checkNID() {
	let nid = (document.getElementById("nid").value).trim();
  
	if (nid === "") {
	  alert("Please enter National ID!");
	  return false;
	}
	if (isNaN(nid)) {
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
	if (isNaN(val)) return false;
	let num = parseInt(val);
	if (num < 1 || num > 6) return false;
	return true;
  }
  
  function validateForm() {
	let fname = (document.getElementById("fname").value).trim();
	let lname = (document.getElementById("lname").value).trim();
	let workDaysVal = (document.getElementById("workDays").value).trim();
  
	// 1. Check National ID
	if (!checkNID()) {
	  document.getElementById("nid").focus();
	  return false;
	}
  
	// 2. Check First Name
	if (fname === "") {
	  alert("Please enter First Name!");
	  document.getElementById("fname").focus();
	  return false;
	}
  
	// 3. Check Last Name
	if (lname === "") {
	  alert("Please enter Last Name!");
	  document.getElementById("lname").focus();
	  return false;
	}
  
	// 4. Check Gender
	if (!checkGender()) {
	  alert("Please select Gender!");
	  return false;
	}
  
	// 5. Check Work Days (empty)
	if (workDaysVal === "") {
	  alert("Please enter number of work days!");
	  document.getElementById("workDays").focus();
	  return false;
	}
  
	// 6. Check Work Days (valid range 1-6)
	if (!checkWorkDays()) {
	  alert("Work days must be a number between 1 and 6!");
	  document.getElementById("workDays").focus();
	  return false;
	}
  
	// All valid → Calculate and show weekly pay rate
	let total = payRateCalculate();
	alert("Your weekly pay rate is " + total + " THB");
	return false;
  }