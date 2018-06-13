let btnSave = document.getElementById("btnSave")

var taskListClient = []

btnSave.addEventListener('click',function(){
// http://localhost:3000/dishes

//A Get the List to display
fetch('http://localhost:3000/tasks'
  ).then(function(response){
  return response.json()
}).then(function(taskList){
    console.log(taskList)
    return taskList
  })
/*
function displayTasks {

}
*/

//B add a task
  fetch('http://localhost:3000/tasks',{
    method : 'POST',
    headers : {
    'Content-Type' : 'application/json'
  },
    body : JSON.stringify({
      //taskList : 'DigitalCraft', //will be replaced w/ text box html
      task : 'Finish ToDo list!'
      priority: "High"
      })
    }).then(function(response){
    return response.json()
    }).then(function(text){
      console.log(text)

    })

/*
function displayTasks {

}
*/

/*
fetch('/users', {
method: 'POST',
headers: {
'Content-Type': 'application/json'
},
body: JSON.stringify({
name: 'Hubot',
login: 'hubot',
})
})
*/
})
