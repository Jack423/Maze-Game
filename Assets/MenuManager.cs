using UnityEngine;
using System.Collections;

public class MenuManager : MonoBehaviour {
	
	void OnGUI () {
		// Make a background box
		GUI.Box (new Rect(10, 10, 150, 90), "Main Menu");
		
		// Make the first button. If it is pressed, Application.Loadlevel (1) will be executed
		if(GUI.Button (new Rect(20, 40, 100, 20), "Easy Mode")) {
			Application.LoadLevel(1);
		}
		
		// Make the second button.
		if(GUI.Button (new Rect(20, 70, 100, 20), "Hard Mode")) {
			Application.LoadLevel(2);
		}

		// Make the third button.
		if (GUI.Button (new Rect (20, 100, 100, 20), "Even More Hard!")) {
			Application.LoadLevel (3);
		}

		// Make the third button.
		if (GUI.Button (new Rect (20, 130, 100, 20), "EXPERT")){
			Application.LoadLevel (4);
		}
	}
}