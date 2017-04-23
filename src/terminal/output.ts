
import Monitor from "../monitor";
import Speaker from "../speaker";

export class Output {

    public terminalElement: HTMLInputElement
    public monitor: Monitor;
    public speaker: Speaker;

    writeToTerminal(data: string, errored: boolean = false) {
        if (errored) {
            this.out('>>> ERROR: ' + data + '\n');
            return;
        }
        this.out('>>> ' + data + '\n');
    }

    playToSpeaker(data: string) {
        this.speaker.playSound(data);
    }

    displayToMonitor(data: string, opacity: number) {
        this.monitor.showImage(data, opacity);
    }

    private out(data: string) {
        this.terminalElement.value = this.terminalElement.value + data
        this.terminalElement.scrollTop = this.terminalElement.scrollHeight;
    }
}
