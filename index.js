
// FETCH DATA

fetch('https://script.google.com/macros/s/AKfycbwIvCgDetVDoS3waWds0sodf7CR_kFwFdaJGYzM54quEb5LNRZyK4MQCZL7-kGpDC77/exec').then((data) => {
    return data.json();
}).then((objectData) => {
    const athleteList = objectData.data.slice(1)
    console.log(athleteList)

    // Sort athletes by total score in descending order
    const sortedAthleteList = athleteList.sort((a, b) => b.total - a.total);
    
    sortedAthleteList.forEach(athlete => {
        const athleteName = athlete.name;
        const athleteSports = athlete.sports;
        const run1 = athlete.run1;
        const run2 = athlete.run2;
        const run3 = athlete.run3;
        const run4 = athlete.run4;
        const total = athlete.total; 

        const tableItem = document.createElement('div');
        tableItem.className = 'tableItem';

        tableItem.innerHTML = `
            <h1 class='athleteName'>${athleteName}</h1>
            <div class='run'>
                <p class='runPoints'><strong>RUN 1 </strong>${run1}</p>
                <p class='runPoints'><strong>RUN 2 </strong>${run2}</p>
                <p class='runPoints'><strong>RUN 3 </strong>${run3}</p>
                <p class='runPoints'><strong>RUN 4 </strong>${run4}</p>
            </div>
            <div class='total'>
                <p class='totalPoints'><strong>BEST 2 RUNS TOTAL </strong>${total}</p>
            </div>`

        document.getElementById('container').append(tableItem);
        
    })
})

// AUTO REFRESH 

function autoRefresh() {

    window.location = window.location.href;
}

setInterval('autoRefresh()', 60000);


