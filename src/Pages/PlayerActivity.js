import React, { useState, useEffect } from 'react'
import bullet from "../Images/bullet.png"
import {lichessAPIRequestActivity} from './lichess'
import Login from './Login';
import { useAuth } from './useAuth';
import "./styles.css";




export default function Activity() {
  const { pending, isSignedIn, user, auth, userName} = useAuth()
  const [activityItems, initActivity] = useState([])
  useEffect(() => {
    lichessAPIRequestActivity(userName)
      .then((res) => {
        initActivity(res)
        console.log(res)
      })
      .catch((e) => {
        console.log(e.message)
      })
  }, [userName])


  if ( isSignedIn){
    return (
      <>
      <div class = "main_activity">
      {activityItems.map((item, idx) => {
          return (
            <section class="main_section_odd" key={idx}>
                <p class="date_text" id="play_date0"><time datetime="2022-03-05T00:00:00.000Z">{item.play_dates}</time></p>
                <img src={bullet} />
                <p >You play <strong class="strong_win_fil_text" id = "games_amount0">{item.games_amounts}</strong> times this day</p>
                <p>Your rate is <strong id = "day_dynamic0">{item.day_dynamics}</strong> to <strong class="strong_win_text"  id = "day_rate0">{item.day_rates}</strong></p>
                <p><strong class="strong_win_text" id = "day_wins0">{item.day_wins}</strong> wins</p>
                <p class="loss_text"><strong class="strong_loose_text" id = "day_loss0">{item.day_loss}</strong> loss</p>
            </section>
          )
        })}
      </div>
    </>
    )
  }
  else{
    return(
      <Login  />
  )
  }
}