var resultElem= document.querySelector("#result");
var formElem= document.querySelector("#info");
function search_nick(){
    var nameElem=formElem.nickname.value;
    console.log(nameElem);
        var param = {
            name:nameElem
        };
    nick_ajax(param);
}
function nick_ajax(param){
    const init = {
        method: 'GET',
        headers:
            {
                "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.77 Safari/537.36",
                "Accept-Language": "ko-KR,ko;q=0.9,en-US;q=0.8,en;q=0.7",
                "Accept-Charset": "application/x-www-form-urlencoded; charset=UTF-8",
                "Origin": "https://developer.riotgames.com",
                "X-Riot-Token": "RGAPI-4a1b2207-40c3-48b9-a1a5-327623bb89cf",
                "Access-Control-Allow-Origin":"*"
            }
    };
    fetch('https://cors-anywhere.herokuapp.com/https://kr.api.riotgames.com/lol/summoner/v4/summoners/by-name/'+param.name, init)
        .then(function(res) {
            return res.json();
        })
        .then(function(myJson) {
           console.log(myJson);
           var summonerId = myJson.id;

        });
}