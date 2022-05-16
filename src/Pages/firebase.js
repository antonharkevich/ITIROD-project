import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore';
import { getAuth, signInWithEmailAndPassword, signOut, createUserWithEmailAndPassword} from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { sortByBlitz, sortByBullet, sortByRapid } from './sorting';

const firebaseConfig = {
    apiKey: "AIzaSyCeKiRikX3shsobExn4udYoTv5Nl06u0i4",
    authDomain: "itirod-project.firebaseapp.com",
    projectId: "itirod-project",
    storageBucket: "itirod-project.appspot.com",
    messagingSenderId: "1067394909952",
    appId: "1:1067394909952:web:0489579ce1c61a6eb455e5",
    measurementId: "G-HPRP22BYDP"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const auth = getAuth();
const user = auth.currentUser;




const fireLichessRequest = async() =>{
    
    const events = collection(db, 'users')

    try {
        const querySnapshot = await getDocs(events);
        const tempDoc = []
        querySnapshot.forEach((doc) => {
           tempDoc.push({ id: doc.id, ...doc.data() })
        })
  
        let bullet_top_names  = []
        let blitz_top_names  = []
        let rapid_top_names  = []
      
      
        let bullet_top_ranks = []
        let blitz_top_ranks = []
        let rapid_top_ranks = []
      
      
        let bullet_top_rates = []
        let blitz_top_rates = []
        let rapid_top_rates = []
  
  
  

  
        sortByBullet(tempDoc);
  
        
        let amount_of_site_users = tempDoc.length;
  
        if (amount_of_site_users < 16){
          for(let i = 0; i < amount_of_site_users; i++){
            bullet_top_names[i] = tempDoc[i]['name'];
            bullet_top_rates[i] = tempDoc[i]['rate_bullet'];
            let player_bullet_rate = bullet_top_rates[i];
            if (player_bullet_rate < 1200){
              bullet_top_ranks[i] = 'New'
            }
            else if (player_bullet_rate < 1400){
              bullet_top_ranks[i] = 'D'
            }
            else if (player_bullet_rate < 1600){
              bullet_top_ranks[i] = 'C'
            }
            else if (player_bullet_rate < 1800){
              bullet_top_ranks[i] = 'B'
            }
            else if (player_bullet_rate < 2000){
              bullet_top_ranks[i] = 'A'
            }
            else if (player_bullet_rate < 2200){
              bullet_top_ranks[i] = 'CM'
            }
            else if (player_bullet_rate < 2400){
              bullet_top_ranks[i] = 'FM'
            }
            else if (player_bullet_rate < 2500){
              bullet_top_ranks[i] = 'IM'
            }
            else{
              bullet_top_ranks[i] = 'GM'
            }
          }
          for(let i = amount_of_site_users; i < 16; i++){
            bullet_top_names[i] = 'N/A';
            bullet_top_rates[i] = 'N/A';
            bullet_top_ranks[i] = 'N/A'
          }
        }
        else{
          for(let i = 0; i < 16; i++){
            bullet_top_names[i] = tempDoc[i]['name'];
            bullet_top_rates[i] = tempDoc[i]['rate_bullet'];
            let player_bullet_rate = bullet_top_rates[i];
            if (player_bullet_rate < 1200){
              bullet_top_ranks[i] = 'New'
            }
            else if (player_bullet_rate < 1400){
              bullet_top_ranks[i] = 'D'
            }
            else if (player_bullet_rate < 1600){
              bullet_top_ranks[i] = 'C'
            }
            else if (player_bullet_rate < 1800){
              bullet_top_ranks[i] = 'B'
            }
            else if (player_bullet_rate < 2000){
              bullet_top_ranks[i] = 'A'
            }
            else if (player_bullet_rate < 2200){
              bullet_top_ranks[i] = 'CM'
            }
            else if (player_bullet_rate < 2400){
              bullet_top_ranks[i] = 'FM'
            }
            else if (player_bullet_rate < 2500){
              bullet_top_ranks[i] = 'IM'
            }
            else{
              bullet_top_ranks[i] = 'GM'
            }
          }
        }
  
  
  

  
        sortByBlitz(tempDoc);
  

  
        if (amount_of_site_users < 16){
          for(let i = 0; i < amount_of_site_users; i++){
            blitz_top_names[i] = tempDoc[i]['name'];
            blitz_top_rates[i] = tempDoc[i]['rate_blitz'];
            let player_blitz_rate = blitz_top_rates[i];
            if (player_blitz_rate < 1200){
              blitz_top_ranks[i] = 'New'
            }
            else if (player_blitz_rate < 1400){
              blitz_top_ranks[i] = 'D'
            }
            else if (player_blitz_rate < 1600){
              blitz_top_ranks[i] = 'C'
            }
            else if (player_blitz_rate < 1800){
              blitz_top_ranks[i] = 'B'
            }
            else if (player_blitz_rate < 2000){
              blitz_top_ranks[i] = 'A'
            }
            else if (player_blitz_rate < 2200){
              blitz_top_ranks[i] = 'CM'
            }
            else if (player_blitz_rate < 2400){
              blitz_top_ranks[i] = 'FM'
            }
            else if (player_blitz_rate < 2500){
              blitz_top_ranks[i] = 'IM'
            }
            else{
              blitz_top_ranks[i] = 'GM'
            }
          }
          for(let i = amount_of_site_users; i < 16; i++){
            blitz_top_names[i] = 'N/A';
            blitz_top_rates[i] = 'N/A';
            blitz_top_ranks[i] = 'N/A'
          }
        }
        else{
          for(let i = 0; i < 16; i++){
            blitz_top_names[i] = tempDoc[i]['name'];
            blitz_top_rates[i] = tempDoc[i]['rate_blitz'];
            let player_blitz_rate = blitz_top_rates[i];
            if (player_blitz_rate < 1200){
              blitz_top_ranks[i] = 'New'
            }
            else if (player_blitz_rate < 1400){
              blitz_top_ranks[i] = 'D'
            }
            else if (player_blitz_rate < 1600){
              blitz_top_ranks[i] = 'C'
            }
            else if (player_blitz_rate < 1800){
              blitz_top_ranks[i] = 'B'
            }
            else if (player_blitz_rate < 2000){
              blitz_top_ranks[i] = 'A'
            }
            else if (player_blitz_rate < 2200){
              blitz_top_ranks[i] = 'CM'
            }
            else if (player_blitz_rate < 2400){
              blitz_top_ranks[i] = 'FM'
            }
            else if (player_blitz_rate < 2500){
              blitz_top_ranks[i] = 'IM'
            }
            else{
              blitz_top_ranks[i] = 'GM'
            }
          }
        }
  
  
        
  

  
        sortByRapid(tempDoc);
  
  
  
        if (amount_of_site_users < 16){
          for(let i = 0; i < amount_of_site_users; i++){
            rapid_top_names[i] = tempDoc[i]['name'];
            rapid_top_rates[i] = tempDoc[i]['rate_rapid'];
            let player_rapid_rate = rapid_top_rates[i];
            if (player_rapid_rate < 1200){
              rapid_top_ranks[i] = 'New'
            }
            else if (player_rapid_rate < 1400){
              rapid_top_ranks[i] = 'D'
            }
            else if (player_rapid_rate < 1600){
              rapid_top_ranks[i] = 'C'
            }
            else if (player_rapid_rate < 1800){
              rapid_top_ranks[i] = 'B'
            }
            else if (player_rapid_rate < 2000){
              rapid_top_ranks[i] = 'A'
            }
            else if (player_rapid_rate < 2200){
              rapid_top_ranks[i] = 'CM'
            }
            else if (player_rapid_rate < 2400){
              rapid_top_ranks[i] = 'FM'
            }
            else if (player_rapid_rate < 2500){
              rapid_top_ranks[i] = 'IM'
            }
            else{
              rapid_top_ranks[i] = 'GM'
            }
          }
          for(let i = amount_of_site_users; i < 16; i++){
            rapid_top_names[i] = 'N/A';
            rapid_top_rates[i] = 'N/A';
            rapid_top_ranks[i] = 'N/A'
          }
        }
        else{
          for(let i = 0; i < 16; i++){
            rapid_top_names[i] = tempDoc[i]['name'];
            rapid_top_rates[i] = tempDoc[i]['rate_blitz'];
            let player_rapid_rate = rapid_top_rates[i];
            if (player_rapid_rate < 1200){
              rapid_top_ranks[i] = 'New'
            }
            else if (player_rapid_rate < 1400){
              rapid_top_ranks[i] = 'D'
            }
            else if (player_rapid_rate < 1600){
              rapid_top_ranks[i] = 'C'
            }
            else if (player_rapid_rate < 1800){
              rapid_top_ranks[i] = 'B'
            }
            else if (player_rapid_rate < 2000){
              rapid_top_ranks[i] = 'A'
            }
            else if (player_rapid_rate < 2200){
              rapid_top_ranks[i] = 'CM'
            }
            else if (player_rapid_rate < 2400){
              rapid_top_ranks[i] = 'FM'
            }
            else if (player_rapid_rate < 2500){
              rapid_top_ranks[i] = 'IM'
            }
            else{
              rapid_top_ranks[i] = 'GM'
            }
          }
        }


        let response_list = []
        let response = {
          'bullet_top_names': bullet_top_names,  
          'blitz_top_names': blitz_top_names, 
          'rapid_top_names': rapid_top_names,  
        
        
          'bullet_top_ranks': bullet_top_ranks,
          'blitz_top_ranks': blitz_top_ranks, 
          'rapid_top_ranks': rapid_top_ranks, 
        
        
          'bullet_top_rates': bullet_top_rates, 
          'blitz_top_rates': blitz_top_rates, 
          'rapid_top_rates': rapid_top_rates
        };
        response_list.push(response)
        return response_list

    }
    catch(error) {
        console.error(`Could not get users: ${error}`);
    }

}



const login = async(email, password) =>{
  let response = await signInWithEmailAndPassword(auth, email, password)
  return response
}


const logout = async() =>{
  let response = await signOut(auth)
  return response
}



const signUp = async(email, password, name, rate_blitz, rate_bullet, rate_rapid) =>{
  let response = await createUserWithEmailAndPassword(auth, email, password).then(res=>{
    const uid = res.user.uid;
    let data = {
      name: name,
      rate_bullet:rate_bullet,
      rate_blitz:rate_blitz,
      rate_rapid:rate_rapid
    };
    const docRef = doc(db, 'users', uid);
    setDoc(docRef, data);
  })
  return response;
}




export {fireLichessRequest, user, login, signUp, logout, db, auth, collection}