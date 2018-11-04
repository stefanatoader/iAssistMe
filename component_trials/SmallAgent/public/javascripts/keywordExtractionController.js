const pd = require('paralleldots');

pd.apiKey = "fWLw5ARVAHhGEtfGxkNeXCrmKHjOZYbFhrId5I0pW0Q";

pd.usage()
    .then((response) => {
        console.log(response);
    })
    .catch((error) => {
        console.log(error);
    })

pd.keywords('For the Yankees, it took a stunning comeback after being down 2-0 to the Indians in the American League Division Series. For the Astros, it took beating Chris Sale to top the Red Sox.')
    .then((response) => {
        console.log(response);
    })
    .catch((error) => {
        console.log(error);
    })


var text_array=JSON.stringify(["For the Yankees, it took a stunning comeback after being down 2-0 to the Indians in the American League Division Series. For the Astros, it took beating Chris Sale to top the Red Sox.","U.S. stocks edged higher on Friday, with the S&P 500 hitting a more than five-month high, as gains in industrials and other areas offset a drop in financials. Fred Katayama reports."]);
pd.keywordsBatch(text_array)
    .then((response) => {
        console.log(response);
    }).catch((error) =>{
    console.log(error);
    })

    /* pd.multilangKeywords("C'est un environnement très hostile, si vous choisissez de débattre ici, vous serez vicieusement attaqué par l'opposition.","fr")
	.then((response) => {
		console.log(response);
	})
	.catch((error) => {
		console.log(error);
	}) */
