/* eslint-disable complexity */
/* eslint-disable sonarjs/cognitive-complexity */
/* eslint-disable no-plusplus */
/* eslint-disable max-len */
import Archetype, { Mage } from './Archetypes';
import Energy from './Energy';
import Fighter, { SimpleFighter } from './Fighter';
import Race, { Elf } from './Races';
import getRandomInt from './utils';

class Character implements Fighter {
  private _race: Race;
  private _archetype: Archetype;
  private _maxLifePoints: number;
  private _lifePoints: number;
  private _strength: number;
  private _defense: number;
  private _dexterity: number;
  private _energy: Energy;

  constructor(private _name: string) {
    this._race = new Elf(this._name, 10);
    this._archetype = new Mage(this._name);
    this._maxLifePoints = this._race.maxLifePoints / 2;
    this._lifePoints = this._maxLifePoints;
    this._strength = getRandomInt(1, 10);
    this._defense = getRandomInt(1, 10);
    this._dexterity = this._race.dexterity;
    this._energy = { 
      type_: this._archetype.energyType, 
      amount: getRandomInt(1, 10),
    };
  }

  public get race(): Race { return this._race; }
  public get archetype(): Archetype { return this._archetype; }
  public get lifePoints(): number { return this._lifePoints; }
  public get strength(): number { return this._strength; }
  public get defense(): number { return this._defense; }
  public get dexterity(): number { return this._dexterity; }
  public get energy(): Energy { 
    return {
      type_: this._energy.type_,
      amount: this._energy.amount,
    };
  }

  public receiveDamage(attackPoints: number): number {
    const damage = attackPoints - this._defense;
    let newLifePoints: number;

    if (damage <= 0) {
      return this._lifePoints;
    }

    newLifePoints = this._lifePoints - damage;

    if (newLifePoints <= 0) newLifePoints = -1;

    this._lifePoints = newLifePoints;
    return this._lifePoints;
  }

  public attack(enemy: Fighter | SimpleFighter): void {
    enemy.receiveDamage(this._strength);
  }

  public levelUp(): void {
    this._strength += getRandomInt(1, 10);
    this._dexterity += getRandomInt(1, 10);
    this._defense += getRandomInt(1, 10);
    this._energy.amount = 10;
    this.updateLifePoints();
  }

  private updateLifePoints(): void {
    const levelIncrement = getRandomInt(1, 10);
    const validLife = this._maxLifePoints + levelIncrement;

    if (validLife > this._race.maxLifePoints) {
      this._maxLifePoints = this._race.maxLifePoints;
      this._lifePoints = this._maxLifePoints;
      return;
    }

    this._maxLifePoints += levelIncrement;
    this._lifePoints = this._maxLifePoints;
  }

  public special(enemy: Fighter): void {
    const e = enemy;
    if (getRandomInt(1, 10) % 2 === 0) {
      enemy.receiveDamage(this._strength * 2);
    }

    this.attack(e);
  }
}

const c1 = new Character('');
const result = () => {
  let res = true;
  for (let i = 0; i < 3; i++) {
    const previousLife = c1.lifePoints;
    if (previousLife <= 0) break;
    const life = c1.receiveDamage(10 ** i);
    res = 10 ** i > previousLife + c1.defense ? life === -1 : life <= previousLife && life >= previousLife - (10 ** i);
    if (!res) break;
  }
  return res;
};

console.log(result());

export default Character;