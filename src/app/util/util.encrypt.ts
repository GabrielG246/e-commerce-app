import * as CryptoJS from 'crypto-js';
import { environment } from '../../environments/environment';

export const encrypt= (data:string):string=>{
    return CryptoJS.AES.encrypt(data, environment.keyEncrypt).toString();
}

export const desencrypt= (password:string):string => {
    const valueDecrypt= CryptoJS.AES.decrypt(password, environment.keyEncrypt).toString(CryptoJS.enc.Utf8)

    return JSON.parse(valueDecrypt) as string
}