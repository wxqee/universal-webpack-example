import People from './People';

class CanadaPeople extends People {
  constructor(name: string) {
    super(name);
    this.eyeColor = 'blue';
    this.country = 'Canada';
  }
}

export default CanadaPeople;
