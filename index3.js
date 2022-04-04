function lichessRequest(){
  var myHeaders = new Headers();
  myHeaders.append('Content-Type', 'application/json');
  
  var myInit = {
    method: 'GET',
  };
  
  var user = document.getElementById('ussser').innerHTML;
  if(user != 'N/A'){
var myHeaders = new Headers();
myHeaders.append('Content-Type', 'application/json');

var myInit = {
  method: 'GET',
};

const new_request = new Request('https://lichess.org/api/user/'+user+'/perf/bullet', myInit);


fetch(new_request)
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

    var options = {
      minute: 'numeric',
      hour: 'numeric',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      timezone: 'UTC',
    };
    
    win_streak_times = response['stat']['resultStreak']['win']['max']['v'];

    best_win_streak_time_from = new Date(response['stat']['resultStreak']['win']['max']['from']['at']).toLocaleString("ru", options);
    
    best_win_streak_time_to = new Date(response['stat']['resultStreak']['win']['max']['to']['at']).toLocaleString("ru", options);
    
    current_win_times = response['stat']['resultStreak']['win']['cur']['v'];
    
    
    
    loose_streak_times = response['stat']['resultStreak']['loss']['max']['v'];
    
    best_loose_streak_time_from = new Date(response['stat']['resultStreak']['loss']['max']['from']['at']).toLocaleString("ru", options);
    
    best_loose_streak_time_to = new Date(response['stat']['resultStreak']['loss']['max']['to']['at']).toLocaleString("ru", options);
    
    current_loose_times = response['stat']['resultStreak']['loss']['cur']['v'];
    
    
    


    best_players_win_names  = []
    
    best_players_win_rates  = []
    
    best_players_win_dates  = []
    
    best_players_loose_names  = []
    
    best_players_loose_rates  = []
    
    best_players_loose_dates  = []



    for (i in [0,1,2,3,4]){

        best_players_win_names[i]  = response['stat']['bestWins']['results'][i]['opId']['name'];
    
        best_players_win_rates[i]  = response['stat']['bestWins']['results'][i]['opInt'];
        
        best_players_win_dates[i]  = new Date(response['stat']['bestWins']['results'][i]['at']).toLocaleString("ru", options);
        
        best_players_loose_names[i]  = response['stat']['worstLosses']['results'][i]['opId']['name'];
        
        best_players_loose_rates[i]  = response['stat']['worstLosses']['results'][i]['opInt'];
        
        best_players_loose_dates[i]  = new Date(response['stat']['worstLosses']['results'][i]['at']).toLocaleString("ru", options);


    }





    var html_win_streak_times = document.getElementById("win_streak_times");

    html_win_streak_times.textContent = win_streak_times;


    var html_loose_streak_times = document.getElementById("loose_streak_times");

    html_loose_streak_times.textContent = loose_streak_times;



    var html_current_win_times = document.getElementById("current_win_times");

    if (current_win_times == 0){
        html_current_win_times.textContent = '-'
    }

    else {
        html_current_win_times.textContent = current_win_times
    };


    var html_current_loose_times = document.getElementById("current_loose_times");

    if (current_loose_times == 0){
        html_current_loose_times.textContent = '-'
    }

    else {
        html_current_loose_times.textContent = current_loose_times
    };



    var html_best_win_streak_time_from = document.getElementById("best_win_streak_time_from");


    html_best_win_streak_time_from.textContent = best_win_streak_time_from;


    var html_best_win_streak_time_to= document.getElementById("best_win_streak_time_to");


    html_best_win_streak_time_to.textContent = best_win_streak_time_to;




    var html_best_loose_streak_time_from = document.getElementById("best_loose_streak_time_from");


    html_best_loose_streak_time_from.textContent = best_loose_streak_time_from;


    var html_best_loose_streak_time_to= document.getElementById("best_loose_streak_time_to");


    html_best_loose_streak_time_to.textContent = best_loose_streak_time_to;




    for (i in [0,1,2,3,4]){
        
        let html_best_win_player_name = document.getElementById("best_win_player_name" + i);
        let html_best_loose_player_name = document.getElementById("best_loose_player_name" + i);
        let html_best_win_player_rate = document.getElementById("best_win_player_rate" + i);
        let html_best_loose_player_rate = document.getElementById("best_loose_player_rate" + i);
        let html_best_win_player_date = document.getElementById("best_win_player_date" + i);
        let html_best_loose_player_date = document.getElementById("best_loose_player_date" + i);

        html_best_win_player_name.textContent = best_players_win_names[i];
        html_best_loose_player_name.textContent = best_players_loose_names[i];
        html_best_win_player_rate.textContent = best_players_win_rates[i];
        html_best_loose_player_rate.textContent = best_players_loose_rates[i];
        html_best_win_player_date.textContent = best_players_win_dates[i];
        html_best_loose_player_date.textContent = best_players_loose_dates[i];
    }

  }).catch(error => {
    console.error(error);
  });
}
}





