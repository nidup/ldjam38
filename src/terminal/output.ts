
import Monitor from "../monitor";
import Speaker from "../speaker";
import Leds from "../leds";

export class Output {
    public terminalElement: HTMLInputElement
    public monitor: Monitor;
    public speaker: Speaker;
    public leds: Leds;

    writeToTerminal(data: string, errored: boolean = false, fromRover: boolean = false) {
        if (errored) {
            this.terminalElement.value = this.terminalElement.value + '>>> ERROR: ' + data + '\n';
        } else if (fromRover) {
            this.terminalElement.value = this.terminalElement.value + 'VJ-Net38: "' + data + '"\n';
        } else {
            this.terminalElement.value = this.terminalElement.value + '>>> ' + data + '\n';
        }
        this.terminalElement.scrollTop = this.terminalElement.scrollHeight;
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
}
