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


ctx.fillStyle = "black"; // Задаём чёрный цвет для линий 
ctx.lineWidth = 2.0; // Ширина линии
ctx.beginPath(); // Запускает путь
ctx.moveTo(0.08 * w, 0.02 * h); // Указываем начальный путь
ctx.lineTo(0.08 * w, 0.9 * h); // Перемешаем указатель
ctx.lineTo(0.99 * w, 0.9 * h); // Ещё раз перемешаем указатель
ctx.stroke(); // Делаем контур

ctx.font = '9px serif';



// Цвет для рисования
ctx.fillStyle = "black";
// Цикл для отображения значений по Y 
for(let i = 0; i < 5; i++) { 
    ctx.fillText(1900, 0.001 * w, 0.1 * h + i * h / 5); 
    ctx.beginPath(); 
    ctx.moveTo(0.07 * w, 0.1 * h + i * h / 5 ); 
    ctx.lineTo(0.09 * w, 0.1 * h + i * h / 5); 
    ctx.stroke(); 
}
 

ctx.font = '9px serif';
// Массив с меткам месяцев
let labels = ["12012021", "12032021", "12072021", "12112021", "12022022"]; 
 
// Выводим меток
for(var i=0; i<labels.length; i++) { 
    ctx.fillText(labels[i], 0.05* w + i*w/labels.length, 0.97 * h, 0.9 * w); 
}

/*
// Объявляем массив данных графика
let data = [ 10, 53, 39, 54, 21 ]; 
 
// Назначаем зелёный цвет для графика
ctx.fillStyle = "green"; 
// Цикл для от рисовки графиков
for(var i=0; i<data.length; i++) { 
    var dp = data[i]; 
    ctx.fillRect(40 + i*100, 460-dp*5 , 50, dp*5); 
}
*/