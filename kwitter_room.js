
const firebaseConfig = {
      apiKey: "AIzaSyCG_2b1HdIQHAktV_bg5DmsnJr0qD_jydo",
      authDomain: "kwitter-ec1fc.firebaseapp.com",
      databaseURL: "https://kwitter-ec1fc-default-rtdb.firebaseio.com",
      projectId: "kwitter-ec1fc",
      storageBucket: "kwitter-ec1fc.appspot.com",
      messagingSenderId: "593231689615",
      appId: "1:593231689615:web:4c2768b9bdd5484d1a7dfa"
    };
    
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    user_name=locallStorage.getItem("user_name");
    function adduser() {
      user_name=document.getElementById("user_name").value;
      firebase.database().ref("/").child(user_name).update({
            purpose:"addinguser"
      });
      
    }

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
