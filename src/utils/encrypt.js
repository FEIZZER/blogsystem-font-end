import JSEncrypt from "jsencrypt"

/*
 * @Author: feizzer
 * @Date: 2021-11-13 09:41:47
 * @LastEditors: feizzer
 * @LastEditTime: 2022-06-08 14:02:03
 * @Description: 
 */
export default function encrypt(data) {
    let publicKey = sessionStorage.getItem("publicKey")
    let encrypt = new JSEncrypt
    encrypt.setPublicKey(publicKey)
    return encrypt.encrypt(data,)
}

