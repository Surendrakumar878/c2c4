var Arr = JSON.parse(localStorage.getItem("schedule"));
displayData(Arr);



var favourites = JSON.parse(localStorage.getItem("favourites")) || [];


function filterVenue() {
    var selected = document.querySelector("#filterVenue").value;
    if ("none" == selected) {
        displayData(Arr);

    } else {
        // filter will return array whenever it satifies the given condn

        var filteredList = Arr.filter(function(elem) {
            return elem.venue == selected;
        });

        console.log(filteredList);
        displayData(filteredList);
    }
}


function displayData(data) {
    document.querySelector("tbody").innerHTML = "";

    data.forEach(function(elem) {
        var tr = document.createElement("tr");

        var td1 = document.createElement("td");
        td1.innerText = elem.matchNum;

        var td2 = document.createElement("td");
        td2.innerText = elem.teamA;

        var td3 = document.createElement("td");
        td3.innerText = elem.teamB;

        var td4 = document.createElement("td");
        td4.innerText = elem.date;
        var td6 = document.createElement("td");
        td6.innerText = elem.venue;
        var td5 = document.createElement("td");
        td5.innerText = "favourites";
        td5.style.color = "blue";
        td5.style.cursor = "pointer";
        td5.addEventListener("click", function() {
            //writing logic here
            bookMarkFun(elem);
        });

        tr.append(td1, td2, td3, td4, td6, td5);

        document.querySelector("tbody").append(tr);
    });
}

function bookMarkFun(elem) {
    console.log(elem);
    favourites.push(elem);
    localStorage.setItem("favourites", JSON.stringify(favourites));
}