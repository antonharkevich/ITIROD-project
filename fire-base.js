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
          document.getElementById('click_img').click();
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


function fireLichessRequest(){

  const events = db.collection('users')
  events.get().then((querySnapshot) => {
      const tempDoc = []
      querySnapshot.forEach((doc) => {
         tempDoc.push({ id: doc.id, ...doc.data() })
      })

      bullet_top_names  = []
      blitz_top_names  = []
      rapid_top_names  = []
    
    
      bullet_top_ranks = []
      blitz_top_ranks = []
      rapid_top_ranks = []
    
    
      bullet_top_rates = []
      blitz_top_rates = []
      rapid_top_rates = []



      function sortByBullet(arr) {
        arr.sort((a, b) => a.rate_bullet > b.rate_bullet ? -1 : 1);
      }

      sortByBullet(tempDoc);


      j = tempDoc.length;

      if (j < 16){
        for(i = 0; i < j; i++){
          bullet_top_names[i] = tempDoc[i]['name'];
          bullet_top_rates[i] = tempDoc[i]['rate_bullet'];
          if (bullet_top_rates[i] < 1200){
            bullet_top_ranks[i] = 'New'
          }
          else if (bullet_top_rates[i] < 1400){
            bullet_top_ranks[i] = 'D'
          }
          else if (bullet_top_rates[i] < 1600){
            bullet_top_ranks[i] = 'C'
          }
          else if (bullet_top_rates[i] < 1800){
            bullet_top_ranks[i] = 'B'
          }
          else if (bullet_top_rates[i] < 2000){
            bullet_top_ranks[i] = 'A'
          }
          else if (bullet_top_rates[i] < 2200){
            bullet_top_ranks[i] = 'CM'
          }
          else if (bullet_top_rates[i] < 2400){
            bullet_top_ranks[i] = 'FM'
          }
          else if (bullet_top_rates[i] < 2500){
            bullet_top_ranks[i] = 'IM'
          }
          else{
            bullet_top_ranks[i] = 'GM'
          }
        }
        for(i = j; i < 16; i++){
          bullet_top_names[i] = 'N/A';
          bullet_top_rates[i] = 'N/A';
          bullet_top_ranks[i] = 'N/A'
        }
      }
      else{
        for(i = 0; i < 16; i++){
          bullet_top_names[i] = tempDoc[i]['name'];
          bullet_top_rates[i] = tempDoc[i]['rate_bullet'];
          if (bullet_top_rates[i] < 1200){
            bullet_top_ranks[i] = 'New'
          }
          else if (bullet_top_rates[i] < 1400){
            bullet_top_ranks[i] = 'D'
          }
          else if (bullet_top_rates[i] < 1600){
            bullet_top_ranks[i] = 'C'
          }
          else if (bullet_top_rates[i] < 1800){
            bullet_top_ranks[i] = 'B'
          }
          else if (bullet_top_rates[i] < 2000){
            bullet_top_ranks[i] = 'A'
          }
          else if (bullet_top_rates[i] < 2200){
            bullet_top_ranks[i] = 'CM'
          }
          else if (bullet_top_rates[i] < 2400){
            bullet_top_ranks[i] = 'FM'
          }
          else if (bullet_top_rates[i] < 2500){
            bullet_top_ranks[i] = 'IM'
          }
          else{
            bullet_top_ranks[i] = 'GM'
          }
        }
      }



      function sortByBlitz(arr) {
        arr.sort((a, b) => a.rate_blitz > b.rate_blitz ? -1 : 1);
      }

      sortByBlitz(tempDoc);


      j = tempDoc.length;

      if (j < 16){
        for(i = 0; i < j; i++){
          blitz_top_names[i] = tempDoc[i]['name'];
          blitz_top_rates[i] = tempDoc[i]['rate_blitz'];
          if (blitz_top_rates[i] < 1200){
            blitz_top_ranks[i] = 'New'
          }
          else if (blitz_top_rates[i] < 1400){
            blitz_top_ranks[i] = 'D'
          }
          else if (blitz_top_rates[i] < 1600){
            blitz_top_ranks[i] = 'C'
          }
          else if (blitz_top_rates[i] < 1800){
            blitz_top_ranks[i] = 'B'
          }
          else if (blitz_top_rates[i] < 2000){
            blitz_top_ranks[i] = 'A'
          }
          else if (blitz_top_rates[i] < 2200){
            blitz_top_ranks[i] = 'CM'
          }
          else if (blitz_top_rates[i] < 2400){
            blitz_top_ranks[i] = 'FM'
          }
          else if (blitz_top_rates[i] < 2500){
            blitz_top_ranks[i] = 'IM'
          }
          else{
            blitz_top_ranks[i] = 'GM'
          }
        }
        for(i = j; i < 16; i++){
          blitz_top_names[i] = 'N/A';
          blitz_top_rates[i] = 'N/A';
          blitz_top_ranks[i] = 'N/A'
        }
      }
      else{
        for(i = 0; i < 16; i++){
          blitz_top_names[i] = tempDoc[i]['name'];
          blitz_top_rates[i] = tempDoc[i]['rate_blitz'];
          if (blitz_top_rates[i] < 1200){
            blitz_top_ranks[i] = 'New'
          }
          else if (blitz_top_rates[i] < 1400){
            blitz_top_ranks[i] = 'D'
          }
          else if (blitz_top_rates[i] < 1600){
            blitz_top_ranks[i] = 'C'
          }
          else if (blitz_top_rates[i] < 1800){
            blitz_top_ranks[i] = 'B'
          }
          else if (blitz_top_rates[i] < 2000){
            blitz_top_ranks[i] = 'A'
          }
          else if (blitz_top_rates[i] < 2200){
            blitz_top_ranks[i] = 'CM'
          }
          else if (blitz_top_rates[i] < 2400){
            blitz_top_ranks[i] = 'FM'
          }
          else if (blitz_top_rates[i] < 2500){
            blitz_top_ranks[i] = 'IM'
          }
          else{
            blitz_top_ranks[i] = 'GM'
          }
        }
      }


      

      function sortByRapid(arr) {
        arr.sort((a, b) => a.rate_rapid > b.rate_rapid ? -1 : 1);
      }

      sortByRapid(tempDoc);


      j = tempDoc.length;

      if (j < 16){
        for(i = 0; i < j; i++){
          rapid_top_names[i] = tempDoc[i]['name'];
          rapid_top_rates[i] = tempDoc[i]['rate_rapid'];
          if (rapid_top_rates[i] < 1200){
            rapid_top_ranks[i] = 'New'
          }
          else if (rapid_top_rates[i] < 1400){
            rapid_top_ranks[i] = 'D'
          }
          else if (rapid_top_rates[i] < 1600){
            rapid_top_ranks[i] = 'C'
          }
          else if (rapid_top_rates[i] < 1800){
            rapid_top_ranks[i] = 'B'
          }
          else if (rapid_top_rates[i] < 2000){
            rapid_top_ranks[i] = 'A'
          }
          else if (rapid_top_rates[i] < 2200){
            rapid_top_ranks[i] = 'CM'
          }
          else if (rapid_top_rates[i] < 2400){
            rapid_top_ranks[i] = 'FM'
          }
          else if (rapid_top_rates[i] < 2500){
            rapid_top_ranks[i] = 'IM'
          }
          else{
            rapid_top_ranks[i] = 'GM'
          }
        }
        for(i = j; i < 16; i++){
          rapid_top_names[i] = 'N/A';
          rapid_top_rates[i] = 'N/A';
          rapid_top_ranks[i] = 'N/A'
        }
      }
      else{
        for(i = 0; i < 16; i++){
          rapid_top_names[i] = tempDoc[i]['name'];
          rapid_top_rates[i] = tempDoc[i]['rate_blitz'];
          if (rapid_top_rates[i] < 1200){
            rapid_top_ranks[i] = 'New'
          }
          else if (rapid_top_rates[i] < 1400){
            rapid_top_ranks[i] = 'D'
          }
          else if (rapid_top_rates[i] < 1600){
            rapid_top_ranks[i] = 'C'
          }
          else if (rapid_top_rates[i] < 1800){
            rapid_top_ranks[i] = 'B'
          }
          else if (rapid_top_rates[i] < 2000){
            rapid_top_ranks[i] = 'A'
          }
          else if (rapid_top_rates[i] < 2200){
            rapid_top_ranks[i] = 'CM'
          }
          else if (rapid_top_rates[i] < 2400){
            rapid_top_ranks[i] = 'FM'
          }
          else if (rapid_top_rates[i] < 2500){
            rapid_top_ranks[i] = 'IM'
          }
          else{
            rapid_top_ranks[i] = 'GM'
          }
        }
      }

    
    
      for (i in [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]){
          
          let html_bullet_top_name = document.getElementById("bullet_top_name" + i);
          let html_blitz_top_name = document.getElementById("blitz_top_name" + i);
          let html_rapid_top_name = document.getElementById("rapid_top_name" + i);
          let html_bullet_top_rank = document.getElementById("bullet_top_rank" + i);
          let html_blitz_top_rank = document.getElementById("blitz_top_rank" + i);
          let html_rapid_top_rank = document.getElementById("rapid_top_rank" + i);
          let html_bullet_top_rate = document.getElementById("bullet_top_rate" + i);
          let html_blitz_top_rate = document.getElementById("blitz_top_rate" + i);
          let html_rapid_top_rate = document.getElementById("rapid_top_rate" + i);
    
    
          html_bullet_top_name.textContent = bullet_top_names[i];
          html_blitz_top_name.textContent = blitz_top_names[i];
          html_rapid_top_name.textContent = rapid_top_names[i];
          html_bullet_top_rate.textContent = bullet_top_rates[i];
          html_blitz_top_rate.textContent = blitz_top_rates[i];
          html_rapid_top_rate.textContent = rapid_top_rates[i];
          html_bullet_top_rank.textContent = bullet_top_ranks[i];
          html_blitz_top_rank.textContent = blitz_top_ranks[i];
          html_rapid_top_rank.textContent = rapid_top_ranks[i];
      }
   })
}