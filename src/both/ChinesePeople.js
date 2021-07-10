// @flow

import People from './People';

class ChinesePeople extends People {
  constructor(name: string) {
    super(name);
    this.eyeColor = 'black';
    this.country = '中国';
  }

  getResume(): string {
    return `我是来自${this.country}的${this.name}。 我的眼睛是 ${this.eyeColor} 色。`;
  }
}

export default ChinesePeople;
