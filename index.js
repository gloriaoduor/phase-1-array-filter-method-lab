function findMatching(drivers, string1) {
    return drivers.filter((match) => match.toLowerCase() === string1.toLowerCase());
}
  
function fuzzyMatch(drivers, string2) {
    return drivers.filter((elementMatch) => elementMatch.toLowerCase().indexOf(string2.toLowerCase()) === 0);
}

function matchName(drivers, string3) {
    return drivers.filter((record) => record.name === string3);
}