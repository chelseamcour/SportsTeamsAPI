const baseURL = "https://www.thesportsdb.com/api/v1/json/1/searchteams.php";
let url;

const searchTerm = document.querySelector(".searchTerm");
const search = document.querySelector("form");
const list = document.getElementById("results");




search.addEventListener("submit", fetchResults);

function fetchResults(e) {
    e.preventDefault();
    url = baseURL + "?t=" +searchTerm.value.split(" ").join("_");
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
            let infoHolder = document.createElement("div");
            let teams = document.createElement("h5");
            let teamsBadge = document.createElement("img");
            let teamsName = document.createElement("p");
            let teamsSport = document.createElement("p");
            let teamsLeague = document.createElement("p");
            let teamsCountry = document.createElement("p");
            let teamsFormedYear = document.createElement("p");
            let teamsDescriptionEN = document.createElement("p");
            //let teamStadium = document.createElement("p");
            let teamsWebsite = document.createElement("p");

            teams.innerText = "Team Name: " + p.strTeam;
            teamsSport.innerText = "Sport: " + p.strSport;
            teamsLeague.innerText = "League: " + p.strLeague;
            teamsCountry.innerText = "Country: " + p.strCountry;
            teamsFormedYear.innerText = "Year Formed: " + p.intFormedYear;
            teamsDescriptionEN.innerText = "About Team: " + p.strDescriptionEN;
            teamsWebsite.innerText = "Website: " + p.strWebsite;
            teamsBadge.src = p.strTeamBadge;
            teamsBadge.height = 100;
            teamsBadge.width = 100;
            
            list.appendChild(teamsDiv);
            teamsDiv.appendChild(infoHolder);
            infoHolder.appendChild(teams);
            infoHolder.appendChild(teamsName);
            infoHolder.appendChild(teamsSport);
            infoHolder.appendChild(teamsLeague);
            infoHolder.appendChild(teamsCountry);
            infoHolder.appendChild(teamsFormedYear);
            infoHolder.appendChild(teamsDescriptionEN);
            infoHolder.appendChild(teamsWebsite);
            infoHolder.appendChild(teamsBadge);

            teamsDiv.className = "teamsDiv";
            infoHolder.className = "infoHolder";
            teams.className = "teams";
            teamsName.className = "info";
            teamsSport.className = "info";
            teamsLeague.className = "info";
            teamsCountry.className = "info";
            teamsFormedYear.className = "info";
            teamsDescriptionEN.className = "info";
            teamsWebsite.className = "info";
            teamsBadge.className = "info";

            
        });
    }







