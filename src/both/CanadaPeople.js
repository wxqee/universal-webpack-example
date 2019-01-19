import People from './People';

class CanadaPeople extends People {
  constructor(name) {
    super(name);
    this.eyeColor = 'blue';
    this.country = 'Canada';
  }

  sayHi() {
    return 'Hi~';
  }
}

export default CanadaPeople;
