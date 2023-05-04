
const crypto = require('crypto');
const EC = require('elliptic').ec;

const ec = new EC('secp256k1');
const keyPair = ec.genKeyPair();
let resource_url = 'https://test.bitpay.com/invoices';
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
const data = JSON.stringify(resource_url,post_data);

const hash = crypto.createHash('sha256').update(data).digest('hex');
const signature = keyPair.sign(hash, 'hex', {canonical: true}).toDER('hex');
post_data.signature = signature;
console.log(signature);




