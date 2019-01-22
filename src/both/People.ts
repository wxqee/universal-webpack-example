export type CountryEnum = '中国' | 'Canada' | '';

export interface IPeople {
  readonly eyeColor: string;
  readonly name: string;
  getResume(): string;
}

class People implements IPeople {
  public eyeColor: string = '';
  public readonly name: string = 'nobody';
  protected country: CountryEnum = '';

  constructor(name: string) {
    this.name = name;
    this.eyeColor = 'brown';
    this.country = '';
  }

  public getResume() {
    if (!this.country) {
      return `I am ${this.name}, I do not belong to any country, and I have ${this.eyeColor} eyes.`;
    }

    return `I am ${this.name} from ${this.country}, and I have ${this.eyeColor} eyes.`;
  }
}

export default People;
