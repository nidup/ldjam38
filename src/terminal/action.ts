import { Output } from './output';
import Play from '../states/Play';

export interface Action {
    name: string;

    execute(state: Play, output: Output): Promise<any>;
}
