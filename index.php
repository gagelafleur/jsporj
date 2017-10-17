<!doctype html>
<html class="no-js" lang="">
    <head>
        <meta charset="utf-8">
        <title>State Park Finder</title>

        <link rel="stylesheet" href="assets/dist/css/app.css">


    </head>
    <body onload = "init()">

    <div id = "map"></div>
    <script language="javascript" type="text/javascript" src="data/parkdata.js"></script>
    <script language="javascript" type="text/javascript" src="assets/dist/js/helpers.js"></script>
    <script language="javascript" type="text/javascript" src="assets/dist/js/main.js"></script>
    <script>
      var geocoder;
      var map;

      function initMap() {

        geocoder = new google.maps.Geocoder();
        var usa = {lat: 42.784854, lng: -77.513621};
        map = new google.maps.Map(document.getElementById('map'), {
          zoom: 4,
          center: usa
        });


        codeAddress('USA', 4);
      }

    </script>
    <script async defer src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCxfWV_nUqEF4omxbak_RgavmpldJv_S4A&callback=initMap"></script>

    <?php

      if (isset($_POST['email'])) {
          $email = $_POST['email'];
          $subject = 'State Park Adventure at '.$_POST['parkName'];
          $message = 'Link: ' . $_POST[mapLink];
          if (mail($email, $subject, $message)) {
              print '<script>alert("Mail Sent Successfully!")</script>';
              $_POST= array();
          }
      }

    ?>


    </body>
</html>
