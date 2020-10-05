//jshint esversion:6

const express = require("express");

const bodyparser = require("body-parser");

const request = require("request");

const https = require("https");

const app = express();

app.use(express.static("public"));

app.use(bodyparser.urlencoded({
  extended: true
}));

app.get("/", function(request, response) {
  response.sendFile(__dirname + "/Signup.html");
});

app.post("/", function(request, response) {
  const firstname = request.body.First;
  const lastname = request.body.Last;
  const email = request.body.Email;

  const data = {
    members: [{
        email_address: email,
        status: "subscribed",
        merge_fields: {
          FNAME: firstname,
          LNAME: lastname
        }
      }

    ]
  };

  const jsondata = JSON.stringify(data);

  const url = "https://us17.api.mailchimp.com/3.0/lists/b1dfa83b53";

  const options = {

    method:"post",
    auth: "Tarun1:2931b995cd11818523068a517cbda17a-us17"
  }

  const req = https.request(url , options , function(res){
  res.on("data" , function(data){
    console.log(JSON.parse(data));
  })
  });

 req.write(jsondata);
 req.end();


});

app.listen(3000, function() {
  console.log("Server is running on port 3000.");
});
//9268919ffe027d2a8b9b02d20ec052f3-us17
//b1dfa83b53
///
