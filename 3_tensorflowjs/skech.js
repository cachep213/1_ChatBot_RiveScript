function setup(){
	// noCanvas();

	// const values = [];
	// for(let i = 0; i <15; i++){
	// 	values[i] = random(0, 100);
	// }

	// const shape = [5 , 3];

	// const a = tf.tensor2d(values, shape, 'int32');
	// const b = tf.tensor2d(values, shape, 'int32');
	// const bb = b.transpose();


	// const c = a.matMul(bb);
	// //const vtense = tf.variable(tense);
	// //console.log(vtense);

	// //console.log(tense.toString());
	// // tense.data().then(function(stuff){
	// // 	console.log(stuff);
	// // })
	// c.print();
	//console.log(tense.dataSync());
	//console.log(tense.get(0));
	//tense.set(0,10);
}
function draw(){
	const values = [];
	for(let i = 0; i <15; i++){
		values[i] = random(0, 100);
	}

	const shape = [5 , 3];


//Run program with tidy memory
	tf.tidy( () =>{
	const a = tf.tensor2d(values, shape, 'int32');
	const b = tf.tensor2d(values, shape, 'int32');
	const bb = b.transpose();
	const c = a.matMul(bb);
	//console.log('hello');

	});

	
	// a.dispose();
	// b.dispose();
	// c.dispose();
	// bb.dispose();

	
	console.log(tf.memory().numTensors);

}