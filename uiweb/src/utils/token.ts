export function setToken(name:string,token:any,type:boolean=true){
    if(!type){
        return sessionStorage.setItem(name,token)
    }else{
        return localStorage.setItem(name,token)
    }
}

export function getToken(name:string,type:boolean=true){
    if(!type){
        return sessionStorage.getItem(name)
    }else{
        return localStorage.getItem(name)
    }
}

export function removeToken(name:string,type:boolean=true){
    if(!type){
        return sessionStorage.removeItem(name)
    }else{
        return localStorage.removeItem(name)
    }
}