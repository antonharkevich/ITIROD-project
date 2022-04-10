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
          if (doc.exists) 
          {
            try{
              document.getElementById('ussser').innerHTML = doc.data().name;
              document.getElementById('click_img').click();
            }
            catch{
              console.log('wait some time..')
            }
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
  
async function apiLogin(email, password){
    try {
        const new_response = await firebase.auth().signInWithEmailAndPassword(email, password);
        return new_response;
    }
    catch(error) {
        console.error(`Couldn't signin: ${error}`);
    }

}
  
  
function logout(){
    firebase.auth().signOut().then(() => {
        alert('Sign-out successful');
        window.location.replace("auth.html");
      }).catch((error) => {
        alert(error)
    });
}
  

async function apiSignUp(email, password){

    try {
        const new_response = await firebase.auth().createUserWithEmailAndPassword(email, password);
        return new_response;
    }
    catch(error) {
        console.error(`Couldn't signup: ${error}`);
    }
  
}
  
  
  
async function apiUpdateInfo(name, rate_bullet, rate_blitz, rate_rapid){

  
    var userRef = db.collection('users').doc(firebase.auth().currentUser.uid);

    try {
        const new_response =  await   userRef.set({
            name: name,
            rate_bullet:rate_bullet,
            rate_blitz:rate_blitz,
            rate_rapid:rate_rapid
            }, { merge: true });
        return new_response;
    }
    catch(error) {
        console.error(`Couldn't update info: ${error}`);
    }
    
}
  
  
async  function fireLichessRequest(){
    
    const events = db.collection('users')

    try {
        const querySnapshot = await events.get();
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

        response = {};
        response['bullet_top_names'] = bullet_top_names  
        response['blitz_top_names'] = blitz_top_names  
        response['rapid_top_names'] = rapid_top_names  
      
      
        response['bullet_top_ranks'] = bullet_top_ranks
        response['blitz_top_ranks'] = blitz_top_ranks 
        response['rapid_top_ranks'] = rapid_top_ranks 
      
      
        response['bullet_top_rates'] = bullet_top_rates 
        response['blitz_top_rates'] = blitz_top_rates 
        response['rapid_top_rates'] = rapid_top_rates
        
        return response

    }
    catch(error) {
        console.error(`Could not get users: ${error}`);
    }

}