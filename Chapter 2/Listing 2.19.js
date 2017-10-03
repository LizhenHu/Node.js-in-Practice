//Listing 2.19 Using setInterval and setTimeout together
function tick(){
	console.log('tick', Date.now());
}

function tock(){
	console.log('tock', Date.now());
}

setInterval(tick, 1000);

setTimeout(() => {
	setInterval(tock, 1000);
}, 500);