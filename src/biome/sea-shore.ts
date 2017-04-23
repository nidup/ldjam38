
import { Biome } from './biome';
import { Output } from '../terminal/output';

export class SeaShore implements Biome {
    public name: string = 'sea-shore';
    public type: string = 'Sea Shore';
    public description: string = 'Well, I can’t swim. Can you ?';

    private searched: boolean = false;
    private searchedCount: number = 0;

    public search(output: Output) {
        this.searched = true;
        this.searchedCount++;

        switch (this.searchedCount) {
            case 1:
                output.writeToTerminal('There is powerful wind on this wide white sand beach, I\'m struggling to stand on my wheels.');
                output.writeToTerminal("Uploading one photo...");
                setTimeout(function(){
                    output.writeToTerminal('Uploading one photo (109): 5% ...');
                    output.displayToMonitor('scenes/sea-shore', 0.10);
                }, 1000*1);
                setTimeout(function(){
                    output.writeToTerminal('Uploading one photo (109): 25% ...');
                    output.displayToMonitor('scenes/sea-shore', 0.25);
                }, 1000*2);
                setTimeout(function(){
                    output.writeToTerminal('Uploading one photo (109): 53% ...');
                    output.displayToMonitor('scenes/sea-shore', 0.53);
                }, 1000*3);
                setTimeout(function(){
                    output.writeToTerminal('Uploading one photo (109): 78% ...');
                    output.displayToMonitor('scenes/sea-shore', 0.78);
                }, 1000*4);
                setTimeout(function(){
                    output.writeToTerminal('Uploading one photo (109): 100% ...');
                    output.displayToMonitor('scenes/sea-shore', 1);
                    output.writeToTerminal('Done.');
                }, 1000*5);
                break;
            case 2:
                output.writeToTerminal('Don’t count on me to dip a wheel in the water.');
                break;
            case 3:
                output.writeToTerminal('I’m starting to have sand in my pipes...');
                break;
            default:
                output.writeToTerminal('Nothing more to add.');
        }
    }

    build(output: Output) {
        output.writeToTerminal('Not an easy job, but it’s working.');
    }
}
