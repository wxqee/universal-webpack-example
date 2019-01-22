export type CountryEnum = '中国' | 'Canada' | '';

class People {
  name: string = 'nobody';

  country: CountryEnum = '';

  eyeColor: string = '';

  constructor(name: string) {
    this.name = name;
    this.eyeColor = 'brown';
    this.country = '';
  }

  getResume() {
    if (!this.country) {
      return `I am ${this.name}, I do not belong to any country, and I have ${this.eyeColor} eyes.`;
    }

    return `I am ${this.name} from ${this.country}, and I have ${this.eyeColor} eyes.`;
  }
}

export default People;
