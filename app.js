var twilio = require('twilio');

var client = new twilio.RestClient('TWILIO_ACCT_SID', 'TWILIO_AUTH_TOKEN');

client.sendSms({
    to:'YOUR_PHONE',
    from:'TWILIO_NUMBER',
    body: 'Testing Twilio and node.js'
}, function(err, msg) {
    if(!err) {
        console.log('Success! The SID for this SMS msg is:');
        console.log(msg.sid);
        
        console.log('Message sent on:');
        console.log(msg.dateCreated);
    } else {
        console.log('There was an error:');
        console.log(err);
    }
});