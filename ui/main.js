console.log('Loaded!');
//counter code
var button = document.getElementById('counter');

button.onclick = function(){
  //create the request
  var request = new XMLHttpRequest();
  
  //capture the response and store it in a variable
  request.onreadystatechange = function(){
      if(request.readyState === XMLHttpRequest.Done){
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
