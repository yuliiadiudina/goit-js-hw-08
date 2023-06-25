import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
let currentTime;

try {
    const onVideoPlay = localStorage.getItem("videoplayer-current-time");
    currentTime = onVideoPlay === null ? undefined : JSON.parse(onVideoPlay);
} catch (error) {
    console.error("Error: ", error.message);
}

if (currentTime) {
    player.setCurrentTime(currentTime)
        .then(() => {
            player.pause();
        }   
    )
};

const videoPlay = ({seconds}) => {
    localStorage.setItem("videoplayer-current-time", JSON.stringify(seconds));
};

player.on('timeupdate', throttle(videoPlay, 1000));
