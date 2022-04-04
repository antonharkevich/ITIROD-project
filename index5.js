var myHeaders = new Headers();
myHeaders.append('Content-Type', 'application/json');

var myInit = {
  method: 'GET',
};



const request = new Request('https://lichess.org/api/user/antonharkevich', myInit);


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


    player_rate = response['perfs']['bullet']['rating'];

    progress_games = 12;

    progress = response['perfs']['bullet']['prog'];



    deviation = response['perfs']['bullet']['rd'];

    games_number_all = response['count']['all'];

    games_number_rate = response['count']['rated'];



    let play_days  = Math.floor(response['playTime']['total'] / (3600 * 24));
    let play_hours = Math.floor((response['playTime']['total'] - (play_days * 3600 * 24)) / 3600);
    let play_minutes = Math.floor((response['playTime']['total'] - (play_days * 3600 * 24)  - (play_hours * 3600)) / 60);

    play_time = play_days  + ' дней ' + play_hours + ' часов ' + play_minutes + ' минут ';



    wins_number = "|" + response['count']['win'] + "|";

    wins_number_percent = Math.floor(response['count']['win']/response['count']['all'] * 100) + "%";


    loss_number = "|" + response['count']['loss'] + "|";


    loss_number_percent = Math.floor(response['count']['loss']/response['count']['all'] * 100) + "%";

    draws_number = "|" + response['count']['draw'] + "|";;

    draws_number_percent = Math.floor(response['count']['draw']/response['count']['all'] * 100) + "%";








    html_player_rate = document.getElementById("player_rate");

    html_player_rate.textContent = player_rate;


    html_progress_games = document.getElementById("progress_games");

    html_progress_games.textContent = progress_games;



    html_progress = document.getElementById("progress");

    html_progress.textContent = progress;









    html_deviation = document.getElementById("deviation");

    html_deviation.textContent = deviation;



    html_games_number_all = document.getElementById("games_number_all");

    html_games_number_all.textContent = games_number_all;




    html_games_number_rate = document.getElementById("games_number_rate");

    html_games_number_rate.textContent = games_number_rate;









    html_play_time = document.getElementById("play_time");

    html_play_time.textContent = play_time;










    html_wins_number = document.getElementById("wins_number");

    html_wins_number.textContent = wins_number;



    html_wins_number_percent = document.getElementById("wins_number_percent");

    html_wins_number_percent.textContent = wins_number_percent;




    html_loss_number = document.getElementById("loss_number");

    html_loss_number.textContent = loss_number;



    html_loss_number_percent = document.getElementById("loss_number_percent");

    html_loss_number_percent.textContent = loss_number_percent;



    html_draws_number = document.getElementById("draws_number");

    html_draws_number.textContent = draws_number;



    html_draws_number_percent = document.getElementById("draws_number_percent");

    html_draws_number_percent.textContent = draws_number_percent;








  }).catch(error => {
    console.error(error);
  });



  const new_request = new Request('https://lichess.org/api/user/antonharkevich/perf/bullet', myInit);


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
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        timezone: 'UTC',
      };
      
      weak_players_percent = response['percentile'] + "%";

      games_number_tournament = response['stat']['count']['tour'];

      games_number_berserk = response['stat']['count']['berserk'];

      average_players_rate = response['stat']['count']['opAvg'];


      disconnects_number = "|" + response['stat']['count']['disconnects'] + "|";

      disconnects_number_percent = Math.floor(response['stat']['count']['disconnects']/response['stat']['count']['all'] * 100) + "%";
  
      the_highest_rate = response['stat']['highest']['int'];
  
      the_highest_rate_time = new Date(response['stat']['highest']['at']).toLocaleString("ru", options);
  
      the_lowest_rate = response['stat']['lowest']['int'];
  
      the_lowest_rate_time = new Date(response['stat']['lowest']['at']).toLocaleString("ru", options);



      html_weak_players_percent = document.getElementById("weak_players_percent");

      html_weak_players_percent.textContent = weak_players_percent;


      html_games_number_tournament = document.getElementById("games_number_tournament");

      html_games_number_tournament.textContent = games_number_tournament;
  
  
  
  
  
      html_games_number_berserk = document.getElementById("games_number_berserk");
  
      html_games_number_berserk.textContent = games_number_berserk;


      html_average_players_rate = document.getElementById("average_players_rate");

      html_average_players_rate.textContent = average_players_rate;


      html_disconnects_number = document.getElementById("disconnects_number");

      html_disconnects_number.textContent = disconnects_number;


      html_disconnects_number_percent = document.getElementById("disconnects_number_percent");

      html_disconnects_number_percent.textContent = disconnects_number_percent;
  
  
  
      html_the_highest_rate = document.getElementById("the_highest_rate");
  
      html_the_highest_rate.textContent = the_highest_rate;
  
  
  
      html_the_highest_rate_time = document.getElementById("the_highest_rate_time");
  
      html_the_highest_rate_time.textContent = the_highest_rate_time;
  
  
      html_the_lowest_rate = document.getElementById("the_lowest_rate");
  
      html_the_lowest_rate.textContent = the_lowest_rate;
  
  
  
      html_the_lowest_rate_time = document.getElementById("the_lowest_rate_time");
  
      html_the_lowest_rate_time.textContent = the_lowest_rate_time;

  
  
    }).catch(error => {
      console.error(error);
    });