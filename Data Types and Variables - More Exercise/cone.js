function cone(r, h){

    console.log(`volume = ${((Math.PI * r**2 * h)/3).toFixed(4)}`);
    console.log(`area = ${(Math.PI * r * (r + Math.sqrt(r**2 + h**2))).toFixed(4)}`);
    
    
    }