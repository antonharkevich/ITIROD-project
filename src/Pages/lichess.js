const lichessAPIRequestWorstAndBestGames = async(user) =>{

    if(user != 'N/A'){
        var myHeaders = new Headers();
        myHeaders.append('Content-Type', 'application/json');
        
        var myInit = {
            method: 'GET',
        };
  
        const new_request = new Request('https://lichess.org/api/user/'+user+'/perf/bullet', myInit);
        

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
              
              let win_streak_times = response['stat']['resultStreak']['win']['max']['v'];
          
              let best_win_streak_time_from = new Date(response['stat']['resultStreak']['win']['max']['from']['at']).toLocaleString("ru", options);
              
              let best_win_streak_time_to = new Date(response['stat']['resultStreak']['win']['max']['to']['at']).toLocaleString("ru", options);
              
              let current_win_times = response['stat']['resultStreak']['win']['cur']['v'];
              
              
              
              let loose_streak_times = response['stat']['resultStreak']['loss']['max']['v'];
              
              let best_loose_streak_time_from = new Date(response['stat']['resultStreak']['loss']['max']['from']['at']).toLocaleString("ru", options);
              
              let best_loose_streak_time_to = new Date(response['stat']['resultStreak']['loss']['max']['to']['at']).toLocaleString("ru", options);
              
              let current_loose_times = response['stat']['resultStreak']['loss']['cur']['v'];
              
              
              
          
          
              let best_players_win_names  = []
              
              let best_players_win_rates  = []
              
              let best_players_win_dates  = []
              
              let best_players_loose_names  = []
              
              let best_players_loose_rates  = []
              
              let best_players_loose_dates  = []
          
          
          
              for (let i = 0; i <5; i++){
          
                  best_players_win_names[i]  = response['stat']['bestWins']['results'][i]['opId']['name'];
              
                  best_players_win_rates[i]  = response['stat']['bestWins']['results'][i]['opInt'];
                  
                  best_players_win_dates[i]  = new Date(response['stat']['bestWins']['results'][i]['at']).toLocaleString("ru", options);
                  
                  best_players_loose_names[i]  = response['stat']['worstLosses']['results'][i]['opId']['name'];
                  
                  best_players_loose_rates[i]  = response['stat']['worstLosses']['results'][i]['opInt'];
                  
                  best_players_loose_dates[i]  = new Date(response['stat']['worstLosses']['results'][i]['at']).toLocaleString("ru", options);
          
          
              }
            let json_list  = []
            let json = {
                'win_streak_times': win_streak_times,
                'best_win_streak_time_from': best_win_streak_time_from,
                'best_win_streak_time_to': best_win_streak_time_to,
                'current_win_times': current_win_times,
                'loose_streak_times': loose_streak_times,
                'best_loose_streak_time_from': best_loose_streak_time_from,
                'best_loose_streak_time_to': best_loose_streak_time_to,
                'current_loose_times': current_loose_times,
                'best_players_win_names': best_players_win_names,
                'best_players_win_rates': best_players_win_rates,
                'best_players_win_dates': best_players_win_dates,
                'best_players_loose_names': best_players_loose_names,
                'best_players_loose_rates': best_players_loose_rates,
                'best_players_loose_dates': best_players_loose_dates
            };
            json_list.push(json)
            return json_list;

    }

    else {
        return null
    }
}



const lichessAPIRequestStatistics = async(user) =>{

    if(user != 'N/A'){
        var myHeaders = new Headers();
        myHeaders.append('Content-Type', 'application/json');
        
        var myInit = {
            method: 'GET',
        };
  
        const new_request = new Request('https://lichess.org/api/user/'+user, myInit);
        

            const new_response = await fetch(new_request);
            if (!new_response.ok) {
            throw new Error(`HTTP error: ${new_response.status}`);
            }
            const response = await new_response.json();


            

            let player_rate = response['perfs']['bullet']['rating'];

            let progress_games = 12;

            let progress = response['perfs']['bullet']['prog'];



            let deviation = response['perfs']['bullet']['rd'];

            let games_number_all = response['count']['all'];

            let games_number_rate = response['count']['rated'];



            let play_days  = Math.floor(response['playTime']['total'] / (3600 * 24));
            let play_hours = Math.floor((response['playTime']['total'] - (play_days * 3600 * 24)) / 3600);
            let play_minutes = Math.floor((response['playTime']['total'] - (play_days * 3600 * 24)  - (play_hours * 3600)) / 60);

            let play_time = play_days  + ' дней ' + play_hours + ' часов ' + play_minutes + ' минут ';



            let wins_number = "|" + response['count']['win'] + "|";

            let wins_number_percent = Math.floor(response['count']['win']/response['count']['all'] * 100) + "%";


            let loss_number = "|" + response['count']['loss'] + "|";


            let loss_number_percent = Math.floor(response['count']['loss']/response['count']['all'] * 100) + "%";

            let draws_number = "|" + response['count']['draw'] + "|";;

            let draws_number_percent = Math.floor(response['count']['draw']/response['count']['all'] * 100) + "%";



          


            const new_request2 = new Request('https://lichess.org/api/user/'+user+'/perf/bullet', myInit);
            const new_response2 = await fetch(new_request2);
            if (!new_response2.ok) {
            throw new Error(`HTTP error: ${new_response2.status}`);
            }
            const response2 = await new_response2.json();
            

            var options = {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
                timezone: 'UTC',
              };
              
              let weak_players_percent = response2['percentile'] + "%";
        
              let games_number_tournament = response2['stat']['count']['tour'];
        
              let games_number_berserk = response2['stat']['count']['berserk'];
        
              let average_players_rate = response2['stat']['count']['opAvg'];
        
        
              let disconnects_number = "|" + response2['stat']['count']['disconnects'] + "|";
        
              let disconnects_number_percent = Math.floor(response2['stat']['count']['disconnects']/response2['stat']['count']['all'] * 100) + "%";
          
              let the_highest_rate = response2['stat']['highest']['int'];
          
              let the_highest_rate_time = new Date(response2['stat']['highest']['at']).toLocaleString("ru", options);
          
              let the_lowest_rate = response2['stat']['lowest']['int'];
          
              let the_lowest_rate_time = new Date(response2['stat']['lowest']['at']).toLocaleString("ru", options);
        


            let json_list = [];

            let  json = {
                'player_rate': player_rate,
                'progress_games': progress_games,
                'progress': progress,
                'deviation': deviation,
                'games_number_all': games_number_all,
                'games_number_rate': games_number_rate,
                'play_time': play_time,
                'wins_number': wins_number,
                'wins_number_percent': wins_number_percent,
                'loss_number': loss_number,
                'loss_number_percent': loss_number_percent,
                'draws_number': draws_number,
                'draws_number_percent': draws_number_percent,
                'weak_players_percent': weak_players_percent,
                'games_number_tournament': games_number_tournament,
                'games_number_berserk': games_number_berserk,
                'average_players_rate': average_players_rate,
                'disconnects_number': disconnects_number,
                'disconnects_number_percent': disconnects_number_percent,
                'the_highest_rate': the_highest_rate,
                'the_highest_rate_time': the_highest_rate_time,
                'the_lowest_rate': the_lowest_rate,
                'the_lowest_rate_time': the_lowest_rate_time
            };
            json_list.push(json)
            return json_list;




    }

    else {
        return null
    }
}




const lichessAPIRequestPerformance = async(user)=>{

    if(user != 'N/A'){
        var myHeaders = new Headers();
        myHeaders.append('Content-Type', 'application/json');
        
        var myInit = {
            method: 'GET',
        };
  
        const new_request = new Request('https://lichess.org/api/user/'+user+'/perf/bullet', myInit);
        

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
        



            let json = {
                'weak_players_percent': weak_players_percent,
                'games_number_tournament': games_number_tournament,
                'games_number_berserk': games_number_berserk,
                'average_players_rate': average_players_rate,
                'disconnects_number': disconnects_number,
                'disconnects_number_percent': disconnects_number_percent,
                'the_highest_rate': the_highest_rate,
                'the_highest_rate_time': the_highest_rate_time,
                'the_lowest_rate': the_lowest_rate,
                'the_lowest_rate_time': the_lowest_rate_time
            };
            return json;

    }

    else {
        return null
    }
}




const lichessAPIRequestActivity= async (user) =>{
    if(user != 'N/A'){
        var myHeaders = new Headers();
        myHeaders.append('Content-Type', 'application/json');
        
        var myInit = {
            method: 'GET',
        };
  
        const new_request = new Request('https://lichess.org/api/user/'+user+'/activity', myInit);
        

            const new_response = await fetch(new_request);
            if (!new_response.ok) {
            throw new Error(`HTTP error: ${new_response.status}`);
            }
            const response = await new_response.json();
            console.log(response)
            
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

            let json_list = []
            for (let i = 0; i < 7; i++){

                let json = {
                    'play_dates': play_dates[i],
                    'games_amounts': games_amounts[i],
                    'day_dynamics': day_dynamics[i],
                    'day_rates': day_rates[i],
                    'day_wins': day_wins[i],
                    'day_loss': day_loss[i]
                };

                json_list.push(json)

            }
            return json_list;

    }

    else {
        return null
    }
}








const lichessAPIRequestRating = async(user) =>{

    if(user != 'N/A'){
        var myHeaders = new Headers();
        myHeaders.append('Content-Type', 'application/json');
        
        var myInit = {
            method: 'GET',
        };
  
        const new_request = new Request('https://lichess.org/api/user/' + user + '/rating-history', myInit);
        

            const new_response = await fetch(new_request);
            if (!new_response.ok) {
            throw new Error(`HTTP error: ${new_response.status}`);
            }
            const response = await new_response.json();
            

            let result_data = response[0]['points'];
            for(let i = 0; i < result_data.length; i++){
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

    else {
        return null
    }
}





export { lichessAPIRequestActivity, lichessAPIRequestPerformance, lichessAPIRequestRating, lichessAPIRequestStatistics, lichessAPIRequestWorstAndBestGames };