//Listing 2.10 Path variables
// Run with:
//   cat file.txt | node process.js

/* Note: In "old" streams mode the stdin stream is paused by default, so one must call process.stdin.resume() to read from it. Note also that calling process.stdin.resume() itself would switch stream to "old" mode.
*/
//process.stdin.resume();
process.stdin.setEncoding('utf8');

process.stdin.on('data', (text) => {
	process.stdout.write(text.toUpperCase());
})

console.log(process.arch, process.platform);