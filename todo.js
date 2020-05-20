//create delete icon
var myNodeList = document.querySelectorAll('li');
var i;
for(i=0;i<myNodeList.length;i++)
{
    var icon = document.createElement('i');
    icon.className = "fa fa-trash";
    myNodeList[i].appendChild(icon);
}

//delete list
var del = document.querySelectorAll(".fa-trash");
var i;
for(i=0;i<del.length;i++)
{
    del[i].onclick = function(){
        var parent = this.parentElement;
        parent.remove();
    }
}

//checked list
var check = document.querySelectorAll('li');
var i;
for(i=0;i<check.length;i++){
    check[i].addEventListener('click', function(event){
        if(event.target.tagName=='LI')
        {
            event.target.classList.toggle('checked');
        }
    });
}

//New list
function newElement(){
    var uli = document.querySelector('ul');
    var mytxt = document.querySelector('input[name="text"]').value;
    var t = document.createTextNode(mytxt);
    var list = document.createElement("li");
    list.appendChild(t);
    uli.appendChild(list);
    document.querySelector('input[name="text"]').value = "";

    var myNodeList = document.querySelectorAll('li');
    var i;
    for(i=0;i<myNodeList.length;i++)
    {
        var icon = document.createElement('i');
        icon.className = "fa fa-trash";
        myNodeList[i].appendChild(icon);
    }

    var del = document.querySelectorAll(".fa-trash");
    var i;
    for(i=0;i<del.length;i++)
    {
        del[i].onclick = function(){
            var parent = this.parentElement;
            parent.remove();
        }
    }

    var check = document.querySelectorAll('li');
    var i;
    for(i=0;i<check.length;i++){
        check[i].addEventListener('click', function(event){
            if(event.target.tagName=='LI')
            {
                event.target.classList.toggle('checked');
            }
        });
    }
}