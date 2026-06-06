/**
 * @param {number[]} order
 * @param {number[]} friends
 * @return {number[]}
 */
var recoverOrder = function(order, friends) {
    const frindsSet=new Set(friends)
    const result=[]

    for(const id of order ){
        if(frindsSet.has(id)){
            result.push(id)
        }
    }

    return result
};