---
title: "NASA API Tutorial"
date: 2020-07-16T17:27:39-07:00
draft: true
---

Description: For many years NASA has had a picture of the day on their website. It is often related to astronomy-stars, galaxies, planets, or even interesting occurrences on Earth. With each picture, NASA includes a short description of what you are seeing. Here is a way to put it on your own website.

<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>
 
  <title>Example APOD call</title>
  
  <script>
      
      var url = "https://api.nasa.gov/planetary/apod?api_key=qzPLT1g7GDRDNPxYKLDwyylLAzQ0BNyorjZM0rs1";


$.ajax({
  url: url,
  success: function(result){
  if("copyright" in result) {
    $("#copyright").text("Image Credits: " + result.copyright);
  }
  else {
    $("#copyright").text("Image Credits: " + "Public Domain");
  }
  
  if(result.media_type == "video") {
    $("#apod_img_id").css("display", "none"); 
    $("#apod_vid_id").attr("src", result.url);
  }
  else {
    $("#apod_vid_id").css("display", "none"); 
    $("#apod_img_id").attr("src", result.url);
  }
  $("#reqObject").text(url);
  $("#returnObject").text(JSON.stringify(result, null, 4));  
  $("#apod_explaination").text(result.explanation);
  $("#apod_title").text(result.title);
}
});

  </script>
  
</head>
<body>
  
  <img id="apod_img_id" width="250px"/>
  
  <iframe id="apod_vid_id" type="text/html" width="640" height="385" frameborder="0"></iframe>
  <p id="copyright"></p>
  
  <h3 id="apod_title"></h3>
  <p id="apod_explaination"></p>

</body>
</html>

## How It's Done

The information for this API can be found here: [https://api.nasa.gov/index.html#live_example](https://api.nasa.gov/index.html#live_example).

1. First scroll down to a short form that says, “Get your API Key.” Fill this out and they will give you a code of numbers and letters. This is your API key, save it. If you lose it, don’t worry, they also email it to you.

2. If they take you to another page, go back where you started. Down the page a bit you will see some options. Select HTML and Javascript (see figure 1).

![Figure 1](../images/NASA1.png)
Figure 1

3. If you select Output also, you will see a preview of how it will look in your website (figure 2).

![Figure 2](../images/Screenshot-39.png)
Figure 2

4. Copy the HTML code and paste it wherever you put your website code. This is the template. 

5. Now in the HTML, put \<script\> tags without the quotation marks on a new line after the \<script\> tag. Copy the Javascript code from the NASA site. It should start with `“var url =.`” Paste it between the two script tags. 

![Figure 3](../images/Screenshot-39.png)
Figure 3
6. Copy the API key you were given and on your webpage, where it says var url = ” delete the part between the “” marks and insert your own API key (Figure 3). Save your work. 

When you publish your webpage to the web, you will now have NASA’s picture of the day displayed for all to see!