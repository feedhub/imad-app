console.log('Loaded!');
//counter code
var button = document.getElementById('counter');

button.onclick = function(){
  //create the request
  var request = new XMLHttpRequest();
  
  //capture the response and store it in a variable
  request.onreadystatechange = function(){
      if(request.readyState === XMLHttpRequest.DONE){
          //take some action
          if(request.status === 200){ //200 is time to complete the request successfully
              var counter = request.responseText;
              var span = document.getElementById('count');
              span.innerHTML = counter.toString();
          }
      }
      //not done yet
  };
  
  //make the request
  request.open('GET','http://khadijab37.imad.hasura-app.io/counter',true);
  request.send(null);
  
};

//submit name
var nameInput = document.getElementById('name');
var name = nameInput.value;
request.open('GET','http://khadijab37.imad.hasura-app.io/submit-name?name=' + name,true);
request.send(null);
//var submit = document.getElementById('submit_button');
//submit.onclick = function(){
  //__make a request to server and send the name
  
  //__capture the name and render it into a list
//    var names = ['name1','name2','name3','name4','name5'];
//    var list = '';
//    for(var i=0; i< names.length; i++){
//        list += '<li>' + names[i] + '</li>';
//    }
//    var ul = document.getElementById('namelist');
//    ul.innerHTML = list;
//};

