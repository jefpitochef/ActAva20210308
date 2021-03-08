function mostraAlertaJPC(){
  alert("Alerta!");
}
function passaSeguentOF(objRebut){
  let idObjPregAct = objRebut.parentElement.parentElement.id; 
  let objPregAct = document.getElementById(idObjPregAct);
  let colArticles = document.getElementsByTagName("article");
  let idObjPregSeg;
    for (let i = 0; i < colArticles.length; i++) {
    if(colArticles[i].id == idObjPregAct){
      idObjPregSeg = colArticles[i+1].id;
      break;
    };
  }
 
  let objPregSeg = document.getElementById(idObjPregSeg);
  objPregAct.classList.remove("mostrarElementOF");
  objPregAct.classList.add("amagarElementOF");
  objPregSeg.classList.add("mostrarElementOF");
  objPregSeg.classList.remove("amagarElementOF");
}

function passaAnteriorOF(objRebut){
  let idObjPregAct = objRebut.parentElement.parentElement.id; 
  let objPregAct = document.getElementById(idObjPregAct);
  let colArticles = document.getElementsByTagName("article");
  let idObjPregAnt;
    for (let i = 0; i < colArticles.length; i++) {
    if(colArticles[i].id == idObjPregAct){
      idObjPregAnt = colArticles[i-1].id;
      break;
    };
  }
  let objPregAnt = document.getElementById(idObjPregAnt);
  objPregAct.classList.remove("mostrarElementOF");
  objPregAct.classList.add("amagarElementOF");
  objPregAnt.classList.add("mostrarElementOF");
  objPregAnt.classList.remove("amagarElementOF");
}