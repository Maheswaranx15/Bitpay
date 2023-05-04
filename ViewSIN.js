let request = require('request');

let resource_url = 'https://test.bitpay.com/tokens';
let token = 'C35YJjqY1oKZ8MWKjNhH2EcRiPuCSPKHL7DoxyJxJ31F';
let headers = {
   "X-Accept-Version": "2.0.0",
   "Content-Type": "application/json",
   "X-Identity": "02811dcd84bb5f436269ed070c27858f872196c90ce77cf869cf3516c82477d22e",
   "X-Signature": "3046022100b045fd40a2ba1824f5530d41f694c2aab68e340317e43732fc69375affa23a86022100d12127b7601492a9938fc702ae48e14a1d7b55f80ab36b884152064a3979ffc7"
};
let options = {
   url: resource_url + '/' + token + '/sins',
   method: 'GET',
   headers: headers,
   json: true
};

request(options, function (error, response, body) {
   console.log(body);
});