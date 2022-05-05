import 'dotenv/config';

import Differ from './differ';


async function runDiffer() {

    console.log('processEnv : ', process.env);

    const derpNerdle = new Differ(process.env.ORIGINALCSV, process.env.CURRENTCSV);
    try {
        let origGetOutput = await derpNerdle.getOriginal;
        console.log(origGetOutput);
    } catch (error) {
        console.warn('Error occurred: ', error);
    }
    // setTimeout(() => {
    //     console.log('post u flerping: ', derpNerdle.getOriginal);
    // }, 1000)
}

runDiffer();
