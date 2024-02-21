import { Injectable } from "@angular/core";
import { FingerprintAIO } from '@awesome-cordova-plugins/fingerprint-aio/ngx';

@Injectable({
    providedIn: 'root'
})
export class FirePrint {
    public available!: any;

    constructor(public fp: FingerprintAIO) { }


    checkFirePrint() {
        this.fp.isAvailable().then((result) => {
            //'finger' | 'face' | 'biometric'
            this.available = result;
            console.log(this.available);
            
          }).catch((err) => {
            console.log({err});
        });
    }
}

