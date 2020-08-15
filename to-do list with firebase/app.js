var searchint = document.getElementById("searchint")
var dateint = document.getElementById("dateint")
var tasks = document.getElementById("tasks")
var list;
function todotasks(){
    if(searchint.value != "" && dateint.value != ""){
        var key = firebase.database().ref().child('tasks').push().key
        var tasksobject = {
            task : searchint.value,
            date : dateint.value,
            key : key,
        };

        var updates={};
        updates["tasks/" + key] = tasksobject;
        firebase.database().ref().update(updates);

        // creating list
        list = document.createElement("tr")

        // get text
        var columntext = document.createElement("td")
        var placetext = document.createElement("b")
        placetext.setAttribute("class", "listdesignp")        
        var pentext = document.createTextNode(tasksobject.task)
        placetext.appendChild(pentext)
        columntext.appendChild(placetext)
        list.appendChild(columntext)

        // get date
        var columndate = document.createElement("td")
        var placedate = document.createElement("b")
        placedate.setAttribute("class", "listdesignp")
        var pendate = document.createTextNode(tasksobject.date)
        placedate.appendChild(pendate)
        columndate.appendChild(placedate)
        list.appendChild(columndate)

        // list created
        tasks.appendChild(list)

        // delete button
        var columndelbtn = document.createElement("td")
        var placebtn = document.createElement("button")
        placebtn.setAttribute("onclick", "del(this)")
        placebtn.setAttribute("class", "btn-transparent")
        var penbtn = document.createTextNode("🗑")
        placebtn.appendChild(penbtn)
        columndelbtn.appendChild(placebtn)
        columndelbtn.setAttribute("title", "Click to Delete Task")
        list.appendChild(columndelbtn)

        // edit button
        var columneditbtn = document.createElement("td")
        var placeedit = document.createElement("button")
        placeedit.setAttribute("class", "btn-transparent")
        placeedit.setAttribute("onclick", "edit(this)")
        var penedit = document.createTextNode("✏")
        placeedit.appendChild(penedit)
        columneditbtn.appendChild(placeedit)
        columneditbtn.setAttribute("title", "Click to Edit Task")
        list.appendChild(columneditbtn)

        // key
        var columnkey = document.createElement("td")
        columnkey.style.visibility = "hidden"
        columnkey.style.display = "none"
        var placekey = document.createElement("b")
        placekey.setAttribute("class", "listdesignp")
        var penkey = document.createTextNode(tasksobject.key)
        placekey.appendChild(penkey)
        columnkey.appendChild(placekey)
        list.appendChild(columnkey)


        // input emptied
        searchint.value = ""
        dateint.value = ""

    }
}

function loadContent(){
    var tasksArray = []
    firebase.database().ref('tasks').once('value',function(data){
                
                tasksArray.push(Object.values(data.val()))
                
                
                for(var a=0;a<tasksArray[0].length;a++ ){
                    // creating list
        list = document.createElement("tr")

        // get text
        var columntext = document.createElement("td")
        var placetext = document.createElement("b")
        placetext.setAttribute("class", "listdesignp")        
        var pentext = document.createTextNode(tasksArray[0][a].task)
        placetext.appendChild(pentext)
        columntext.appendChild(placetext)
        list.appendChild(columntext)

        // get date
        var columndate = document.createElement("td")
        var placedate = document.createElement("b")
        placedate.setAttribute("class", "listdesignp")
        var pendate = document.createTextNode(tasksArray[0][a].date)
        placedate.appendChild(pendate)
        columndate.appendChild(placedate)
        list.appendChild(columndate)

        // list created
        tasks.appendChild(list)

        // delete button
        var columndelbtn = document.createElement("td")
        var placebtn = document.createElement("button")
        placebtn.setAttribute("onclick", "del(this)")
        placebtn.setAttribute("class", "btn-transparent")
        var penbtn = document.createTextNode("🗑")
        placebtn.appendChild(penbtn)
        columndelbtn.appendChild(placebtn)
        columndelbtn.setAttribute("title", "Click to Delete Task")
        list.appendChild(columndelbtn)

        // edit button
        var columneditbtn = document.createElement("td")
        var placeedit = document.createElement("button")
        placeedit.setAttribute("class", "btn-transparent")
        placeedit.setAttribute("onclick", "edit(this)")
        var penedit = document.createTextNode("✏")
        placeedit.appendChild(penedit)
        columneditbtn.appendChild(placeedit)
        columneditbtn.setAttribute("title", "Click to Edit Task")
        list.appendChild(columneditbtn)

        // key
        var columnkey = document.createElement("td")
        columnkey.style.visibility = "hidden"
        columnkey.style.display = "none"
        var placekey = document.createElement("b")
        placekey.setAttribute("class", "listdesignp")
        var penkey = document.createTextNode(tasksArray[0][a].key)
        placekey.appendChild(penkey)
        columnkey.appendChild(placekey)
        list.appendChild(columnkey)


        // input emptied
        searchint.value = ""
        dateint.value = ""
                }

            })
            
        
        
}

function del(d){
    var keydel = d.parentNode.parentNode.childNodes[4].firstChild.firstChild.nodeValue     
    d.parentNode.parentNode.remove()
    firebase.database().ref('tasks/' + keydel).remove()
}

function edit(e){
    var keyedit = e.parentNode.parentNode.childNodes[4].firstChild.firstChild.nodeValue
    var val = prompt("Edit YOUR TASK", e.parentNode.parentNode.firstChild.firstChild.firstChild.nodeValue)
    var dateedit = prompt("Edit YOUR TASK DATE", e.parentNode.parentNode.childNodes[1].firstChild.firstChild.nodeValue)
    if (val !== "" && dateedit != "" ) {
        e.parentNode.parentNode.firstChild.firstChild.firstChild.nodeValue = val
        e.parentNode.parentNode.childNodes[1].firstChild.firstChild.nodeValue = dateedit
        firebase.database().ref('tasks/' + keyedit).set({
            task : val,
            date : dateedit,
            key : keyedit,
        })
    }
}

function delall(){
    tasks.innerHTML = ""
    firebase.database().ref('tasks').remove()
}









