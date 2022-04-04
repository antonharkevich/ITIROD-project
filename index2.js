var myHeaders = new Headers();
myHeaders.append('Content-Type', 'application/json');

var myInit = {
  method: 'GET',
};


const request = new Request('https://lichess.org/api/user/antonharkevich/activity', myInit);
//const request = new Request('https://lichess.org/api/user/antonharkevich', myInit);
//const request = new Request('https://lichess.org/api/user/antonharkevich/rating-history', myInit);

fetch(request)
  .then(response => {
    if (response.status === 200) {
      return response.json();
    } else {
      console.log(response.status)
      throw new Error('Something went wrong on api server!');
    }
  })
  .then(response => {
    console.log(response);
    play_dates = []

    games_amounts = []

    day_dynamics = [ ]

    day_rates = []

    day_wins = []

    day_loss = []

    for (i in [0,1,2,3,4,5,6]){

      date = new Date(response[i]['interval']['start']);
      var options = {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        timezone: 'UTC',
      };
      play_dates[i] = date.toLocaleString("ru", options);
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

      let html_play_date = document.getElementById("play_date" + i);
      let html_games_amount = document.getElementById("games_amount" + i);
      let html_day_dynamic = document.getElementById("day_dynamic" + i);
      let html_day_rate = document.getElementById("day_rate" + i);
      let html_day_wins = document.getElementById("day_wins" + i);
      let html_day_loss = document.getElementById("day_loss" + i);
  
  
      html_play_date.textContent = play_dates[i];
      html_games_amount.textContent = games_amounts[i];
      html_day_dynamic.textContent = day_dynamics[i];
      html_day_rate.textContent = day_rates[i];
      html_day_wins.textContent = day_wins[i];
      html_day_loss.textContent = day_loss[i];
    }



  }).catch(error => {
    console.error(error);
  });








