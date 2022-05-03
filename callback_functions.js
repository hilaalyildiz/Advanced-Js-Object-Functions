function MultipleByTwo (a,b,c,callback){
    let arr = [];
    for(let i=0; i<3;i++){
        arr[i] = callback(arguments[i]*2);
    }
    return arr;
}

function addOne(a){
    return a+1;
}

val = MultipleByTwo(5,10,20,addOne);
val = MultipleByTwo(5,10,20,function(a){
    return a+1;
});
// functions bir kez kullanılacaksa anonymous şekilde funct tanımlayabiliriz.


