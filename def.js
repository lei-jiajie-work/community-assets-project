var contents = {
    chinatown : {
        text : "This is Chinatown.",
        image : ["chinatown1.png", "chinatown2.png", "chinatown3.png"]
    },
    pingTomPark : {
        text : "",
        image : ""
    }, 
    johnCharlesHainesElementary : {
        text : "",
        image : ""
    },
    parkToShop : {
        text : "",
        image : ""
    },
    SaintAnnasBakery : {
        text : "",
        image : ""
    },
    CASLHeadquarters : {
        text : "",
        image : ""
    },
    puiTak : {
        text : "",
        image : ""
    }
}


function load(name = "chinatown", arr = false) {
    document.getElementById("content-paragraph").innerHTML = contents[name]["text"];
    if (arr == true) {
        var image_array = contents[name]["image"];
        var ran = Math.round(Math.random() * (image_array.length - 1));
        document.getElementById("content-image").setAttribute("src", contents[name]["image"][ran]);
    } else {
        document.getElementById("content-image").setAttribute("src", contents[name]["image"]);
    }
}
