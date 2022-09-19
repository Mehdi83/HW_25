const get_api_res_btn = document.getElementById('get_api_res_btn');
const MyValue = document.getElementById('MyValue');
const api_result = document.getElementById('api_result');
const api_result2 = document.getElementById('api_result2');
const api_result3 = document.getElementById('api_result3'); 


get_api_res_btn.addEventListener('click', moveISS);


function moveISS(){
    let endPoint = "http://www.omdbapi.com/?i=tt3896198&apikey=e0c3a202&&t="+MyValue.value; //этот ска строк занимал 4 часа работе

    fetch(endPoint, {
    method: 'GET'
})

.then(res => res.json())
.then(data=> {
    api_result.innerHTML="Title: "+data.Title;
    api_result2.innerHTML="Year: "+data.Year;
    api_result3.innerHTML="Director: "+data.Director;
});
}