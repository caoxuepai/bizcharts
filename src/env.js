const isDevelopment = process.env.NODE_ENV==='development';
let hostUrl = '';
if(isDevelopment){
    hostUrl = 'http://192.168.102.226:9088'
}

export {
    hostUrl
}