import { Output } from '../terminal/output';

export interface Biome  {
    name: string;
    type: string;
    description: string;

    search(output: Output);
}
