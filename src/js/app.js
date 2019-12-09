// TODO: write your code here
import Bowerman from './Classes/bowerman';
import Swordsman from './Classes/swordsman';
import Magician from './Classes/magician';
import Undead from './Classes/undead';
import Zombie from './Classes/zombie';
import Daemon from './Classes/daemon';

const bowerman = new Bowerman('Faran');
console.log(bowerman);
const swordsman = new Swordsman('Howen');
console.log(swordsman);
const magician = new Magician('Tonem');
console.log(magician);
const undead = new Undead('Colom');
console.log(undead);
const zombie = new Zombie('Lofanoze');
console.log(zombie);
const daemon = new Daemon('Knyx');
console.log(daemon);

daemon.levelUp();
