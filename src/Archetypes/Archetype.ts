import { EnergyType } from '../Energy';

export default abstract class Archetype {
  private readonly _special: number;
  private readonly _cost: number;
  static numberOfIntances = 0;

  constructor(private readonly _name: string) {
    this._special = 0;
    this._cost = 0;
    Archetype.numberOfIntances += 1;
  }

  get name(): string {
    return this._name;
  }

  get special(): number {
    return this._special;
  }

  get cost(): number {
    return this._cost;
  }

  static createdArchetypeInstances(): number {
    return this.numberOfIntances;
  }

  abstract get energyType(): EnergyType;
}
