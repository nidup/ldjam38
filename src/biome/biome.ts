import { Output } from '../terminal/output';
import Dashboard from '../dashboard';

export interface Biome  {
    name: string;
    type: string;
    description: string;

    search(output: Output);
}

export class BaseBiome {
	public dashboard: Dashboard;

	constructor(dashboard: Dashboard) {
		this.dashboard = dashboard;
	}
}
