//Listing 2.12 Benchmarking a function

const args = {
	'-h': displayHelp,
	'-r': readFile,
}

function displayHelp(){
	console.log('Argument processor:', args);
}

function readFile(file){
	if(file && file.length){
		console.log('Reading:', file);
		require('fs').createReadStream(file).pipe(process.stdout);
	} else {
		console.error('A file must be provided with the -r option');
		process.exit(1);
	}
}

if(process.argv.length > 0){
	
	process.argv.forEach((arg, index) => {
		if(args[arg]){
			//convert the last argv to string since path must be a string or Buffer
			args[arg](process.argv.slice(index + 1).toString());
		}
	
	});
}