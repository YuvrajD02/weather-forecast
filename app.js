let url='https://api.weatherapi.com/v1/current.json?key=cf9b2f8d8ef04b838ec181115253105&q=';

async function getdata(input){
    try{
        let res=await axios.get(url+input);
        console.log(res.data);
        return res.data;
        
        
    }
    catch(e){
       console.log("error is :",e);
    }
}


let btn=document.querySelector("button");
btn.addEventListener("click",async()=>{
    let input=document.querySelector("#input");
  let fact=await getdata(input.value);

 

 var time=document.getElementById('time');
 var temp=document.getElementById('temp');

var city=document.getElementById('name');
var region=document.getElementById('region');
var humidity=document.getElementById('humidity');
var windspeed=document.getElementById('windspeed');


time.innerHTML=fact.location.localtime;
temp.innerHTML=fact.current.temp_c + "°C";
city.innerHTML = fact.location.name;
 region.innerHTML = fact.location.region;
 humidity.innerHTML = fact.current.humidity + "%";
windspeed.innerHTML = fact.current.wind_kph + " kph";


})
