/**
 * @param {string[]} operations
 * @return {number}
 */
var finalValueAfterOperations = function(operations) {
    let X=0;
    let l= operations.length;
    for(let i of operations){
        if(i === '--X' || i=== 'X--') {
            X--;
        }
        else{
            X++;
        }
    }
    return X;
    
};