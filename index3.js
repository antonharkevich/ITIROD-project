function lichessRequest(){
  var user = document.getElementById('ussser').innerHTML;
    responsePromise = lichessAPIRequestWorstAndBestGames(user)
    responsePromise.then(response => {







    var html_win_streak_times = document.getElementById("win_streak_times");

    html_win_streak_times.textContent = response['win_streak_times'];


    var html_loose_streak_times = document.getElementById("loose_streak_times");

    html_loose_streak_times.textContent = response['loose_streak_times'];



    var html_current_win_times = document.getElementById("current_win_times");

    if (response['current_win_times'] == 0){
        html_current_win_times.textContent = '-'
    }

    else {
        html_current_win_times.textContent = response['current_win_times']
    };


    var html_current_loose_times = document.getElementById("current_loose_times");

    if (response['current_loose_times'] == 0){
        html_current_loose_times.textContent = '-'
    }

    else {
        html_current_loose_times.textContent = response['current_loose_times']
    };



    var html_best_win_streak_time_from = document.getElementById("best_win_streak_time_from");


    html_best_win_streak_time_from.textContent = response['best_win_streak_time_from'];


    var html_best_win_streak_time_to= document.getElementById("best_win_streak_time_to");


    html_best_win_streak_time_to.textContent = response['best_win_streak_time_to'];




    var html_best_loose_streak_time_from = document.getElementById("best_loose_streak_time_from");


    html_best_loose_streak_time_from.textContent = response['best_loose_streak_time_from'];


    var html_best_loose_streak_time_to= document.getElementById("best_loose_streak_time_to");


    html_best_loose_streak_time_to.textContent = response['best_loose_streak_time_to'];




    for (i in [0,1,2,3,4]){
        
        let html_best_win_player_name = document.getElementById("best_win_player_name" + i);
        let html_best_loose_player_name = document.getElementById("best_loose_player_name" + i);
        let html_best_win_player_rate = document.getElementById("best_win_player_rate" + i);
        let html_best_loose_player_rate = document.getElementById("best_loose_player_rate" + i);
        let html_best_win_player_date = document.getElementById("best_win_player_date" + i);
        let html_best_loose_player_date = document.getElementById("best_loose_player_date" + i);

        html_best_win_player_name.textContent = response['best_players_win_names'][i];
        html_best_loose_player_name.textContent = response['best_players_loose_names'][i];
        html_best_win_player_rate.textContent = response['best_players_win_rates'][i];
        html_best_loose_player_rate.textContent = response['best_players_loose_rates'][i];
        html_best_win_player_date.textContent = response['best_players_win_dates'][i];
        html_best_loose_player_date.textContent = response['best_players_loose_dates'][i];
    }
  });
}




