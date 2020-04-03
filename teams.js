const baseURL = "https://www.thesportsdb.com/api/v1/json/1/searchteams.php";
let url;

const search_input = document.querySelector(".search_input");
const search = document.querySelector("form");
const list = document.getElementById("results");




search.addEventListener("submit", fetchResults);

function fetchResults(e) {
    e.preventDefault();
    url = baseURL + "?t=" +search_input.value.split(" ").join("_");
    console.log(url);

    fetch(url).then(function (result) {
        console.log(result);
        return result.json();
    }).then(function (json) {
        console.log(json);
        displayResults(json);
    });
}

function displayResults(json) {
    while (list.firstChild) {
        list.removeChild(list.firstChild);
    }
  let teamInfo = json.teams.forEach(p => {

            let teamsDiv = document.createElement("div");
            let info = document.createElement("div");
            let teams = document.createElement("h5");
            let teamsBadge = document.createElement("img");
            let teamsName = document.createElement("p");
            let teamsSport = document.createElement("p");
            let teamsLeague = document.createElement("p");
            let teamsCountry = document.createElement("p");
            let teamsFormedYear = document.createElement("p");
            let teamsDescriptionEN = document.createElement("p");
            //let teamStadium = document.createElement("p");

            teams.innerText = p.strTeam;
            teamsSport.innerHTML = "<b>Sport: </b>" + p.strSport;
            teamsLeague.innerHTML = "<b>League: </b>" + p.strLeague;
            teamsCountry.innerHTML = "<b>Country: </b>" + p.strCountry;
            teamsFormedYear.innerHTML = "<b>Year Formed: </b>" + p.intFormedYear;
            teamsDescriptionEN.innerHTML = "<b>About Team: </b>" + p.strDescriptionEN;
            teamsBadge.src = p.strTeamBadge;
            teamsBadge.height = 100;
            teamsBadge.width = 100;
            
            list.appendChild(teamsDiv);
            teamsDiv.appendChild(info);
            info.appendChild(teams);
            info.appendChild(teamsName);
            info.appendChild(teamsSport);
            info.appendChild(teamsLeague);
            info.appendChild(teamsCountry);
            info.appendChild(teamsFormedYear);
            info.appendChild(teamsDescriptionEN);
            info.appendChild(teamsBadge);

            teamsDiv.className = "teamsDiv";
            info.className = "info";
            teams.className = "teams";
            teamsName.className = "name";
            teamsSport.className = "sport";
            teamsLeague.className = "league";
            teamsCountry.className = "country";
            teamsFormedYear.className = "formed";
            teamsDescriptionEN.className = "description";
            teamsBadge.className = "badge";

            
        });
    }







