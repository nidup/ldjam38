
import { Biome } from './biome';
import { Output } from '../terminal/output';
import {ImageFile, SoundFile} from "../gathered-data";

export class SandDesert implements Biome {
    public name: string = 'sand-desert';
    public type: string = 'Sand Desert';
    public description: string = 'Hot wind and sand aren’t good mix for my core processors. But the view of the dunes… I wish you were with me to see this.';

    private searched: boolean = false;
    private searchedCount: number = 0;

    public search(output: Output) {
        this.searched = true;
        this.searchedCount++;

        switch (this.searchedCount) {
            case 1:
                setTimeout(function(){
                    output.writeToTerminal('Uploading one photo (137): 9% ...');
                    output.displayToMonitor('scenes/sand-desert', 0.10);
                }, 1000*1);
                setTimeout(function(){
                    output.writeToTerminal('Uploading one photo (137): 20% ...');
                    output.displayToMonitor('scenes/sand-desert', 0.25);
                }, 1000*2);
                setTimeout(function(){
                    output.writeToTerminal('Uploading one photo (137): 51% ...');
                    output.displayToMonitor('scenes/sand-desert', 0.53);
                }, 1000*3);
                setTimeout(function(){
                    output.writeToTerminal('Uploading one photo (137): 83% ...');
                    output.displayToMonitor('scenes/sand-desert', 0.78);
                }, 1000*4);
                setTimeout(function(){
                    output.writeToTerminal('Uploading one photo (137): 100% ...');
                    output.displayToMonitor('scenes/sand-desert', 1);
                    output.writeToTerminal('Done.');
                }, 1000*5);
                return new ImageFile('sand-desert.jpg', 'scenes/sand-desert');

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
                    output.writeToTerminal("This shape in the horizon is unusual in the desert relief.", false, true);
                }, 200*5);
                output.playCapture('capture/sand-desert', 1.3);

                return new SoundFile('sand-desert.pcm', 'capture/sand-desert');

            case 3:
                output.writeToTerminal('The more I follow this shape, the further it looks..', false, true);
                break;

            default:
                output.writeToTerminal('Nothing more to add.', false, true);
        }
    }

    build(output: Output) {
        output.writeToTerminal('I have terraformed a lot of dunes, it now looks like a giant beach.', false, true);
    }
}
