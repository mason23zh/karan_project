export class Number {

    private factorial(n): number{
        if(n >= 1){
            return n * this.factorial(n - 1);
        }else{
            return 1;
        }
    }

    piToTheNthDigit_V_1(nthNumber):string {
        const pi = (4 * Math.atan(1/5) - Math.atan(1/239)) * 4;
        if(nthNumber <= 0 || nthNumber > 20){
            nthNumber = 20;
        }

        return pi.toFixed(nthNumber);
    }

    eToTheNthDigit(nthNumber):string{
        let e = 0;
        for(let i = 0; i < 12; i++){
            e += 1 / this.factorial(i)
        }
        if(nthNumber <=0 || nthNumber >= 9){
            return e.toFixed(9);
        }

        return e.toFixed(nthNumber);
    }

    private fibonacci(nthNumber): number{
        if(nthNumber === 0){
            return 0;
        }else if(nthNumber === 1 || nthNumber === 2){
            return 1;
        }else{
            return this.fibonacci(nthNumber - 1) + this.fibonacci(nthNumber - 2)
        }
    }

    fibonacciSequence(nthNumber): number[] {
        let result:number[] = [];

        if(nthNumber <= 0){
            return result;
        }

        for(let i = 0; i < nthNumber; i++){
            result.push(this.fibonacci(i))
        }

        return result;
    }
}
