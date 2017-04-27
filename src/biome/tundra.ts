
import { Biome } from './biome';
import { Output } from '../terminal/output';
import {ImageFile, SoundFile} from "../gathered-data";

export class Tundra implements Biome {
    public name: string = 'tundra';
    public type: string = 'Tundra';
    public description: string = 'I will call it tundra. Nothing but infinite landscape where fragile plants and bush grow despite the continuous polar cold wind.';

    private searched: boolean = false;
    private searchedCount: number = 0;

    public search(output: Output) {
        this.searched = true;
        this.searchedCount++;

        switch (this.searchedCount) {
            case 1:
                setTimeout(function(){
                    output.writeToTerminal('Uploading one photo (183): 5% ...');
                    output.displayToMonitor('scenes/toundra', 0.10);
                }, 1000*1);
                setTimeout(function(){
                    output.writeToTerminal('Uploading one photo (183): 25% ...');
                    output.displayToMonitor('scenes/toundra', 0.25);
                }, 1000*2);
                setTimeout(function(){
                    output.writeToTerminal('Uploading one photo (183): 53% ...');
                    output.displayToMonitor('scenes/toundra', 0.53);
                }, 1000*3);
                setTimeout(function(){
                    output.writeToTerminal('Uploading one photo (183): 78% ...');
                    output.displayToMonitor('scenes/toundra', 0.78);
                }, 1000*4);
                setTimeout(function(){
                    output.writeToTerminal('Uploading one photo (183): 100% ...');
                    output.displayToMonitor('scenes/toundra', 1);
                    output.writeToTerminal('Done.');
                }, 1000*5);
                return new ImageFile('tundra.jpg', 'scenes/toundra');
            case 2:
                setTimeout(function(){
                    output.writeToTerminal('Loading audio capture: 3% ...');
                }, 200*1);
                setTimeout(function(){
                    output.writeToTerminal('Loading audio capture: 21% ...');
                }, 200*2);
                setTimeout(function(){
                    output.writeToTerminal('Loading audio capture: 48% ...');
                }, 200*3);
                setTimeout(function(){
                    output.writeToTerminal('Loading audio capture: 79% ...');
                }, 200*4);
                setTimeout(function(){
                    output.writeToTerminal('Loading audio capture: 100% ...');
                    output.writeToTerminal("Begin audio capture streaming...");
                    output.writeToTerminal("");
                    output.writeToTerminal("A little plant is trapped in the frost.", false, true);
                }, 200*5);
                output.playCapture('capture/tundra', 1.3);

                return new SoundFile('tundra.pcm', 'capture/tundra');
            case 3:
                output.writeToTerminal('The topographic analysis indicates a rich underground, it must be at least a million years old.', false, true);
                break;
           default:
                output.writeToTerminal('Nothing more to add.', false, true);
        }
    }

    build(output: Output) {
        output.writeToTerminal('Pipeline network is finished. Should we talk about this last remaining bolt?..', false, true);
    }
}
