export default class HashMap {
  constructor(hashLength = 4) {
    this.table = new Array(hashLength);
    this.hashLength = hashLength;
    this.dataLength = 0;
  }

  hash(key) {
    let hashcode = 0;
    for (let char of key) {
      hashcode += char.charCodeAt();
    }

    return hashcode % this.hashLength;
  }

  set(key, value) {
    const index = this.hash(key);
    let bucket = this.table[index];

    if (!bucket) {
      bucket = [];
      this.table[index] = bucket;
    } else {
      for (let item of bucket) {
        if (item[0] === key) {
          item[1] = value;
          return;
        }
      }
    }
    this.dataLength++;
    bucket.push([key, value]);
  }

  get(key) {
    const bucket = this.table[this.hash(key)];

    if (bucket) {
      for (let item of bucket) {
        if (item[0] === key) return item[1];
      }
    }

    return undefined;
  }

  has(key) {
    const bucket = this.table[this.hash(key)];

    if (bucket) {
      for (let item of bucket) {
        if (item[0] === key) return true;
      }
    }

    return false;
  }

  remove(key) {
    const bucket = this.table[this.hash(key)];

    if (bucket) {
      for (let i = 0; i < bucket.length; i++) {
        if (bucket[i][0] === key) {
          bucket.splice(i, 1);
          this.dataLength--;
          return true;
        }
      }
    }

    return false;
  }

  length() {
    return this.dataLength;
  }

  clear() {
    this.dataLength = 0;
    this.table = new Array(this.hashLength);
  }

  keys() {
    const keys = [];
    this.table.forEach((bucket) => {
      if (bucket) bucket.forEach((item) => keys.push(item[0]));
    });

    return keys;
  }

  values() {
    const values = [];
    this.table.forEach((bucket) => {
      if (bucket) bucket.forEach((item) => values.push(item[1]));
    });

    return values;
  }
  entries() {
    const entries = [];
    this.table.forEach((bucket) => {
      if (bucket) bucket.forEach((item) => entries.push(item));
    });

    return entries;
  }
}
