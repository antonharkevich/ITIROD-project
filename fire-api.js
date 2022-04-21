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
  


  
async function apiLogin(email, password){
    try {
        const new_response = await auth.signInWithEmailAndPassword(email, password);
        return new_response;
    }
    catch(error) {
        console.error(`Couldn't signin: ${error}`);
    }

}
  
  
function logout(){
    auth.signOut().then(() => {
        alert('Sign-out successful');
        window.location.replace("auth.html");
      }).catch((error) => {
        alert(error)
    });
}
  

async function apiSignUp(email, password){

    try {
        const new_response = await auth.createUserWithEmailAndPassword(email, password);
        return new_response;
    }
    catch(error) {
        console.error(`Couldn't signup: ${error}`);
    }
  
}
  
  
  
async function apiUpdateInfo(name, rate_bullet, rate_blitz, rate_rapid){

  
    var userRef = db.collection('users').doc(auth.currentUser.uid);

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
        return tempDoc
  
        

    }
    catch(error) {
        console.error(`Could not get users: ${error}`);
    }

}