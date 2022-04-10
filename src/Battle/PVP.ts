import Fighter from '../Fighter';
import Battle from './Battle';

class PVP extends Battle {
  protected _fighterBlue: Fighter;

  constructor(figherRed: Fighter, figherBlue: Fighter) {
    super(figherRed);
    this._fighterBlue = figherBlue;
  }

  fight(): number {
    if (this.player.strength > this._fighterBlue.strength) {
      return 1;
    }

    return -1;
  }
}

export default PVP;