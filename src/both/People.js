class People {
  name = 'nobody';

  country = '';

  eyeColor = '';

  constructor(name) {
    this.name = name;
    this.eyeColor = 'brown';
    this.country = '';
  }

  sayHi() {
    return 'ha....i.....';
  }

  getResume() {
    if (!this.country) {
      return `I am ${this.name}, I do not belong to any country, and I have ${this.eyeColor} eyes.`;
    }

    return `I am ${this.name} from ${this.country}, and I have ${this.eyeColor} eyes.`;
  }
}

export default People;
