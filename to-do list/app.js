var searchint = document.getElementById("searchint")
var tasks = document.getElementById("tasks")
var date = document.getElementById("dateint")
var list;

function todotasks() {
    if (searchint.value !== "") {
        // creating list    
        list = document.createElement("tr")

        // input text
        var columntext = document.createElement("td")
        var placetext = document.createElement("b")
        placetext.setAttribute("class", "listdesignp")
        var pentext = document.createTextNode(searchint.value)
        placetext.appendChild(pentext)
        columntext.appendChild(placetext)
        list.appendChild(columntext)

        // get date
        var dated = new Date(date.value)
        var datestring = dated.toString()
        var datestringslice = datestring.slice(0, 15)
        var timestringslice = datestring.slice(16, 24)
        var columndate = document.createElement("td")
        var placedate = document.createElement("b")
        placedate.setAttribute("class", "listdesignp")
        var pendate = document.createTextNode(datestringslice)
        placedate.appendChild(pendate)
        columndate.appendChild(placedate)
        columndate.setAttribute("onclick", "editdate(this)")
        columndate.style.cursor = "pointer"
        columndate.setAttribute("title", "Click to Edit Date")
        list.appendChild(columndate)

        // get time
        var columntime = document.createElement("td")
        var placetime = document.createElement("h5")
        placetime.setAttribute("class", "listdesignp")
        var pentime = document.createTextNode(timestringslice)
        placetime.appendChild(pentime)
        columntime.appendChild(placetime)
        columntime.setAttribute("onclick", "edittime(this)")
        columntime.style.cursor = "pointer"
        columntime.setAttribute("title", "Click to Edit Time")
        list.appendChild(columntime)

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

        // list created
        tasks.appendChild(list)

        // input emptied
        searchint.value = ""
        date.value = ""

    }
}

function del(d) {
    d.parentNode.parentNode.remove()
}

function edit(e) {
    var val = prompt("Edit YOUR TASK", e.parentNode.parentNode.firstChild.firstChild.firstChild.nodeValue)
    if (val !== "") {
        e.parentNode.parentNode.firstChild.firstChild.firstChild.nodeValue = val
    }
}

function delall() {
    tasks.innerHTML = ""
}

function editdate(ed) {
    var valdate = prompt("Edit YOUR TASK DATE", ed.parentNode.firstChild.nextSibling.firstChild.firstChild.nodeValue)
    if (valdate !== "") {
        ed.parentNode.firstChild.nextSibling.firstChild.firstChild.nodeValue = valdate
    }
}

function edittime(et) {
    var valtime = prompt("Edit YOUR TASK TIME", et.parentNode.firstChild.nextSibling.nextSibling.firstChild.firstChild.nodeValue)
    if (valtime !== "") {
        et.parentNode.firstChild.nextSibling.nextSibling.firstChild.firstChild.nodeValue = valtime
    }

}

