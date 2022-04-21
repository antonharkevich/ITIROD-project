class Games {
    constructor(response) {
        var options = {
            minute: 'numeric',
            hour: 'numeric',
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            timezone: 'UTC',
        };
          
        let  win_streak_times = response['stat']['resultStreak']['win']['max']['v'];
      
        let  best_win_streak_time_from = new Date(response['stat']['resultStreak']['win']['max']['from']['at']).toLocaleString("ru", options);
          
        let  best_win_streak_time_to = new Date(response['stat']['resultStreak']['win']['max']['to']['at']).toLocaleString("ru", options);
          
        let  current_win_times = response['stat']['resultStreak']['win']['cur']['v'];
          
          
          
        let  loose_streak_times = response['stat']['resultStreak']['loss']['max']['v'];
          
        let  best_loose_streak_time_from = new Date(response['stat']['resultStreak']['loss']['max']['from']['at']).toLocaleString("ru", options);
          
        let  best_loose_streak_time_to = new Date(response['stat']['resultStreak']['loss']['max']['to']['at']).toLocaleString("ru", options);
          
        let  current_loose_times = response['stat']['resultStreak']['loss']['cur']['v'];
          
          
          
      
      
        let best_players_win_names  = []
          
        let  best_players_win_rates  = []
          
        let  best_players_win_dates  = []
          
        let  best_players_loose_names  = []
          
        let  best_players_loose_rates  = []
          
        let  best_players_loose_dates  = []
      
      
      
          for (let i = 0; i < 5; i++){
      
              best_players_win_names[i]  = response['stat']['bestWins']['results'][i]['opId']['name'];
          
              best_players_win_rates[i]  = response['stat']['bestWins']['results'][i]['opInt'];
              
              best_players_win_dates[i]  = new Date(response['stat']['bestWins']['results'][i]['at']).toLocaleString("ru", options);
              
              best_players_loose_names[i]  = response['stat']['worstLosses']['results'][i]['opId']['name'];
              
              best_players_loose_rates[i]  = response['stat']['worstLosses']['results'][i]['opInt'];
              
              best_players_loose_dates[i]  = new Date(response['stat']['worstLosses']['results'][i]['at']).toLocaleString("ru", options);
      
      
          }

            this.win_streak_times = win_streak_times;
            this.best_win_streak_time_from = best_win_streak_time_from;
            this.best_win_streak_time_to = best_win_streak_time_to;
            this.current_win_times = current_win_times;
            this.loose_streak_times = loose_streak_times;
            this.best_loose_streak_time_from = best_loose_streak_time_from;
            this.best_loose_streak_time_to = best_loose_streak_time_to;
            this.current_loose_times = current_loose_times;
            this.best_players_win_names = best_players_win_names;
            this.best_players_win_rates = best_players_win_rates;
            this.best_players_win_dates = best_players_win_dates;
            this.best_players_loose_names = best_players_loose_names;
            this.best_players_loose_rates = best_players_loose_rates;
            this.best_players_loose_dates = best_players_loose_dates;

  
    }
}


function lichessRequest(){
  var user = document.getElementById('ussser').innerHTML;
    responsePromise = lichessAPIRequestWorstAndBestGames(user)
    responsePromise.then(response => {



    const games = new Games(response);   



    var html_win_streak_times = document.getElementById("win_streak_times");

    html_win_streak_times.textContent = games['win_streak_times'];


    var html_loose_streak_times = document.getElementById("loose_streak_times");

    html_loose_streak_times.textContent = games['loose_streak_times'];



    var html_current_win_times = document.getElementById("current_win_times");

    if (games['current_win_times'] == 0){
        html_current_win_times.textContent = '-'
    }

    else {
        html_current_win_times.textContent = games['current_win_times']
    };


    var html_current_loose_times = document.getElementById("current_loose_times");

    if (games['current_loose_times'] == 0){
        html_current_loose_times.textContent = '-'
    }

    else {
        html_current_loose_times.textContent = games['current_loose_times']
    };



    var html_best_win_streak_time_from = document.getElementById("best_win_streak_time_from");


    html_best_win_streak_time_from.textContent = games['best_win_streak_time_from'];


    var html_best_win_streak_time_to= document.getElementById("best_win_streak_time_to");


    html_best_win_streak_time_to.textContent = games['best_win_streak_time_to'];




    var html_best_loose_streak_time_from = document.getElementById("best_loose_streak_time_from");


    html_best_loose_streak_time_from.textContent = games['best_loose_streak_time_from'];


    var html_best_loose_streak_time_to= document.getElementById("best_loose_streak_time_to");


    html_best_loose_streak_time_to.textContent = games['best_loose_streak_time_to'];




    for (let i = 0; i < 5; i++){
        
        let html_best_win_player_name = document.getElementById("best_win_player_name" + i);
        let html_best_loose_player_name = document.getElementById("best_loose_player_name" + i);
        let html_best_win_player_rate = document.getElementById("best_win_player_rate" + i);
        let html_best_loose_player_rate = document.getElementById("best_loose_player_rate" + i);
        let html_best_win_player_date = document.getElementById("best_win_player_date" + i);
        let html_best_loose_player_date = document.getElementById("best_loose_player_date" + i);

        html_best_win_player_name.textContent = games['best_players_win_names'][i];
        html_best_loose_player_name.textContent = games['best_players_loose_names'][i];
        html_best_win_player_rate.textContent = games['best_players_win_rates'][i];
        html_best_loose_player_rate.textContent = games['best_players_loose_rates'][i];
        html_best_win_player_date.textContent = games['best_players_win_dates'][i];
        html_best_loose_player_date.textContent = games['best_players_loose_dates'][i];
    }
  });
}




