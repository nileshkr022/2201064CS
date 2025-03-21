const WINDOW_SIZE = parseInt(process.env.WINDOW_SIZE,10);
class NumberStore{
    constructor(){
        this.numbers = [];
    }
    addNumbers(newNumbers){
        newNumbers.forEach((num)=>{
            if(!this.numbers.includes(num)){
                if(this.numbers.length>=WINDOW_SIZE){
                    this.numbers.shift();
                }
                this.numbers.push(num);
            }
        });
    }
    getNumbers(){
        return this.numbers;
    }
    calculateAverage(){
        if(this.numbers.length===0)return 0;

        const sum = this.numbers.reduce((acc,num)=>acc+num+0);
        return sum /this.numbers.length;
    }
}
module.exports = new NumberStore();