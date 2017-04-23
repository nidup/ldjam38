
import Monitor from "../monitor";
import Speaker from "../speaker";
import Leds from "../leds";

export class Output {

    public terminalElement: HTMLInputElement
    public monitor: Monitor;
    public speaker: Speaker;
    public leds: Leds;

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

    turnOnLed(position: number) {
        this.leds.turnOnLed(position);
    }

    private out(data: string) {
        this.terminalElement.value = this.terminalElement.value + data
        this.terminalElement.scrollTop = this.terminalElement.scrollHeight;
    }
}
