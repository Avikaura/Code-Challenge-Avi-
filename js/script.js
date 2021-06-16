const submit= document.querySelector('.submit')

submit.addEventListener("click", function(){

    const iata= document.querySelector('#text').value;
    
    text.value="";

    function iataCode(){
        fetch(`https://iata-and-icao-codes.p.rapidapi.com/airline?iata_code=${iata}`, {
	"method": "GET",
	"headers": {
		"x-rapidapi-key": "6d0859ecf7mshb84be2370d73e4ep180b57jsne7d88163e948",
		"x-rapidapi-host": "iata-and-icao-codes.p.rapidapi.com"
	}
})
.then(response => response.json())
.then(response => {
	console.log(response);

    const iata_code= response[0]["iata_code"];
    const icao_code= response[0]["icao_code"];
    const name= response[0]["name"];
    const url= response[0]["website"];


    const htmlCode= document.querySelector('.displayData');
    htmlCode.innerHTML=`
 <p>Airline: ${iata_code} with ${icao_code} (ICAO code) is- " ${name} " and all the information can be retrieved from ${url}</p>`


    function resForm(){
        document.querySelector('#submit').reset()
    }

})
.catch(err => {
	console.error(err);
});
    }
iataCode();
resForm();
})