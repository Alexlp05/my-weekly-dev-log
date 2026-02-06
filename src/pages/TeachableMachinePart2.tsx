import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Brain, Code, ExternalLink, Gamepad2, Database } from "lucide-react";
import { Link } from "react-router-dom";
import trainingModel1 from "@/assets/TeachableMachine/trainingModel1.mp4";
import trainingModel2 from "@/assets/TeachableMachine/trainingModel2.mp4";
import trainingModel3 from "@/assets/TeachableMachine/trainingModel3.jpeg";
import { ScrollArea } from "@/components/ui/scroll-area";

const TeachableMachinePart2 = () => {
    return (
        <div className="min-h-screen bg-background p-6 md:p-12">
            <div className="max-w-7xl mx-auto space-y-12">
                {/* Header */}
                <div className="space-y-6">
                    <div className="flex justify-between items-center">
                        <Link to="/teachable-machine/part-1">
                            <Button variant="ghost" className="pl-0 hover:pl-2 transition-all">
                                <ArrowLeft className="mr-2 h-4 w-4" />
                                Back to Part 1
                            </Button>
                        </Link>
                        <a href="https://teachablemachine.withgoogle.com/" target="_blank" rel="noopener noreferrer">
                            <Button variant="outline" className="gap-2">
                                Visit Teachable Machine <ExternalLink className="w-4 h-4" />
                            </Button>
                        </a>
                    </div>

                    <div className="space-y-4">
                        <div className="flex items-center gap-4">
                            <div className="p-3 rounded-xl bg-pink-500/10">
                                <Gamepad2 className="w-10 h-10 text-pink-500" />
                            </div>
                            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
                                Part 2: The Phone Number Game
                            </h1>
                        </div>
                        <p className="text-xl text-muted-foreground">
                            A fully interactive game where physical objects are mapped to digits to dial a phone number.
                        </p>
                    </div>
                </div>

                {/* Section 1: Model Training */}
                <Card className="bg-card/50 backdrop-blur border-white/10 overflow-hidden">
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2 text-2xl">
                            <Database className="w-6 h-6 text-blue-400" />
                            Step 1: Training the Model
                        </CardTitle>
                        <CardDescription>
                            Teaching the computer to recognize 11 distinct classes (0-9 + Reset) using everyday objects.
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-8">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <div className="space-y-2">
                                <div className="rounded-lg overflow-hidden border border-white/10 bg-black aspect-video">
                                    <video controls className="w-full h-full object-cover">
                                        <source src={trainingModel1} type="video/mp4" />
                                    </video>
                                </div>
                                <p className="text-sm text-muted-foreground text-center">
                                    Feeding thousands of images for each class.
                                    We capture about <strong>300 images per object</strong> at different angles and distances.
                                    This diversity prevents "overfitting" (where the AI memorizes one specific photo instead of the object concept).
                                </p>
                            </div>
                            <div className="space-y-2">
                                <div className="rounded-lg overflow-hidden border border-white/10 bg-black aspect-video">
                                    <video controls className="w-full h-full object-cover">
                                        <source src={trainingModel2} type="video/mp4" />
                                    </video>
                                </div>
                                <p className="text-sm text-muted-foreground text-center">
                                    Testing the classifier in real-time.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <div className="rounded-lg overflow-hidden border border-white/10 bg-black aspect-video">
                                    <img
                                        src={trainingModel3}
                                        alt="Teachable Machine Interface"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <p className="text-sm text-muted-foreground text-center">
                                    The final class setup in Teachable Machine.
                                </p>
                            </div>
                        </div>

                        <div className="flex justify-center gap-4">
                            <a href="https://teachablemachine.withgoogle.com/models/16WwCqsb8/" target="_blank" rel="noopener noreferrer">
                                <Button variant="default" className="gap-2 bg-pink-600 hover:bg-pink-700">
                                    View Model <ExternalLink className="w-4 h-4" />
                                </Button>
                            </a>
                            <a href="https://teachablemachine.withgoogle.com/" target="_blank" rel="noopener noreferrer">
                                <Button variant="secondary" className="gap-2">
                                    Create Yours
                                </Button>
                            </a>
                        </div>

                        <div className="bg-blue-500/10 border border-blue-500/20 p-6 rounded-lg text-center">
                            <h3 className="text-lg font-semibold text-blue-300 mb-4">Object Mapping Strategy</h3>
                            <p className="text-sm text-zinc-400 mb-4 max-w-2xl mx-auto">
                                We chose objects with <strong>high visual contrast</strong> to minimize confusion.
                                For example, the <span className="text-white">Red Nutella Jar</span> is very distinct from the <span className="text-white">Black Shoe</span>.
                                The "Surprise" class (Explosion) acts as a <strong className="text-red-400">Reset Trigger</strong> to clear the phone number if a mistake is made.
                            </p>
                            <div className="flex flex-wrap justify-center gap-x-8 gap-y-2 text-sm font-mono text-zinc-300">
                                <span>🍾 Bottle = 0</span>
                                <span>👟 Shoe = 1</span>
                                <span>📱 Phone = 2</span>
                                <span>⌚ Watch = 3</span>
                                <span>🧢 Cap = 4</span>
                                <span>📖 Book = 5</span>
                                <span>🧦 Sock = 6</span>
                                <span>🍫 Nutella = 7</span>
                                <span>👓 Glasses = 8</span>
                                <span>👛 Wallet = 9</span>
                                <span className="text-red-400">💥 Surprise = RESET</span>
                            </div>
                        </div>
                    </CardContent>
                </Card>

                {/* Section 2: Code Implementation */}
                <Card className="bg-zinc-950/50 border-white/10 overflow-hidden">
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2 text-2xl">
                            <Code className="w-6 h-6 text-green-400" />
                            Step 2: Coding the Logic (p5.js)
                        </CardTitle>
                        <CardDescription>
                            Integrating the trained model with a validation system (Timer) to prevent false positives.
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="flex flex-col lg:flex-row gap-6">
                            <div className="w-full lg:w-3/5">
                                <ScrollArea className="h-[600px] w-full rounded-md border border-white/10 bg-black/50 p-4">
                                    <pre className="text-xs font-mono text-green-300 leading-relaxed">
                                        {`let imageModelURL = 'https://teachablemachine.withgoogle.com/models/16WwCqsb8/';
let classifier;
let video;
let currentLabel = "Connexion au modèle...";
let confidence = 0.0;
let modelIsLoaded = false; 

let timer = 0;
let timeToHold = 120; 
let lastLabel = ""; 
let phoneNumber = "";

function setup() {
  createCanvas(640, 520);
  
  video = createCapture(VIDEO);
  video.size(640, 480);
  video.hide();

  classifier = ml5.imageClassifier(imageModelURL + 'model.json', modelReady);
}

function modelReady() {
  modelIsLoaded = true;
  classifyVideo();
}

function draw() {
  background(30);
  
  if (video) {
    push();
    translate(width, 0);
    scale(-1, 1);
    image(video, 0, 0);
    pop();
  }

  if (!modelIsLoaded) {
    fill(255, 0, 0);
    textSize(30);
    textAlign(CENTER);
    text("CHARGEMENT DU MODÈLE...", width/2, height/2);
    // ... error handling
    return;
  }

  let labelClean = currentLabel.toLowerCase(); 
  if (labelClean != "rien" && labelClean == lastLabel.toLowerCase()) {
    
    // Confidence threshold and Timer validation
    if (confidence > 0.7) {
        timer++;

        fill(255, 0, 0);
        noStroke();
        let barWidth = map(timer, 0, timeToHold, 0, width);
        rect(0, 470, barWidth, 10); 

        if (timer > timeToHold) {
          actionBasedOnObject(labelClean);
          timer = 0;
          background(255); // Flash effect
        }
    }
  } else {
    timer = 0;
  }
  
  lastLabel = currentLabel;

  // UI Overlay
  fill(0);
  rect(0, 480, width, 40); 
  fill(255);
  textSize(20);
  textAlign(CENTER, CENTER);
  text(currentLabel + " (" + nf(confidence * 100, 0, 0) + "%)", width / 2, 495);
  
  // Game Info
  fill(0, 0, 0, 200);
  rect(0, 0, width, 100); 
  fill(255);
  textSize(14); 
  text("🍾=0    👟=1    📱=2    ⌚=3    🧢=4", width / 2, 15);
  text("📖=5    🧦=6    🍫=7    👓=8    👛=9    💥=RESET", width / 2, 40);
 
  textStyle(BOLD);
  textSize(30);
  text("TEL : " + phoneNumber, width / 2, 80);
}

function actionBasedOnObject(objet) {
  if (objet == "bouteille") ajouterChiffre("0");
  else if (objet == "chaussure") ajouterChiffre("1");
  else if (objet == "telephone") ajouterChiffre("2");
  else if (objet == "montre") ajouterChiffre("3");
  else if (objet == "casquette") ajouterChiffre("4");
  else if (objet == "livre") ajouterChiffre("5");
  else if (objet == "chausettes") ajouterChiffre("6");
  else if (objet == "nutella") ajouterChiffre("7");
  else if (objet == "lunette" || objet == "lunettes") ajouterChiffre("8");
  else if (objet == "orika") ajouterChiffre("9");
  else if (objet == "surprise" || objet == "effacer") phoneNumber = ""; 
}

function ajouterChiffre(chiffre) {
  if (phoneNumber.length < 10) {
    phoneNumber += chiffre;
  }
}

function classifyVideo() {
    classifier.classify(video, gotResult);
}

function gotResult(error, results) {
  if (error) { console.error(error); return; }
  if (results && results[0]) {
      currentLabel = results[0].label;
      confidence = results[0].confidence;
      classifyVideo();
  }
}`}
                                    </pre>
                                </ScrollArea>
                            </div>
                            <div className="w-full lg:w-2/5 space-y-6">
                                <div className="p-6 bg-zinc-900 rounded-lg border border-white/10">
                                    <h3 className="text-xl font-bold mb-4 text-green-400">How it Works</h3>
                                    <ul className="space-y-4 text-zinc-400">
                                        <li className="flex gap-3">
                                            <span className="bg-zinc-800 w-6 h-6 rounded-full flex items-center justify-center shrink-0">1</span>
                                            <div className="space-y-1">
                                                <p className="font-semibold text-zinc-300">Continuous Classification (ml5.js)</p>
                                                <span>The <strong>Teachable Machine</strong> model runs constantly in the background. We use the <code>gotResult</code> callback function to handle the asynchronous nature of AI predictions (it takes time to process each frame).</span>
                                            </div>
                                        </li>
                                        <li className="flex gap-3">
                                            <span className="bg-zinc-800 w-6 h-6 rounded-full flex items-center justify-center shrink-0">2</span>
                                            <div className="space-y-1">
                                                <p className="font-semibold text-zinc-300">The Timer Buffer (Debouncing)</p>
                                                <span>AI predictions can flicker (e.g., detecting "Shoe" for a split second). We implemented a <strong>Timer Buffer</strong> (`timeToHold = 120` frames). You must hold the object steady for ~2 seconds to confirm the input. This is similar to "debouncing" a button press in electronics.</span>
                                            </div>
                                        </li>
                                        <li className="flex gap-3">
                                            <span className="bg-zinc-800 w-6 h-6 rounded-full flex items-center justify-center shrink-0">3</span>
                                            <span>A <strong>Confidence Threshold</strong> (`&gt; 0.7`) ensures that the AI is sure before starting the timer.</span>
                                        </li>
                                        <li className="flex gap-3">
                                            <span className="bg-zinc-800 w-6 h-6 rounded-full flex items-center justify-center shrink-0">4</span>
                                            <span>When validated, the corresponding number is added to the <code>phoneNumber</code> string.</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
};

export default TeachableMachinePart2;
