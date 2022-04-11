import Energy from '../Energy';

export interface SimpleAttributes {
  lifePoints: number;
  strength: number;
}

export interface SimpleActions {
  attack(enemy: SimpleAttributes): void;
  receiveDamage(attackPoints: number): void;
}
interface Fighter extends SimpleAttributes, SimpleActions {
  defense: number,
  energy?: Energy,

  levelUp(): void;
  receiveDamage(attackPoints: number): void;
}

export default Fighter;