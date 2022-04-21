class Rating{
    constructor(response){
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

        this.result_data = result_data;
    }
}

function lichessRequest(){
    var user = document.getElementById('ussser').innerHTML;
    responsePromise = lichessAPIRequestRating(user)
    responsePromise.then(response => {

    const rating = new Rating(response)
        
    labels = [];
    data = [];
    j = rating.result_data.length - 7;//проверка что данных будет меньше чем 7 дней
    if (j < 0){
        j = 0
    } 
    for(i = j; i < rating.result_data.length; i+=1){
        labels[i - j] = "" + rating.result_data[i][2] + rating.result_data[i][1]; 
        data[i - j] = rating.result_data[i][3]; 
    }
    




    let canvas = document.getElementById('canvas'); 

    let ctx = canvas.getContext('2d');
        let w = canvas.width;
        let h = canvas.height;

        let w_start = 0.08 * w;
        let w_finish = 0.85 * w; 

        let h_start = 0.1 * h;
        let h_finish = 0.9 * h;

        let w_length = w_finish - w_start;
        let h_length = h_finish - h_start;

        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = "black"; // Задаём чёрный цвет для линий 
        ctx.strokeStyle = 'black';
        ctx.lineWidth = 2.0; // Ширина линии
        ctx.beginPath(); // Запускает путь
        ctx.moveTo(0.08 * w, 0.02 * h); // Указываем начальный путь
        ctx.lineTo(0.08 * w, 0.9 * h); // Перемешаем указатель
        ctx.lineTo(0.99 * w, 0.9 * h); // Ещё раз перемешаем указатель
        ctx.stroke(); // Делаем контур

        ctx.font = '9px serif';
        

        ctx.font = '9px serif';





        ctx.fillText(labels[0],(0.08*w) - 0.035 * w , 0.97 * h); 


        for(var i = 1; i < 7; i++) { 
            ctx.fillText(labels[i],(0.08*w)+ (i*w_length/labels.length) - 0.035 * w, 0.97 * h); 
            ctx.strokeStyle = 'blue';
            ctx.beginPath(); 
            ctx.moveTo((0.08*w)+ (i*w_length/labels.length), 0.1 * h ); 
            ctx.lineTo((0.08*w)+ (i*w_length/labels.length), 0.9 * h );  
            ctx.stroke(); 
            
        }




        min_rate = Math.min(...data);
        max_rate = Math.max(...data);


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


        
        document.getElementById('week').checked = 'checked'; 






    var main_radio=document.getElementById('main_radio');
    main_radio.addEventListener('change', function(evt){
        let descriptionId = evt.target.id
        if (descriptionId == "week"){
            labels = [];
            data = [];
            j = rating.result_data.length - 7;//проверка что данных будет меньше чем 7 дней
            if (j < 0){
                j = 0
            } 
            for(i = j; i < rating.result_data.length; i+=1){
                labels[i - j] = "" + rating.result_data[i][2] + rating.result_data[i][1]; 
                data[i - j] = rating.result_data[i][3]; 
            }


        }
        else if(descriptionId == "1 month"){
            labels = [];
            data = [];
            j = rating.result_data.length - 30;//проверка что данных будет меньше чем 30 дней
            if (j < 0){
                j = 0
            } 
            for(i = j; i < rating.result_data.length; i+=1){
                labels[i - j] = "" + rating.result_data[i][2] + rating.result_data[i][1] + rating.result_data[i][0]; 
                data[i - j] = rating.result_data[i][3]; 
            }
        }
        else if(descriptionId == "3 month"){
            labels = [];
            data = [];
            j = rating.result_data.length - 90;//проверка что данных будет меньше чем 90 дней
            if (j < 0){
                j = 0
            } 
            for(i = j; i < rating.result_data.length; i+=1){
                labels[i - j] = "" + rating.result_data[i][2] + rating.result_data[i][1] + rating.result_data[i][0]; 
                data[i - j] = rating.result_data[i][3]; 
            }
        }
        else if(descriptionId == "6 month"){
            labels = [];
            data = [];
            j = rating.result_data.length - 180;//проверка что данных будет меньше чем 180 дней
            if (j < 0){
                j = 0
            } 
            for(i = j; i < rating.result_data.length; i+=1){
                labels[i - j] = "" + rating.result_data[i][2] + rating.result_data[i][1] + rating.result_data[i][0]; 
                data[i - j] = rating.result_data[i][3]; 
            }
        }
        else if(descriptionId == "12 month"){
            labels = [];
            data = [];
            j = rating.result_data.length - 360;//проверка что данных будет меньше чем 360 дней
            if (j < 0){
                j = 0
            } 
            for(i = j; i < rating.result_data.length; i+=1){
                labels[i - j] = "" + rating.result_data[i][2] + rating.result_data[i][1] + rating.result_data[i][0]; 
                data[i - j] = rating.result_data[i][3]; 
            }
        }
        else if(descriptionId == "all life"){
            labels = [];
            data = [];
            for(i = 0; i < rating.result_data.length; i+=1){
                labels[i] = "" + rating.result_data[i][2] + rating.result_data[i][1] + rating.result_data[i][0]; 
                data[i] = rating.result_data[i][3]; 
            }
        }


        let canvas = document.getElementById('canvas'); 

        let ctx = canvas.getContext('2d');
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        let w = canvas.width;
        let h = canvas.height;

        let w_start = 0.08 * w;
        let w_finish = 0.85 * w; 

        let h_start = 0.1 * h;
        let h_finish = 0.9 * h;

        let w_length = w_finish - w_start;
        let h_length = h_finish - h_start;


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


        min_rate = Math.min(...data);
        max_rate = Math.max(...data);


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
    

  }).catch(error => {
    console.error(error);
  });
}









 




