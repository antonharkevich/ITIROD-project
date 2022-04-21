function updateInfo(event){
    event.preventDefault()
  
    var name = document.getElementById('nameUser').value;
    var rate_bullet = document.getElementById('rateBullet').value;
    var rate_blitz = document.getElementById('rateBlitz').value;
    var rate_rapid = document.getElementById('rateRapid').value;
    responsePromise = apiUpdateInfo(name, rate_bullet, rate_blitz, rate_rapid)
    responsePromise.then(response => {
        alert('Success')
        window.location.replace("index.html");
    });
  }