let request = require('request');

let resource_url = 'https://test.bitpay.com/payouts';
let post_data = {
   "amount": 1,
   "currency": "USD",
   "ledgerCurrency": "GBP",
   "reference": "payout_20210527",
   "notificationEmail": "devwpengine099@gmail.com",
   "notificationURL": "https://yournotiticationURL.com/0wx0bv9785amb3sa1eq1rz5bgx",
   "email":"devwpengine099@gmail.com",
   "label":"DevWP engine",
   "token":"hR9xND2rATeh3eKXw8HVDbFXMYf86KV5wygLpf1V81w"
};
let headers = {
   "X-Accept-Version": "2.0.0",
   "Content-Type": "application/json",
   "X-Identity": "03c5dee7375d42e2112b7a9d170b5dde13569b38c14b2caeb01a35b4815fb97b29",
   "X-Signature": "3045022100dfa122b1d843c68f5019ccec4de48fd07aeb8de5098463d67ae2c14ece70980102206670fec00dcd7f247bcaec682459bf878d7fd4933fb184ce890c4b70465925c1"
};
let options = {
   url: resource_url,
   method: 'POST',
   json: post_data,
   headers: headers
};

request(options, function (error, response, body) {
   console.log(body);
});