import React, { useState, useEffect } from 'react'
import { lichessAPIRequestStatistics } from './lichess';
import Login from './Login';
import { useAuth } from './useAuth';
import "./styles.css";

export default function Info() {
    const { pending, isSignedIn, user, auth, userName} = useAuth()
    const [infoItems, initInfo] = useState([])
    useEffect(() => {
        lichessAPIRequestStatistics(userName)
        .then((res) => {
          initInfo(res)
          console.log(res)
        })
        .catch((e) => {
          console.log(e.message)
        })
    }, [userName])
    if ( isSignedIn){
        return(
        <>
            {infoItems.map((item, idx) => {
            return (
            <>
            <div class = "main_win_stat_activity">
                <section class="win_section">
                    <p class="top_player_with_play">Рейтинг: <strong class = "strong_win_fil_text" id ="player_rate">{item.player_rate}</strong></p>
                    <p class="top_player_with_play">Прогресс за последние игры (<strong id="progress_games">{item.progress_games}</strong>): <strong class = "strong_win_fil_text" id="progress">{item.progress}</strong></p>
                </section>
                <section class="loose_section">
                    <p class="top_player_with_play">Вы сильнее <strong class = "strong_loose_fil_text" id="weak_players_percent">{item.weak_players_percent}</strong> игроков в Bullet</p>
                    <p class="top_player_with_play">Отклонение рейтинга:<strong class = "strong_loose_fil_text" id="deviation"> {item.deviation}</strong></p>
                </section>
            </div>
            <div class = "main_stat_activity">
                <section class="win_section">
                    <h2 class="top_player_title">ПАРТИИ</h2>
                    <p class="top_player_with_play">Всего партий:   <strong class = "strong_win_fil_text" id="games_number_all">{item.games_number_all}</strong>&emsp;Рейтинговые игры:   <strong class = "strong_win_fil_text" id="games_number_rate">{item.games_number_rate}</strong></p>
                    <p class="top_player_with_play">Турнирных партий:   <strong class = "strong_loose_fil_text" id="games_number_tournament">{item.games_number_tournament}</strong>&emsp;Партий с берсерком: <strong class = "strong_loose_fil_text" id="games_number_berserk">{item.games_number_berserk}</strong></p>
                    <p class="top_player_with_play">Времени за игрой: <strong class = "simple_date_text" id="play_time">{item.play_time}</strong></p>
                </section>
            </div>
            <div class = "main_stat_activity">
                <section class="loose_section">
                    <h2 class="top_player_title">РЕЗУЛЬТАТИВНОСТЬ</h2>
                    <p class="top_player_with_play">Средний рейтинг соперников	<strong class = "strong_win_fil_text" id="average_players_rate">{item.average_players_rate}</strong></p>
                    <p class="top_player_with_play">Побед	<strong class = "strong_win_fil_text" id="wins_number">{item.wins_number}</strong> <strong class = "strong_win_fil_text" id="wins_number_percent">{item.wins_number_percent}</strong>&emsp;Поражений	<strong class = "strong_loose_fil_text" id="loss_number">{item.loss_number}</strong> <strong class = "strong_loose_fil_text" id="loss_number_percent">{item.loss_number_percent}</strong></p>
                    <p class="top_player_with_play">Ничьих	<strong class = "strong_small_win_fil_text" id="draws_number">{item.draws_number}</strong> <strong class = "strong_small_win_fil_text" id="draws_number_percent">{item.draws_number_percent}</strong>&emsp;Отключений	<strong class = "strong_small_loose_fil_text" id="disconnects_number">{item.disconnects_number}</strong> <strong class = "strong_small_loose_fil_text" id="disconnects_number_percent">{item.disconnects_number_percent}</strong></p>
                </section>
            </div>
            <div class = "main_rate_activity">
                <section class="win_section">
                    <p class="top_player_with_play">Наивысший рейтинг: <strong class = "strong_win_fil_text" id="the_highest_rate">{item.the_highest_rate}</strong>&emsp;<time class = "simple_date_text" datetime="2022-03-05T00:00:00.000Z" id="the_highest_rate_time" >{item.the_highest_rate_time}</time></p>    
                </section>
                <section class="loose_section">
                    <p class="top_player_with_play">Наименьший рейтинг: <strong class = "strong_loose_fil_text" id="the_lowest_rate">{item.the_lowest_rate}</strong>&emsp;<time class = "simple_date_text" datetime="2022-03-05T00:00:00.000Z" id="the_lowest_rate_time" >{item.the_lowest_rate_time} </time></p> 
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