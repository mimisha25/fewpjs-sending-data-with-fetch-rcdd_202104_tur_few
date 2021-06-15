// Add your code here
function submitData(name,email){
   return fetch("http://localhost:3000/users", {
   method: "POST",
   headers: {
     "Content-Type": "application/json",
     "Accept": "application/json"
   },
   body: JSON.stringify({
     name: name,
     email: email
   })
 })
  .then(function(response) {
     return response.json();
   })
   .then(function(object) {
      document.body.innerHTML = object[ "id" ]
     console.log(object);
   })
   .catch(function(error) {
     document.body.innerHTML = error.message
     alert("Bad things! Ragnarők!");
     console.log(error.message);
   });
 }
