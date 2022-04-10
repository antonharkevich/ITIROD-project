async function lichessAPIRequestWorstAndBestGames(user){

    if(user != 'N/A'){
        var myHeaders = new Headers();
        myHeaders.append('Content-Type', 'application/json');
        
        var myInit = {
            method: 'GET',
        };
  
        const new_request = new Request('https://lichess.org/api/user/'+user+'/perf/bullet', myInit);
        
        try {
            const new_response = await fetch(new_request);
            if (!new_response.ok) {
            throw new Error(`HTTP error: ${new_response.status}`);
            }
            const response = await new_response.json();
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
            json = {};
            json['win_streak_times'] = win_streak_times;
            json['best_win_streak_time_from'] = best_win_streak_time_from
            json['best_win_streak_time_to'] = best_win_streak_time_to
            json['current_win_times'] = current_win_times
            json['loose_streak_times'] = loose_streak_times
            json['best_loose_streak_time_from'] = best_loose_streak_time_from
            json['best_loose_streak_time_to'] = best_loose_streak_time_to
            json['current_loose_times'] = current_loose_times
            json['best_players_win_names'] = best_players_win_names
            json['best_players_win_rates'] = best_players_win_rates
            json['best_players_win_dates'] = best_players_win_dates
            json['best_players_loose_names'] = best_players_loose_names
            json['best_players_loose_rates'] = best_players_loose_rates
            json['best_players_loose_dates'] = best_players_loose_dates
            return json;
        }
        catch(error) {
            console.error(`Could not get worst and best games: ${error}`);
        }
    }

    else {
        return null
    }
}



async function lichessAPIRequestStatistics(user){

    if(user != 'N/A'){
        var myHeaders = new Headers();
        myHeaders.append('Content-Type', 'application/json');
        
        var myInit = {
            method: 'GET',
        };
  
        const new_request = new Request('https://lichess.org/api/user/'+user, myInit);
        
        try {
            const new_response = await fetch(new_request);
            if (!new_response.ok) {
            throw new Error(`HTTP error: ${new_response.status}`);
            }
            const response = await new_response.json();
            

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



            json = {};
            json['player_rate'] = player_rate;
            json['progress_games'] = progress_games
            json['progress'] = progress
            json['deviation'] = deviation
            json['games_number_all'] = games_number_all
            json['games_number_rate'] = games_number_rate
            json['play_time'] = play_time
            json['wins_number'] = wins_number
            json['wins_number_percent'] = wins_number_percent
            json['loss_number'] = loss_number
            json['loss_number_percent'] = loss_number_percent
            json['draws_number'] = draws_number
            json['draws_number_percent'] = draws_number_percent
            return json;
        }
        catch(error) {
            console.error(`Could not get statistics: ${error}`);
        }
    }

    else {
        return null
    }
}




async function lichessAPIRequestPerformance(user){

    if(user != 'N/A'){
        var myHeaders = new Headers();
        myHeaders.append('Content-Type', 'application/json');
        
        var myInit = {
            method: 'GET',
        };
  
        const new_request = new Request('https://lichess.org/api/user/'+user+'/perf/bullet', myInit);
        
        try {
            const new_response = await fetch(new_request);
            if (!new_response.ok) {
            throw new Error(`HTTP error: ${new_response.status}`);
            }
            const response = await new_response.json();
            

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
        



            json = {};
            json['weak_players_percent'] = weak_players_percent;
            json['games_number_tournament'] = games_number_tournament
            json['games_number_berserk'] = games_number_berserk
            json['average_players_rate'] = average_players_rate
            json['disconnects_number'] = disconnects_number
            json['disconnects_number_percent'] = disconnects_number_percent
            json['the_highest_rate'] = the_highest_rate
            json['the_highest_rate_time'] = the_highest_rate_time
            json['the_lowest_rate'] = the_lowest_rate
            json['the_lowest_rate_time'] = the_lowest_rate_time
            return json;
        }
        catch(error) {
            console.error(`Could not get performance: ${error}`);
        }
    }

    else {
        return null
    }
}




async function lichessAPIRequestActivity(user){

    if(user != 'N/A'){
        var myHeaders = new Headers();
        myHeaders.append('Content-Type', 'application/json');
        
        var myInit = {
            method: 'GET',
        };
  
        const new_request = new Request('https://lichess.org/api/user/'+user+'/activity', myInit);
        
        try {
            const new_response = await fetch(new_request);
            if (!new_response.ok) {
            throw new Error(`HTTP error: ${new_response.status}`);
            }
            const response = await new_response.json();
            console.log(response)
            
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



            json = {};
            json['play_dates'] = play_dates;
            json['games_amounts'] = games_amounts
            json['day_dynamics'] = day_dynamics
            json['day_rates'] = day_rates
            json['day_wins'] = day_wins
            json['day_loss'] = day_loss
            return json;
        }
        catch(error) {
            console.error(`Could not get activity: ${error}`);
        }
    }

    else {
        return null
    }
}








async function lichessAPIRequestRating(user){

    if(user != 'N/A'){
        var myHeaders = new Headers();
        myHeaders.append('Content-Type', 'application/json');
        
        var myInit = {
            method: 'GET',
        };
  
        const new_request = new Request('https://lichess.org/api/user/' + user + '/rating-history', myInit);
        
        try {
            const new_response = await fetch(new_request);
            if (!new_response.ok) {
            throw new Error(`HTTP error: ${new_response.status}`);
            }
            const response = await new_response.json();
            

            let result_data = response[0]['points'];
            for(i = 0; i < result_data.length; i++){
                result_data[i][1] +=1;
                if(result_data[i][1] > 12){
                    result_data[i][1] = 1;
                    result_data[i][0] += 1;
                }
                if(Math.floor(result_data[i][2]/10) == 0){
                    result_data[i][2] = "0" + result_data[i][2];
                }
                if(Math.floor(result_data[i][1]/10) == 0){
                    result_data[i][1] = "0" + result_data[i][1];
                }
            }

            return result_data;
        }
        catch(error) {
            console.error(`Could not get rating: ${error}`);
        }
    }

    else {
        return null
    }
}

