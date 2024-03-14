
let tableItem

// Fetch data
fetch('https://script.google.com/macros/s/AKfycbxbAVWDjyT8LZyaTadJWvw9JJYMTHCuCW48_Zh4ixYfvQyP76d5I8KyhAhakcWu-_Cx/exec')
  .then((data) => {
    return data.json();
  })
  .then((objectData) => {
    const athleteList = objectData.data.slice(1);
    console.log(athleteList);

    // Sort athletes by total score in descending order
    const sortedAthleteList = athleteList.sort((a, b) => b.total - a.total);

    sortedAthleteList.forEach((athlete) => {
    tableItem = document.createElement('div');
    tableItem.className = 'tableItem';

      tableItem.innerHTML = `
            <h1 class='athleteName'>${athlete.name}</h1>
            <div class='run'>
                <p class='runPoints'><strong>RUN 1 </strong>${athlete.run1}</p>
                <p class='runPoints'><strong>RUN 2 </strong>${athlete.run2}</p>
                <p class='runPoints'><strong>RUN 3 </strong>${athlete.run3}</p>
                <p class='runPoints'><strong>RUN 4 </strong>${athlete.run4}</p>
            </div>
            <div class='total'>
                <p class='totalPoints'><strong>BEST 2 RUNS TOTAL </strong>${athlete.total}</p>
            </div>`;

      document.getElementById('containerAll').append(tableItem);

    });

    // display junPoissSuusk
    document.getElementById('btnJunPoissSuusk').onclick = showJunPoissSuusk;

    function showJunPoissSuusk() {
        const containerAll = document.getElementById('containerAll');
        while (containerAll.firstChild) {
        containerAll.removeChild(containerAll.firstChild);
        }

        const junPoissSuusk = athleteList.filter((athlete) => athlete.sports.includes('Juunior M Freestyle suusk'));
        const sortedJunPoissSuusk = junPoissSuusk.sort((a, b) => b.total - a.total);
        sortedJunPoissSuusk.forEach((athlete) => {
        tableItem = document.createElement('div');
        tableItem.className = 'tableItem';
        tableItem.innerHTML = `
                    <h1 class='athleteName'>${athlete.name}</h1>
                    <div class='run'>
                        <p class='runPoints'><strong>RUN 1 </strong>${athlete.run1}</p>
                        <p class='runPoints'><strong>RUN 2 </strong>${athlete.run2}</p>
                        <p class='runPoints'><strong>RUN 3 </strong>${athlete.run3}</p>
                        <p class='runPoints'><strong>RUN 4 </strong>${athlete.run4}</p>
                    </div>
                    <div class='total'>
                        <p class='totalPoints'><strong>BEST 2 RUNS TOTAL </strong>${athlete.total}</p>
                    </div>`;
        document.getElementById('containerAll').append(tableItem);

        
      });


    }

    // display junTydSuusk
    document.getElementById('btnJunTydSuusk').onclick = showJunTydSuusk;

    function showJunTydSuusk() {
        const containerAll = document.getElementById('containerAll');
        while (containerAll.firstChild) {
        containerAll.removeChild(containerAll.firstChild);
        }
        const junTydSuusk = athleteList.filter((athlete) => athlete.sports.includes('Juunior N Freestyle suusk'));
        const sortedJunTydSuusk = junTydSuusk.sort((a, b) => b.total - a.total);
        sortedJunTydSuusk.forEach((athlete) => {
        tableItem = document.createElement('div');
        tableItem.className = 'tableItem';
        tableItem.innerHTML = `
                    <h1 class='athleteName'>${athlete.name}</h1>
                    <div class='run'>
                        <p class='runPoints'><strong>RUN 1 </strong>${athlete.run1}</p>
                        <p class='runPoints'><strong>RUN 2 </strong>${athlete.run2}</p>
                        <p class='runPoints'><strong>RUN 3 </strong>${athlete.run3}</p>
                        <p class='runPoints'><strong>RUN 4 </strong>${athlete.run4}</p>
                    </div>
                    <div class='total'>
                        <p class='totalPoints'><strong>BEST 2 RUNS TOTAL </strong>${athlete.total}</p>
                    </div>`;
        document.getElementById('containerAll').append(tableItem);

      });
    }

    // display junPoissLumelaud
    document.getElementById('btnJunPoissLumelaud').onclick = showJunPoissLumelaud;

    function showJunPoissLumelaud() {
        const containerAll = document.getElementById('containerAll');
        while (containerAll.firstChild) {
        containerAll.removeChild(containerAll.firstChild);
        }
        const junPoissLumelaud = athleteList.filter((athlete) => athlete.sports.includes('Juunior M Lumelaud'));
        const sortedJunPoissLumelaud = junPoissLumelaud.sort((a, b) => b.total - a.total);
        sortedJunPoissLumelaud.forEach((athlete) => {
        tableItem = document.createElement('div');
        tableItem.className = 'tableItem';
        tableItem.innerHTML = `
                    <h1 class='athleteName'>${athlete.name}</h1>
                    <div class='run'>
                        <p class='runPoints'><strong>RUN 1 </strong>${athlete.run1}</p>
                        <p class='runPoints'><strong>RUN 2 </strong>${athlete.run2}</p>
                        <p class='runPoints'><strong>RUN 3 </strong>${athlete.run3}</p>
                        <p class='runPoints'><strong>RUN 4 </strong>${athlete.run4}</p>
                    </div>
                    <div class='total'>
                        <p class='totalPoints'><strong>BEST 2 RUNS TOTAL </strong>${athlete.total}</p>
                    </div>`;
        document.getElementById('containerAll').append(tableItem);
      });
    }

    // display junTydLumelaud
    document.getElementById('btnJunTydLumelaud').onclick = showJunTydLumelaud;

    function showJunTydLumelaud() {
        const containerAll = document.getElementById('containerAll');
        while (containerAll.firstChild) {
        containerAll.removeChild(containerAll.firstChild);
        }
        const junTydLumelaud = athleteList.filter((athlete) => athlete.sports.includes('Juunior N Lumelaud'));
        const sortedJunTydLumelaud = junTydLumelaud.sort((a, b) => b.total - a.total);
        sortedJunTydLumelaud.forEach((athlete) => {
        tableItem = document.createElement('div');
        tableItem.className = 'tableItem';
        tableItem.innerHTML = `
                    <h1 class='athleteName'>${athlete.name}</h1>
                    <div class='run'>
                        <p class='runPoints'><strong>RUN 1 </strong>${athlete.run1}</p>
                        <p class='runPoints'><strong>RUN 2 </strong>${athlete.run2}</p>
                        <p class='runPoints'><strong>RUN 3 </strong>${athlete.run3}</p>
                        <p class='runPoints'><strong>RUN 4 </strong>${athlete.run4}</p>
                    </div>
                    <div class='total'>
                        <p class='totalPoints'><strong>BEST 2 RUNS TOTAL </strong>${athlete.total}</p>
                    </div>`;
        document.getElementById('containerAll').append(tableItem);
      });
    }

    // display openMehedSuusk
    document.getElementById('btnOpenMehedSuusk').onclick = showOpenMehedSuusk;

    function showOpenMehedSuusk() {
        const containerAll = document.getElementById('containerAll');
        while (containerAll.firstChild) {
        containerAll.removeChild(containerAll.firstChild);
        }
        const openMehedSuusk = athleteList.filter((athlete) => athlete.sports.includes('Open M Freestyle suusk'));
        const sortedOpenMehedSuusk = openMehedSuusk.sort((a, b) => b.total - a.total);
        sortedOpenMehedSuusk.forEach((athlete) => {
        tableItem = document.createElement('div');
        tableItem.className = 'tableItem';
        tableItem.innerHTML = `
                    <h1 class='athleteName'>${athlete.name}</h1>
                    <div class='run'>
                        <p class='runPoints'><strong>RUN 1 </strong>${athlete.run1}</p>
                        <p class='runPoints'><strong>RUN 2 </strong>${athlete.run2}</p>
                        <p class='runPoints'><strong>RUN 3 </strong>${athlete.run3}</p>
                        <p class='runPoints'><strong>RUN 4 </strong>${athlete.run4}</p>
                    </div>
                    <div class='total'>
                        <p class='totalPoints'><strong>BEST 2 RUNS TOTAL </strong>${athlete.total}</p>
                    </div>`;
        document.getElementById('containerAll').append(tableItem);
      });
    }

    // display openNaisedSuusk
    document.getElementById('btnOpenNaisedSuusk').onclick = showOpenNaisedSuusk;

    function showOpenNaisedSuusk() {
        const containerAll = document.getElementById('containerAll');
        while (containerAll.firstChild) {
        containerAll.removeChild(containerAll.firstChild);
        }
        const openNaisedSuusk = athleteList.filter((athlete) => athlete.sports.includes('Open N Freestyle suusk'));
        const sortedOpenNaisedSuusk = openNaisedSuusk.sort((a, b) => b.total - a.total);
        sortedOpenNaisedSuusk.forEach((athlete) => {
        tableItem = document.createElement('div');
        tableItem.className = 'tableItem';
        tableItem.innerHTML = `
                    <h1 class='athleteName'>${athlete.name}</h1>
                    <div class='run'>
                        <p class='runPoints'><strong>RUN 1 </strong>${athlete.run1}</p>
                        <p class='runPoints'><strong>RUN 2 </strong>${athlete.run2}</p>
                        <p class='runPoints'><strong>RUN 3 </strong>${athlete.run3}</p>
                        <p class='runPoints'><strong>RUN 4 </strong>${athlete.run4}</p>
                    </div>
                    <div class='total'>
                        <p class='totalPoints'><strong>BEST 2 RUNS TOTAL </strong>${athlete.total}</p>
                    </div>`;
        document.getElementById('containerAll').append(tableItem);
      });
    }

    // display openMehedLumelaud
    document.getElementById('btnOpenMehedLumelaud').onclick = showOpenMehedLumelaud;

    function showOpenMehedLumelaud() {
        const containerAll = document.getElementById('containerAll');
        while (containerAll.firstChild) {
        containerAll.removeChild(containerAll.firstChild);
        }
        const openMehedLumelaud = athleteList.filter((athlete) => athlete.sports.includes('Open M Lumelaud'));
        const sortedOpenMehedLumelaud = openMehedLumelaud.sort((a, b) => b.total - a.total);
        sortedOpenMehedLumelaud.forEach((athlete) => {
        tableItem = document.createElement('div');
        tableItem.className = 'tableItem';
        tableItem.innerHTML = `
                    <h1 class='athleteName'>${athlete.name}</h1>
                    <div class='run'>
                        <p class='runPoints'><strong>RUN 1 </strong>${athlete.run1}</p>
                        <p class='runPoints'><strong>RUN 2 </strong>${athlete.run2}</p>
                        <p class='runPoints'><strong>RUN 3 </strong>${athlete.run3}</p>
                        <p class='runPoints'><strong>RUN 4 </strong>${athlete.run4}</p>
                    </div>
                    <div class='total'>
                        <p class='totalPoints'><strong>BEST 2 RUNS TOTAL </strong>${athlete.total}</p>
                    </div>`;
        document.getElementById('containerAll').append(tableItem);
      });
    }

    // diplay openNaisedLumelaud
    document.getElementById('btnOpenNaisedLumelaud').onclick = showOpenNaisedLumelaud;

    function showOpenNaisedLumelaud() {
        const containerAll = document.getElementById('containerAll');
        while (containerAll.firstChild) {
        containerAll.removeChild(containerAll.firstChild);
        }
        const openNaisedLumelaud = athleteList.filter((athlete) => athlete.sports.includes('Open N Lumelaud'));
        const sortedOpenNaisedLumelaud = openNaisedLumelaud.sort((a, b) => b.total - a.total);
        sortedOpenNaisedLumelaud.forEach((athlete) => {
        tableItem = document.createElement('div');
        tableItem.className = 'tableItem';
        tableItem.innerHTML = `
                    <h1 class='athleteName'>${athlete.name}</h1>
                    <div class='run'>
                        <p class='runPoints'><strong>RUN 1 </strong>${athlete.run1}</p>
                        <p class='runPoints'><strong>RUN 2 </strong>${athlete.run2}</p>
                        <p class='runPoints'><strong>RUN 3 </strong>${athlete.run3}</p>
                        <p class='runPoints'><strong>RUN 4 </strong>${athlete.run4}</p>
                    </div>
                    <div class='total'>
                        <p class='totalPoints'><strong>BEST 2 RUNS TOTAL </strong>${athlete.total}</p>
                    </div>`;
        document.getElementById('containerAll').append(tableItem);
      });
    }

document.getElementById('all').onclick = showAll;

function showAll() {
    window.location.reload();
}

  });

// AUTO REFRESH

function autoRefresh() {
    window.location.reload();
  }
  
  setInterval(autoRefresh, 40000);

