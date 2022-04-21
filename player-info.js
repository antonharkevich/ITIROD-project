class Statistics {
  constructor(response) {
      
    let player_rate = response['perfs']['bullet']['rating'];

    let progress_games = 12;

    let progress = response['perfs']['bullet']['prog'];



    let deviation = response['perfs']['bullet']['rd'];

    let games_number_all = response['count']['all'];

    let games_number_rate = response['count']['rated'];



    let play_days  = Math.floor(response['playTime']['total'] / (3600 * 24));
    let play_hours = Math.floor((response['playTime']['total'] - (play_days * 3600 * 24)) / 3600);
    let play_minutes = Math.floor((response['playTime']['total'] - (play_days * 3600 * 24)  - (play_hours * 3600)) / 60);

    let  play_time = play_days  + ' дней ' + play_hours + ' часов ' + play_minutes + ' минут ';



    let wins_number = "|" + response['count']['win'] + "|";

    let wins_number_percent = Math.floor(response['count']['win']/response['count']['all'] * 100) + "%";


    let loss_number = "|" + response['count']['loss'] + "|";


    let loss_number_percent = Math.floor(response['count']['loss']/response['count']['all'] * 100) + "%";

    let draws_number = "|" + response['count']['draw'] + "|";;

    let draws_number_percent = Math.floor(response['count']['draw']/response['count']['all'] * 100) + "%";




        this.player_rate = player_rate;
        this.progress_games =  progress_games;
        this.progress = progress;
        this.deviation = deviation;
        this.games_number_all = games_number_all;
        this.games_number_rate = games_number_rate;
        this.play_time = play_time;
        this.wins_number = wins_number;
        this.wins_number_percent = wins_number_percent;
        this.loss_number = loss_number;
        this.loss_number_percent = loss_number_percent;
        this.draws_number = draws_number;
        this.draws_number_percent = draws_number_percent;

  }
}




class Performance {
  constructor(response) {
    
      var options = {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        timezone: 'UTC',
      };
      
      let weak_players_percent = response['percentile'] + "%";

      let games_number_tournament = response['stat']['count']['tour'];

      let games_number_berserk = response['stat']['count']['berserk'];

      let average_players_rate = response['stat']['count']['opAvg'];


      let disconnects_number = "|" + response['stat']['count']['disconnects'] + "|";

      let disconnects_number_percent = Math.floor(response['stat']['count']['disconnects']/response['stat']['count']['all'] * 100) + "%";

      let the_highest_rate = response['stat']['highest']['int'];

      let the_highest_rate_time = new Date(response['stat']['highest']['at']).toLocaleString("ru", options);

      let the_lowest_rate = response['stat']['lowest']['int'];

      let the_lowest_rate_time = new Date(response['stat']['lowest']['at']).toLocaleString("ru", options);





        this.weak_players_percent = weak_players_percent;
        this.games_number_tournament = games_number_tournament;
        this.games_number_berserk = games_number_berserk;
        this.average_players_rate = average_players_rate;
        this.disconnects_number = disconnects_number;
        this.disconnects_number_percent = disconnects_number_percent;
        this.the_highest_rate = the_highest_rate;
        this.the_highest_rate_time = the_highest_rate_time;
        this.the_lowest_rate = the_lowest_rate;
        this.the_lowest_rate_time = the_lowest_rate_time;

  }
}

function lichessRequest(){
  var user = document.getElementById('ussser').innerHTML;
  responsePromise = lichessAPIRequestStatistics(user)
  responsePromise.then(response => {
    console.log(response);

    const statistics = new Statistics(response)


    html_player_rate = document.getElementById("player_rate");

    html_player_rate.textContent = statistics['player_rate'];


    html_progress_games = document.getElementById("progress_games");

    html_progress_games.textContent = statistics['progress_games'];



    html_progress = document.getElementById("progress");

    html_progress.textContent = statistics['progress'];




    html_deviation = document.getElementById("deviation");

    html_deviation.textContent = statistics['deviation'];



    html_games_number_all = document.getElementById("games_number_all");

    html_games_number_all.textContent = statistics['games_number_all'];




    html_games_number_rate = document.getElementById("games_number_rate");

    html_games_number_rate.textContent = statistics['games_number_rate'];




    html_play_time = document.getElementById("play_time");

    html_play_time.textContent = statistics['play_time'];




    html_wins_number = document.getElementById("wins_number");

    html_wins_number.textContent = statistics['wins_number'];



    html_wins_number_percent = document.getElementById("wins_number_percent");

    html_wins_number_percent.textContent = statistics['wins_number_percent'];




    html_loss_number = document.getElementById("loss_number");

    html_loss_number.textContent = statistics['loss_number'];



    html_loss_number_percent = document.getElementById("loss_number_percent");

    html_loss_number_percent.textContent = statistics['loss_number_percent'];



    html_draws_number = document.getElementById("draws_number");

    html_draws_number.textContent = statistics['draws_number'];



    html_draws_number_percent = document.getElementById("draws_number_percent");

    html_draws_number_percent.textContent = statistics['draws_number_percent'];



  }).catch(error => {
    console.error(error);
  });



  responsePromise2 = lichessAPIRequestPerformance(user)
  responsePromise2.then(response => {
      console.log(response);

      performance = new Performance(response)


      html_weak_players_percent = document.getElementById("weak_players_percent");

      html_weak_players_percent.textContent = performance['weak_players_percent'];


      html_games_number_tournament = document.getElementById("games_number_tournament");

      html_games_number_tournament.textContent = performance['games_number_tournament'];
  
  
  
  
  
      html_games_number_berserk = document.getElementById("games_number_berserk");
  
      html_games_number_berserk.textContent = performance['games_number_berserk'];


      html_average_players_rate = document.getElementById("average_players_rate");

      html_average_players_rate.textContent = performance['average_players_rate'];


      html_disconnects_number = document.getElementById("disconnects_number");

      html_disconnects_number.textContent = performance['disconnects_number'];


      html_disconnects_number_percent = document.getElementById("disconnects_number_percent");

      html_disconnects_number_percent.textContent = performance['disconnects_number_percent'];
  
  
  
      html_the_highest_rate = document.getElementById("the_highest_rate");
  
      html_the_highest_rate.textContent = performance['the_highest_rate'];
  
  
  
      html_the_highest_rate_time = document.getElementById("the_highest_rate_time");
  
      html_the_highest_rate_time.textContent = performance['the_highest_rate_time'];
  
  
      html_the_lowest_rate = document.getElementById("the_lowest_rate");
  
      html_the_lowest_rate.textContent = performance['the_lowest_rate'];
  
  
  
      html_the_lowest_rate_time = document.getElementById("the_lowest_rate_time");
  
      html_the_lowest_rate_time.textContent = performance['the_lowest_rate_time'];

  
  
    }).catch(error => {
      console.error(error);
    });
  
}












