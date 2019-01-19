import People from './People';

class ChinesePeople extends People {
  constructor(name) {
    super(name);
    this.eyeColor = 'black';
    this.country = '中国';
  }

  sayHi() {
    return '嗨~';
  }
}

export default ChinesePeople;
