# fromEntries-Javascript-Utils

## Scope

Implements functions `fromEntries` from https://2ality.com/2019/01/object-from-entries.html. 

## Details

Functions held in `utils.js`. Example is displayed in the Browser's console.

## `pick()`

Takes an object, and returns a new object returning only selected fields. 

```javascript
const address = {
    street: 'Evergreen Terrace',
    number: '742',
    city: 'Springfield',
    state: 'NT',
    zip: '49007',
};
pick(address, 'street', 'number');
> {street: "Evergreen Terrace", number: "742"}
```

## `invert()`

Converts keys to values, and values to keys. 

```javascript
invert({a: 1, b: 2, c: 3});
> {1: "a", 2: "b", 3: "c"}
```

## `mapObject()`

Behaves as `Array.map` but for objects. 

```javascript
mapObject({x: 7, y: 4}, value => value * 2);
> {x: 14, y: 8}
```

## `findKey()`

Finds the key of a specified value. 

```javascript
const address = {
    street: 'Evergreen Terrace',
    number: '742',
    city: 'Springfield',
    state: 'NT',
    zip: '49007',
};
findKey(address, (value, _key) => value === 'NT');
> state
```