import HashMap from './hashmap.js';

const map = new HashMap();
map.set('apple', 'red');
map.set('banana', 'yellow');
map.set('carrot', 'orange');
map.set('dog', 'brown');
map.set('elephant', 'gray');
map.set('frog', 'green');
map.set('grape', 'purple');
map.set('hat', 'black');
map.set('ice cream', 'white');
map.set('jacket', 'blue');
map.set('kite', 'pink');

test('should set and get values', () => {
  map.set('coconut', 'brown');
  expect(map.get('coconut')).toBe('brown');
});

test('should set and populate the empty hash node', () => {
  map.set('ship', 'silver');
  expect(map.get('ship')).toBe('silver');
});

test('should set existing key and over-write its value', () => {
  map.set('banana', 'green');
  expect(map.get('banana')).toBe('green');
});

test('should determine whether a key exists', () => {
  expect(map.has('banana')).toBe(true);
  expect(map.has('lumber')).toBe(false);
});

test('should able to remove an entry and able to determine if the key does not exists', () => {
  expect(map.remove('banana')).toBe(true);
  expect(map.has('banana')).toBe(false);
  expect(map.remove('lumber')).toBe(false);
});

test('should returns an array containing all the keys.', () => {
  expect(map.keys()).toStrictEqual([
    'ship',
    'elephant',
    'hat',
    'ice cream',
    'kite',
    'apple',
    'dog',
    'frog',
    'jacket',
    'carrot',
    'grape',
    'coconut',
  ]);
});

test('should returns an array containing all the values.', () => {
  expect(map.values()).toStrictEqual([
    'silver',
    'gray',
    'black',
    'white',
    'pink',
    'red',
    'brown',
    'green',
    'blue',
    'orange',
    'purple',
    'brown',
  ]);
});

test('returns an array that contains each key, value pair.', () => {
  expect(map.entries()).toStrictEqual([
    ['ship', 'silver'],
    ['elephant', 'gray'],
    ['hat', 'black'],
    ['ice cream', 'white'],
    ['kite', 'pink'],
    ['apple', 'red'],
    ['dog', 'brown'],
    ['frog', 'green'],
    ['jacket', 'blue'],
    ['carrot', 'orange'],
    ['grape', 'purple'],
    ['coconut', 'brown'],
  ]);
});

test('should determine the total number of stored entries', () => {
  expect(map.length()).toBe(12);
});

test('should remove all entries in the hash map', () => {
  map.clear();
  expect(map.length()).toBe(0);
});
