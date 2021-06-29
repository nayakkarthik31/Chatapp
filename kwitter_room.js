var firebaseConfig = {
    apiKey: "AIzaSyA73w_2CYkTipVwmMISBhObkHh6X8gbbaw",
    authDomain: "kwitter-4bd46.firebaseapp.com",
    databaseURL: "https://kwitter-4bd46-default-rtdb.firebaseio.com",
    projectId: "kwitter-4bd46",
    storageBucket: "kwitter-4bd46.appspot.com",
    messagingSenderId: "830281532495",
    appId: "1:830281532495:web:ae3071564b59fe6fc1963a"
  };
  firebase.initializeApp(firebaseConfig);

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
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >"+ Room_names +"</div><hr>";
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
