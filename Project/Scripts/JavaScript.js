var urlHot = "https://newsapi.org/v1/articles?source=bbc-news&sortBy=top&apiKey=d3b64cd0b8fc4530bb2d3b2e3d8bd869";
var urlSport = " https://newsapi.org/v1/articles?source=bbc-sport&sortBy=top&apiKey=d3b64cd0b8fc4530bb2d3b2e3d8bd869";
var urlBuissnes = "https://newsapi.org/v1/articles?source=business-insider&sortBy=top&apiKey=d3b64cd0b8fc4530bb2d3b2e3d8bd869";
var urlTechnology = " https://newsapi.org/v1/articles?source=ars-technica&sortBy=top&apiKey=d3b64cd0b8fc4530bb2d3b2e3d8bd869";
var urlIt = "https://newsapi.org/v1/articles?source=hacker-news&sortBy=top&apiKey=d3b64cd0b8fc4530bb2d3b2e3d8bd869";
var n = 9;
var xhttp = new XMLHttpRequest();

xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
        //document.getElementById("main").innerHTML = xhttp.responseText;
        var obj = JSON.parse(this.responseText);
        for (var i = 0; i < n; i++)
            $(hot).append("<div class = 'topic'><a href = " +
                obj.articles[i].url + ">" +
                "<span class = 'title'>" +
                obj.articles[i].title +
                "</span><span class = 'publisedDate'>" + obj.articles[i].publishedAt +
                "</span></a><hr /><div><img class ='img' alt='image not found' src='" +
                obj.articles[i].urlToImage +
                "' /></div><hr /><div class='description'>" +
                obj.articles[i].description + "<div></div>")

    }

};
xhttp.open("GET", urlHot ,true);
xhttp.send();

var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
        //document.getElementById("main").innerHTML = xhttp.responseText;
        var obj = JSON.parse(this.responseText);
        for (var i = 0; i < n; i++)
            $(sport).append("<div class = 'topic'><a href = " +
                obj.articles[i].url + ">" +
                "<span class = 'title'>" +
                obj.articles[i].title +
                "</span><span class = 'publisedDate'>" + obj.articles[i].publishedAt +
                "</span></a><hr /><div><img class ='img' alt='image not found' src='" +
                obj.articles[i].urlToImage +
                "' /></div><hr /><div class='description'>" +
                obj.articles[i].description + "<div></div>")

    }
};
xhttp.open("GET", urlSport, true);
xhttp.send();

var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
        //document.getElementById("main").innerHTML = xhttp.responseText;
        var obj = JSON.parse(this.responseText);
        for (var i = 0; i < n; i++)
            $(buissnes).append("<div class = 'topic'><a href = " +
                obj.articles[i].url + ">" +
                "<span class = 'title'>" +
                obj.articles[i].title +
                "</span><span class = 'publisedDate'>" + obj.articles[i].publishedAt +
                "</span></a><hr /><div><img class ='img' alt='image not found' src='" +
                obj.articles[i].urlToImage +
                "' /></div><hr /><div class='description'>" +
                obj.articles[i].description + "<div></div>")

    }
};
xhttp.open("GET", urlBuissnes, true);
xhttp.send();

var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
        //document.getElementById("main").innerHTML = xhttp.responseText;
        var obj = JSON.parse(this.responseText);
        for (var i = 0; i < n; i++)
            $(technology).append("<div class = 'topic'><a href = " +
                obj.articles[i].url + ">" +
                "<span class = 'title'>" +
                obj.articles[i].title +
                "</span><span class = 'publisedDate'>" + obj.articles[i].publishedAt +
                "</span></a><hr /><div><img class ='img' alt='image not found' src='" +
                obj.articles[i].urlToImage +
                "' /></div><hr /><div class='description'>" +
                obj.articles[i].description + "<div></div>")

    }
};
xhttp.open("GET", urlTechnology, true);
xhttp.send();

var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
        //document.getElementById("main").innerHTML = xhttp.responseText;
        var obj = JSON.parse(this.responseText);
        for (var i = 0; i < n; i++)
            $(it).append("<div class = 'topic'><a href = " +
                obj.articles[i].url + ">" +
                "<span class = 'title'>" +
                obj.articles[i].title +
                "</span><span class = 'publisedDate'>" + obj.articles[i].publishedAt +
                "</span></a><hr /><div><img class ='img' alt='image not found' src='" +
                obj.articles[i].urlToImage +
                "' /></div><hr /><div class='description'>" +
                obj.articles[i].description + "<div></div>")

    }
};
xhttp.open("GET", urlIt, true);
xhttp.send();



// Get the modal
var modal = document.getElementById('id01'); // скрипт для логіну

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}






/*до реєстрації*/

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
    if (document.getElementById("YY").value = date.getFullYY()) {
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

    if (document.getElementById("name").value == "") {
        alert("Fill in all fields");
        return;
    }
    if (document.getElementById("surname").value == "") {
        alert("Fill in all fields");
        return;
    }
    if (document.getElementById("secondName").value == "") {
        alert("Fill in all fields");
        return;
    }
    if (document.getElementById('DD').value == "") {
        alert("Fill in all fields");
        return;
    }
    if (document.getElementById('MM').value == "") {
        alert("Fill in all fields");
        return;
    }
    if (document.getElementById('YY').value == "") {
        alert("Fill in all fields");
        return;
    }
    if (document.getElementById('sex').value == "") {
        alert("Fill in all fields");
        return;
    }
    if (document.getElementById('socialLink').value == "") {
        alert("Fill in all fields");
        return;
    }

    localStorage.setItem('name', document.getElementById("name").value);
    localStorage.setItem('surname', document.getElementById("surname").value);
    localStorage.setItem('secondName', document.getElementById("secondName").value);
    localStorage.setItem('DD', document.getElementById("DD").value);
    localStorage.setItem('MM', document.getElementById("MM").value);
    localStorage.setItem('YY', document.getElementById("YY").value);
    localStorage.setItem('sex', document.getElementById("sex").value);
    localStorage.setItem('socialLink', document.getElementById("socialLink").value);

    var res = socialLinkValue.match(/(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g);
    if (res != null) {
        alert("Registration successfully completed " + "\n" + "Your surname : " + localStorage.getItem("surname") + "\n" + "Your name : " + localStorage.getItem("name") + "\n" + "Second Name: " + localStorage.getItem("secondName") + '\n' +
        "Date of Birth : " + localStorage.getItem("DD") + "." + localStorage.getItem("MM") + "." + localStorage.getItem("YY") + "\n" + "SEX : " + localStorage.getItem("sex") + "\n" + "Link to the social network : " + socialLinkValue);
    } else {
        alert("Enter correct socialLink");
        return false;
    }
}

















