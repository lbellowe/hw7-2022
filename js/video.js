var video;

window.addEventListener("load", function() {
	console.log("Good job opening the window");
	video = document.querySelector("#player1");
	video.autoplay = false;
	video.loop = false;
	console.log("Autoplay is set to " + video.autoplay);
	console.log("Loop is set to " + video.loop);
});

document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	video.play();
	document.getElementById("volume").innerHTML = video.volume * 100 + "%";
});

document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
	video.pause();
});

document.querySelector("#slower").addEventListener("click", function() {
	console.log("Slow down video");
	video.playbackRate = video.playbackRate * .9;
	console.log("Speed is " + video.playbackRate);
});

document.querySelector("#faster").addEventListener("click", function() {
	console.log("Speed up video");
	video.playbackRate = video.playbackRate / .9;
	console.log("Speed is " + video.playbackRate);
});

document.querySelector("#skip").addEventListener("click", function() {
	console.log("Skip ahead");
	video.currentTime += 10;
	if (video.currentTime > 67.4033){
		video.currentTime = 0
		// not giving me zero
	}
	console.log("Video current time is " + video.currentTime); 
});

document.querySelector("#mute").addEventListener("click", function() {
	if (video.muted) {
		console.log("Unmute");
		video.muted = false;
		document.querySelector("#mute").innerHTML = "Mute"
	}
	else {
		console.log("Mute");
		video.muted = true;
		document.querySelector("#mute").innerHTML = "Unmute"
	}	
});

document.querySelector("#slider").addEventListener("click", function() {
	video.volume = document.querySelector("#slider").value / 100.
	document.getElementById("volume").innerHTML = video.volume
	console.log("The current value is " + volume/ 100);
});

document.querySelector("#vintage").addEventListener("click", function() {
	video.classList.add("oldSchool");
	console.log("Old School on")
});

document.querySelector("#orig").addEventListener("click", function() {
	video.classList.remove("oldSchool");
	console.log("Oirignal on")
});
