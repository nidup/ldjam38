
export default class Biome  {
    constructor(game: Phaser.Game) {
    }

    public update () {
    }
}

export class SnowyForest extends Biome {
    public type : string
    public actions : string[]
    public description : string

    private searched : boolean
    private searchedCount : number
    private forestDestroyed : boolean

    constructor(game: Phaser.Game) {
        super(game)
        this.type = "Snowy forest";
        this.description = "A snowy forest."
        this.actions = ["wait", "search"];

        /////////////
        // Actions //
        /////////////

        // Search
        this.searched = false;
        this.searchedCount = 0;

        // Destroy forest
        this.forestDestroyed = false;
    }

    public searchAction () {
        this.searched = true;
        this.searchedCount += 1;

        if (this.forestDestroyed) {
            return "You recently destoyed forest, the ground " +
                "is just full of dirt. Next time, think before " +
                "cutting all the trees."
        }

        if (this.searchedCount == 1) {
            return "This forest is full of snow, you move some snow and find many vegetables."
        }
        if (this.searchedCount == 2) {
            return "More details"
        }
        if (this.searchedCount > 2) {
            return "Full details"
        }
    }

    public destroyTrees () {
        this.forestDestroyed = true;
    }

}

export class HotForest extends Biome {
    public type : string
    public actions : string[]
    public description : string

    constructor(game: Phaser.Game) {
        super(game)
        this.type = "Hot forest";
        this.description = "A hot and wet forest."
        this.actions = ["wait", "search"];
    }
}
