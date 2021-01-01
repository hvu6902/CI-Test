let teamList = [
    {
        name: "Arsenal",
        points: 99,
        GD: 45
    },
    {
      name: "Chelsea",
      points: 75,
      GD: 39  
    },
    {
        name: "Manchester United",
        points: 60,
        GD: 29
    },
    {
        name: "Liverpool",
        points: 88,
        GD: 39
    }
]

// function pointSort(points) {
//     return points.sort(function(a,b){return a - b})
// }
// function sortByAlphabet(name){
//     return name.sort()
// }
// function sortByGD(GD){
//     return GD.sort(function(a,b){return a - b})
// }
// for (let i = 0; i < leagueTable.length; i++) {
    
    
// }
function sortRank(teamList) {
    let newTeamList = teamList.sort(function(team1, team2){
        if (team1.points === team2.points) return team1.GD - team2.GD;
        return team2.points - team1.points;
    })
    for (let i = 0; i < newTeamList.length; i++) {
        const team = newTeamList[i];
        team['position'] = i + 1;
    }
    return newTeamList;
}
console.log(sortRank(teamList));