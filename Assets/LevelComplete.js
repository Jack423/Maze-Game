#pragma strict

var levelNumber = 0;

function OnTriggerEnter(myTrigger : Collider) {

	if(myTrigger.gameObject.name == "!!FPS Player Main") {
		Application.LoadLevel(levelNumber);
	}

}