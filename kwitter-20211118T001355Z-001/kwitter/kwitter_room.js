
const firebaseConfig = {
  apiKey: "AIzaSyDMfHd3tdXRJJr1PN0_VtdNJVWVfUwo8YY",
  authDomain: "twitterchatbox.firebaseapp.com",
  databaseURL: "https://twitterchatbox-default-rtdb.firebaseio.com",
  projectId: "twitterchatbox",
  storageBucket: "twitterchatbox.appspot.com",
  messagingSenderId: "635611852456",
  appId: "1:635611852456:web:3622ae07b30f1b64c0dc9d"
};
  user_name = localStorage.getItem("user_name");

document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function addRoom()
{
  room_name = document.getElementById("room_name").value;

  firebase.database().ref("/").child(room_name).update({
    purpose : "adding room name"
  });

    localStorage.setItem("room_name", room_name);
    
    window.location = "kwitter_page.html";
}

function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
       Room_names = childKey;
       console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
    });
  });

}

getData();

function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("room_name", name);
    window.location = "kwitter_page.html";
}

function logout() {
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
    window.location = "kwitter.html";
}
