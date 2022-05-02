var favourites = JSON.parse(localStorage.getItem("favourites"));
// 3
displayData(favourites);

function displayData(data) {
    data.forEach(function(elem, index) {
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
        td5.innerText = "Delete";
        td5.setAttribute("class", "deleteText");
        td5.addEventListener("click", function() {
            deleteItem(elem, index);
        });

        tr.append(td1, td2, td3, td4, td6, td5);

        document.querySelector("tbody").append(tr);
    });
}

function deleteItem(elem, index) {
    favourites.splice(index, 1);
    localStorage.setItem("favourites", JSON.stringify(favourites));
    window.location.reload();

}