
var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];
 
for (var i = 0 ; i < names.length; i++) {
  
  var s =names[i][0];

  (function () {
    
  
  if (s == "J") {
    console.log ("Goodbay " + names[i])

  }else if (s== "j") {
    console.log ("Goodbay " + names[i])
  } else {
    console.log ("Hello " + names[i]);
  };
  
  })("Module4-solution");
}
