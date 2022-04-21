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