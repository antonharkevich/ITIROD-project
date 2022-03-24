//здесь мы получим данные из апишки (пока что будут созданы говорящие переменные с захардкоженными значениями)
//а затем рассставим зачения данных в нужные места страницы

play_dates = ["5 мар. 2022 г.", "6 мар. 2022 г.", "7 мар. 2022 г.", "8 мар. 2022 г.", "9 мар. 2022 г.", "10 мар. 2022 г.", "11 мар. 2022 г.", "12 мар. 2022 г.", "13 мар. 2022 г.", "14 мар. 2022 г."]

games_amounts = [10, 11, 12, 13, 14, 15, 16, 17, 18, 19]

day_dynamics = ["up", "down", "up", "down", "up", "down", "up", "down", "up", "down" ]

day_rates = [2090, 2089, 2090, 2089, 2090, 2089, 2090, 2089, 2090, 2089]

day_wins = [7, 5, 6, 6, 7, 7, 8, 8, 9, 9]

day_loss = [3, 6, 6, 7, 7, 8, 8, 9, 9, 10]


for (i in [0,1,2,3,4,5,6,7,8,9]){
    
    let html_play_date = document.getElementById("play_date" + i);
    let html_games_amount = document.getElementById("games_amount" + i);
    let html_day_dynamic = document.getElementById("day_dynamic" + i);
    let html_day_rate = document.getElementById("day_rate" + i);
    let html_day_wins = document.getElementById("day_wins" + i);
    let html_day_loss = document.getElementById("day_loss" + i);


    html_play_date.textContent = play_dates[i];
    html_games_amount.textContent = games_amounts[i];
    html_day_dynamic.textContent = day_dynamics[i];
    html_day_rate.textContent = day_rates[i];
    html_day_wins.textContent = day_wins[i];
    html_day_loss.textContent = day_loss[i];
}
