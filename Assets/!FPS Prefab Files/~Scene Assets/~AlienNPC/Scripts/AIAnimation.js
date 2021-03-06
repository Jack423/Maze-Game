private var minimumRunSpeed = 3.0;

function Start () {
	// Set all animations to loop
	animation.wrapMode = WrapMode.Loop;

	// Except our action animations, Dont loop those
	animation["shoot"].wrapMode = WrapMode.Once;
	//animation["shoot"].speed = 1.75;
	// Put idle and run in a lower layer. They will only animate if our action animations are not playing
	animation["idle"].layer = -1;
	animation["walk"].layer = -1;
	animation["run"].layer = -1;
	
	animation.Stop();
}

function SetSpeed (speed : float) {
	if (speed > minimumRunSpeed){
		animation.CrossFade("run");
	}else{
		if(speed > 0){
			animation.CrossFade("walk");
		}else{
			animation.CrossFade("idle");
		}
	}
}