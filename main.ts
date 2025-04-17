radio.onReceivedString(function (message) {
    showMessage(message)
music.play(music.tonePlayable(349, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
})
let id = ""
let canal = 0
let currentIcon = 0
let icon = ""
let localId = 5000
const showMessage = (message: string) => {
    id = message.split(":")[0];
    icon = message.split(":")[1];
    basic.showString("" + (id));
    basic.showIcon(parseInt(icon));
    
    }
const selectIcon = () => { 
    currentIcon = (currentIcon + 1) % 40;
    basic.showIcon(currentIcon);
}
const sendIcon = () => { 
    radio.sendString(`${localId}:${currentIcon}`)
    basic.showArrow(3);
    music.play(music.tonePlayable(400, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
    control.waitMicros(1000);
    basic.showString("sent");
    control.waitMicros(1000);
    basic.showIcon(currentIcon);

}
const changeCanal = () => {
    canal = (canal+1)%16;
    basic.showNumber(canal);
    radio.setGroup(canal);
}
radio.setFrequencyBand(46)
input.onLogoEvent(TouchButtonEvent.Touched, changeCanal)
input.onButtonPressed(Button.A, selectIcon);
input.onButtonPressed(Button.B, sendIcon);
basic.forever(function () {
	
})
