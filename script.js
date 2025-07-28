//your JS code here. If required.
const sounds = ['applause', 'boo', 'gasp', 'tada', 'victory', 'wrong'];

const buttonsContainer = document.getElementById('buttons');

function stopSounds() {
  const audios = document.querySelectorAll('audio');
  audios.forEach(audio => {
    audio.pause();
    audio.currentTime = 0;
    audio.remove();
  });
}

sounds.forEach(sound => {
  const btn = document.createElement('button');
  btn.classList.add('btn');
  btn.innerText = sound;

  btn.addEventListener('click', () => {
    stopSounds();

    const audio = document.createElement('audio');
    audio.src = `sounds/${sound}.mp3`;
    audio.setAttribute('autoplay', 'true');
    document.body.appendChild(audio);
  });

  buttonsContainer.appendChild(btn);
});

const stopBtn = document.createElement('button');
stopBtn.classList.add('stop');
stopBtn.innerText = 'stop';

stopBtn.addEventListener('click', stopSounds);

buttonsContainer.appendChild(stopBtn);
