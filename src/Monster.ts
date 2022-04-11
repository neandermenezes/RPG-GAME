import { SimpleFighter } from './Fighter';

class Monster implements SimpleFighter {
  constructor(
    protected _lifePoints: number = 85,
    private _strength: number = 63,
  ) {}

  get lifePoints(): number { return this._lifePoints; }
  get strength(): number { return this._strength; }

  attack(enemy: SimpleFighter): void {
    const e = enemy;
    e.lifePoints -= this._strength;
  }

  receiveDamage(attackPoints: number): number {
    const damage = attackPoints;
 
    let updatedLife = 0;

    if (damage > 0) {
      updatedLife = this._lifePoints - damage;
    }

    if (updatedLife <= 0) updatedLife = -1;

    this._lifePoints = updatedLife;

    return this._lifePoints;
  }
}

export default Monster;