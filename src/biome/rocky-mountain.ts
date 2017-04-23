
import { Biome } from './biome';
import { Output } from '../terminal/output';

export class RockyMountain implements Biome {
    public name: string = 'rocky-mountain';
    public type: string = 'Rocky Mountain';
    public description: string = 'It is hard for my wheels to proceed in this cliff. But I want to see what it feels like to be on top of the world.';

    private searched: boolean = false;
    private searchedCount: number = 0;

    public search(output: Output) {
        this.searched = true;
        this.searchedCount++;

        switch (this.searchedCount) {
            case 1:
                output.writeToTerminal('The wind is strong, but the view is clear. Really I wish you would be there with me.');
                setTimeout(function(){
                    output.writeToTerminal('Uploading one photo (78): 7% ...');
                    output.displayToMonitor('scenes/rocky-mountain', 0.10);
                }, 1000*1);
                setTimeout(function(){
                    output.writeToTerminal('Uploading one photo (78): 26% ...');
                    output.displayToMonitor('scenes/rocky-mountain', 0.25);
                }, 1000*2);
                setTimeout(function(){
                    output.writeToTerminal('Uploading one photo (78): 58% ...');
                    output.displayToMonitor('scenes/rocky-mountain', 0.53);
                }, 1000*3);
                setTimeout(function(){
                    output.writeToTerminal('Uploading one photo (78): 81% ...');
                    output.displayToMonitor('scenes/rocky-mountain', 0.78);
                }, 1000*4);
                setTimeout(function(){
                    output.writeToTerminal('Uploading one photo (78): 100% ...');
                    output.displayToMonitor('scenes/rocky-mountain', 1);
                    output.writeToTerminal('Done.');
                }, 1000*5);
                break;

            case 2:
                output.writeToTerminal('I feel I’m closer to you. What a beautiful world.');
                break;

            case 3:
                output.writeToTerminal('Hola dere tütü, hola dero');
                break;

            default:
                output.writeToTerminal('Nothing more to add.');
        }
    }

    build(output: Output) {
        output.writeToTerminal('The signal is much better now.');
    }
}
