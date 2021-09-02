
var firebaseConfig = {
    apiKey: "AIzaSyA9UlEmMXOLP899FF6d1FmrjBEQNVNAOEc",
    authDomain: "hntgoiur4.firebaseapp.com",
    databaseURL: "https://hntgoiur4-default-rtdb.firebaseio.com",
    projectId: "hntgoiur4",
    storageBucket: "hntgoiur4.appspot.com",
    messagingSenderId: "552691332613",
    appId: "1:552691332613:web:d9bc7b6b44194ee7210e6c",
    measurementId: "G-82HDSK2WGW"
  };
  

  firebase.initializeApp(firebaseConfig);

  user_name=localStorage.getItem("user_name");
  document.getElementById("user_name").innerHTML="Welcome "+user_name+"!";
  
function addRoom()
{
room_name=document.getElementById("room_name").value;

firebase.database().ref("/").child(room_name).update({
    purpose:"adding room name"
});

   localStorage.setItem("room_name",room_name);

   window.location="kwitter_page.html";
}

 

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
    //Start code
console.log("Room_name-"+Room_names);
row="<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+Room_names+ "</div><hr>" ;
document.getElementById("output").innerHTML+=row;
    //End code
    });});}
getData();

function redirectToRoomName(name)
{
    console.log(name);
    localStorage.setItem("room_name",name);
    window.location="kwitter_page.html";
}

function logout()
{
    localStorage.removeItem("room_name");
    localStorage.removeItem("user_name");
    window.location="index.html";
}