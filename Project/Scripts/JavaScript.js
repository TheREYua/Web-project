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