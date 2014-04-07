#pragma strict

 var levelLoaded : int;
 
    function OnTriggerEnter(other : Collider){
     if(other.gameObject.name == "!!FPS Player Main"){
    Application.LoadLevel(levelLoaded);
}
 
    }