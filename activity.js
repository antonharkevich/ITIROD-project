class Activity {
  constructor(response) {
    let play_dates = []

    let games_amounts = []

    let day_dynamics = [ ]

    let day_rates = []

    let day_wins = []

    let day_loss = []

    for (let i = 0; i < 7; i++){

      let date = new Date(response[i]['interval']['start']);
      var options = {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        timezone: 'UTC',
      };
      play_dates[i] = date.toLocaleString("ru", options);
      if(response[i]['games'] == undefined){
        games_amounts[i] = 'N/A';
        day_wins[i] = 'N/A';
        day_loss[i] = 'N/A';
        day_rates[i] = 'N/A';
        day_dynamics[i] = 'N/A';
      }
      else if(response[i]['games']['bullet'] == undefined){
        games_amounts[i] = 'N/A';
        day_wins[i] = 'N/A';
        day_loss[i] = 'N/A';
        day_rates[i] = 'N/A';
        day_dynamics[i] = 'N/A';
      }
      else{
            games_amounts[i] = response[i]['games']['bullet']['win'] + response[i]['games']['bullet']['loss'];
            day_wins[i] = response[i]['games']['bullet']['win'];
            day_loss[i] = response[i]['games']['bullet']['loss'];
            day_rates[i] = response[i]['games']['bullet']['rp']['after'];
            if (response[i]['games']['bullet']['rp']['after'] >= response[i]['games']['bullet']['rp']['before']){
              day_dynamics[i] = ['up'];

            }
            else{
              day_dynamics[i] = ['down'];
            }
      }
    }




        this.play_dates =  play_dates;
        this.games_amounts = games_amounts;
        this.day_dynamics = day_dynamics;
        this.day_rates = day_rates;
        this.day_wins = day_wins;
        this.day_loss = day_loss;

  }
}


function lichessRequest(){
  var user = document.getElementById('ussser').innerHTML;
    responsePromise = lichessAPIRequestActivity(user)
    responsePromise.then(response => {
    console.log(response);

    const activity = new Activity(response);


    for (let i = 0; i < 7; i++){

      let html_play_date = document.getElementById("play_date" + i);
      let html_games_amount = document.getElementById("games_amount" + i);
      let html_day_dynamic = document.getElementById("day_dynamic" + i);
      let html_day_rate = document.getElementById("day_rate" + i);
      let html_day_wins = document.getElementById("day_wins" + i);
      let html_day_loss = document.getElementById("day_loss" + i);
  
  
      html_play_date.textContent = activity.play_dates[i];
      html_games_amount.textContent = activity.games_amounts[i];
      html_day_dynamic.textContent = activity.day_dynamics[i];
      html_day_rate.textContent = activity.day_rates[i];
      html_day_wins.textContent = activity.day_wins[i];
      html_day_loss.textContent = activity.day_loss[i];
    }



  }).catch(error => {
    console.error(error);
  });
}







