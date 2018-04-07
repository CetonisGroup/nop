import {
    Injectable
} from '@angular/core';


@Injectable()
export class PrivacyTokenService {

    private publicKey: CryptoKey;
    private privateKey: CryptoKey;

    constructor() {

    }

    public async createPrivacyToken() {
        const algDict = {
            name: "RSASSA-PKCS1-v1_5",
            modulusLength: 2048,
            publicExponent: new Uint8Array([0x01, 0x00, 0x01]),
            hash: { name: "SHA-256" }
        }
        const key = await window.crypto.subtle.generateKey(algDict, true, ["sign", "verify"]);
        this.publicKey = key.publicKey;
        this.privateKey = key.privateKey;
    }

    public getPrivacyToken() {
        return window.crypto.subtle.exportKey("jwk", this.publicKey)
            .then(key => {
                console.log(key);
                return key.n;
            });
    }



}