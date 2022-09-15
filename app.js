const get_api_res_btn = document.getElementById('get_api_res_btn');
const api_result = document.getElementById('api_result');
const api_result2 = document.getElementById('api_result2');

get_api_res_btn.addEventListener('click', moveISS);
 


let endPoint = "http://api.open-notify.org/iss-now.json";


function moveISS(){
    fetch(endPoint, {
    method: 'GET'
})
.then(res => res.json())
.then(data=> {
    api_result.innerHTML=data.iss_position.longitude;
    api_result2.innerHTML=data.iss_position.latitude;
});
}