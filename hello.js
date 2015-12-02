$(document).ready(function(){
  $('#fib').click(function(){
    var a = 0;
    var b = 1;
    var n = 1000;
    var c = 0;
    document.write(a + ',' + b + ',');
    for(var i = 0;i < n; i++){
      if(c<=n){
        c = a+b;
        a=b;
        b=c;
        document.write( + c +",");
      }
    }
  });

  $('#replace').click(function(){
    var str = 'h*l*oWor*d';
    document.write('String before replacing is:' + str + '<p>');
    document.write('string after replacing :');
    var strlen = str.length;
    for( var i = 0; i < strlen; i++) {
      if(str[i] === '*') {
        var a = '@';
        document.write(a);
      }
      else{
        document.write(str[i]);
      }
    }
  });

  $('#pop').click(function(){
    var arr = [0,1,2,3,4,5];
    var len = arr.length;
    document.write('Before removing elements:');
    for( var i=0; i < len; i++) {
      document.write(arr[i]);
    }
    arr.splice('*');
    arr.push('hello');
    arr.push('welcome');
    arr.push('hello1');
    arr.push('welcome1');
    arr.push('hello2');
    arr.push('welcome2');
    document.write('<p>After removing and adding elements:');
    for( i = 0; i < len; i++){
      document.write(arr[i] + ',');
    }
  });

  $('#rev').click(function() {
    var arr = ['pavan', 'sunil', 'ramu', 'somu'];
    var len = arr.length;
    for( var i = 0; i < len; i++) {
      document.write(arr[i] + ',');
    }
    document.write('<p>');
    for( var i = len-1; i >= 0; i--) {
      for(var j = arr[i].length-1; j>=0; j--) {
        document.write(arr[i][[j]]);

      }
      document.write(',');
    }
  });

});
