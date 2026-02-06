import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, ArrowRight, Brain, Code, MousePointer2, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import { ScrollArea } from "@/components/ui/scroll-area";
import activity0Video from "@/assets/TeachableMachine/activity0.mp4";
import sourisVideo from "@/assets/TeachableMachine/souris.mp4";
import walkerVideo from "@/assets/TeachableMachine/walkerRandom.mp4";
import footballVideo from "@/assets/TeachableMachine/football.mp4";
import mathVideo from "@/assets/TeachableMachine/math.mp4";
import setupActivity3 from "@/assets/TeachableMachine/setupActivity3.jpeg";
import setupActivity2_1 from "@/assets/TeachableMachine/setupActivity2_1.jpeg";
import setupActivity2_2 from "@/assets/TeachableMachine/setupActivity2_2.jpeg";

const TeachableMachinePart1 = () => {
    return (
        <div className="min-h-screen bg-background p-6 md:p-12">
            <div className="max-w-7xl mx-auto space-y-12">
                {/* Header */}
                <div className="space-y-6">
                    <Link to="/">
                        <Button variant="ghost" className="pl-0 hover:pl-2 transition-all">
                            <ArrowLeft className="mr-2 h-4 w-4" />
                            Back to Projects
                        </Button>
                    </Link>
                    <div className="space-y-4">
                        <div className="flex items-center gap-4">
                            <div className="p-3 rounded-xl bg-purple-500/10">
                                <Brain className="w-10 h-10 text-purple-500" />
                            </div>
                            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
                                Part 1: Initial Experiments
                            </h1>
                        </div>
                        <p className="text-xl text-muted-foreground">
                            Testing the limits of image classification and code-based generative art.
                        </p>
                    </div>
                </div>

                {/* Activity 0: Dart Counter */}
                <Card className="bg-card/50 backdrop-blur border-white/10 overflow-hidden">
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                            <Brain className="w-5 h-5 text-primary" />
                            Activity 0: The Dart Counter
                        </CardTitle>
                        <CardDescription>
                            Attempting to automate score counting using Teachable Machine.
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                        <div className="flex flex-col md:flex-row-reverse items-center gap-6">
                            <div className="w-full md:w-1/2 rounded-lg shadow-lg overflow-hidden border border-white/10">
                                <video controls className="w-full h-auto">
                                    <source src={activity0Video} type="video/mp4" />
                                    Your browser does not support the video tag.
                                </video>
                            </div>
                            <div className="flex-1 space-y-4">
                                <p className="leading-relaxed">
                                    Before starting the main phone number project, we explored the capabilities of Teachable Machine with a dartboard.
                                    The goal was to train a model to automatically count points in real-time based on where the dart landed.
                                </p>
                                <div className="grid md:grid-cols-2 gap-4">
                                    <div className="p-4 bg-red-500/10 border border-red-500/20 rounded-lg space-y-2">
                                        <h4 className="font-semibold text-red-400">Challenges Faced</h4>
                                        <p className="text-sm text-muted-foreground">
                                            The experiment was inconclusive due to <strong>lack of contrast</strong> between the different scoring zones and the
                                            darts being <strong>hard to detect</strong> via webcam.
                                        </p>
                                    </div>
                                    <div className="p-4 bg-green-500/10 border border-green-500/20 rounded-lg space-y-2">
                                        <h4 className="font-semibold text-green-400">Lessons Learned</h4>
                                        <p className="text-sm text-muted-foreground">
                                            For successful object detection, we learned that we need distinct visual markers and consistent lighting.
                                            We initially tried <strong>Color Tracking</strong>, tracking specific pixel hues, but it was too sensitive to shadows.
                                            This led us to use a <strong>Neural Network</strong> (Teachable Machine) for the final project, which looks for patterns and shapes rather than just raw color values.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </CardContent>
                </Card>

                {/* Activity 1: Discovery of p5.js */}
                <Card className="bg-transparent border-0 shadow-none">
                    <CardHeader className="px-0">
                        <CardTitle className="flex items-center gap-2 text-3xl">
                            <Code className="w-8 h-8 text-yellow-500" />
                            Activity 1: Discovery of p5.js
                        </CardTitle>
                        <CardDescription className="text-lg">
                            A series of small experiments to understand interaction, randomness, and looping.
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="px-0">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                            {/* Sub-Activity: Mouse Interaction */}
                            <Card className="bg-card/50 backdrop-blur border-white/10 overflow-hidden flex flex-col">
                                <CardHeader className="pb-2">
                                    <CardTitle className="text-lg flex items-center gap-2">
                                        <MousePointer2 className="w-4 h-4 text-primary" />
                                        Mouse Interaction
                                    </CardTitle>
                                </CardHeader>
                                <CardContent className="space-y-4 flex-1">
                                    <div className="rounded-lg overflow-hidden border border-white/10 bg-black/50 aspect-video">
                                        <video controls className="w-full h-full object-contain">
                                            <source src={sourisVideo} type="video/mp4" />
                                        </video>
                                    </div>
                                    <p className="text-sm text-muted-foreground">
                                        Changing colors dynamically based on mouse position.
                                        This introduces the concept of <strong>Mapping</strong>. We take the user's input (Mouse X position, ranging from 0 to screen width)
                                        and mathematically scale it to a new range (0 to the number of colors in our list).
                                        It connects human action directly to digital output.
                                    </p>
                                    <div className="bg-black/50 rounded-lg border border-white/5">
                                        <ScrollArea className="h-[150px] w-full rounded-md">
                                            <div className="p-4">
                                                <pre className="text-[10px] font-mono text-blue-300 leading-relaxed">
                                                    {`let couleurs = [];

function setup() {
  createCanvas(500, 500);
  noStroke();
  couleurs = [
    '#2D3047', '#433D60', '#725283', '#A6688E', '#D18489', 
    '#E49E82', '#F2B87C', '#F9D37A', '#FBE38E', '#FFF5B7'
  ];
}

function draw() {
  background(250, 10); 

  let index = floor(map(mouseX, 0, width, 0, couleurs.length));
  index = constrain(index, 0, couleurs.length - 0.1);
  
  fill(couleurs[index]);
  
  ellipse(mouseX, mouseY, 20, 20);
}`}
                                                </pre>
                                            </div>
                                        </ScrollArea>
                                    </div>
                                </CardContent>
                            </Card>

                            {/* Sub-Activity: Random Walker */}
                            <Card className="bg-card/50 backdrop-blur border-white/10 overflow-hidden flex flex-col">
                                <CardHeader className="pb-2">
                                    <CardTitle className="text-lg flex items-center gap-2">
                                        <Code className="w-4 h-4 text-purple-400" />
                                        Random Walker
                                    </CardTitle>
                                </CardHeader>
                                <CardContent className="space-y-4 flex-1">
                                    <div className="rounded-lg overflow-hidden border border-white/10 bg-black/50 aspect-video">
                                        <video controls className="w-full h-full object-contain">
                                            <source src={walkerVideo} type="video/mp4" />
                                        </video>
                                    </div>
                                    <p className="text-sm text-muted-foreground">
                                        Using randomness to generate a unique path every time.
                                        This mimics <strong>Brownian Motion</strong> in physics. At every frame, the dot rolls a virtual 4-sided die.
                                        0 = Right, 1 = Left, 2 = Down, 3 = Up. Over time, these random independent choices create organic, complex structures
                                        that resemble growing vines or wandering ants.
                                    </p>
                                    <div className="bg-black/50 rounded-lg border border-white/5">
                                        <ScrollArea className="h-[150px] w-full rounded-md">
                                            <div className="p-4">
                                                <pre className="text-[10px] font-mono text-purple-300 leading-relaxed">
                                                    {`let x, y;
let grille = []; 
const resolution = 600;

function setup() {
  createCanvas(resolution, resolution);
  x = width / 2;
  y = height / 2;
  
  for (let i = 0; i < width; i++) {
    grille[i] = [];
    for (let j = 0; j < height; j++) {
      grille[i][j] = 0;
    }
  }
  background(200);
}

function draw() {
  for (let i = 0; i < 100; i++) {
    marcher();
  }
}

function marcher() {
  grille[x][y]++; // ... logic simplified for display
  let intensite = map(grille[x][y], 0, 50, 50, 255);
  stroke(intensite, intensite * 0.5, 255 - intensite, 150);
  point(x, y);

  const r = floor(random(4));
  switch (r) {
    case 0: x++; break;
    case 1: x--; break;
    case 2: y++; break;
    case 3: y--; break;
  }
  x = constrain(x, 0, width - 1);
  y = constrain(y, 0, height - 1);
}`}
                                                </pre>
                                            </div>
                                        </ScrollArea>
                                    </div>
                                </CardContent>
                            </Card>

                            {/* Sub-Activity: Football Random */}
                            <Card className="bg-card/50 backdrop-blur border-white/10 overflow-hidden flex flex-col">
                                <CardHeader className="pb-2">
                                    <CardTitle className="text-lg flex items-center gap-2">
                                        <Code className="w-4 h-4 text-green-400" />
                                        Football Simulation
                                    </CardTitle>
                                </CardHeader>
                                <CardContent className="space-y-4 flex-1">
                                    <div className="rounded-lg overflow-hidden border border-white/10 bg-black/50 aspect-video">
                                        <video controls className="w-full h-full object-contain">
                                            <source src={footballVideo} type="video/mp4" />
                                        </video>
                                    </div>
                                    <p className="text-sm text-muted-foreground">
                                        Simulating events with random conditionals and basic collision detection.
                                        This teaches the core of any video game: the <strong>Game Loop</strong>. The `draw()` function runs 60 times a second.
                                        In every single frame, we check: "Is the cursor touching the goal?". If yes (`if (collision)`), we trigger the state change ("GOAL").
                                        We also use objects (Supporters) with their own internal timers to create independent behaviors.
                                    </p>
                                    <div className="bg-black/50 rounded-lg border border-white/5">
                                        <ScrollArea className="h-[150px] w-full rounded-md">
                                            <div className="p-4">
                                                <pre className="text-[10px] font-mono text-green-300 leading-relaxed">
                                                    {`let supporters = [];
// ... setup supporters

function draw() {
  background(60, 170, 60);
  // ... draw field

  for (let i = 0; i < supporters.length; i++) {
    let s = supporters[i];
    let jump = 0;

    if (s.timer > 0) {
      jump = -20;
      s.timer -= 1;
    } else if (random(100) < 2) { 
      s.timer = 15;
    }
    // ... draw supporters
  }

  // Draw Mbappé cursor
  fill(0, 0, 255);
  ellipse(mouseX, mouseY, 50, 50);

  // Goal logic
  if ((mouseX > 50 && mouseX < 130 && mouseY > 100 && mouseY < 300) || 
      (mouseX > 470 && mouseX < 550 && mouseY > 100 && mouseY < 300)) {
    text("GOOOOOOAL", 300, 200);
  }
}`}
                                                </pre>
                                            </div>
                                        </ScrollArea>
                                    </div>
                                </CardContent>
                            </Card>

                            {/* Sub-Activity: Math Art */}
                            <Card className="bg-card/50 backdrop-blur border-white/10 overflow-hidden flex flex-col">
                                <CardHeader className="pb-2">
                                    <CardTitle className="text-lg flex items-center gap-2">
                                        <Code className="w-4 h-4 text-blue-400" />
                                        Mathematical Art
                                    </CardTitle>
                                </CardHeader>
                                <CardContent className="space-y-4 flex-1">
                                    <div className="rounded-lg overflow-hidden border border-white/10 bg-black/50 aspect-video">
                                        <video controls className="w-full h-full object-contain">
                                            <source src={mathVideo} type="video/mp4" />
                                        </video>
                                    </div>
                                    <p className="text-sm text-muted-foreground">
                                        Visualizing the Fibonacci sequence using recursive drawing.
                                    </p>
                                    <div className="bg-black/50 rounded-lg border border-white/5">
                                        <ScrollArea className="h-[150px] w-full rounded-md">
                                            <div className="p-4">
                                                <pre className="text-[10px] font-mono text-blue-300 leading-relaxed">
                                                    {`let fib = [1, 1]; 
let n = 15;       
let compteur = 0; 
// ... colors

function setup() {
  createCanvas(1000, 1000);
  for (let i = 2; i < n; i++) {
    fib[i] = fib[i - 1] + fib[i - 2];
  }
  frameRate(2);
}

function draw() {
  background(200);
  translate(width / 2, height / 2); 

  for (let i = 0; i < compteur; i++) {
    let taille = fib[i] * 5;
    // ... drawing logic
    rect(0, 0, taille, taille);
    translate(taille, 0); 
    rotate(HALF_PI);
    translate(0, - fib[i+1] * 5);
  }
  if (compteur < n) compteur++;
}`}
                                                </pre>
                                            </div>
                                        </ScrollArea>
                                    </div>
                                </CardContent>
                            </Card>

                        </div>
                    </CardContent>
                </Card>



                {/* Activity 2: Neural Network Logic */}
                <Card className="bg-card/50 backdrop-blur border-white/10 overflow-hidden">
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                            <Brain className="w-5 h-5 text-pink-500" />
                            Activity 2: Understanding Neural Fields
                        </CardTitle>
                        <CardDescription>
                            Manually reproducing the training process of a simple neural network.
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                        <div className="flex flex-col md:flex-row items-center gap-6">
                            <div className="w-full md:w-1/2 rounded-lg shadow-lg overflow-hidden border border-white/10">
                                <img
                                    src={setupActivity3}
                                    alt="Neural Network Game Setup"
                                    className="w-full h-auto object-cover"
                                />
                            </div>
                            <div className="w-full md:w-1/2 space-y-6">
                                <p className="leading-relaxed">
                                    The goal of this activity was to "be" the neural network. We simulated a simple perceptron with
                                    two inputs and two outputs to understand how weights are updated during training.
                                </p>

                                <div className="space-y-4">
                                    <div className="p-4 bg-blue-500/10 border border-blue-500/20 rounded-lg">
                                        <h4 className="text-sm font-semibold text-blue-400 mb-2">Activation Formula</h4>
                                        <code className="text-xs md:text-sm font-mono bg-black/30 p-2 rounded block">
                                            (input1 * weight1) + (input2 * weight2)
                                        </code>
                                        <p className="text-xs text-muted-foreground mt-2">
                                            How the network calculates its initial guess.
                                        </p>
                                    </div>

                                    <div className="p-4 bg-orange-500/10 border border-orange-500/20 rounded-lg">
                                        <h4 className="text-sm font-semibold text-orange-400 mb-2">Weight Update Formula</h4>
                                        <code className="text-xs md:text-sm font-mono bg-black/30 p-2 rounded block">
                                            new_weight = old_weight + (answer - guess) * input
                                        </code>
                                        <p className="text-xs text-muted-foreground mt-2">
                                            How the network "learns" by adjusting importance of inputs based on error.
                                        </p>
                                        <div className="mt-4 pt-4 border-t border-white/10">
                                            <h5 className="text-xs font-semibold text-zinc-400 mb-1">Concept: Backpropagation</h5>
                                            <p className="text-xs text-muted-foreground">
                                                Imagine shooting an arrow and missing the target to the left. You adjust your aim to the right for the next shot.
                                                This formula does exactly that mathematically. It calculates the "Error" (Answer - Guess) and uses it to slightly nudge the Weights
                                                in the correct direction. Repeat this 10,000 times, and the arrow hits the bullseye.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </CardContent>
                </Card>



                {/* Activity 3: Convolution (Manual) */}
                <Card className="bg-card/50 backdrop-blur border-white/10 overflow-hidden">
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                            <Brain className="w-5 h-5 text-orange-500" />
                            Activity 3: Manual Convolution
                        </CardTitle>
                        <CardDescription>
                            Understanding how computers "see" by manually applying filters to image matrices.
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                        <div className="grid md:grid-cols-2 gap-6 items-start">
                            <div className="space-y-4">
                                <div className="rounded-lg shadow-lg overflow-hidden border border-white/10">
                                    <img
                                        src={setupActivity2_1}
                                        alt="Convolution Calculation Step 1"
                                        className="w-full h-auto object-cover"
                                    />
                                </div>
                                <p className="text-sm text-muted-foreground italic text-center">
                                    Initial matrix setup with pixel values.
                                </p>
                            </div>
                            <div className="space-y-4">
                                <div className="rounded-lg shadow-lg overflow-hidden border border-white/10">
                                    <img
                                        src={setupActivity2_2}
                                        alt="Convolution Calculation Step 2"
                                        className="w-full h-auto object-cover"
                                    />
                                </div>
                                <p className="text-sm text-muted-foreground italic text-center">
                                    Applying filters (kernels) to transform the image.
                                </p>
                            </div>
                        </div>
                        <div className="space-y-4">
                            <p className="leading-relaxed">
                                In this activity, we acted as the "convolutional layer" of a neural network.
                                We took a grid of numbers representing an image (pixel brightness) and applied small matrices called <strong>kernels</strong> or <strong>filters</strong>.
                            </p>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                <div className="p-3 bg-zinc-900/50 border border-white/10 rounded-lg text-center">
                                    <h5 className="font-semibold text-white mb-1">Blur Filter</h5>
                                    <p className="text-xs text-muted-foreground">Averaging neighboring pixels to smooth out noise.</p>
                                </div>
                                <div className="p-3 bg-zinc-900/50 border border-white/10 rounded-lg text-center">
                                    <h5 className="font-semibold text-white mb-1">Sharpen Filter</h5>
                                    <p className="text-xs text-muted-foreground">Enhancing contrast between adjacent pixels.</p>
                                </div>
                                <div className="p-3 bg-zinc-900/50 border border-white/10 rounded-lg text-center">
                                    <h5 className="font-semibold text-white mb-1">Edge Detection</h5>
                                    <p className="text-xs text-muted-foreground">Isolating boundaries to identify shapes.</p>
                                    <p className="text-[10px] text-zinc-500 mt-1 font-mono">Kernel: [-1, -1, -1, -1, 8, -1, -1, -1, -1]</p>
                                </div>
                            </div>
                        </div>
                    </CardContent>
                </Card>

                {/* Code Repository */}
                <Card className="bg-card/50 backdrop-blur border-white/10 overflow-hidden">
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                            <Code className="w-5 h-5 text-green-500" />
                            Student p5.js Code Repository
                        </CardTitle>
                        <CardDescription>
                            A collection of sketches and experiments created by the team.
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

                            {/* Valentin Boss */}
                            <div className="space-y-3">
                                <h4 className="font-semibold text-sm text-zinc-400 uppercase tracking-wider">Valentin Boss</h4>
                                <div className="flex flex-col gap-2">
                                    <a href="https://editor.p5js.org/valentinbosseditor/sketches/m1MD7McqC" target="_blank" className="text-xs hover:text-green-400 transition-colors flex items-center gap-1">
                                        <ExternalLink className="w-3 h-3" /> Sketch 1
                                    </a>
                                    <a href="https://editor.p5js.org/valentinbosseditor/sketches/Vtxqf9Zop" target="_blank" className="text-xs hover:text-green-400 transition-colors flex items-center gap-1">
                                        <ExternalLink className="w-3 h-3" /> Sketch 2
                                    </a>
                                    <a href="https://editor.p5js.org/valentinbosseditor/sketches/vN0UbPZUG" target="_blank" className="text-xs hover:text-green-400 transition-colors flex items-center gap-1">
                                        <ExternalLink className="w-3 h-3" /> Sketch 3
                                    </a>
                                    <a href="https://editor.p5js.org/valentinbosseditor/sketches/HP-bs1U5F" target="_blank" className="text-xs hover:text-green-400 transition-colors flex items-center gap-1">
                                        <ExternalLink className="w-3 h-3" /> Sketch 4
                                    </a>
                                </div>
                            </div>

                            {/* Alexandre LP (ALP2595) */}
                            <div className="space-y-3">
                                <h4 className="font-semibold text-sm text-zinc-400 uppercase tracking-wider">Alexandre Le Port</h4>
                                <div className="flex flex-col gap-2">
                                    <a href="https://editor.p5js.org/alp2595/sketches/swOV6YrQu" target="_blank" className="text-xs hover:text-green-400 transition-colors flex items-center gap-1">
                                        <ExternalLink className="w-3 h-3" /> Sketch 1
                                    </a>
                                    <a href="https://editor.p5js.org/alp2595/sketches/tUeJ_Fjkq" target="_blank" className="text-xs hover:text-green-400 transition-colors flex items-center gap-1">
                                        <ExternalLink className="w-3 h-3" /> Sketch 2
                                    </a>
                                    <a href="https://editor.p5js.org/alp2595/sketches/RWCsgWKT2" target="_blank" className="text-xs hover:text-green-400 transition-colors flex items-center gap-1">
                                        <ExternalLink className="w-3 h-3" /> Sketch 3
                                    </a>
                                    <a href="https://editor.p5js.org/alp2595/sketches/Ar_oe81HS" target="_blank" className="text-xs hover:text-green-400 transition-colors flex items-center gap-1">
                                        <ExternalLink className="w-3 h-3" /> Sketch 4
                                    </a>
                                    <a href="https://editor.p5js.org/alp2595/sketches/nLctiyW5V" target="_blank" className="text-xs hover:text-green-400 transition-colors flex items-center gap-1">
                                        <ExternalLink className="w-3 h-3" /> Sketch 5
                                    </a>
                                </div>
                            </div>

                            {/* Paul Simonet */}
                            <div className="space-y-3">
                                <h4 className="font-semibold text-sm text-zinc-400 uppercase tracking-wider">Paul Simonet</h4>
                                <div className="flex flex-col gap-2">
                                    <a href="https://editor.p5js.org/paul.simonet92/sketches/MqR-x1gnv" target="_blank" className="text-xs hover:text-green-400 transition-colors flex items-center gap-1">
                                        <ExternalLink className="w-3 h-3" /> Sketch 1
                                    </a>
                                    <a href="https://editor.p5js.org/paul.simonet92/sketches/Sb6SbSyhH" target="_blank" className="text-xs hover:text-green-400 transition-colors flex items-center gap-1">
                                        <ExternalLink className="w-3 h-3" /> Sketch 2
                                    </a>
                                    <a href="https://editor.p5js.org/paul.simonet92/sketches/qRP6NkLmH" target="_blank" className="text-xs hover:text-green-400 transition-colors flex items-center gap-1">
                                        <ExternalLink className="w-3 h-3" /> Sketch 3
                                    </a>
                                    <a href="https://editor.p5js.org/paul.simonet92/sketches/HHssgSsZ7" target="_blank" className="text-xs hover:text-green-400 transition-colors flex items-center gap-1">
                                        <ExternalLink className="w-3 h-3" /> Sketch 4
                                    </a>
                                    <a href="https://editor.p5js.org/paul.simonet92/sketches/Y_Q0Wh0IU" target="_blank" className="text-xs hover:text-green-400 transition-colors flex items-center gap-1">
                                        <ExternalLink className="w-3 h-3" /> Sketch 5
                                    </a>
                                </div>
                            </div>

                            {/* Maxime Vial */}
                            <div className="space-y-3">
                                <h4 className="font-semibold text-sm text-zinc-400 uppercase tracking-wider">Maxime Vial</h4>
                                <div className="flex flex-col gap-2">
                                    <a href="https://editor.p5js.org/VialMaxime/sketches/_P0DYBP_V" target="_blank" className="text-xs hover:text-green-400 transition-colors flex items-center gap-1">
                                        <ExternalLink className="w-3 h-3" /> Sketch 1
                                    </a>
                                    <a href="https://editor.p5js.org/VialMaxime/sketches/8WpmnWGUz" target="_blank" className="text-xs hover:text-green-400 transition-colors flex items-center gap-1">
                                        <ExternalLink className="w-3 h-3" /> Sketch 2
                                    </a>
                                    <a href="https://editor.p5js.org/VialMaxime/sketches/nQOfo_OEd" target="_blank" className="text-xs hover:text-green-400 transition-colors flex items-center gap-1">
                                        <ExternalLink className="w-3 h-3" /> Sketch 3
                                    </a>
                                </div>
                            </div>
                        </div>
                    </CardContent>
                </Card>

                {/* Navigation */}
                <div className="flex justify-end">
                    <Link to="/teachable-machine/part-2">
                        <Button className="group" size="lg">
                            Next: The Phone Number Game
                            <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </Button>
                    </Link>
                </div>
            </div>
        </div >
    );
};

export default TeachableMachinePart1;
