function ClassificationStarted()
{
  navigator.mediaDevices.getUserMedia({ audio: true});
  classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/tzD5Gy6kS/', modelReady);
}

function modelReady(){
  classifier.classify(gotResults);
}
var dog_gif = 0;
var cat_gif = 0;

function gotResults(error, results) {
  if (error) {
    console.error(error);
  } else {
    console.log(results);
    random_number_red = Math.floor(Math.random() * 255) + 1;
    random_number_green = Math.floor(Math.random() * 255) + 1;
    random_number_blue = Math.floor(Math.random() * 255) + 1;


    document.getElementById("result_label").innerHTML = 'Detected voice is of  - '+ results[0].label;
    document.getElementById("result_count").innerHTML = 'Detected Dog - '+dog_gif+ ' Detected Cat - '+cat_gif;
    document.getElementById("result_label").style.color = "rgb("+random_number_red+","+random_number_green+","+random_number_blue+")";
    document.getElementById("result_count").style.color = "rgb("+random_number_red+","+random_number_green+","+random_number_blue+")";

    img = document.getElementById('image_animal');

    if (results[0].label == "Barking") {
      img.src = 'Barking.gif';
      dog_gif = dog_gif+1;
    } else if (results[0].label == "Meowing") {
      img.src = 'Meowing.gif';
      cat_gif = cat_gif+1;
      }
    }
  }
