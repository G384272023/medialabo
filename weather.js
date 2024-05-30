let data = {
  "coord": {
    "lon": 116.3972,
    "lat": 39.9075
  },
  "weather": [
    {
      "id": 803,
      "main": "Clouds",
      "description": "曇りがち",
      "icon": "04d"
    }
  ],
  "base": "stations",
  "main": {
    "temp": 9.94,
    "feels_like": 8.65,
    "temp_min": 9.94,
    "temp_max": 9.94,
    "pressure": 1022,
    "humidity": 14,
    "sea_level": 1022,
    "grnd_level": 1016
  },
  "visibility": 10000,
  "wind": {
    "speed": 2.65,
    "deg": 197,
    "gust": 4.84
  },
  "clouds": {
    "all": 53
  },
  "dt": 1646542386,
  "sys": {
    "type": 1,
    "id": 9609,
    "country": "CN",
    "sunrise": 1646520066,
    "sunset": 1646561447
  },
  "timezone": 28800,
  "id": 1816670,
  "name": "北京市",
  "cod": 200
};

////////// 課題3-2 ここからプログラムを書こう
let b1 = document.querySelector('button#print');
b1.addEventListener('click', iroiro);
let w=document.querySelector('body');
 w.style.backgroundColor = '#E6E6FA';
function iroiro() {
  
  let i = document.querySelector('input[name="basho"]');
  let g=i.value;
  let url = 'https://www.nishita-lab.org/web-contents/jsons/openweather/'+g+'.json';
  axios.get(url)
  .then(showResult)   // 通信成功
  .catch(showError)   // 通信失敗
  .then(finish);      // 通信の最後の処理
  
  let r = Math.floor(Math.random() * 12)+1;
  let body = document.querySelector('body');
  if(r==1){
    body.style.backgroundColor = '#ffbcbc';
  }else if(r==2){
    body.style.backgroundColor = '#ffbcdd';
  }else if(r==3){
    body.style.backgroundColor = '#ffbcff';
  }else if(r==4){
    body.style.backgroundColor = '#ddbcff';
  }else if(r==5){
    body.style.backgroundColor = '#bcbcff';
  }else if(r==6){
    body.style.backgroundColor = '#bcddff';
  }else if(r==7){
    body.style.backgroundColor = '#bcffff';
  }else if(r==8){
    body.style.backgroundColor = '#bcffdd';
  }else if(r==9){
    body.style.backgroundColor = '#bcffbc';
  }else if(r==10){
    body.style.backgroundColor = '#ddffbc';
  }else if(r==11){
    body.style.backgroundColor = '#fffbc';
  }else if(r==12){
    body.style.backgroundColor = '#ffddbc';
  }
  
}
function showResult(resp){
  let data = resp.data;
  if (typeof data === 'string') {
    data = JSON.parse(data);
  }
  console.log(data);
  console.log(data.name);
  console.log(data.main.temp_max);
  console.log(data.main.temp_min);
  let p1 = document.querySelector('p#name');
p1.textContent = ("都市名: "+data.name+"🏙️"); 
let p2 = document.querySelector('p#temp_max');
p2.textContent = ("最高気温: "+data.main.temp_max+"℃ 🥵");
let p3 = document.querySelector('p#temp_min');
p3.textContent = ("最低気温: "+data.main.temp_min+"℃ 🥶");
let p4= document.querySelector('p#situ');
p4.textContent = ("湿度: "+data.main.humidity+"% 💦");

}

function showError(err) {
  console.log(err);
}
function finish() {
  console.log('Ajax 通信が終わりました');
}