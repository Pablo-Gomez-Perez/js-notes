const returnTrue = () => {
    console.log('this return true');
    return true;
}

const returnFalse = () => {
    console.warn('this return false');
    return false;
}

const printResult = (result) => {

    if(result === true){
        console.log("Im true: ", result);
        return;
    }    
    
    if(result === false){
        console.error('Im false: ', result);
        return;
    }

    console.warn('I am: ', result);
}

// lets check some examples

const imUndefined = undefined;
const imNull = null;
const imFalse = false;

const a1 = false && 'Hello world' && 432;
const a2 = 'hello' && 'World';
const a3 = imFalse || 'Im Not false';
const a4 = imFalse || imUndefined || imNull || 'Im not false';

//console.log(a1);
printResult(a1);
printResult(a2);
printResult(a3);
printResult(a4);
