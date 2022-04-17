import React, { useState, useEffect } from 'react'
import "./styles.css";
import { fireLichessRequest} from './firebase';
import Login from './Login';
import { useAuth } from './useAuth'



export default function TopPlayers() {
    const { pending, isSignedIn, user, auth } = useAuth()
    const [playersItems, initPlayers] = useState([])
    useEffect(() => {
        fireLichessRequest()
        .then((res) => {
         initPlayers(res)
          console.log(res)
        })
        .catch((e) => {
          console.log(e.message)
        })
    }, [])
    console.log(user)
    if ( isSignedIn){
        return(
            <>
            {playersItems.map((item, idx) => {
            return (
            <>
            <div class = "main_top_player_activity">
                <section class="blitz_section">
                    <h2 class="top_player_title">BULLET</h2>
                    <section class="top_player_string">
                        <p class = "GM" id="bullet_top_rank0">{item.bullet_top_ranks[0]} </p>
                        <p>&emsp;</p>
                        <p class="top_player" id="bullet_top_name0"> {item.bullet_top_names[0]}</p> 
                        <p>&emsp;</p>
                        <p class="top_rate"   id="bullet_top_rate0"> {item.bullet_top_rates[0]}</p>
                    </section>
                    <section class="top_player_string">
                        <p class = "GM" id="bullet_top_rank1">{item.bullet_top_ranks[1]}  </p>
                        <p>&emsp;</p>
                        <p class="top_player" id="bullet_top_name1"> {item.bullet_top_names[1]} </p> 
                        <p>&emsp;</p>
                        <p class="top_rate"   id="bullet_top_rate1"> {item.bullet_top_rates[1]}</p>
                    </section>
                    <section class="top_player_string">
                        <p class = "GM" id="bullet_top_rank2">{item.bullet_top_ranks[2]}  </p>
                        <p>&emsp;</p>
                        <p class="top_player" id="bullet_top_name2"> {item.bullet_top_names[2]} </p> 
                        <p>&emsp;</p>
                        <p class="top_rate"   id="bullet_top_rate2"> {item.bullet_top_rates[2]}</p>
                    </section>
                    <section class="top_player_string">
                        <p class = "GM" id="bullet_top_rank3">{item.bullet_top_ranks[3]}  </p>
                        <p>&emsp;</p>
                        <p class="top_player" id="bullet_top_name3"> {item.bullet_top_names[3]} </p> 
                        <p>&emsp;</p>
                        <p class="top_rate"   id="bullet_top_rate3"> {item.bullet_top_rates[3]}</p>
                    </section>
                    <section class="top_player_string">
                        <p class = "GM" id="bullet_top_rank4">{item.bullet_top_ranks[4]} </p>
                        <p>&emsp;</p>
                        <p class="top_player" id="bullet_top_name4"> {item.bullet_top_names[4]} </p> 
                        <p>&emsp;</p>
                        <p class="top_rate"   id="bullet_top_rate4"> {item.bullet_top_rates[4]}</p>
                    </section>
                    <section class="top_player_string">
                        <p class = "GM" id="bullet_top_rank5">{item.bullet_top_ranks[5]} </p>
                        <p>&emsp;</p>
                        <p class="top_player" id="bullet_top_name5"> {item.bullet_top_names[5]}</p> 
                        <p>&emsp;</p>
                        <p class="top_rate"   id="bullet_top_rate5"> {item.bullet_top_rates[5]}</p>
                    </section>
                    <section class="top_player_string">
                        <p class = "GM" id="bullet_top_rank6">{item.bullet_top_ranks[6]}  </p>
                        <p>&emsp;</p>
                        <p class="top_player" id="bullet_top_name6"> {item.bullet_top_names[6]} </p> 
                        <p>&emsp;</p>
                        <p class="top_rate"   id="bullet_top_rate6"> {item.bullet_top_rates[6]}</p>
                    </section>
                    <section class="top_player_string">
                        <p class = "GM" id="bullet_top_rank7">{item.bullet_top_ranks[7]}  </p>
                        <p>&emsp;</p>
                        <p class="top_player" id="bullet_top_name7"> {item.bullet_top_names[7]} </p> 
                        <p>&emsp;</p>
                        <p class="top_rate"   id="bullet_top_rate7"> {item.bullet_top_rates[7]}</p>
                    </section>
                    <section class="top_player_string">
                        <p class = "GM" id="bullet_top_rank8">{item.bullet_top_ranks[8]}  </p>
                        <p>&emsp;</p>
                        <p class="top_player" id="bullet_top_name8"> {item.bullet_top_names[8]}</p> 
                        <p>&emsp;</p>
                        <p class="top_rate"   id="bullet_top_rate8">  {item.bullet_top_rates[8]}</p>
                    </section>
                    <section class="top_player_string">
                        <p class = "GM" id="bullet_top_rank9">{item.bullet_top_ranks[9]} </p>
                        <p>&emsp;</p>
                        <p class="top_player" id="bullet_top_name9"> {item.bullet_top_names[9]} </p> 
                        <p>&emsp;</p>
                        <p class="top_rate"   id="bullet_top_rate9">  {item.bullet_top_rates[9]}</p>
                    </section>
                    <section class="top_player_string">
                        <p class = "GM" id="bullet_top_rank10">{item.bullet_top_ranks[10]}  </p>
                        <p>&emsp;</p>
                        <p class="top_player" id="bullet_top_name10"> {item.bullet_top_names[10]} </p> 
                        <p>&emsp;</p>
                        <p class="top_rate"   id="bullet_top_rate10">  {item.bullet_top_rates[10]}</p>
                    </section>
                    <section class="top_player_string">
                        <p class = "GM" id="bullet_top_rank11">{item.bullet_top_ranks[11]}  </p>
                        <p>&emsp;</p>
                        <p class="top_player" id="bullet_top_name11"> {item.bullet_top_names[11]} </p>
                        <p>&emsp;</p> 
                        <p class="top_rate"   id="bullet_top_rate11">  {item.bullet_top_rates[11]}</p>
                    </section>
                    <section class="top_player_string">
                        <p class = "GM" id="bullet_top_rank12">{item.bullet_top_ranks[12]}  </p>
                        <p>&emsp;</p>
                        <p class="top_player" id="bullet_top_name12"> {item.bullet_top_names[12]} </p> 
                        <p>&emsp;</p>
                        <p class="top_rate"   id="bullet_top_rate12">  {item.bullet_top_rates[12]}</p>
                    </section>
                    <section class="top_player_string">
                        <p class = "GM" id="bullet_top_rank13">{item.bullet_top_ranks[13]}  </p>
                        <p>&emsp;</p>
                        <p class="top_player" id="bullet_top_name13">{item.bullet_top_names[13]} </p> 
                        <p>&emsp;</p>
                        <p class="top_rate"   id="bullet_top_rate13">  {item.bullet_top_rates[13]}</p>
                    </section>
                    <section class="top_player_string">
                        <p class = "GM" id="bullet_top_rank14">{item.bullet_top_ranks[14]}  </p>
                        <p>&emsp;</p>
                        <p class="top_player" id="bullet_top_name14"> {item.bullet_top_names[14]} </p> 
                        <p>&emsp;</p>
                        <p class="top_rate"   id="bullet_top_rate14">  {item.bullet_top_rates[14]}</p>
                    </section>
                    <section class="top_player_string">
                        <p class = "GM" id="bullet_top_rank15">{item.bullet_top_ranks[15]} </p>
                        <p>&emsp;</p>
                        <p class="top_player" id="bullet_top_name15"> {item.bullet_top_names[15]}</p> 
                        <p>&emsp;</p>
                        <p class="top_rate"  id="bullet_top_rate15"> {item.bullet_top_rates[15]}</p>
                    </section>
                </section>
                <section class="blitz_section">
                    <h2 class="top_player_title">BLITZ</h2>
                    <section class="top_player_string">
                        <p class = "GM" id="blitz_top_rank0">{item.blitz_top_ranks[0]} </p>
                        <p>&emsp;</p>
                        <p class="top_player" id="blitz_top_name0"> {item.blitz_top_names[0]} </p> 
                        <p>&emsp;</p>
                        <p class="top_rate"   id="blitz_top_rate0"> {item.blitz_top_rates[0]}</p>
                    </section>
                    <section class="top_player_string">
                        <p class = "GM" id="blitz_top_rank1">{item.blitz_top_ranks[1]}  </p>
                        <p>&emsp;</p>
                        <p class="top_player" id="blitz_top_name1"> {item.blitz_top_names[1]} </p> 
                        <p>&emsp;</p>
                        <p class="top_rate"   id="blitz_top_rate1"> {item.blitz_top_rates[1]}</p>
                    </section>
                    <section class="top_player_string">
                        <p class = "GM" id="blitz_top_rank2">{item.blitz_top_ranks[2]}  </p>
                        <p>&emsp;</p>
                        <p class="top_player" id="blitz_top_name2"> {item.blitz_top_names[2]} </p> 
                        <p>&emsp;</p>
                        <p class="top_rate"   id="blitz_top_rate2"> {item.blitz_top_rates[2]} </p>
                    </section>
                    <section class="top_player_string">
                        <p class = "GM" id="blitz_top_rank3">{item.blitz_top_ranks[3]}  </p>
                        <p>&emsp;</p>
                        <p class="top_player" id="blitz_top_name3"> {item.blitz_top_names[3]} </p> 
                        <p>&emsp;</p>
                        <p class="top_rate"   id="blitz_top_rate3"> {item.blitz_top_rates[3]} </p>
                    </section>
                    <section class="top_player_string">
                        <p class = "GM" id="blitz_top_rank4">{item.blitz_top_ranks[4]}  </p>
                        <p>&emsp;</p>
                        <p class="top_player" id="blitz_top_name4"> {item.blitz_top_names[4]} </p> 
                        <p>&emsp;</p>
                        <p class="top_rate"   id="blitz_top_rate4"> {item.blitz_top_rates[4]} </p>
                    </section>
                    <section class="top_player_string">
                        <p class = "GM" id="blitz_top_rank5">{item.blitz_top_ranks[5]}  </p>
                        <p>&emsp;</p>
                        <p class="top_player" id="blitz_top_name5"> {item.blitz_top_names[5]} </p> 
                        <p>&emsp;</p>
                        <p class="top_rate"   id="blitz_top_rate5"> {item.blitz_top_rates[5]} </p>
                    </section>
                    <section class="top_player_string">
                        <p class = "GM" id="blitz_top_rank6">{item.blitz_top_ranks[6]}  </p>
                        <p>&emsp;</p>
                        <p class="top_player" id="blitz_top_name6"> {item.blitz_top_names[6]} </p> 
                        <p>&emsp;</p>
                        <p class="top_rate"   id="blitz_top_rate6"> {item.blitz_top_rates[6]} </p>
                    </section>
                    <section class="top_player_string">
                        <p class = "GM" id="blitz_top_rank7">{item.blitz_top_ranks[7]}  </p>
                        <p>&emsp;</p>
                        <p class="top_player" id="blitz_top_name7"> {item.blitz_top_names[7]} </p> 
                        <p>&emsp;</p>
                        <p class="top_rate"   id="blitz_top_rate7">{item.blitz_top_rates[7]}</p>
                    </section>
                    <section class="top_player_string">
                        <p class = "GM" id="blitz_top_rank8">{item.blitz_top_ranks[8]}  </p>
                        <p>&emsp;</p>
                        <p class="top_player" id="blitz_top_name8"> {item.blitz_top_names[8]} </p> 
                        <p>&emsp;</p>
                        <p class="top_rate"   id="blitz_top_rate8"> {item.blitz_top_rates[8]}</p>
                    </section>
                    <section class="top_player_string">
                        <p class = "GM" id="blitz_top_rank9">{item.blitz_top_ranks[9]}  </p>
                        <p>&emsp;</p>
                        <p class="top_player" id="blitz_top_name9"> {item.blitz_top_names[9]} </p> 
                        <p>&emsp;</p>
                        <p class="top_rate"   id="blitz_top_rate9"> {item.blitz_top_rates[9]}</p>
                    </section>
                    <section class="top_player_string">
                        <p class = "GM" id="blitz_top_rank10">{item.blitz_top_ranks[10]}  </p>
                        <p>&emsp;</p>
                        <p class="top_player" id="blitz_top_name10"> {item.blitz_top_names[10]} </p>
                        <p>&emsp;</p> 
                        <p class="top_rate"   id="blitz_top_rate10"> {item.blitz_top_rates[10]}</p>
                    </section>
                    <section class="top_player_string">
                        <p class = "GM" id="blitz_top_rank11">{item.blitz_top_ranks[11]}  </p>
                        <p>&emsp;</p>
                        <p class="top_player" id="blitz_top_name11">{item.blitz_top_names[11]} </p> 
                        <p>&emsp;</p>
                        <p class="top_rate"   id="blitz_top_rate11"> {item.blitz_top_rates[11]}</p>
                    </section>
                    <section class="top_player_string">
                        <p class = "GM" id="blitz_top_rank12">{item.blitz_top_ranks[12]}  </p>
                        <p>&emsp;</p>
                        <p class="top_player" id="blitz_top_name12"> {item.blitz_top_names[12]} </p> 
                        <p>&emsp;</p>
                        <p class="top_rate"   id="blitz_top_rate12"> {item.blitz_top_rates[12]}</p>
                    </section>
                    <section class="top_player_string">
                        <p class = "GM" id="blitz_top_rank13">{item.blitz_top_ranks[13]} </p>
                        <p>&emsp;</p>
                        <p class="top_player" id="blitz_top_name13"> {item.blitz_top_names[13]} </p> 
                        <p>&emsp;</p>
                        <p class="top_rate"   id="blitz_top_rate13"> {item.blitz_top_rates[13]}</p>
                    </section>
                    <section class="top_player_string">
                        <p class = "GM" id="blitz_top_rank14">{item.blitz_top_ranks[14]}  </p>
                        <p>&emsp;</p>
                        <p class="top_player" id="blitz_top_name14"> {item.blitz_top_names[14]} </p> 
                        <p>&emsp;</p>
                        <p class="top_rate"   id="blitz_top_rate14"> {item.blitz_top_rates[14]}</p>
                    </section>
                    <section class="top_player_string">
                        <p class = "GM" id="blitz_top_rank15">{item.blitz_top_ranks[15]} </p>
                        <p>&emsp;</p>
                        <p class="top_player" id="blitz_top_name15"> {item.blitz_top_names[15]} </p> 
                        <p>&emsp;</p>
                        <p class="top_rate"   id="blitz_top_rate15"> {item.blitz_top_rates[15]}</p>
                    </section>
                </section>
                <section class="blitz_section">
                    <h2 class="top_player_title">RAPID</h2>
                    <section class="top_player_string">
                        <p class = "GM" id="rapid_top_rank0">{item.rapid_top_ranks[0]} </p>
                        <p>&emsp;</p>
                        <p class="top_player" id="rapid_top_name0"> {item.rapid_top_names[0]} </p> 
                        <p>&emsp;</p>
                        <p class="top_rate"   id="rapid_top_rate0"> {item.rapid_top_rates[0]} </p>
                    </section>
                    <section class="top_player_string">
                        <p class = "GM" id="rapid_top_rank1">{item.rapid_top_ranks[1]}  </p>
                        <p>&emsp;</p>
                        <p class="top_player" id="rapid_top_name1"> {item.rapid_top_names[1]} </p>
                        <p>&emsp;</p> 
                        <p class="top_rate"   id="rapid_top_rate1"> {item.rapid_top_rates[1]} </p>
                    </section>
                    <section class="top_player_string">
                        <p class = "GM" id="rapid_top_rank2">{item.rapid_top_ranks[2]}  </p>
                        <p>&emsp;</p>
                        <p class="top_player" id="rapid_top_name2"> {item.rapid_top_names[2]} </p> 
                        <p>&emsp;</p>
                        <p class="top_rate"   id="rapid_top_rate2"> {item.rapid_top_rates[2]} </p>
                    </section>
                    <section class="top_player_string">
                        <p class = "GM" id="rapid_top_rank3">{item.rapid_top_ranks[3]}  </p>
                        <p>&emsp;</p>
                        <p class="top_player" id="rapid_top_name3"> {item.rapid_top_names[3]} </p> 
                        <p>&emsp;</p>
                        <p class="top_rate"   id="rapid_top_rate3"> {item.rapid_top_rates[3]} </p>
                    </section>
                    <section class="top_player_string">
                        <p class = "GM" id="rapid_top_rank4">{item.rapid_top_ranks[4]}  </p>
                        <p>&emsp;</p>
                        <p class="top_player" id="rapid_top_name4"> {item.rapid_top_names[4]} </p> 
                        <p>&emsp;</p>
                        <p class="top_rate"   id="rapid_top_rate4"> {item.rapid_top_rates[4]} </p>
                    </section>
                    <section class="top_player_string">
                        <p class = "GM" id="rapid_top_rank5">{item.rapid_top_ranks[5]} </p>
                        <p>&emsp;</p>
                        <p class="top_player" id="rapid_top_name5">{item.rapid_top_names[5]} </p> 
                        <p>&emsp;</p>
                        <p class="top_rate"   id="rapid_top_rate5"> {item.rapid_top_rates[5]} </p>
                    </section>
                    <section class="top_player_string">
                        <p class = "GM" id="rapid_top_rank6">{item.rapid_top_ranks[6]} </p>
                        <p>&emsp;</p>
                        <p class="top_player" id="rapid_top_name6"> {item.rapid_top_names[6]} </p>
                        <p>&emsp;</p> 
                        <p class="top_rate"   id="rapid_top_rate6"> {item.rapid_top_rates[6]} </p>
                    </section>
                    <section class="top_player_string">
                        <p class = "GM" id="rapid_top_rank7">{item.rapid_top_ranks[7]} </p>
                        <p>&emsp;</p>
                        <p class="top_player" id="rapid_top_name7"> {item.rapid_top_names[7]} </p> 
                        <p>&emsp;</p>
                        <p class="top_rate"   id="rapid_top_rate7"> {item.rapid_top_rates[7]} </p>
                    </section>
                    <section class="top_player_string">
                        <p class = "GM" id="rapid_top_rank8">{item.rapid_top_ranks[8]} </p>
                        <p>&emsp;</p>
                        <p class="top_player" id="rapid_top_name8"> {item.rapid_top_names[8]} </p> 
                        <p>&emsp;</p>
                        <p class="top_rate"   id="rapid_top_rate8"> {item.rapid_top_rates[8]} </p>
                    </section>
                    <section class="top_player_string">
                        <p class = "GM" id="rapid_top_rank9">{item.rapid_top_ranks[9]} </p>
                        <p>&emsp;</p>
                        <p class="top_player" id="rapid_top_name9"> {item.rapid_top_names[9]} </p> 
                        <p>&emsp;</p>
                        <p class="top_rate"   id="rapid_top_rate9"> {item.rapid_top_rates[9]} </p>
                    </section>
                    <section class="top_player_string">
                        <p class = "GM" id="rapid_top_rank10">{item.rapid_top_ranks[10]} </p>
                        <p>&emsp;</p>
                        <p class="top_player" id="rapid_top_name10"> {item.rapid_top_names[10]} </p> 
                        <p>&emsp;</p>
                        <p class="top_rate"   id="rapid_top_rate10"> {item.rapid_top_rates[10]} </p>
                    </section>
                    <section class="top_player_string">
                        <p class = "GM" id="rapid_top_rank11">{item.rapid_top_ranks[11]} </p>
                        <p>&emsp;</p>
                        <p class="top_player" id="rapid_top_name11"> {item.rapid_top_names[11]} </p> 
                        <p>&emsp;</p>
                        <p class="top_rate"   id="rapid_top_rate11"> {item.rapid_top_rates[11]} </p>
                    </section>
                    <section class="top_player_string">
                        <p class = "GM" id="rapid_top_rank12">{item.rapid_top_ranks[12]} </p>
                        <p>&emsp;</p>
                        <p class="top_player" id="rapid_top_name12"> {item.rapid_top_names[12]} </p> 
                        <p>&emsp;</p>
                        <p class="top_rate"   id="rapid_top_rate12"> {item.rapid_top_rates[12]} </p>
                    </section>
                    <section class="top_player_string">
                        <p class = "GM" id="rapid_top_rank13">{item.rapid_top_ranks[13]} </p>
                        <p>&emsp;</p>
                        <p class="top_player" id="rapid_top_name13"> {item.rapid_top_names[13]} </p> 
                        <p>&emsp;</p>
                        <p class="top_rate"   id="rapid_top_rate13"> {item.rapid_top_rates[13]} </p>
                    </section>
                    <section class="top_player_string">
                        <p class = "GM" id="rapid_top_rank14">{item.rapid_top_ranks[14]}</p>
                        <p>&emsp;</p>
                        <p class="top_player" id="rapid_top_name14"> {item.rapid_top_names[14]} </p> 
                        <p>&emsp;</p>
                        <p class="top_rate"   id="rapid_top_rate14"> {item.rapid_top_rates[14]} </p>
                    </section>
                    <section class="top_player_string">
                        <p class = "GM" id="rapid_top_rank15">{item.rapid_top_ranks[15]} </p>
                        <p>&emsp;</p>
                        <p class="top_player" id="rapid_top_name15"> {item.rapid_top_names[15]} </p> 
                        <p>&emsp;</p>
                        <p class="top_rate"   id="rapid_top_rate15"> {item.rapid_top_rates[15]} </p>
                    </section>
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