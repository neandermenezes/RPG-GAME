import Race from './Race';

class Orc extends Race {
  private _maxLifePoints: number;
  static count = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this._maxLifePoints = 74;
    Orc.count += 1;
  }

  public get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  public static createdRacesInstances() {
    return Orc.count;
  }
}

export default Orc;