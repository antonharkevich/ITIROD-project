async function lichessAPIRequestWorstAndBestGames(user){

    if(user != 'N/A'){
        var myHeaders = new Headers();
        myHeaders.append('Content-Type', 'application/json');
        
        var myInit = {
            method: 'GET',
        };
  
        const new_request = new Request('https://lichess.org/api/user/'+user+'/perf/bullet', myInit);
        
        try {
            const new_response = await fetch(new_request);
            if (!new_response.ok) {
            throw new Error(`HTTP error: ${new_response.status}`);
            }
            const response = await new_response.json();
            return response
        }
        catch(error) {
            console.error(`Could not get worst and best games: ${error}`);
        }
    }

    else {
        return null
    }
}



async function lichessAPIRequestStatistics(user){

    if(user != 'N/A'){
        var myHeaders = new Headers();
        myHeaders.append('Content-Type', 'application/json');
        
        var myInit = {
            method: 'GET',
        };
  
        const new_request = new Request('https://lichess.org/api/user/'+user, myInit);
        
        try {
            const new_response = await fetch(new_request);
            if (!new_response.ok) {
            throw new Error(`HTTP error: ${new_response.status}`);
            }
            const response = await new_response.json();
            
            return response;
        }
        catch(error) {
            console.error(`Could not get statistics: ${error}`);
        }
    }

    else {
        return null
    }
}




async function lichessAPIRequestPerformance(user){

    if(user != 'N/A'){
        var myHeaders = new Headers();
        myHeaders.append('Content-Type', 'application/json');
        
        var myInit = {
            method: 'GET',
        };
  
        const new_request = new Request('https://lichess.org/api/user/'+user+'/perf/bullet', myInit);
        
        try {
            const new_response = await fetch(new_request);
            if (!new_response.ok) {
            throw new Error(`HTTP error: ${new_response.status}`);
            }
            const response = await new_response.json();
            
            return response;
        }
        catch(error) {
            console.error(`Could not get performance: ${error}`);
        }
    }

    else {
        return null
    }
}




async function lichessAPIRequestActivity(user){

    if(user != 'N/A'){
        var myHeaders = new Headers();
        myHeaders.append('Content-Type', 'application/json');
        
        var myInit = {
            method: 'GET',
        };
  
        const new_request = new Request('https://lichess.org/api/user/'+user+'/activity', myInit);
        
        try {
            const new_response = await fetch(new_request);
            if (!new_response.ok) {
            throw new Error(`HTTP error: ${new_response.status}`);
            }
            const response = await new_response.json();
            console.log(response)
            return response;

        }
        catch(error) {
            console.error(`Could not get activity: ${error}`);
        }
    }

    else {
        return null
    }
}








async function lichessAPIRequestRating(user){

    if(user != 'N/A'){
        var myHeaders = new Headers();
        myHeaders.append('Content-Type', 'application/json');
        
        var myInit = {
            method: 'GET',
        };
  
        const new_request = new Request('https://lichess.org/api/user/' + user + '/rating-history', myInit);
        
        try {
            const new_response = await fetch(new_request);
            if (!new_response.ok) {
            throw new Error(`HTTP error: ${new_response.status}`);
            }
            const response = await new_response.json();
            return response


        }
        catch(error) {
            console.error(`Could not get rating: ${error}`);
        }
    }

    else {
        return null
    }
}

