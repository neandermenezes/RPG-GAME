import Fighter, { SimpleFighter } from '../Fighter';
import Monster from '../Monster';
import Battle from './Battle';

class PVE extends Battle {
  private _monsters: Array<Monster | Fighter | SimpleFighter>;

  constructor(
    fighter: Fighter, 
    monsters: Array<Monster | Fighter | SimpleFighter>,
  ) {
    super(fighter);
    this._monsters = monsters;
  }

  fight(): number {
    this._monsters.forEach((monster) => {
      monster.attack(this.player);
      this.player.attack(monster);
    });

    if (this.player.lifePoints === -1) {
      return -1;
    }

    return 1;
  }
}

export default PVE;