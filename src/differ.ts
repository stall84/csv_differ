import * as fs from 'fs';

export default class Differ {

    public origFileContent: string | undefined = undefined; 
    public currFileContent: string | undefined = undefined;

    constructor (
                public origFilePath: string | undefined, 
                public currFilePath: string | undefined, 
                
                ) {
            try {
                if ( origFilePath ) {
                    // fs.readFile(origFilePath, 'utf8', (err, data) => {
                    //     if (data) this.origFileContent = data;
                    //     else if (err) console.warn('error : ', err)
                    // })\
                    this.origFileContent = fs.readFileSync(origFilePath, 'utf-8');
                }
                if ( currFilePath ) {
                    // fs.readFile(currFilePath, 'utf8', (err, data) => {
                    //     if (data) this.currFileContent = data;
                    //     else if (err) console.warn('error : ', err)
                    // })
                    this.currFileContent = fs.readFileSync(currFilePath, 'utf-8');
                }
            } catch ( error ) {
                throw new Error(`Error initializing Differ : ${error}`);
            }
    }

    get getOriginal () {
        if ( this.origFileContent != undefined ) {
            return new Promise((resolve, reject) => {
                return this.origFileContent ? resolve(this.origFileContent) : reject('originalFile Content Not Found');
            }) 
        }
    }
    get getCurrent () {
        if ( this.currFileContent != undefined ) {
            return new Promise((resolve, reject) => {
                return this.currFileContent ? resolve(this.currFileContent) : reject('currentFile Content Not Found');
            })
        }
    }


}

