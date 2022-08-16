export const wordApiOptions = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': `${process.env.REACT_APP_API_KEY}`,
        //'X-RapidAPI-Key': '061fbf0b4fmsh512ad314b56439ap1293dfjsn1d00b22d7640',
		'X-RapidAPI-Host': 'random-words5.p.rapidapi.com'
	}
};

export const WORD_API_URL = 'https://random-words5.p.rapidapi.com/getMultipleRandom?count=1&wordLength=5';