import * as CryptoJS from 'crypto-js';
import { environment } from '../../environments/environment';

export const encrypt= (data:string):string=>{
    return CryptoJS.AES.encrypt(data, "secretKey").toString();
}

export const desencrypt= (password:string):string => {
    const valueDecrypt= CryptoJS.AES.decrypt(password, "secretKey").toString(CryptoJS.enc.Utf8)

    return JSON.parse(valueDecrypt) as string
}