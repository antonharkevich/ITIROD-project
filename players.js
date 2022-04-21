class Players{
  constructor(tempDoc){

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

      
          this.bullet_top_names = bullet_top_names; 
          this.blitz_top_names = blitz_top_names;
          this.rapid_top_names =  rapid_top_names; 
        
        
          this.bullet_top_ranks = bullet_top_ranks;
          this.blitz_top_ranks =  blitz_top_ranks;
          this.rapid_top_ranks = rapid_top_ranks; 
        
        
          this.bullet_top_rates = bullet_top_rates; 
          this.blitz_top_rates = blitz_top_rates;
          this.rapid_top_rates = rapid_top_rates;

  }
} 


function playersRequest(){
    responsePromise = fireLichessRequest()
    responsePromise.then(response => {
      console.log(response)

      players = new Players(response);

      
      for (let i = 0; i < 16; i++){
            
        let html_bullet_top_name = document.getElementById("bullet_top_name" + i);
        let html_blitz_top_name = document.getElementById("blitz_top_name" + i);
        let html_rapid_top_name = document.getElementById("rapid_top_name" + i);
        let html_bullet_top_rank = document.getElementById("bullet_top_rank" + i);
        let html_blitz_top_rank = document.getElementById("blitz_top_rank" + i);
        let html_rapid_top_rank = document.getElementById("rapid_top_rank" + i);
        let html_bullet_top_rate = document.getElementById("bullet_top_rate" + i);
        let html_blitz_top_rate = document.getElementById("blitz_top_rate" + i);
        let html_rapid_top_rate = document.getElementById("rapid_top_rate" + i);
  
  
        html_bullet_top_name.textContent = players['bullet_top_names'][i];
        html_blitz_top_name.textContent = players['blitz_top_names'][i];
        html_rapid_top_name.textContent = players['rapid_top_names'][i];
        html_bullet_top_rate.textContent = players['bullet_top_rates'][i];
        html_blitz_top_rate.textContent = players['blitz_top_rates'][i];
        html_rapid_top_rate.textContent = players['rapid_top_rates'][i];
        html_bullet_top_rank.textContent = players['bullet_top_ranks'][i];
        html_blitz_top_rank.textContent = players['blitz_top_ranks'][i];
        html_rapid_top_rank.textContent = players['rapid_top_ranks'][i];
    }
  });
}