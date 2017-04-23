export interface GatheredData {
    name: string;
    path: string;
}

export class SoundFile implements GatheredData {
    constructor(public name: string, public path: string) { }
}

export class ImageFile implements GatheredData {
    constructor(public name: string, public path: string) { }
}
