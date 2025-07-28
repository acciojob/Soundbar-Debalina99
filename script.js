//your JS code here. If required.
const sounds = ['applause', 'boo', 'gasp', 'tada', 'victory', 'wrong'];

const buttonsContainer = document.getElementById('buttons');

sounds.forEach(sound => {
  const btn = document.createElement('button');
  btn.classList.add('btn');
  btn.innerText = sound;

  btn.addEventListener('click', () => {
    stopSounds();
    const audio = new Audio(`sounds/${sound}.mp3`);
    audio.play();
  });

  buttonsContainer.appendChild(btn);
});


const stopBtn = document.createElement('button');
stopBtn.classList.add('stop');
stopBtn.innerText = 'stop';

stopBtn.addEventListener('click', stopSounds);

buttonsContainer.appendChild(stopBtn);

function stopSounds() {
  const audios = document.getElementsByTagName('audio');
  for (let audio of audios) {
    audio.pause();
    audio.currentTime = 0;
  }
}
