//Listing 2.17 Combining setTimeout with Function.prototype.bind

class Bomb{
	constructor(){
		this.message = 'Boom!';
		this.explode = this.explode.bind(this);
	}

	explode(){
		console.log(this.message);
	}
}

const bomb = new Bomb();

const timeoutId = setTimeout(bomb.explode, 1000);

clearTimeout(timeoutId);