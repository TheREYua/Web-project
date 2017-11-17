var urlBBC = "https://newsapi.org/v1/articles?source=bbc-news&sortBy=top&apiKey=d3b64cd0b8fc4530bb2d3b2e3d8bd869";
var urlBBCSport = " https://newsapi.org/v1/articles?source=bbc-sport&sortBy=top&apiKey=d3b64cd0b8fc4530bb2d3b2e3d8bd869";
var urlBuissnesInsider = "https://newsapi.org/v1/articles?source=business-insider&sortBy=top&apiKey=d3b64cd0b8fc4530bb2d3b2e3d8bd869";
var urlTechnology = " https://newsapi.org/v1/articles?source=ars-technica&sortBy=top&apiKey=d3b64cd0b8fc4530bb2d3b2e3d8bd869";
var urlReddit = "https://newsapi.org/v2/top-headlines?sources=reddit-r-all&apiKey=d3b64cd0b8fc4530bb2d3b2e3d8bd869";
var urlIGN = "https://newsapi.org/v2/top-headlines?sources=ign&apiKey=d3b64cd0b8fc4530bb2d3b2e3d8bd869";
var urlMTV = "https://newsapi.org/v2/top-headlines?sources=mtv-news&apiKey=d3b64cd0b8fc4530bb2d3b2e3d8bd869";
var urlNews24 = "https://newsapi.org/v2/top-headlines?sources=news24&apiKey=d3b64cd0b8fc4530bb2d3b2e3d8bd869";
var urlRecode = "https://newsapi.org/v2/top-headlines?sources=recode&apiKey=d3b64cd0b8fc4530bb2d3b2e3d8bd869";
var urlWallStreet = "https://newsapi.org/v2/top-headlines?sources=the-wall-street-journal&apiKey=d3b64cd0b8fc4530bb2d3b2e3d8bd869";

var news = ["BBC", "sport", "BuissnesInsider", "technology", "Reddit", "IGN", "MTV", "News24", "Recode", "WallStreet"];
//var urls[10];
//news[0] = "BBC";
//urls[0] = "https://newsapi.org/v1/articles?source=bbc-news&sortBy=top&apiKey=d3b64cd0b8fc4530bb2d3b2e3d8bd869";


var n = 9;

var xhttp = new XMLHttpRequest();

xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
        var obj = JSON.parse(this.responseText);
        for (var i = 0; i < n; i++)
            $(BBC).append("<div class = 'topic'><a href = " +
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
xhttp.open("GET", urlBBC ,true);
xhttp.send();

var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
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
xhttp.open("GET", urlBBCSport, true);
xhttp.send();

var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
        var obj = JSON.parse(this.responseText);
        for (var i = 0; i < n; i++)
            $(BuissnesInsider).append("<div class = 'topic'><a href = " +
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
xhttp.open("GET", urlBuissnesInsider, true);
xhttp.send();

var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
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
        var obj = JSON.parse(this.responseText);
        for (var i = 0; i < n; i++)
            $(Reddit).append("<div class = 'topic'><a href = " +
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
xhttp.open("GET", urlReddit, true);
xhttp.send();

var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
        var obj = JSON.parse(this.responseText);
        for (var i = 0; i < n; i++)
            $(IGN).append("<div class = 'topic'><a href = " +
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
xhttp.open("GET", urlIGN, true);
xhttp.send();

var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
        var obj = JSON.parse(this.responseText);
        for (var i = 0; i < n; i++)
            $(MTV).append("<div class = 'topic'><a href = " +
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
xhttp.open("GET", urlMTV, true);
xhttp.send();

var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
        var obj = JSON.parse(this.responseText);
        for (var i = 0; i < n; i++)
            $(News24).append("<div class = 'topic'><a href = " +
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
xhttp.open("GET", urlNews24, true);
xhttp.send();

var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
        var obj = JSON.parse(this.responseText);
        for (var i = 0; i < n; i++)
            $(Recode).append("<div class = 'topic'><a href = " +
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
xhttp.open("GET", urlRecode, true);
xhttp.send();

var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
        var obj = JSON.parse(this.responseText);
        for (var i = 0; i < n; i++)
            $(WallStreet).append("<div class = 'topic'><a href = " +
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
xhttp.open("GET", urlWallStreet, true);
xhttp.send();

