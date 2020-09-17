var firebaseConfig = {
    apiKey: "AIzaSyDh4SbNUQmi4AIBlieKwenbJ21IEfRiMhQ",
    authDomain: "form-834c5.firebaseapp.com",
    databaseURL: "https://form-834c5.firebaseio.com",
    projectId: "form-834c5",
    storageBucket: "form-834c5.appspot.com",
    messagingSenderId: "160567695596",
    appId: "1:160567695596:web:519eebe5b9cf1196616dc9"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
  const auth = firebase.auth();
  
  
  function signUp(){
      
      var email = document.getElementById("email");
      var password = document.getElementById("password");
      
      const promise = auth.createUserWithEmailAndPassword(email.value, password.value);
      promise.catch(e => alert(e.message));
      
      alert("Signed Up");
  }
  
  
  
 
  
  
  function signOut(){
      
      auth.signOut();
      alert("Signed Out");
      window.location="index.html"
      
  }
  
  
  
