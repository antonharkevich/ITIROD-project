import React, { useState, useEffect, useRef } from 'react'
import "./styles.css";
import { lichessAPIRequestRating } from './lichess';
import Login from './Login';
import { useAuth } from './useAuth'


export default function Rating() {
    const { pending, isSignedIn, user, auth, userName} = useAuth()
    let rateItems = []
    const myCanvas = useRef(0);
    const last7DAYS = useRef(0);
    const last30DAYS = useRef(0);
    const last90DAYS = useRef(0);
    const last180DAYS = useRef(0);
    const last360DAYS = useRef(0);
    const mainRadio = useRef(0);

    useEffect(() => {
        lichessAPIRequestRating(userName)
        .then((res) => {
          rateItems = res
          console.log(res)
        })
        .catch((e) => {
          console.log(e.message)
        })
        if (isSignedIn){
            const ctx = myCanvas.current.getContext('2d');

            let labels = [];
            let data = [];
            
            
            let w = myCanvas.current.width;
            let h = myCanvas.current.height;
        
            let w_start = 0.08 * w;
            let w_finish = 0.85 * w; 
        
            let h_start = 0.1 * h;
            let h_finish = 0.9 * h;
        
            let w_length = w_finish - w_start;
            let h_length = h_finish - h_start;
        

                

            const main_radio=mainRadio.current;
            main_radio.addEventListener('change', function(evt){
            let descriptionId = evt.target.id
            if (descriptionId == "week"){
                labels = [];
                data = [];
                let j = rateItems.length - 7;
                if (j < 0){
                    j = 0
                } 
                for(let i = j; i < rateItems.length; i+=1){
                    labels[i - j] = "" + rateItems[i][2] + rateItems[i][1]; 
                    data[i - j] = rateItems[i][3]; 
                }



            }
            else if(descriptionId == "1 month"){
                labels = [];
                data = [];
                let j = rateItems.length - 30;
                if (j < 0){
                    j = 0
                } 
                for(let i = j; i < rateItems.length; i+=1){
                    labels[i - j] = "" + rateItems[i][2] + rateItems[i][1] + rateItems[i][0]; 
                    data[i - j] = rateItems[i][3]; 
                }
            }
            else if(descriptionId == "3 month"){
                labels = [];
                data = [];
                let j = rateItems.length - 90;
                if (j < 0){
                    j = 0
                } 
                for(let i = j; i < rateItems.length; i+=1){
                    labels[i - j] = "" + rateItems[i][2] + rateItems[i][1] + rateItems[i][0]; 
                    data[i - j] = rateItems[i][3]; 
                }
            }
            else if(descriptionId == "6 month"){
                labels = [];
                data = [];
                let j = rateItems.length - 180;
                if (j < 0){
                    j = 0
                } 
                for(let i = j; i < rateItems.length; i+=1){
                    labels[i - j] = "" + rateItems[i][2] + rateItems[i][1] + rateItems[i][0]; 
                    data[i - j] = rateItems[i][3]; 
                }
            }
            else if(descriptionId == "12 month"){
                labels = [];
                data = [];
                let j = rateItems.length - 360;
                if (j < 0){
                    j = 0
                } 
                for(let i = j; i < rateItems.length; i+=1){
                    labels[i - j] = "" + rateItems[i][2] + rateItems[i][1] + rateItems[i][0]; 
                    data[i - j] = rateItems[i][3]; 
                }
            }
            else if(descriptionId == "all life"){
                labels = [];
                data = [];
                for(let i = 0; i < rateItems.length; i+=1){
                    labels[i] = "" + rateItems[i][2] + rateItems[i][1] + rateItems[i][0]; 
                    data[i] = rateItems[i][3]; 
                }

            }
            ctx.clearRect(0, 0, w,h);
            ctx.fillStyle = "black"; 
            ctx.strokeStyle = 'black';// Задаём чёрный цвет для линий 
            ctx.lineWidth = 2.0; // Ширина линии
            ctx.beginPath(); // Запускает путь
            ctx.moveTo(0.08 * w, 0.02 * h); // Указываем начальный путь
            ctx.lineTo(0.08 * w, 0.9 * h); // Перемешаем указатель
            ctx.lineTo(0.99 * w, 0.9 * h); // Ещё раз перемешаем указатель
            ctx.stroke(); // Делаем контур

            ctx.font = '9px serif';
            

            ctx.font = '9px serif';




            let index_labels = Math.floor(labels.length/5);

            if (descriptionId != "week"){
                for(var i = 1; i < 6; i++) { 
                    ctx.fillText(labels[i * index_labels - 1],(0.08*w)+ (i*index_labels*w_length/labels.length) -(1*w_length/labels.length)  - 0.055 * w, 0.97 * h); 
                    ctx.strokeStyle = 'blue';
                    ctx.beginPath(); 
                    ctx.moveTo((0.08*w)+ (i*index_labels*w_length/labels.length) - (1*w_length/labels.length), 0.1 * h ); 
                    ctx.lineTo((0.08*w)+ (i*index_labels*w_length/labels.length) - (1*w_length/labels.length), 0.9 * h );  
                    ctx.stroke(); 
                }
            }
            else{
                ctx.fillText(labels[0],(0.08*w) - 0.035 * w , 0.97 * h); 


                for(var i = 1; i < 7; i++) { 
                    ctx.fillText(labels[i],(0.08*w)+ (i*w_length/labels.length) - 0.035 * w, 0.97 * h); 
                    ctx.strokeStyle = 'blue';
                    ctx.beginPath(); 
                    ctx.moveTo((0.08*w)+ (i*w_length/labels.length), 0.1 * h ); 
                    ctx.lineTo((0.08*w)+ (i*w_length/labels.length), 0.9 * h );  
                    ctx.stroke(); 
                    
                }
            }


            let min_rate = Math.min(...data);
            let max_rate = Math.max(...data);


            min_rate = min_rate - 100;
            max_rate = max_rate + 100;




            // Цвет для рисования
            ctx.fillStyle = "black";
            for(let i = 0; i <= 4; i++) { 
                ctx.strokeStyle = 'black';
                ctx.fillText(min_rate+ Math.floor(((4-i)*(max_rate-min_rate)/4)), 0.001 * w, 0.1 * h + i * h / 5); 
                ctx.beginPath(); 
                ctx.moveTo(0.07 * w, 0.1 * h + i * h / 5 ); 
                ctx.lineTo(0.09 * w, 0.1 * h + i * h / 5); 
                ctx.stroke(); 
            }

            ctx.beginPath(); 
            ctx.moveTo(0.08 * w, 0.1 * h + ( (1 - ((data[0] - min_rate)/(max_rate - min_rate)))*h_length) ); 
            for(var i=1; i<data.length; i++) { 
                ctx.strokeStyle = 'red';
                ctx.lineTo(0.08 * w + (i* w_length/data.length ), 0.1 * h + ( (1- ((data[i] - min_rate)/(max_rate - min_rate)))*h_length) );  
            }
            ctx.stroke();
    })
  }
    
},[userName, isSignedIn] );
    if ( isSignedIn){
    console.log(rateItems)
    return (
      <>
            <main class="index_main">
            <section class="main_radio"  ref={mainRadio} id = "main_radio" >
                <div class="form_radio"> 
                    <input id="week" ref={last7DAYS} name="radio" value="one" type="radio"/>
                    <label for="week"> <span></span> last 7 days </label> 
                </div> 
                <div class="form_radio"> 
                    <input id="1 month" ref={last30DAYS} name="radio" value="two" type="radio"/> 
                    <label for="1 month"> <span></span> last 30 days </label> 
                </div>
                <div class="form_radio"> 
                    <input id="3 month" ref={last90DAYS} name="radio" value="three"  type="radio"/>
                    <label for="3 month"> <span></span> last 90 days </label> 
                </div> 
                <div class="form_radio"> 
                    <input id="6 month" ref={last180DAYS} name="radio" value="four" type="radio"/> 
                    <label for="6 month"> <span></span> last 180 days </label> 
                </div>
                <div class="form_radio"> 
                    <input id="12 month" ref={last360DAYS} name="radio" value="five" type="radio"/>
                    <label for="12 month"> <span></span> last 360 days </label> 
                </div> 
                <div class="form_radio"> 
                    <input id="all life" name="radio" value="six" type="radio"/> 
                    <label for="all life"> <span></span> all life </label> 
                </div>
                
            </section>
            <section class="canvas__wrapper">
                <p class="top_player_title">Dynamic of player rating during chosen period</p>
                <canvas class="resize-canvas" ref={myCanvas} ></canvas>
            </section>
            </main>
      </>
    );
    }
    else{
    return(
        <Login  />
    )
    }
}