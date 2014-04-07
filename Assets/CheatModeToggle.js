#pragma strict
 
var show : boolean = true;
var target : GameObject;
 
function Update () {
 
    if(show == true){
       if(Input.GetKeyDown("f12")){
         target.SetActive(false);
         show = false;
       }
    }
 
    if(show == false){
       if(Input.GetKeyDown("f12")){
         target.SetActive(true);
         show = true;
       }
    }
}