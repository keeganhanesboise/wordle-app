export const wordApiOptions = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': `${process.env.REACT_APP_API_KEY}`,
		'X-RapidAPI-Host': 'random-words5.p.rapidapi.com'
	}
};

export const WORD_API_URL = 'https://random-words5.p.rapidapi.com/getMultipleRandom?count=1&wordLength=5';