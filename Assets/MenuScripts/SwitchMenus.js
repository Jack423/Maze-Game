#pragma strict

var Start : GameObject;
var Result : GameObject;

function OnClick() {
	Start.gameObject.SetActive(false);
	Result.gameObject.SetActive(true);
}