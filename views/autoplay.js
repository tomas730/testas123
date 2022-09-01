const player = document.querySelector(`.trackPlaying`);
const tracks = document.querySelectorAll(`.tracks`);
const audioLinks = document.querySelectorAll(`.audioLinks`);
let audioLinkArr = [];
let songCount = 0;

//loops through audioLinks and pushes the iterator into audioLinkArr
audioLinks.forEach(audioLink => {
	audioLinkArr.push(audioLink);
});

//change the active class of the track
const changeActive = change => {
	const active = document.querySelector(`.activePod`);
	if (active) {
		active.classList.remove(`activePod`);
	}
	change.classList.add(`activePod`);
};

//makes shit happen
function play() {
	player.play()
	}
function pause() {
	player.pause()
}
tracks.forEach(function (track, index) {
	track.addEventListener(`click`, function (e) {
		const links = track.querySelector('.audioLinks');
		const target = e.target;
		songCount = index;

		//toggle active class
		changeActive(target);

		//change track
		player.src = links.textContent;
		player.autoplay = true;
		player.preload = true;

		//auto play next song when previous is finished
		player.addEventListener(`ended`, () => {
			songCount++;
			//checks and plays the song
			if (songCount < audioLinkArr.length) {
				player.src = audioLinkArr[songCount].textContent;
				player.autoplay = true;
				player.preload = true;

				//toggle active class function
				changeActive(audioLinkArr[songCount].parentElement);
				return;
			}
			songCount = 0;
			player.src = audioLinkArr[songCount].textContent;
			player.autoplay = true;
			player.preload = true;

			//toggle active class function
			changeActive(audioLinkArr[songCount].parentElement);
		});
	});
});
