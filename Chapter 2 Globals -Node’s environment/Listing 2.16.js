//Listing 2.16 Adding a listener for a POSIX signal
process.stdin.resume();
process.on('SIGHUP', () => {
	console.log('Reloading configuration...');
});

console.log('PID:', process.pid);