let x_vals = [];
let y_vals = [];

let a, b, c;

const learningRate = 0.3;
const optimizer = tf.train.adam(learningRate);

var draging = false;

function setup()
{
	createCanvas(300, 300);
	background(0);

	a = tf.variable(tf.scalar(random(-1,1)));
	b = tf.variable(tf.scalar(random(-1,1)));	
	c = tf.variable(tf.scalar(random(-1,1)));
}

function loss(pred, labels)
{
	  return pred.sub(labels).square().mean();

	//const loss = (pred, label) => pred.sub(label).square().mean();
}
function predict(x)
{

	const xs = tf.tensor1d(x);
	// y = mx + b
	//const ys = xs.mul(a).add(b);
	// y = ax^2 + bx + c
	const ys = xs.square().mul(a).add(xs.mul(b)).add(c);
	return ys;
}

// function mouseDrag(){

// }
function keyPressed(){
	if(keyCode == 32){
		x_vals = [];
		y_vals =[];
	}
}
function mousePressed(){
	draging = true;

}
function mouseReleased(){
	draging = false;
}
function draw()
{
	// function train(){

	// 	loss(predict(xs),ys);
	// }
	// optimizer.minimize(() => loss(f(xs), ys));

	//viet tac chuong trinh phia tren
	if(draging)
	{

		let x = map(mouseX, 0, width, -1, 1);
		let y = map(mouseY, 0, height, 1, -1);
		x_vals.push(x);
		y_vals.push(y);
	}
	else{


	 tf.tidy(()=> {
		if(x_vals.length > 0)
	 	{
      		const ys = tf.tensor1d(y_vals);
     		 optimizer.minimize(() => loss(predict(x_vals), ys));
    	}
  	});
	}

	background(0);
	stroke(255);
	strokeWeight(8);
	for(let i =0; i < x_vals.length; i++)
	{
		let px = map(x_vals[i], -1, 1, 0 , width);
		let py = map(y_vals[i], -1, 1, height, 0);
		point(px, py);
	}

	const curveX = [];
	for(let x = -1; x <1.01; x+=0.05)
	{
		curveX.push(x);
	}
	//xs.print();
	const ys = tf.tidy(() => predict(curveX));
	let curveY = ys.dataSync();
	ys.dispose();
	
	
	beginShape();
	noFill();
	stroke(255);
	strokeWeight(2);

	for(let i = 0; i < curveX.length; i ++){
		let x = map(curveX[i], -1, 1, 0, width);
		let y = map(curveY[i], -1, 1, height,0);
		vertex(x,y);
	}
	endShape();


	console.log(tf.memory().numTensors);

}