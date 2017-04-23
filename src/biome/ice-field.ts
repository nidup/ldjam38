import { Biome } from './biome';
import { Output } from '../terminal/output';

export class IceField implements Biome {
    public name: string = 'ice-field';
    public type: string = 'Ice field';
    public description: string = 'I\'m freezing here, but I feel attracted by this place, don’t ask me why.';

    private searchedCount: number = 0;

    public search(output: Output) {
        this.searchedCount++;

        switch (this.searchedCount) {
            case 1:
                output.writeToTerminal("Uploading one photo...");
                setTimeout(function(){
                    output.writeToTerminal('Uploading one photo (99): 7% ...');
                    output.displayToMonitor('scenes/ice-field', 0.10);
                }, 1000*1);
                setTimeout(function(){
                    output.writeToTerminal('Uploading one photo (99): 28% ...');
                    output.displayToMonitor('scenes/ice-field', 0.25);
                }, 1000*2);
                setTimeout(function(){
                    output.writeToTerminal('Uploading one photo (99): 59% ...');
                    output.displayToMonitor('scenes/ice-field', 0.53);
                }, 1000*3);
                setTimeout(function(){
                    output.writeToTerminal('Uploading one photo (99): 81% ...');
                    output.displayToMonitor('scenes/ice-field', 0.78);
                }, 1000*4);
                setTimeout(function(){
                    output.writeToTerminal('Uploading one photo (99): 100% ...');
                    output.displayToMonitor('scenes/ice-field', 1);
                    output.writeToTerminal('Done.');
                }, 1000*5);
                break;

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
                }, 200*5);
                output.playCapture('capture/ice-field');

                output.writeToTerminal("My instruments are going crazy.", false, true);
                break;

            case 3:
                output.writeToTerminal("It’s getting really cold down here, I can’t wear mittens!", false, true);
                break;
            default:
                output.writeToTerminal('Nothing more to add.', false, true);
        }
    }

    build(output: Output) { }
}
