function playersRequest(){
    responsePromise = fireLichessRequest()
    responsePromise.then(response => {
      console.log(response)

      
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
  
  
        html_bullet_top_name.textContent = response['bullet_top_names'][i];
        html_blitz_top_name.textContent = response['blitz_top_names'][i];
        html_rapid_top_name.textContent = response['rapid_top_names'][i];
        html_bullet_top_rate.textContent = response['bullet_top_rates'][i];
        html_blitz_top_rate.textContent = response['blitz_top_rates'][i];
        html_rapid_top_rate.textContent = response['rapid_top_rates'][i];
        html_bullet_top_rank.textContent = response['bullet_top_ranks'][i];
        html_blitz_top_rank.textContent = response['blitz_top_ranks'][i];
        html_rapid_top_rank.textContent = response['rapid_top_ranks'][i];
    }
  });
}