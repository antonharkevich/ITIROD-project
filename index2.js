function lichessRequest(){
  var user = document.getElementById('ussser').innerHTML;
    responsePromise = lichessAPIRequestActivity(user)
    responsePromise.then(response => {
    console.log(response);


    for (i in [0,1,2,3,4,5,6]){

      let html_play_date = document.getElementById("play_date" + i);
      let html_games_amount = document.getElementById("games_amount" + i);
      let html_day_dynamic = document.getElementById("day_dynamic" + i);
      let html_day_rate = document.getElementById("day_rate" + i);
      let html_day_wins = document.getElementById("day_wins" + i);
      let html_day_loss = document.getElementById("day_loss" + i);
  
  
      html_play_date.textContent = response['play_dates'][i];
      html_games_amount.textContent = response['games_amounts'][i];
      html_day_dynamic.textContent = response['day_dynamics'][i];
      html_day_rate.textContent = response['day_rates'][i];
      html_day_wins.textContent = response['day_wins'][i];
      html_day_loss.textContent = response['day_loss'][i];
    }



  }).catch(error => {
    console.error(error);
  });
}







