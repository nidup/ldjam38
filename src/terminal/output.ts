export interface Output {
    writeToTerminal(data: string, errored?: boolean);
    playToSpeaker(data: string);
    displayToMonitor(data: string);
}
