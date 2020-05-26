import axios from 'axios';

export default axios.create({
	baseURL: "https://api.yelp.com/v3/businesses",
	headers: {
		Authorization: 'Bearer UJZ-tP792RlBUpHBYKuzIzpmIzYwFhUJIm5vjJxIQ-eCvxh9JgA-f0ewMhrTWCFGJiljraEwJP-43YR9iJmdIPLD31rWBiUee1O2RZWztNm-X6QrznW-YaR6drepXnYx'
	}
})

