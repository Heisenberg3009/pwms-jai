const axios = require('axios');
API_URL="http://localhost:5000/api"

test('test user array', () => {
    expect.assertions(1);
    return axios.get(`${API_URL}/users`)
      .then(resp => resp.data)
      .then(resp => {
        console.log(resp[0]);
        expect(resp[0].name).toEqual('Eren');
      });
    });