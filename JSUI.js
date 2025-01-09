function Button(id, group, text, onclick, target){
  var button = document.createElement('button');
  button.id = id;
  button.className = group;
  button.innerHTML = text;
  button.onclick = onclick;
  target.appendChild(button);
}

function Meta(name, content) {
    const metaTag = document.createElement('meta');
    metaTag.setAttribute('name', name);
    metaTag.setAttribute('content', content);
    document.head.appendChild(metaTag);
}

function Div(id, group, target){
  var div = document.createElement('div');
  div.id = id;
  div.className = group;
  target.appendChild(div);
}

function P(id, group, text, target){
  var p = document.createElement('p');
  p.id = id;
  p.className = group;
  p.innerHTML=text
  target.appendChild(p);
}

function A(id, group, text, link, target){
  var a = document.createElement('a');
  a.id = id;
  a.className = group;
  a.innerHTML=text
  a.href=link
  target.appendChild(a);
}

function H(type, id, group, text, target){
  var h = document.createElement('h'+type);
  h.id = id;
  h.className = group;
  h.innerHTML=text
  target.appendChild(h);
}
