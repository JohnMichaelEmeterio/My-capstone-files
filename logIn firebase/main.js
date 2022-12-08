      // Your web app's Firebase configuration
      var firebaseConfig = {
         apiKey: "AIzaSyANbgo8c0rbSdjZu8UORbeL06iIIT6rx7w",
            authDomain: "fir-b86f6.firebaseapp.com",
        databaseURL: "https://fir-b86f6-default-rtdb.firebaseio.com",
            projectId: "fir-b86f6",
            storageBucket: "fir-b86f6.appspot.com",
            messagingSenderId: "786526910108",
            appId: "1:786526910108:web:c377e78349b93b7190df59"
      };
      // Initialize Firebase
      firebase.initializeApp(firebaseConfig);
        
      var firebaseRef = firebase.database().ref().child('login');
      
      firebaseRef.once("value").then(function(snapshot){
        var loginInfo=snapshot.val();
        document.getElementById("login").addEventListener("click",function(){
          var username = document.getElementById("username");
          var password = document.getElementById("pass");
          if (username.value==loginInfo.username && password.value==loginInfo.password){
            location.replace("home.html");
          }else if(username.value!=loginInfo.username){
            username.style.borderColor="red";
          }else if(password.value!=loginInfo.password){
            password.style.borderColor="red";
          }
        });
      });

      document.getElementById('pass').addEventListener("input",function(){
        document.getElementById("pass").style.borderColor="#ccc";
      });
      document.getElementById('username').addEventListener("input",function(){
        document.getElementById("username").style.borderColor="#ccc";
      });