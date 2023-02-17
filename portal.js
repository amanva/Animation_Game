class Portal {
    constructor(game, x, y){
        Object.assign(this, { game, x, y });
        this.game.portal = this;
        this.velocity = { x: 0, y: 0 };
        this.portal = assetMangager.getAsset("./sprites/portal.png");
        this.scale = 1;
        this.animations = new Animator(this.portal, 0, 0, 320, 320, 41, 0.07, 0, 0, false, false, undefined);
        this.animations.columnNum = 6;
        this.animations.rowNum = 6;
        this.updateBB();
        
    }; // end of constructor


    updateBB() {
        this.lastBB = this.BB;
        this.BB = new BoundingBox(this.x+160, this.y+200, 50, 120); 
    };
    
    update() {
        let curFrame = this.animations.currentFrame();
        this.updateBB();
        var that = this;
        that.game.entities.forEach(function (entity) {
            if (entity instanceof Mage  && entity.BB && that.BB.collide(entity.BB)) {
                that.game.camera.loadLevel(levelTwo);
                // this.game.startInput();
            }
        
           
        }); //end of forEach
              
        if(this.animations.isAlmostDone(this.game.clockTick)){
            this.animations.elapsedTime = 2.7;
        }
    };//end update() chainBot behavior and collisions

    draw(ctx) {
                   
        this.animations.drawFrame(this.game.clockTick, ctx, this.x-this.game.camera.x, this.y-this.game.camera.y, this.scale);
        if (debug) {
            //draw the boundingBox
            ctx.strokeStyle = 'white';
            ctx.strokeRect(this.BB.x - this.game.camera.x, this.BB.y-this.game.camera.y, this.BB.width , this.BB.height);
        }    
        
                                
    }; // End draw method

}; // End of chain_bot