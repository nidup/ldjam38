
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
            this.terminalElement.value = this.terminalElement.value + '>>> ERROR: ' + data + '\n';
        } else {
            this.terminalElement.value = this.terminalElement.value + '>>> ' + data + '\n';
        }
        this.terminalElement.scrollTop = this.terminalElement.scrollHeight;
    }

    playToSpeaker(data: string, volume: number = 1, loop: boolean = false) {
        const sound = this.speaker.playSound(data, volume, loop);

        return () => sound.destroy();
    }

    displayToMonitor(data: string, opacity: number) {
        this.monitor.showImage(data, opacity);
    }

    turnOnLed(position: number) {
        this.leds.turnOnLed(position);
    }
}
