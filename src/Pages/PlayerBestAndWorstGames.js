import React, { useState, useEffect } from 'react'
import { lichessAPIRequestWorstAndBestGames } from './lichess';
import Login from './Login';
import { useAuth } from './useAuth';
import "./styles.css";

export default function PlayerGames() {
    const { pending, isSignedIn, user, auth, userName} = useAuth()
    const [gamesItems, initGames] = useState([])
    useEffect(() => {
        lichessAPIRequestWorstAndBestGames(userName)
        .then((res) => {
          initGames(res)
          console.log(res)
        })
        .catch((e) => {
          console.log(e.message)
        })
    }, [userName])
    if ( isSignedIn){
        return(
            <>
            {gamesItems.map((item, idx) => {
            return (
            <>
            <div class = "main_win_activity">
                <section class="win_section">
                    <h2 class="top_player_title">Сonsecutive win streak</h2>
                    <p class="top_player_with_play">Рекордная серия: <strong class="strong_win_fil_text" id = "win_streak_times">{item.win_streak_times}</strong> игр</p>
                    <p class="top_player_with_play">от  <time class = "simple_date_text" datetime="2022-03-05T00:00:00.000Z" id = "best_win_streak_time_from">{item.best_win_streak_time_from}  </time>до  <time class = "simple_date_text" datetime="2022-03-05T00:00:00.000Z" id = "best_win_streak_time_to">{item.best_win_streak_time_to} </time></p>
                    <p class="top_player_with_play">Текущая серия: <strong class="strong_win_fil_text" id ="current_win_times">{item.current_win_times}</strong></p>
                </section>
                <section class="loose_section">
                    <h2 class="top_player_title">Сonsecutive loose streak</h2>
                    <p class="top_player_with_play">Рекордная серия: <strong class="strong_loose_fil_text" id = "loose_streak_times">{item.loose_streak_times}</strong> игр</p>
                    <p class="top_player_with_play">от  <time class = "simple_date_text" datetime="2022-03-05T00:00:00.000Z" id = "best_loose_streak_time_from">{item.best_loose_streak_time_from} </time>до  <time class = "simple_date_text" datetime="2022-03-05T00:00:00.000Z" id = "best_loose_streak_time_to">{item.best_loose_streak_time_to} </time></p>
                    <p class="top_player_with_play">Текущая серия: <strong class="strong_loose_fil_text" id ="current_loose_times">{item.current_loss_times}</strong></p>
                </section>
            </div>
            <div class = "main_win_players_activity">
                <section class="win_section">
                    <h2 class="top_player_title">Победы против лучших по рейтингу</h2>
                    <p class="top_player_with_play"><em id="best_win_player_name0" >{item.best_players_win_names[0]}</em> (<strong class="strong_small_win_fil_text" id="best_win_player_rate0">{item.best_players_win_rates[0]}</strong>)&emsp;<time class = "date_text" datetime="2022-03-05T00:00:00.000Z" id="best_win_player_date0">{item.best_players_win_dates[0]}</time></p>
                    <p class="top_player_with_play"><em id="best_win_player_name1" >{item.best_players_win_names[1]}</em> (<strong class="strong_small_win_fil_text" id="best_win_player_rate1">{item.best_players_win_rates[1]}</strong>)&emsp;<time class = "date_text" datetime="2022-03-05T00:00:00.000Z" id="best_win_player_date1">{item.best_players_win_dates[1]}</time></p>    
                    <p class="top_player_with_play"><em id="best_win_player_name2" >{item.best_players_win_names[2]}</em> (<strong class="strong_small_win_fil_text" id="best_win_player_rate2">{item.best_players_win_rates[2]}</strong>)&emsp;<time class = "date_text" datetime="2022-03-05T00:00:00.000Z" id="best_win_player_date2">{item.best_players_win_dates[2]} </time></p> 
                    <p class="top_player_with_play"><em id="best_win_player_name3" >{item.best_players_win_names[3]}</em> (<strong class="strong_small_win_fil_text" id="best_win_player_rate3">{item.best_players_win_rates[3]}</strong>)&emsp;<time class = "date_text" datetime="2022-03-05T00:00:00.000Z" id="best_win_player_date3">{item.best_players_win_dates[3]}</time></p> 
                    <p class="top_player_with_play"><em id="best_win_player_name4" >{item.best_players_win_names[4]}</em> (<strong class="strong_small_win_fil_text" id="best_win_player_rate4">{item.best_players_win_rates[4]}</strong>)&emsp;<time class = "date_text" datetime="2022-03-05T00:00:00.000Z" id="best_win_player_date4">{item.best_players_win_dates[4]}</time></p> 
                </section>
            </div>
            <div class = "main_win_players_activity">
                <section class="loose_section">
                    <h2 class="top_player_title">Поражения худшим по рейтингу</h2>
                    <p class="top_player_with_play"><em id="best_loose_player_name0" >{item.best_players_loose_names[0]}</em> (<strong class="strong_small_loose_fil_text" id="best_loose_player_rate0">{item.best_players_loose_rates[0]}</strong>)&emsp;<time class = "date_text" datetime="2022-03-05T00:00:00.000Z" id="best_loose_player_date0">{item.best_players_loose_dates[0]}</time></p>
                    <p class="top_player_with_play"><em id="best_loose_player_name1" >{item.best_players_loose_names[1]}</em> (<strong class="strong_small_loose_fil_text" id="best_loose_player_rate1">{item.best_players_loose_rates[1]}</strong>)&emsp;<time class = "date_text" datetime="2022-03-05T00:00:00.000Z" id="best_loose_player_date1">{item.best_players_loose_dates[1]}</time></p>    
                    <p class="top_player_with_play"><em id="best_loose_player_name2" >{item.best_players_loose_names[2]}</em> (<strong class="strong_small_loose_fil_text" id="best_loose_player_rate2">{item.best_players_loose_rates[2]}</strong>)&emsp;<time class = "date_text" datetime="2022-03-05T00:00:00.000Z" id="best_loose_player_date2">{item.best_players_loose_dates[2]}</time></p> 
                    <p class="top_player_with_play"><em id="best_loose_player_name3" >{item.best_players_loose_names[3]}</em> (<strong class="strong_small_loose_fil_text" id="best_loose_player_rate3">{item.best_players_loose_rates[3]}</strong>)&emsp;<time class = "date_text" datetime="2022-03-05T00:00:00.000Z" id="best_loose_player_date3">{item.best_players_loose_dates[3]}</time></p> 
                    <p class="top_player_with_play"><em id="best_loose_player_name4" >{item.best_players_loose_names[4]}</em> (<strong class="strong_small_loose_fil_text" id="best_loose_player_rate4">{item.best_players_loose_rates[4]}</strong>)&emsp;<time class = "date_text" datetime="2022-03-05T00:00:00.000Z" id="best_loose_player_date4">{item.best_players_loose_dates[4]}</time></p> 
                </section>
            </div>
                </>
            )
        })}
        </>
        )
    }
    else{
    return(
        <Login  />
    )
    }
}