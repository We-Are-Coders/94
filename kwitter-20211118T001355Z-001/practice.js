const firebaseConfig = {
    apiKey: "AIzaSyAUCM3xHTnWQId8gJE4rO49zM3-Tff3ERg",
    authDomain: "twitterapp-20.firebaseapp.com",
    databaseURL: "https://twitterapp-20-default-rtdb.firebaseio.com",
    projectId: "twitterapp-20",
    storageBucket: "twitterapp-20.appspot.com",
    messagingSenderId: "898542898074",
    appId: "1:898542898074:web:163c8b424e42c8a8f78823"
  };

 
  
function addUser()
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
       purpose : "adding user"
    });
}