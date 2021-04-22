export const serverLogIn = async (email, password) => {
    return fetch(
        "https://loft-taxi.glitch.me/auth", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({email, password}),
        }
    ).then(res => res.json()).then(data => data.success);
};

export const serverReg = async (email, password, name, surname) => {
    return fetch("https://loft-taxi.glitch.me/register", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({email, password, name, surname}),
        }
    ).then(res => res.json()).then(data => data.success).catch(err => console.err(err));
}

export const postCard = async (cardNumber, expiryDate, cardName, cvc) => {
    return fetch("https://loft-taxi.glitch.me/card", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({cardNumber, expiryDate, cardName, cvc}),
        }
    ).then(res => res.json()).then(data => data.success).catch(err => console.err(err));
}

export const serverGetAddressList = async () => {
    return fetch("https://loft-taxi.glitch.me/addressList"
    ).then(res => res.json());
}

export const serverRoute = async (address1, address2) => {
    return fetch(`https://loft-taxi.glitch.me/route?address1=${address1}&address2=${address2}`
    ).then(response => response.json());
}