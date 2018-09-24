class TinyURLCreator1 {
  constructor () {
    this.map = new Map();
    this.num = 0;
  }

  encode (longUrl) {
    this.map.set(this.num, longUrl);
    return 'http://tinyurl.com/' + this.num++;
  }

  decode (shortUrl) {
    return this.map.get(parseInt(shortUrl.replace('http://tinyurl.com/', '')));
  }
}

class TinyURLCreator2 {
  constructor () {
    this.map = new Map();
    this.alphabet = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    this.key = this.buildKey();
  }

  getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }

  buildKey() {
    let keyCode = ''
    for (let i = 0; i < 6; i++) {
      keyCode += this.alphabet[this.getRandomInt(62)];
    }
    return keyCode;
  }

  encode (longUrl) {
    while (this.map.has(this.key)) {
      this.key = this.buildKey();
    }
    this.map.set(this.key, longUrl);
    return 'http://tinyurl.com/' + this.key;
  }

  decode (shortUrl) {
    return this.map.get(shortUrl.replace('http://tinyurl.com/', ''));
  }
}

module.exports = { TinyURLCreator1, TinyURLCreator2 }