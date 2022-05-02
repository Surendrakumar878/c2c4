document.querySelector("#masaiForm").addEventListener("submit", Submit);
var Arr = JSON.parse(localStorage.getItem("schedulet")) || [];

function Submit() {
    event.preventDefault();



    var data = {
        matchNum: document.querySelector("#matchNum").value,
        teamA: masaiForm.teamA.value,
        teamB: masaiForm.teamB.value,
        date: masaiForm.date.value,
        venue: masaiForm.venue.value,
    };
    Arr.push(data);
    console.log(Arr);

    localStorage.setItem("schedule", JSON.stringify(Arr));

}