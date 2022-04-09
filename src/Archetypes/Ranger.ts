import { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Ranger extends Archetype {
  private _energyType: EnergyType;
  static instanceCount = 0;

  constructor(name: string) {
    super(name);
    this._energyType = 'stamina';
    Ranger.instanceCount += 1;
  }

  public static createdArchetypeInstances(): number {
    return Ranger.instanceCount;
  }

  public get energyType(): EnergyType { return this._energyType; }
}

export default Ranger;