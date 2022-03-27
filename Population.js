class Population{
    constructor(popsize){
        this.rockets = [];
        this.popsize = popsize;
        this.matingpool = [];
        this.avgfit = 0;
        for (let i = 0;i<this.popsize;i++){
            this.rockets[i] = new Rocket();
        }
    }

    run(){
        for (let i = 0;i<this.popsize;i++){
            this.rockets[i].update(count);
            this.rockets[i].show();
        }
    }

    evaluate(){
        let maxfit = 0;
        let totalfit = 0;
        for (let i = 0;i<this.popsize;i++){
            this.rockets[i].calcFitness();
            totalfit += this.rockets[i].fitness;
            if (this.rockets[i].fitness > maxfit){
                maxfit = this.rockets[i].fitness;
            }
        }
        this.avgfit = (totalfit / this.popsize).toPrecision(4);
        displayinfo.html(`Current Generation: ${generation}<br>Max Fitness: ${maxfit} / 1000 <br>Average Fitness: ${this.getavgfit()} / 1000`);
        for (let i = 0;i<this.popsize;i++){
            this.rockets[i].fitness /= maxfit;
        }

        this.matingpool = [];

        for (let i = 0;i<this.popsize;i++){
            let n = this.rockets[i].fitness * 100;
            for(let j =0;j<n;j++){
                this.matingpool.push(this.rockets[i]);
            }
        }
    }

    getavgfit(){
        return this.avgfit;
    }

    selection(){
        let newRockets = [];
        for (let i = 0;i<this.popsize;i++){
            let parentA = random(this.matingpool).dna;
            let parentB = random(this.matingpool).dna;
            let child = parentA.crossover(parentB);
            child.mutation();
            newRockets[i] = new Rocket(child);
        }
        this.rockets = newRockets;
    }
}