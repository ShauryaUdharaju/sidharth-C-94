

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyBM_wpIDlNBiZDyqXdAAzRqQnz3WHKI3jk",
    authDomain: "sidharthc94-7cfb5.firebaseapp.com",
    databaseURL: "https://sidharthc94-7cfb5-default-rtdb.firebaseio.com",
    projectId: "sidharthc94-7cfb5",
    storageBucket: "sidharthc94-7cfb5.appspot.com",
    messagingSenderId: "826327934794",
    appId: "1:826327934794:web:88a6bcaf0e1261306743b3"
  };
  
  // Initialize Firebase
 firebase.initializeApp(firebaseConfig);
 function addUser()
 {
    user_name = document.getElementById("user_name").value
    firebase.database().ref("/").child(user_name).update({
        purpose:"adding user"
    })
 }