let colleccioElements = new Array ();
let llistaElements = document.getElementById("llistaElements");

function afegirElementAColleccioOF(){
  let elementAAfegir = document.getElementById("elementAAfegir");
  if(elementAAfegir.value ==""){
    alert("No has introduit res");
  }else{
    colleccioElements.push(elementAAfegir.value);
    alert("Element " + elementAAfegir.value + " agfegit correctament " + "\na la posició " + colleccioElements.indexOf(elementAAfegir.value));
    document.getElementById("elementAAfegir").value="";
  }

}

function mostrarElementsDeLaColleccio(){
  let cadLlistaElem  = "";
  for (let i = 0; i <colleccioElements.length; i++){
    cadLlistaElem = cadLlistaElem + i + " - " + colleccioElements[i] + "<br>";
  }
  llistaElements.innerHTML = cadLlistaElem;
}

function netejaColleccio(){
  colleccioElements="";
  alert("S'ha buidat la col·leció!");
}
