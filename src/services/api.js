
const api_url = "https://run.mocky.io/v3/"

export async function getPizzaItems() {
                
    const response = await fetch(`${api_url}6754ffa6-f31d-4b02-b06d-d677293cb5dd`);
    const data = await response.json();

        
    return data

}

export async function getPizzaSize() {
                
    const response = await fetch(`${api_url}be4a42a6-78f0-4162-856f-381ad045e309`);
    const data = await response.json();

        
    return data

}

export async function getPizzaMassa() {
                
    const response = await fetch(`${api_url}668fa883-18c9-4458-afe1-1c77b06fc606`);
    const data = await response.json();

        
    return data

}




