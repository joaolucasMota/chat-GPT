import axios from 'axios';

const API_URL = 'https://api.openai.com/v1/completions';

const autoriza = 'API_KEY'

const sendRequest = async (input : string) => {
  try {
    const response = await axios.post(API_URL, {
      model:"text-davinci-003",
      prompt: input,
      max_tokens: 100,
      n: 1,
      temperature: 0.5,
    }, {
      headers: {
        'Authorization': `Bearer ${autoriza}`,
        'Content-Type': 'application/json',
      },
    });
    const { data } = response;
    return Promise.resolve(data);
  } catch (error) {
    return Promise.reject(error);
  }
};

export default sendRequest;