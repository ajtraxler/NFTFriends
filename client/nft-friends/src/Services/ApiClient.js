const BASE_URL = 'http://localhost:3000';

const getNFTSC = (eth_address) => {

    console.log('in get nft sc')
    console.log(eth_address, "apieth address");
    return fetch(`${BASE_URL}/login/${eth_address}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' }
    })
        .then(res => res.json())
        .catch((err) => console.log(err, "error"))
}

const checkIfInDBC = (eth_address) => {
    return fetch(`${BASE_URL}/login/${eth_address}`)
        .then(res => res.json())
        .catch((err) => console.log(err, "error"))
}
const postUserC = (eth_address) => {
    return fetch(`${BASE_URL}/login/${eth_address}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        // body: JSON.stringify(eth_address)
    })
}

const communityEvents = (nft_groups) => {
    return fetch(`${BASE_URL}/events`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ nft_groups: nft_groups })
    })
}

const postEventToServer = (event) => {
    return fetch(`${BASE_URL}/form`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(event)
    })
        .then(response => {
            console.log(response);
            return response.json();
        })
        .catch(e => console.log(e))

}

const addToMyEventsC = (event) => {
    return fetch(`${BASE_URL}/events/add`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(event)
    })
        .then(response => {
            console.log(response);
            return response.json();
        })
        .catch(e => console.log(e))
}

const removeFromMyEvents = (event) => {
    return fetch(`${BASE_URL}/event/remove`, {
        method: 'POST',

        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(event)
    })
        .then(response => {
            console.log(response);
            return response.json();
        })
        .catch(e => console.log(e))
}

// addToMyEventsC, removeFromMyEvents, 


module.exports = { addToMyEventsC, removeFromMyEvents, getNFTSC, checkIfInDBC, postUserC, communityEvents, postEventToServer } //getNFTS,