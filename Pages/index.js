async function Data(){
    let response = await fetch("https://api.openbrewerydb.org/v1/breweries")
    let result = await response.json()
    console.log(result)
    return result
}

Data()

