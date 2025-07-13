const getRandom=(min=0,max=100)=>{
    return Math.round(Math.random()*(max-min)+max);
}

export default getRandom;



/*

import getRandom from "get-randomizer";

console.log(getRandom(1,5));

*/