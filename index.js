const express = require("express");

const router = express.Router();

router.post("/test", (req, res) => {
  // Read variables sent via POST from our SDK
  const { sessionId, serviceCode, phoneNumber, text } = req.body;

  console.log('####################', req.body);
  let response = " ";

  if (text == "") {
    console.log(text ,'rrr');
    // This is the first request. Note how we start the response with CON
    response = `What would you like to check
        1. My account
        2. My phone number`;
  } else if (text == "1") {
    // Business logic for first level response
    response = `Choose account information you want to view
        1. Account number
        2. Account balance`;
  } else if (text == "2") {
    // Business logic for first level response
    // This is a terminal request. Note how we start the response with END
    response = `Your phone number is ${phoneNumber}`;
  } else if (text === "1*1") {
    // This is a second level response where the user selected 1 in the first instance
    const accountNumber = "ACC100101";
    // This is a terminal request. Note how we start the response with END
    response = `Your account number is ${accountNumber}`;
  } else if (text === "1*2") {
    // This is a second level response where the user selected 1 in the first instance
    const balance = "KES 10,000";
    // This is a terminal request. Note how we start the response with END
    response = `Your balance is ${balance}`;
  }

  // Print the response onto the page so that our SDK can read it
  res.set("Content-Type: text/plain");
  res.send(response);
  // DONE!!!
});

module.exports = router;