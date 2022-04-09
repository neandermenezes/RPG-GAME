import { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Mage extends Archetype {
  private _energyType: EnergyType;
  static instanceCount = 0;

  constructor(name: string) {
    super(name);
    this._energyType = 'mana';
    Mage.instanceCount += 1;
  }

  public static createdArchetypeInstances(): number {
    return Mage.instanceCount;
  }

  public get energyType(): EnergyType { return this._energyType; }
}

export default Mage;