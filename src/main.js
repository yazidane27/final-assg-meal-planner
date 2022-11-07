const { app, BrowserWindow } = require('electron');
const fs = require('fs')
const path = require('path')

var btnCreate = document.getElementById('btnCreate')
var btnRead = document.getElementById('btnRead')
var btnDelete = document.getElementById('btnDelete')
var fileName = document.getElementById('fileName')
var fileContents = document.getElementById('fileContents')

let pathName = path.join(__dirname, 'Files')

btnCreate.addEventListener('click', function(){  //creating text file when user click CREATE button
  let file = path.join(pathName, fileName.value)
  let contents = fileContents.value
  fs.writeFile(file, contents, function(err){ //param1: textfile yg kita nak write param2: apa yg kita nak write ke text file
    if(err){
      return console.log(err)
    }
    var txtfile = document.getElementById("fileName").value
    alert(txtfile + " text file was created")    
    console.log("The file was created")
    location.reload()
  
  })
  
})

btnRead.addEventListener('click', function(){  //read contents of the created text file
  let file = path.join(pathName, fileName.value)
 
  fs.readFile(file, function(err, data){ 
    if(err){
      return console.log(err)
    }
    fileContents.value = data
    console.log("The file was read!")
  })
  
})

function update(){
  let file = path.join(pathName, fileName.value)
  let data = document.getElementById("fileContents").value
  fs.writeFile(file,data, function(err){ 
    if(err){
      return console.log(err)
    }
    var txtfile = document.getElementById("fileName").value
    alert(txtfile + " text file was updated")  
    console.log("data has been updated")
  })
}

btnDelete.addEventListener('click', function(){  
  let file = path.join(pathName, fileName.value)
 
  fs.unlink(file, function(err){ 
    if(err){
      return console.log(err)
    }
    fileName.value = ""
    fileContents.value = ""
    alert("text file has been deleted")  
    console.log("The file was deleted!")
    location.reload()
  })
  
})

fs.readdir(pathName,(err,Files)=>{
  Files.forEach((item) => {
    document.getElementById("files").append(item)
    var br = document.createElement("br")
    document.getElementById("files").append(br)

  });
}
)


