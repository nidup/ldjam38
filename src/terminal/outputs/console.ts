import { Output } from '../output';

export class Console implements Output {
    write(data: string) {
        console.log(data);
    }

    error(mess: string) {
        console.error('ERR: ' + mess);
    }
}
