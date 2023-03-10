class Ground {
    constructor(game, x, y, w, h) {
        Object.assign(this, { game, x, y, w, h});

        this.spritesheet = assetMangager.getAsset("./sprites/layer-5.png");
        // this.animations = [];
        // this.animations.push(new Animator(this.spritesheet, 0, 0, 48, 48, 1, 0.1, 0,0,false, true, false));
        this.BB = new BoundingBox(this.x, this.y, this.w, this.h);
    };

    update() {
    };
    draw(ctx) {
        // this.animations[0].drawFrame(this.game.clockTick, ctx, this.x , this.y, PARAMS.SCALE);
        ctx.drawImage(this.spritesheet,this.x ,this.y, this.w, this.h);
        ctx.strokeStyle = 'Red';
        ctx.strokeRect(this.BB.x, this.BB.y, this.BB.width, this.BB.height);
    };
};


// class BackGround {
//     constructor(game, x, y, w, h) {
//         Object.assign(this, { game, x, y, w, h});

//         this.spritesheet = assetMangager.getAsset("./background.png");


//     };

//     update() {
//     };
//     draw(ctx) {
//         ctx.drawImage(this.spritesheet,this.x ,this.y, this.w, this.h);
//     };
// };
