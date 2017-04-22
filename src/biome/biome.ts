import { Output } from '../terminal/output.ts';

export interface Biome  {
    name: string;
    type: string;
    description: string;

    search(output: Output);
}
