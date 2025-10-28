// players.js - Union University Men's Basketball 2025
const unionPlayers = [
  {
    number: 1,
    name: "Jamiir Allen",
    position: "Point Guard",
    height: "6-0",
    weight: "170",
    class: "Sophomore",
    hometown: "Milwaukee, WI",
    previous: "Saint Cloud State University",
    highschool: "Wisconsin Lutheran HS"
  },
  {
    number: 3,
    name: "Sam Youngblood",
    position: "Guard",
    height: "6-4",
    weight: "205",
    class: "Graduate Student",
    hometown: "Birmingham, AL",
    previous: "Auburn University at Montgomery",
    highschool: "Mcadory High School"
  },
  {
    number: 5,
    name: "Mason McBride",
    position: "Guard",
    height: "6-3",
    weight: "185",
    class: "Senior",
    hometown: "Manvel, TX",
    previous: "Houston Christian University",
    highschool: "Mt. Zion Prep"
  },
  {
    number: 11,
    name: "Devaki Garr",
    position: "Point Guard",
    height: "6-0",
    weight: "165",
    class: "Junior",
    hometown: "Nashville, TN",
    previous: "Ensworth High School",
    highschool: "Ensworth HS"
  },
  {
    number: 13,
    name: "Knoah Carver",
    position: "Guard",
    height: "6-4",
    weight: "195",
    class: "Junior",
    hometown: "Charlotte, NC",
    previous: "Cape Fear Community College",
    highschool: "Ardrey Kell HS"
  },
  {
    number: 15,
    name: "Ryan Lewis",
    position: "Point Guard / Shooting Guard",
    height: "6-2",
    weight: "175",
    class: "Freshman",
    hometown: "Charlotte, NC",
    previous: "Mount Zion Prep Academy",
    highschool: "Mount Zion Prep"
  },
  {
    number: 20,
    name: "Casey Williams",
    position: "Forward",
    height: "6-8",
    weight: "198",
    class: "Freshman",
    hometown: "Murfreesboro, TN",
    previous: "Norcross High School",
    highschool: "Norcross HS"
  },
  {
    number: 21,
    name: "JaDyn Lee",
    position: "Point Guard / Shooting Guard",
    height: "6-1",
    weight: "180",
    class: "Freshman",
    hometown: "Munford, TN",
    previous: "Munford High School",
    highschool: "Munford HS"
  },
  {
    number: 22,
    name: "Jack Shackelford",
    position: "Forward",
    height: "6-7",
    weight: "215",
    class: "Sophomore",
    hometown: "Memphis, TN",
    previous: "Bartlett High School",
    highschool: "Bartlett HS"
  },
  {
    number: 23,
    name: "Patrick McConnell",
    position: "Guard",
    height: "6-1",
    weight: "190",
    class: "Freshman",
    hometown: "Fairview, TN",
    previous: "Franklin Classical",
    highschool: "Franklin Classical"
  },
  {
    number: 32,
    name: "Liam McConnell",
    position: "Guard / Forward",
    height: "6-5",
    weight: "110",
    class: "Freshman",
    hometown: "Belfast, ME",
    previous: "Home School",
    highschool: "Home School"
  },
  {
    number: 33,
    name: "Ty Clark",
    position: "Shooting Guard",
    height: "6-2",
    weight: "185",
    class: "Freshman",
    hometown: "Andrews, NC",
    previous: "Andrews HS",
    highschool: "Andrews HS"
  },
  {
    number: 34,
    name: "Terrence Ringo Jr.",
    position: "Forward",
    height: "6-6",
    weight: "210",
    class: "Senior",
    hometown: "Evansville, IN",
    previous: "Kentucky Wesleyan College",
    highschool: "Harrison HS"
  },
  {
    number: 45,
    name: "Will Lovings-Watts",
    position: "Guard",
    height: "6-5",
    weight: "200",
    class: "Junior",
    hometown: "Jeffersonville, IN",
    previous: "James Madison University",
    highschool: "Jeffersonville HS"
  }
];
🧱 Roster Display Page (union.html)
Create a page named union.html and paste this inside:

html
Copy code
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <title>Union University Roster</title>
  <script src="players.js" defer></script>
  <style>
    body { font-family: Arial, sans-serif; margin: 20px; }
    .grid { display: flex; flex-wrap: wrap; gap: 20px; }
    .player-card {
      border: 1px solid #ccc;
      padding: 15px;
      border-radius: 10px;
      width: 250px;
      background-color: #f9f9f9;
    }
    .player-card h3 { margin-top: 0; }
    .number { font-size: 24px; font-weight: bold; }
  </style>
</head>
<body>
  <h1>Union University Men's Basketball Roster (2025)</h1>
  <div id="roster" class="grid"></div>

  <script>
    const container = document.getElementById("roster");
    unionPlayers.forEach(player => {
      const card = document.createElement("div");
      card.className = "player-card";
      card.innerHTML = `
        <div class="number">#${player.number}</div>
        <h3>${player.name}</h3>
        <p><strong>Position:</strong> ${player.position}</p>
        <p><strong>Height/Weight:</strong> ${player.height} / ${player.weight}</p>
        <p><strong>Class:</strong> ${player.class}</p>
        <p><strong>Hometown:</strong> ${player.hometown}</p>
        <p><strong>Previous School:</strong> ${player.previous}</p>
        <p><strong>High School:</strong> ${player.highschool}</p>
      `;
      container.appendChild(card);
    });
  </script>
</body>
</html>
