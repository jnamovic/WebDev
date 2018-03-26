function showDescription(descript){
    $("#description").html("Description: " + descript);
}

function hideDescription(){
    $("#description").html("");
}

function validate(){
	if(new Date($("#txtDate").val())> new Date()){
		alert("That date of birth is invalid. Please enter a date before today.")
		return false;
	}

	var phone = $("#phone").val();
	if(isNaN(phone)||phone.length!=10){
		alert("That phone number is invalid. Please enter a ten digit number.")
		return false;
	}
	
	return true;
}