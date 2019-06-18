function setup() {
  noCanvas();
  let lang = navigator.language || 'en-US';
  let speechRec = new p5.SpeechRec(lang, gotSpeech);
  //rect(30, 20, 55, 55);
  let continuous = true;
  let interim = false;
  speechRec.start(continuous, interim);

  function gotSpeech() {
    if (speechRec.resultValue) {
      createP(speechRec.resultString);
    }
    else
      console.log('k nhan ra');
  }

}