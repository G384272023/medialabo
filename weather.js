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
console.log(data.name);
for(let a of "name"){
  console.log(a.name);
}

let btn = document.querySelector('button#botton');
btn.addEventListener('click', hantei);

function hantei() {
  let s= document.querySelector('select#mati');
  let idx = s.selectedIndex; 

  let os = s.querySelectorAll('option'); 
  let o = os.item(idx);      

    let kensaku=o.value;
    let url = "https://www.nishita-lab.org/web-contents/jsons/openweather/"+kensaku+".json";
    console.log(url);
    

  

    axios.get(url)
        .then(showResult)   // 通信成功
        .catch(showError)   // 通信失敗
        .then(finish);      // 通信の最後の処理
    
}

function showResult(resp) {
    
    let data = resp.data;

    
    if (typeof data === 'string') {
        data = JSON.parse(data);
    }

    
    let tenki1=document.querySelector("span#a1");
    tenki1.textContent=data.name;
    let tenki2=document.querySelector("span#a2");
    tenki2.textContent=data.weather[0].description;
    let tenki3=document.querySelector("span#a3");
    tenki3.textContent=data.wind.speed;
    let tenki4=document.querySelector("span#a4");
    tenki4.textContent=data.wind.deg;
    let tenki5=document.querySelector("span#a5");
    tenki5.textContent=data.main.temp_max;
    let tenki6=document.querySelector("span#a6");
    tenki6.textContent=data.main.temp_min;
    let tenki7=document.querySelector("span#a7");
    tenki7.textContent=data.main.temp;
    let tenki9 = document.querySelector("span#a9");
    tenki9.textContent=data.main.humidity;
}

// 通信エラーが発生した時の処理
function showError(err) {
    console.log(err);
}

// 通信の最後にいつも実行する処理
function finish() {
    console.log('Ajax 通信が終わりました');
}

console.log(data.name);
console.log(data.weather[0].description);
console.log(data.main.temp_max);
console.log(data.main.temp_min);
console.log(data.wind.deg);
console.log(data.wind.speed);


