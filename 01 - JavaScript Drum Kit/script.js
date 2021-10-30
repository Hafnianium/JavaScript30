window.addEventListener('keydown', function(e) {
  const audio = document.querySelector(`audio[data-key=${e.key}]`);
  const key = document.querySelector(`.key[data-key=${e.key}]`);
  console.log(audio);
  if (!audio) return; // stop function from running if null key is hit
  audio.currentTime = 0; // rewind to start if hit same key in succession
  audio.play()
  console.log(key);
  key.classList.add('playing');
});

function removeTransition(e) {
  if (e.propertyName != 'transform') return; // skip transition event if it's not a transform
  this.classList.remove('playing');
}

const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition))