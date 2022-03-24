//здесь мы получим данные из апишки (пока что будут созданы говорящие переменные с захардкоженными значениями)
//а затем рассставим зачения данных в нужные места страницы

win_streak_times = 11;

best_win_streak_time_from = "6 мар. 2022 г.,23.16";

best_win_streak_time_to = "7 мар. 2022 г.,23.16";

current_win_times = 0;



loose_streak_times = 6;

best_loose_streak_time_from = "11 мар. 2022 г.,23.16";

best_loose_streak_time_to = "17 мар. 2022 г.,23.16";

current_loose_times = 1;



best_players_win_names  = ["ANTON", "YOUSUF", "MARINA", "JERALD", "NIKITA"]

best_players_win_rates  = [2004, 2003, 2002, 2001, 2000]

best_players_win_dates  = ["6 мар. 2022 г.,23.16", "7 мар. 2022 г.,23.16", "8 мар. 2022 г.,23.16", "9 мар. 2022 г.,23.16", "10 мар. 2022 г.,23.16"]

best_players_loose_names  = ["ANTON_LOOSE", "YOUSUF_LOOSE", "MARINA_LOOSE", "JERALD_LOOSE", "NIKITA_LOOSE"]

best_players_loose_rates  = [1900, 1901, 1902, 1903, 1904]

best_players_loose_dates  = ["11 мар. 2022 г.,23.16", "12 мар. 2022 г.,23.16", "13 мар. 2022 г.,23.16", "14 мар. 2022 г.,23.16", "15 мар. 2022 г.,23.16"]



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