var element= document.createElement("div");
var element1= document.createElement("div");
var element2= document.createElement("div");
element.setAttribute("class","container");
element1.setAttribute("class","row");
element2.setAttribute("class","col");
element2.innerHTML="This is tag";
element1.append(element2);
element.append(element1);
document.body.append(element);

