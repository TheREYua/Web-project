var select = document.getElementById("DD");

for (var i = 0; i <= 31; i++) {
	var option = document.createElement("option");
	option.value = i;
	option.innerHTML = i;
	select.appendChild(option);
}

var select = document.getElementById("MM");

for (var i = 0; i <= 12; i++) {
	var option = document.createElement("option");
	option.value = i;
	option.innerHTML = i;
	select.appendChild(option);
}

function Date() {
	var date = new date();
	bool = true;
	if (document.getElementById("YY").value = date.getFullYY())
	{
		if (document.getElementById("MM").value > date.getMM()) bool = false;
		if (document.getElementById("MM").value == date.getMM());
		if (document.getElementById("DD").value > date.getDD()) bool = false;
	}
	return bool;
}

var select = document.getElementById("YY");

for (var i = 1945; i <= 2017; i++) {
	var option = document.createElement("option");
	option.value = i;
	option.innerHTML = i;
	select.appendChild(option);
}

function Register() {
    var Site = document.getElementById('socialLink');
    var socialLinkValue = Site.value;

    if(document.getElementById("name").value =="") {
    	alert("Fill in all fields");
    	return;
    }
    if(document.getElementById("surname").value =="") {
    	alert("Fill in all fields");
    	return;
    }
    if(document.getElementById("secondName").value =="") {
    	alert("Fill in all fields");
    	return;
    }
    if(document.getElementById('DD').value =="") {
    	alert("Fill in all fields");
    	return;
    }
    if(document.getElementById('MM').value =="") {
    	alert("Fill in all fields");
    	return;
    }
    if(document.getElementById('YY').value =="") {
    	alert("Fill in all fields");
    	return;
    }
    if(document.getElementById('sex').value =="") {
    	alert("Fill in all fields");
    	return;
    }
    if(document.getElementById('socialLink').value =="") {
    	alert("Fill in all fields");
    	return;
    }

    localStorage.setItem('name',document.getElementById("name").value);
	localStorage.setItem('surname',document.getElementById("surname").value);
    localStorage.setItem('secondName',document.getElementById("secondName").value);
    localStorage.setItem('DD',document.getElementById("DD").value);
    localStorage.setItem('MM',document.getElementById("MM").value);
    localStorage.setItem('YY',document.getElementById("YY").value);
    localStorage.setItem('sex',document.getElementById("sex").value);
    localStorage.setItem('socialLink',document.getElementById("socialLink").value);
    
    var res = socialLinkValue.match(/(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g);
    if(res != null) {
    	alert( "Registration successfully completed "+"\n" +"Your surname : " + localStorage.getItem("surname")+ "\n"+ "Your name : " + localStorage.getItem("name") +"\n" +"Second Name: "+localStorage.getItem("secondName")+'\n'+
        "Date of Birth : " + localStorage.getItem("DD") +"."+     localStorage.getItem("MM") + "." + localStorage.getItem("YY")+ "\n" + "SEX : " + localStorage.getItem("sex") + "\n" +"Link to the social network : "+ socialLinkValue );
    } else {
    	alert("Enter correct socialLink");
        return false;
    }
}