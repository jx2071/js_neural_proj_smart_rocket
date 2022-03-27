class DNA{
    constructor(genes){
        this.lifespan = lifespan;
        if(genes){
            this.genes = genes;
        } else{
            this.genes = [];
            for (let i =0;i<this.lifespan;i++){
                this.genes[i] = p5.Vector.random2D();
                this.genes[i].setMag(0.2);
            }
        }
    }

    crossover(partner){
        let newgenes = [];
        let mid = floor(random(this.genes.length));
        for (let i = 0;i<this.genes.length;i++){
            if (i> mid){
                newgenes[i] = this.genes[i];
            } else{
                newgenes[i] = partner.genes[i];
            }
        }
        return new DNA(newgenes);
    }

    mutation(){
        for(let i = 0;i<this.genes.length;i++){
            if(random(1)<mutationrate){
                this.genes[i] = p5.Vector.random2D();
                this.genes[i].setMag(0.2);
            }
        }
    }
}