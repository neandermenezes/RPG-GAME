import { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Warrior extends Archetype {
  private _energyType: EnergyType;
  static instanceCount = 0;

  constructor(name: string) {
    super(name);
    this._energyType = 'stamina';
    Warrior.instanceCount += 1;
  }

  public static createdArchetypeInstances(): number {
    return Warrior.instanceCount;
  }

  public get energyType(): EnergyType { return this._energyType; }
}

export default Warrior;