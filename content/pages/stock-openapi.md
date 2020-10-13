---
title: "Stock OpenAPI (Swagger)"
draft: false
date: 2020-10-12
toc: true
images:
tags:
  - untagged
---


<html>
<meta charset="UTF-8">
  <head>
      <title>Stock API</title>
      <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
  </head>

	<body>
  <h1>Current Stock Prices for Various Tech Companies</h1>	
		
<script>
    
  var settings = {
  "async": true,
  "crossDomain": true,
  "url": "https://cloud.iexapis.com/stable/tops?token=pk_9c4b29baf68741c38ab566b4eb9adc0c&symbols=fb",
  "method": "GET",
}
  
  var settings2 = {
  "async": true,
  "crossDomain": true,
  "url": "https://cloud.iexapis.com/stable/tops?token=pk_9c4b29baf68741c38ab566b4eb9adc0c&symbols=aapl",
  "method": "GET",
}  

  var settings3 = {
  "async": true,
  "crossDomain": true,
  "url": "https://cloud.iexapis.com/stable/tops?token=pk_9c4b29baf68741c38ab566b4eb9adc0c&symbols=goog",
  "method": "GET",
} 
  
  var settings4 = {
  "async": true,
  "crossDomain": true,
  "url": "https://cloud.iexapis.com/stable/tops?token=pk_9c4b29baf68741c38ab566b4eb9adc0c&symbols=msft",
  "method": "GET",
} 

  var settings5 = {
  "async": true,
  "crossDomain": true,
  "url": "https://cloud.iexapis.com/stable/tops?token=pk_9c4b29baf68741c38ab566b4eb9adc0c&symbols=ibm",
  "method": "GET",
}
  
//This is the prompt for the user input
//  var x = prompt("Enter a stock symbol");
  



$.ajax(settings).done(function (response) {
  console.log(response);
  
  var content = response[0].lastSalePrice;
  $("#fb").append("$ " + content);
});
	
$.ajax(settings2).done(function (response) {
  console.log(response);
  
  var content = response[0].lastSalePrice;
  $("#ap").append("$ " + content);
});
	
$.ajax(settings3).done(function (response) {
  console.log(response);
  
  var content = response[0].lastSalePrice;
  $("#goog").append("$ " + content);
});	

$.ajax(settings4).done(function (response) {
  console.log(response);
  
  var content = response[0].lastSalePrice;
  $("#msft").append("$ " + content);
});		

$.ajax(settings5).done(function (response) {
  console.log(response);
  
  var content = response[0].lastSalePrice;
  $("#ibm").append("$ " + content);
});
	
		</script>
		
		<div id = "fb">Facebook: </div>
		<div id = "ap">Apple: </div>
		<div id = "goog">Google: </div>
		<div id = "msft">Microsoft: </div>
		<div id = "ibm">IBM: </div>
		
	</body>
</html>

## [Here is an OpenAPI (Swagger) document I wrote for use with this resource.](https://app.swaggerhub.com/apis/aredshaw/IEX-Cloud/1.1)

With it you can make calls to IEX Cloud to look up current stock prices for many different companies.​

