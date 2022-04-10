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
    this._race = new Elf(_name, 10);
    this._archetype = new Mage(_name);
    this._maxLifePoints = this.race.maxLifePoints / 2;
    this._lifePoints = this._maxLifePoints;
    this._strength = getRandomInt(1, 10);
    this._defense = getRandomInt(1, 10);
    this._dexterity = this.race.dexterity;
    this._energy = { 
      type_: this.archetype.energyType, 
      amount: getRandomInt(1, 10),
    };
  }

  public get race(): Race { return this._race; }
  public get archetype(): Archetype { return this._archetype; }
  public get lifePoints(): number { return this._lifePoints; }
  public get strength(): number { return this._strength; }
  public get defense(): number { return this._defense; }
  public get dexterity(): number { return this._dexterity; }
  public get energy(): Energy { return this._energy; }

  public receiveDamage(attackPoints: number): void {
    const damage = this.defense - attackPoints;
    if (damage > 0) {
      this._lifePoints -= damage;
    }

    if (this._lifePoints < 0) this._lifePoints = -1;
  }

  public attack(enemy: Fighter | SimpleFighter): void {
    const e = enemy;
    e.lifePoints -= this._strength;
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
      e.lifePoints += this.strength / 2;
    }

    this.attack(e);
  }
}

const char = new Character('EU');
console.log(char);
char.levelUp();
console.log(char);

export default Character;