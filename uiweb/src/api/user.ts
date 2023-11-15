import request from '../utils/request';

export function Login(data:any){    
    return request({
        url: 'login',
        method:'POST',
        data
    })
}
export function GetInfo(uID:any){   
    console.log('uID',uID);
    return request({
        url: 'getUserInfo',
        method:'Get',
        params:uID
    })
}