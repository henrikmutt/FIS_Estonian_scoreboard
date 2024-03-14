// https://script.google.com/macros/s/AKfycbzVh1dVM6qq9ahrY04UPJzik2M7B_JcLBgIzFUOD1BaqkX7WTAjQt7vWDNXFOka87yX2g/exec

fetch('https://script.google.com/macros/s/AKfycbwbxKx5g1OrhQF8fVCApzasOJwnjBHAZ6f814j-5oCMq_Fv0J41DXCbff9dafGCl9m94g/exec')
  .then((data) => {
    return data.json();
  })
  .then((objectData) => {
    const lastPoints = objectData.data.slice(1);

    lastPoints.forEach((athlete) => {
        tableItem = document.createElement('div');
        tableItem.className = 'lastPoints';
    
          tableItem.innerHTML = `
                <h1 class='lastPointsName'>${athlete.nimi}</h1>
                <div class='total'>
                    <p class='lastPointsBox'><strong>POINTS </strong>${athlete.punktid}</p>
                </div>`;
    
          document.getElementById('lastPoints').append(tableItem);

    });
});

// AUTO REFRESH

function autoRefresh() {
    window.location.reload();
  }
  
  setInterval(autoRefresh, 40000);