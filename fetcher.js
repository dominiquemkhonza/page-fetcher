const request = require('request');
// downloaded package in node

const fs = require('fs');
// downloaded package in node -> helps store, access, and manage data on our operating system

request('http://www.example.edu/', (error, response, body) => {
  if (!error) {
    fs.writeFile('./index.html', body, (err) => {
      if (!err) {
        console.log(`Downloaded and saved ${body.length} bytes to ./index.html`);
      }
    });
  }
});

// make an http request and wait for the response
// -> request( )
// take data recieved via request and write it to a file in your local system (computer)
// use nested call backs 
