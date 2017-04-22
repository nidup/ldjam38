import { Output } from './output';

export interface Action {
    name: string;

    execute(output: Output);
}
