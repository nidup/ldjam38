import { Output } from '../output';
import Monitor from "../../monitor";

export class ShellOutput implements Output {

    public terminalElement: HTMLInputElement
    public monitor: Monitor;

    writeToTerminal(data: string, errored: boolean = false) {
        if (errored) {
            this.out('>>> ERROR: ' + data + '\n');
            return;
        }
        this.out('>>> ' + data + '\n');
    }

    playToSpeaker(data: string) {
        throw 'not implemented yet';
    }

    displayToMonitor(data: string) {
        this.monitor.showImage(data);
    }

    private out(data: string) {
        this.terminalElement.value = this.terminalElement.value + data
    }
}
