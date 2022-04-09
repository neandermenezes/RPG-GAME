import Race from './Race';

class Halfling extends Race {
  private _maxLifePoints: number;
  private _count = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this._maxLifePoints = 60;
    this._count += 1;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  createdRacesInstances() {
    return this._count;
  }
}

export default Halfling;