function Oscars(input) {
    let index = 0;
    let actorName = input[index];
    index++
    let totalpoints = Number(input[index]);
    index++
    let juryCount = input[index];
    index++

    for (let i = 0; i < juryCount; i++) {
        let tempName = input[index];
        index++;
        let pointsAdded = Number(input[index]);
        index++;
        let res = tempName.length * pointsAdded / 2;
        totalpoints += res;
        if (totalpoints > 1250.5) {
            console.log(`Congratulations, ${actorName} got a nominee for leading role with ${totalpoints.toFixed(1)}!`)
            break;
        }
    } if (totalpoints <= 1250.5) {
        let diff = Math.abs(1250.5 - totalpoints)
        console.log(`Sorry, ${actorName} you need ${diff.toFixed(1)} more!`);

    }
} Oscars(["Sandra Bullock", "340", "5", "Robert De Niro", "50", "Julia Roberts", "40.5", "Daniel Day-Lewis", "39.4", "Nicolas Cage", "29.9", "Stoyanka Mutafova", "33"])