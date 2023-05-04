let request = require('request');


// Create a new ECDSA key pair

let resource_url = 'https://test.bitpay.com/tokens';
let post_data = {
    "currency": "USD",
    "price": 1,
    "orderId": "2",
    "notificationURL": "https://merchantwebsite.com/shop/notifications",
    "redirectURL": "https://merchantwebsite.com/shop/return",
    "buyer": {
         "email": "devwpengine099@gmail.com"
    },
    "token": "C35YJjqY1oKZ8MWKjNhH2EcRiPuCSPKHL7DoxyJxJ31F"
};


let headers = {
    "X-Accept-Version": "2.0.0",
    "Content-Type": "application/json",
    "X-Identity": "02811dcd84bb5f436269ed070c27858f872196c90ce77cf869cf3516c82477d22e",
    "X-Signature": "3044022041a60eca1e561a16c71906ca992803ccb6c32367645f0f30e0f5605d648cd9a20220449b948c3f2b220490cdf7245a11427c7e11191ef7894cf662d09d4ac28788d3"
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



