import { Output } from '../output';

export class ShellOutput implements Output {
    constructor(private element: HTMLInputElement) { }

    write(data: string) {
        this.out('>>> ' + data + '\n');
    }

    error(mess: string) {
        this.out('>>> ERROR: ' + mess + '\n');
    }

    private out(data: string) {
        this.element.value = this.element.value + data
    }
}
