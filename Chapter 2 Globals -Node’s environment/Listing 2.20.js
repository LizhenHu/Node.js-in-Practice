//Listing 2.20 Keeping a timer alive until the program cleanly exits
function monitor(){
	console.log(process.memoryUsage());
}

const id = setInterval(monitor, 1000);
id.unref();

setTimeout(() => {
	console.log('Done!');
}, 6000);