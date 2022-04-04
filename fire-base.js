const firebaseConfig = {
  apiKey: "AIzaSyCeKiRikX3shsobExn4udYoTv5Nl06u0i4",
  authDomain: "itirod-project.firebaseapp.com",
  projectId: "itirod-project",
  storageBucket: "itirod-project.appspot.com",
  messagingSenderId: "1067394909952",
  appId: "1:1067394909952:web:0489579ce1c61a6eb455e5",
  measurementId: "G-HPRP22BYDP"
};


const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();









auth.onAuthStateChanged((user) => {
  if (user) {
    var uid = user.uid;
  

    var docRef = db.collection("users").doc(uid);

    docRef.get().then((doc) => {
        if (doc.exists) {
          document.getElementById('ussser').innerHTML = doc.data().name;
        } else {
            // doc.data() will be undefined in this case
            console.log("No such document!");
        }
    }).catch((error) => {
        console.log("Error getting document:", error);
    });



    



  } 
  else {
    var myRe = new RegExp(".*auth.html");
    if(!myRe.test(window.location.href)){
      window.location.replace("auth.html");
    }
  }
});

function login(event){
 event.preventDefault()
 var email = document.getElementById('email').value
 var password = document.getElementById('password').value
 firebase.auth().signInWithEmailAndPassword(email, password)
.then((userCredential) => {
  var user = userCredential.user;
  alert('Welcome back')
  window.location.replace("index.html");

})
.catch((error) => {
  var errorCode = error.code;
  var errorMessage = error.message;
  alert(errorMessage)
});

}


function logout(){
  firebase.auth().signOut().then(() => {
      alert('Sign-out successful');
      window.location.replace("auth.html");
    }).catch((error) => {
      alert(error)
  });
}







function signUp(event){
  event.preventDefault()
  var email = document.getElementById('sign-email').value;
  var password = document.getElementById('sign-password').value;

  firebase.auth().createUserWithEmailAndPassword(email, password)
 .then((userCredential) => {
   var user = userCredential.user;
   alert('Hello')
   window.location.replace("info.html");

 })
 .catch((error) => {
   var errorCode = error.code;
   var errorMessage = error.message;
   alert(errorMessage)
 });


 
 }




 function updateInfo(event){
  event.preventDefault()

  var name = document.getElementById('nameUser').value;
  var rate_bullet = document.getElementById('rateBullet').value;
  var rate_blitz = document.getElementById('rateBlitz').value;
  var rate_rapid = document.getElementById('rateRapid').value;

  var userRef = db.collection('users').doc(firebase.auth().currentUser.uid);
  userRef.set({
  name: name,
  rate_bullet:rate_bullet,
  rate_blitz:rate_blitz,
  rate_rapid:rate_rapid
  }, { merge: true }).then(function(){
    alert('Success')
    window.location.replace("index.html");
  });
  
}


