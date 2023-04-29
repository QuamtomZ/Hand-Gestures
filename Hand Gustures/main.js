Webcam.set({
    width: 350,
    height: 300,
    image_format: 'png',
    png_quality: 90,

})

camera=  document.getElementById("camera")

Webcam.attach("#camera")

function take_snapshot(){
    Webcam.snap(function(data_uri)
    {
        document.getElementById("result").innerHTML = '<img id="captured_img" src="'+ data_uri +'">'

    })
}

console.log("ml5 version", ml5.version)
classifer = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/kAlqZ33AI/model.json', modelLoaded)

function modelLoaded(){
    console.log("modelLoaded")
}

function speak(){
    var synth = window.speechSynthesis
    speak_data_1 = "The First Prediction is" + prediction_1
    speak_data_2 = "And The Second Prediction is" + prediction_2
    var UtterThis = new SpeechSynthesisUtterance(speak_data_1 + speak_data_2)
    synth.speak(UtterThis)
}