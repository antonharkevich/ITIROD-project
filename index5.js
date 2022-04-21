function lichessRequest(){
  var user = document.getElementById('ussser').innerHTML;
  responsePromise = lichessAPIRequestStatistics(user)
  responsePromise.then(response => {
    console.log(response);


    html_player_rate = document.getElementById("player_rate");

    html_player_rate.textContent = response['player_rate'];


    html_progress_games = document.getElementById("progress_games");

    html_progress_games.textContent = response['progress_games'];



    html_progress = document.getElementById("progress");

    html_progress.textContent = response['progress'];




    html_deviation = document.getElementById("deviation");

    html_deviation.textContent = response['deviation'];



    html_games_number_all = document.getElementById("games_number_all");

    html_games_number_all.textContent = response['games_number_all'];




    html_games_number_rate = document.getElementById("games_number_rate");

    html_games_number_rate.textContent = response['games_number_rate'];




    html_play_time = document.getElementById("play_time");

    html_play_time.textContent = response['play_time'];




    html_wins_number = document.getElementById("wins_number");

    html_wins_number.textContent = response['wins_number'];



    html_wins_number_percent = document.getElementById("wins_number_percent");

    html_wins_number_percent.textContent = response['wins_number_percent'];




    html_loss_number = document.getElementById("loss_number");

    html_loss_number.textContent = response['loss_number'];



    html_loss_number_percent = document.getElementById("loss_number_percent");

    html_loss_number_percent.textContent = response['loss_number_percent'];



    html_draws_number = document.getElementById("draws_number");

    html_draws_number.textContent = response['draws_number'];



    html_draws_number_percent = document.getElementById("draws_number_percent");

    html_draws_number_percent.textContent = response['draws_number_percent'];



  }).catch(error => {
    console.error(error);
  });



  responsePromise2 = lichessAPIRequestPerformance(user)
  responsePromise2.then(response => {
      console.log(response);

 


      html_weak_players_percent = document.getElementById("weak_players_percent");

      html_weak_players_percent.textContent = response['weak_players_percent'];


      html_games_number_tournament = document.getElementById("games_number_tournament");

      html_games_number_tournament.textContent = response['games_number_tournament'];
  
  
  
  
  
      html_games_number_berserk = document.getElementById("games_number_berserk");
  
      html_games_number_berserk.textContent = response['games_number_berserk'];


      html_average_players_rate = document.getElementById("average_players_rate");

      html_average_players_rate.textContent = response['average_players_rate'];


      html_disconnects_number = document.getElementById("disconnects_number");

      html_disconnects_number.textContent = response['disconnects_number'];


      html_disconnects_number_percent = document.getElementById("disconnects_number_percent");

      html_disconnects_number_percent.textContent = response['disconnects_number_percent'];
  
  
  
      html_the_highest_rate = document.getElementById("the_highest_rate");
  
      html_the_highest_rate.textContent = response['the_highest_rate'];
  
  
  
      html_the_highest_rate_time = document.getElementById("the_highest_rate_time");
  
      html_the_highest_rate_time.textContent = response['the_highest_rate_time'];
  
  
      html_the_lowest_rate = document.getElementById("the_lowest_rate");
  
      html_the_lowest_rate.textContent = response['the_lowest_rate'];
  
  
  
      html_the_lowest_rate_time = document.getElementById("the_lowest_rate_time");
  
      html_the_lowest_rate_time.textContent = response['the_lowest_rate_time'];

  
  
    }).catch(error => {
      console.error(error);
    });
  
}












