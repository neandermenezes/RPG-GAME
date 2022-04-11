import Fighter from '../Fighter';
import Battle from './Battle';

function checkLife(playerOneLife: number, player2TwoLife: number) {
  if (playerOneLife === -1) return 'blue';
  if (player2TwoLife === -1) return 'red';
  return false;
}
class PVP extends Battle {
  protected _fighterBlue: Fighter;

  constructor(figherRed: Fighter, figherBlue: Fighter) {
    super(figherRed);
    this._fighterBlue = figherBlue;
  }

  fight(): number {
    let fightOngoing = true;
    let winner = 'red'; 

    while (fightOngoing) {
      this.player.attack(this._fighterBlue);
      this._fighterBlue.attack(this.player);

      const result = checkLife(
        this.player.lifePoints, 
        this._fighterBlue.lifePoints,
      );
      if (result !== false) {
        fightOngoing = false;
        winner = result;
      } 
    }
    return winner === 'red' ? 1 : -1;
  }
}

export default PVP;