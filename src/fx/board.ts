import Play from '../states/Play';

export default class BoardFX {

    private sprite;
    private filter;

    private state: Play;

    constructor(state: Play) {
        this.state = state;
    }

    display() {
        let fragmentSrc = [

            "precision mediump float;",

            "uniform float     time;",
            "uniform vec2      resolution;",
            "uniform vec2      mouse;",

            "float noise(vec2 pos) {",
            "return fract(sin(dot(pos, vec2(12.9898 - time,78.233 + time))) * 43758.5453);",
            "}",

            "void main( void ) {",

            "vec2 normalPos = gl_FragCoord.xy / resolution.xy;",
            "float pos = (gl_FragCoord.y / resolution.y);",
            "float mouse_dist = 0.0;",
            "float distortion = clamp(1.0 - (mouse_dist + 0.1) * 3.0, 0.0, 1.0);",

            "pos -= (distortion * distortion) * 0.1;",

            "float c = sin(pos * 400.0) * 0.4 + 0.4;",
            "c = pow(c, 0.2);",
            "c *= 0.05;",

            "float band_pos = fract(time * 0.1) * 3.0 - 1.0;",
            "c += clamp( (1.0 - abs(band_pos - pos) * 10.0), 0.0, 1.0) * 0.1;",

            "c += distortion * 0.08;",
            "// noise",
            "c += (noise(gl_FragCoord.xy) - 0.5) * (0.05);",


            "gl_FragColor = vec4( 0.0, c, 0.0, 0.1 );",
            "}"
        ];

        this.filter = new Phaser.Filter(this.state.game, null, fragmentSrc);
        this.filter.setResolution(300, 300);

        this.sprite = this.state.game.add.sprite(115, 70);
        this.sprite.width = 355;
        this.sprite.height = 265;
        this.sprite.filters = [ this.filter ];
    }

    update() {
        this.filter.update();
    }
}
