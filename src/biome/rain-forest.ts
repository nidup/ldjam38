import { Biome } from './biome';
import { Output } from '../terminal/output';
import { ImageFile } from '../gathered-data';

export class RainForest implements Biome {
    public name: string = 'rain-forest';
    public type: string = 'Rain Forest';
    public description: string = 'These trees are really big. The sun is hiding behind their leafs. Humidity is way too high for my integrated circuits. No, I’m not a complaining robots. Just being realistic here...';

    private searched: boolean = false;
    private searchedCount: number = 0;

    public search(output: Output) {
        this.searched = true;
        this.searchedCount++;

        switch (this.searchedCount) {
            case 1:
                output.writeToTerminal('What a packed forest, maybe I could find a clearing to send you a picture.');
                break;
            case 2:
                output.writeToTerminal('Uploading one photo...');
                setTimeout(function(){
                    output.writeToTerminal('Uploading one photo (102): 5% ...');
                    output.displayToMonitor('scenes/rain-forest', 0.10);
                }, 1000*1);
                setTimeout(function(){
                    output.writeToTerminal('Uploading one photo (102): 25% ...');
                    output.displayToMonitor('scenes/rain-forest', 0.25);
                }, 1000*2);
                setTimeout(function(){
                    output.writeToTerminal('Uploading one photo (102): 53% ...');
                    output.displayToMonitor('scenes/rain-forest', 0.53);
                }, 1000*3);
                setTimeout(function(){
                    output.writeToTerminal('Uploading one photo (102): 78% ...');
                    output.displayToMonitor('scenes/rain-forest', 0.78);
                }, 1000*4);
                setTimeout(function(){
                    output.writeToTerminal('Uploading one photo (102): 100% ...');
                    output.displayToMonitor('scenes/rain-forest', 1);
                    output.writeToTerminal('Done.');
                }, 1000*5);
                return new ImageFile('rain-forest.jpg', 'scenes/rain-forest');

            case 3:
                output.writeToTerminal('Like a feeling of being observed by some beasts. Did you hear that ?');
                break;

            default:
                output.writeToTerminal('Nothing more to add.');
        }
    }

    build(output: Output) {
        output.writeToTerminal('I had to cut down all the trees... the place is sadly silent now. All I can hear is my engine.');
    }
}
