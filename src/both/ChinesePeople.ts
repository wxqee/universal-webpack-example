import People from './People';

class ChinesePeople extends People {
  constructor(name: string) {
    super(name);
    this.eyeColor = 'black';
    this.country = '中国';
  }
}

export default ChinesePeople;
