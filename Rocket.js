class Rocket{
    constructor(dna){
        this.pos = createVector(width/2,height);
        this.vel = createVector();
        this.acc = createVector();
        this.complete = false;
        this.completelife = 1;
        if (dna){
            this.dna = dna
        } else{
            this.dna = new DNA();
        }
        this.fitness = 0;
    }

    applyForce(force){
        this.acc.add(force);
    }

    update(count){
        let d = dist(this.pos.x, this.pos.y, target.x, target.y);
        if((d<10) && (!this.complete)){
            this.complete = true;
            this.pos = target.copy();
            this.completelife = lifespan-count;
        }

        this.applyForce(this.dna.genes[count]);
        if(!this.complete){
            this.count++;
            this.vel.add(this.acc);
            this.pos.add(this.vel);
            this.acc.mult(0);
        }
    }

    show(){
        push();
        noStroke();
        fill(255,150);
        translate(this.pos.x,this.pos.y);
        rotate(this.vel.heading());
        rectMode(CENTER)
        rect(0,0,25,5);
        pop();
    }

    calcFitness(){
        let d = map(dist(this.pos.x, this.pos.y, target.x, target.y),0,width,width,0);
        this.fitness = map(this.completelife * d,0,50000,0,1000);
    }
}