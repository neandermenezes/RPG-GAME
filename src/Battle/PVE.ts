import Fighter, { SimpleFighter } from '../Fighter';
import Battle from './Battle';

function checkLife(playerLife: number, monsters: number[]) {
  if (playerLife === -1) return 'monster';
  if (monsters.every((monster) => monster === -1)) return 'player';
  return false;
}
class PVE extends Battle {
  private _monsters: SimpleFighter[];

  constructor(
    fighter: Fighter, 
    monsters: SimpleFighter[],
  ) {
    super(fighter);
    this._monsters = monsters;
  }

  fight(): number {
    let fightOngoing = true;
    let winner = 'player';

    while (fightOngoing) {
      this._monsters.forEach((monster) => {
        monster.attack(this.player);
        this.player.attack(monster);
      });

      const monstersLife = this._monsters.map(({ lifePoints }) => lifePoints);

      const checkFighter = checkLife(this.player.lifePoints, monstersLife);

      if (checkFighter) {
        fightOngoing = false;
        winner = checkFighter;
      }
    }
    return winner === 'player' ? 1 : -1;
  }
}

export default PVE;