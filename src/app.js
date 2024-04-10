// Progression 1 - Create a Manager array and return it
let managerFullName = "Alex Ferguson";
let managerLifetime = 78;
let leadingTeam = "Manchester FC";
let victories = 27;

// Function to create manager array
function buildManagerProfile(fullName, lifetime, team, victories) {
  let managerDetails = [fullName, lifetime, team, victories];
  return managerDetails;
}

// Do not edit the code below
try {
  var managerProfile = buildManagerProfile(
    managerFullName,
    managerLifetime,
    leadingTeam,
    victories
  );
} catch (e) {
  // Expected error handling
}

// Progression 2 - Create a formation object and return it
var teamFormation = [4, 4, 3];

// Function to create formation object
function generateFormation(formation) {
  if (formation.length === 0) {
    return null;
  }
  let formationStructure = {
    defender: formation[0],
    midfield: formation[1],
    forward: formation[2],
  };
  return formationStructure;
}

// Do not edit the code below
try {
  var formationSetup = generateFormation(teamFormation);
} catch (e) {
  // Error handling
}

// Progression 3 - Filter players by debut year
function filterPlayersByDebut(year) {
  let filteredPlayers = players.filter(player => player.debut === year);
  return filteredPlayers;
}

// Progression 4 - Filter players by position
function filterPlayersByPosition(position) {
  let positionPlayers = players.filter(player => player.position === position);
  return positionPlayers;
}

// Progression 5 - Filter players by award
function filterPlayersByAward(awardTitle) {
  let awardedPlayers = [];
  players.forEach(player => {
    player.awards.forEach(award => {
      if (award.name === awardTitle) {
        awardedPlayers.push(player);
      }
    });
  });
  return awardedPlayers;
}

// Progression 6 - Filter players who won a specific award a given number of times
function filterByAwardTimes(awardTitle, times) {
  let specificAwardWinners = [];
  players.forEach(player => {
    let awardCount = player.awards.filter(award => award.name === awardTitle).length;
    if (awardCount === times) {
      specificAwardWinners.push(player);
    }
  });
  return specificAwardWinners;
}

// Progression 7 - Filter players by award and nationality
function filterByAwardAndCountry(awardTitle, nationality) {
  return filterPlayersByAward(awardTitle).filter(player => player.country === nationality);
}

// Progression 8 - Advanced filtering
function advancedPlayerFilter(awardsCount, teamName, maxAge) {
  return players.filter(player => player.age < maxAge && player.team === teamName && player.awards.length >= awardsCount);
}

// Progression 9 - Sort players by age in descending order
function sortPlayersByAgeDescending() {
  return [...players].sort((a, b) => b.age - a.age);
}

// Progression 10 - Sort team players by awards count in descending order
function sortTeamPlayersByAwards(teamName) {
  return players.filter(player => player.team === teamName)
                .sort((a, b) => b.awards.length - a.awards.length);
}

// Challenge 1 - Sort by name, for players meeting specific criteria
function sortPlayersByCriteria(awardTitle, timesWon, nationality) {
  let eligiblePlayers = filterByAwardTimes(awardTitle, timesWon).filter(player => player.country === nationality);
  return eligiblePlayers.sort((a, b) => a.name.localeCompare(b.name));
}

// Challenge 2 - Sort players older than a certain age, by name
function sortPlayersOlderThan(age) {
  return players.filter(player => player.age > age)
                .sort((a, b) => a.name.localeCompare(b.name));
}

