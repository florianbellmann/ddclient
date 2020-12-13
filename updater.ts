
const updateUrl=process.env.UPDATE_URL
const timeout=process.env.TIMEOUT || 600

if(!updateUrl){
    console.error("No update URL found")
    process.abort()
}

setTimeout()
