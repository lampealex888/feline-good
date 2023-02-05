function getPandaImage(img, f) { 
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
        var data = JSON.parse(this.responseText);
        document.getElementById(img).src = data.image;
        document.getElementById(img).alt = "panda";
        document.getElementById(f).innerText = data.fact;
        }
    };
    xhttp.open("GET", "https://some-random-api.ml/animal/panda", true);
    xhttp.send();
}

function getCatImage(img, f) { 
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
        var data = JSON.parse(this.responseText);
        document.getElementById(img).src = data.image;
        document.getElementById(img).alt = "cat";
        document.getElementById(f).innerText = data.fact;
        }
    };
    xhttp.open("GET", "https://some-random-api.ml/animal/cat", true);
    xhttp.send();
}

function getDogImage(img, f) { 
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
        var data = JSON.parse(this.responseText);
        document.getElementById(img).src = data.image;
        document.getElementById(img).alt = "dog";
        document.getElementById(f).innerText = data.fact;
        }
    };
    xhttp.open("GET", "https://some-random-api.ml/animal/dog", true);
    xhttp.send();
}

function getFoxImage(img, f) { 
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
        var data = JSON.parse(this.responseText);
        document.getElementById(img).src = data.image;
        document.getElementById(img).alt = "fox";
        document.getElementById(f).innerText = data.fact;
        }
    };
    xhttp.open("GET", "https://some-random-api.ml/animal/fox", true);
    xhttp.send();
  };

function getBirdImage(img, f) {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        var data = JSON.parse(this.responseText);
        document.getElementById(img).src = data.image;
        document.getElementById(img).alt = "bird";
        document.getElementById(f).innerText = data.fact;
        }
    };
    xhttp.open("GET", "https://some-random-api.ml/animal/bird", true);
    xhttp.send();
};

function getMemeImage(img, fact) {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        var data = JSON.parse(this.responseText);
        document.getElementById(img).src = data.url;
        document.getElementById(img).alt = "meme";
        document.getElementById(fact).innerText = data.title;
        }
    };
    xhttp.open("GET", "https://meme-api.com/gimme", true);
    xhttp.send();
};

function getJokeImage(img, fact) {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        var data = JSON.parse(this.responseText);
        document.getElementById(img).src = "";
        document.getElementById(img).alt = "joke";
        document.getElementById(fact).innerText = data.joke;
        }
    };
    xhttp.open("GET", "https://some-random-api.ml/others/joke", true);
    xhttp.send();
};