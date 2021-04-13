export const serverLogIn = async (email, password) => {
    return fetch(
        `https://loft-taxi.glitch.me/auth?username=${email}&password=${password}`
    ).then(res => res.json()).then(data => data.success);
};

export const registration = async (email, password, name) => {
    fetch(`https://loft-taxi.glitch.me/register?username=${email}&password=${password}&name=${name}`,{
        method: "POST",
        body: `${email},${password},${name}`
        }
    ).then(res => res.json()).then(data => data.success);
}
