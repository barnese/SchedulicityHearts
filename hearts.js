$(document).ready(function() {

	// Animation length in milliseconds
	var animationLength = 600;

	// Stroke width of the hearts in pixels.
	var strokeWidth = "2";

	var blue = "#4595aa";
	var red = "#8c3c3c";
	var yellow = "#d3c220";

	// Paths for the logo rectangles initial state.
	var blueRectPath = "m 132,1 9,0 c 1.108,0 2,0.892 2,2 l 0,18 c 0,1.108 -0.892,2 -2,2 l -9,0 c -1.108,0 -2,-0.892 -2,-2 l 0,-18 c 0,-1.108 0.892,-2 2,-2 z";
	var redRectPath = "m 126,16 9,0 c 1.108,0 2,0.892 2,2 l 0,14 c 0,1.108 -0.892,2 -2,2 l -9,0 c -1.108,0 -2,-0.892 -2,-2 l 0,-14 c 0,-1.108 0.892,-2 2,-2 z";
	var yellowRectPath = "m 144,24 9,0 c 1.108,0 2,0.892 2,2 l 0,6 c 0,1.108 -0.892,2 -2,2 l -9,0 c -1.108,0 -2,-0.892 -2,-2 l 0,-6 c 0,-1.108 0.892,-2 2,-2 z";
	
	// Paths for the logo hearts end state.
	var blueHeartPath = "m 133.09968,1 c 2.38106,-5e-6 4.43037,1.483583 5.37991,3.618045 C 139.42912,2.483583 141.47843,1 143.85949,1 c 3.28258,-5e-6 5.94668,2.811287 5.94668,6.275198 0,6.821845 -6.98677,8.937176 -11.32658,15.86099 C 133.88927,16.169631 127.153,14.322015 127.153,7.275198 127.153,3.811287 129.8171,1 133.09968,1 z";
	var redHeartPath = "m 124,21 c 1.40771,-3e-6 2.61928,0.877111 3.18066,2.139028 0.56138,-1.261917 1.77295,-2.139028 3.18066,-2.139028 1.94069,-3e-6 3.51574,1.662064 3.51574,3.709967 0,4.03315 -4.13065,5.283757 -6.6964,9.377192 -2.71385,-4.118705 -6.6964,-5.211036 -6.6964,-9.377192 0,-2.047903 1.57504,-3.709967 3.51574,-3.709967 z";
	var yellowHeartPath = "m 146,21 c 1.40771,-3e-6 2.61928,0.877111 3.18066,2.139028 0.56138,-1.261917 1.77295,-2.139028 3.18066,-2.139028 1.94069,-3e-6 3.51574,1.662064 3.51574,3.709967 0,4.03315 -4.13065,5.283757 -6.6964,9.377192 -2.71385,-4.118705 -6.6964,-5.211036 -6.6964,-9.377192 0,-2.047903 1.57504,-3.709967 3.51574,-3.709967 z";

	var paper = Raphael(10, 10, 188, 64);

	var logo = paper.image("logo.png", 0, 0, 188, 64)

	var blueRect = paper.path(blueRectPath);
	blueRect.attr("stroke", blue);
	blueRect.attr("stroke-width", strokeWidth);

	var redRect = paper.path(redRectPath);
	redRect.attr("stroke", red);
	redRect.attr("stroke-width", strokeWidth);

	var yellowRect = paper.path(yellowRectPath);
	yellowRect.attr("stroke", yellow);
	yellowRect.attr("stroke-width", strokeWidth);

	var blueAnimeAttrs = [{path: blueRectPath}, {path: blueHeartPath}];
	var redAnimeAttrs = [{path: redRectPath}, {path: redHeartPath}];
	var yellowAnimeAttrs = [{path: yellowRectPath}, {path: yellowHeartPath}];

	logo.node.onmouseover = function() {
		blueRect.animate(blueAnimeAttrs[1], animationLength);
		redRect.animate(redAnimeAttrs[1], animationLength, ">");
		yellowRect.animate(yellowAnimeAttrs[1], animationLength, ">");	
	};

	logo.node.onmouseout = function() {
		blueRect.animate(blueAnimeAttrs[0], animationLength);
		redRect.animate(redAnimeAttrs[0], animationLength);
		yellowRect.animate(yellowAnimeAttrs[0], animationLength);		
	};
});
