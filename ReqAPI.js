let request = require('request');

let resource_url = 'https://test.bitpay.com/tokens';
let post_data = {
   "id": "Tf1oaPKnG4y1r5Dmt8FM7qP24Jb1KU4eCcy",
   "label": "merchantwebsite.com",
   "facade": "merchant"
};
let headers = {"X-Accept-Version": "2.0.0", "Content-Type": "application/json"};
let options = {
   url: resource_url,
   method: 'POST',
   json: post_data,
   headers: headers
};

request(options, function (error, response, body) {
   console.log(body);
});