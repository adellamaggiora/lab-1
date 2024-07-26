function isPal(str) {
    
    if(str.length == 0){return true;}
    
    for(let i=0; i < str.length/2; i++){

        if(str[i] != str[(str.length -1)-i]){
            return false;
        }

    }
    return true;
}







function minima_stringa(arr) {

    
 if(isPal(arr[0])) {return arr[0];}

    
    let res = arr[0];
    

    for(let j = 1; j<arr.length; j++){
        
        if(arr[j].length <= res.length){
            res = arr[j];
        }

        if(isPal(arr[j])){
            return res;
        }


    }

    return res;

}
