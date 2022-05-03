
//   (function(){
//      
//   })();  iki kullanımı vardır. İlki bu şekildedir.

(function(name){
    function welcome(){
        var days = ['Sunday', 'Monday','Tuesday','Wednesday','Thursday','Friday','saturday'];
        var today = new Date();
    
        var msg = 'Welcome' + name + ' Today is ' + days[today.getDay()];
        return msg;
    }
}('Cınar')); 

console.log(welcome());