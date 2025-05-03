

export const getEnvVariables = () => {

    return {
        APIKEY: import.meta.env.VITE_APIKEY,
        AUTHDOMAIN: import.meta.env.VITE_AUTHDOMAIN,
        DATABASEURL: import.meta.env.VITE_DATABASEURL,
        PROJECTID: import.meta.env.VITE_PROJECTID,
        STORAGEBUCKET: import.meta.env.VITE_STORAGEBUCKET,
        MESSAGINGSENDERID: import.meta.env.VITE_MESSAGINGSENDERID,
        APPID: import.meta.env.VITE_APPID,
        MEASUREMENTID: import.meta.env.VITE_MEASUREMENTID,
    }
}