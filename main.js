const ModSquad = {
    "members": ["Pete Cochran", "Linc Hayes", "Julie Barnes", "Capt. Adam Greer", "Chief Barney Metcalf"],
    "series": {
        "start": "1968",
        "end": "1973"
    }
}


let contianer = document.querySelector("article");
let HTMLRep = document.createElement("h1");
contianer.appendChild(HTMLRep);
HTMLRep.innerHTML = "The Mob Squad";


function mob(member){
let squad = document.createElement("p");
HTMLRep.appendChild(squad);
squad.innerHTML = member;
}


ModSquad.members.forEach(member => {
    mob(member);
});