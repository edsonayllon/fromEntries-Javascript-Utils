export const pick = (object, ...keys) => {
    const filteredEntries = Object.entries(object).filter(([key, _value]) => keys.includes(key));
    return Object.fromEntries(filteredEntries);
}

export const invert = (object) => {
    const mappedEntries = Object.entries(object).map(([key, value]) => [value, key]);
    return Object.fromEntries(mappedEntries);
}

export const mapObject = (object, callback, thisValue) => {
    const mappedEntries = Object.entries(object)
        .map(([key, value]) => {
        const mappedValue = callback.call(thisValue, value, key, object);
        return [key, mappedValue];
        });
    return Object.fromEntries(mappedEntries);
}

export const findKey = (object, callback, thisValue) => {
    for (const [key, value] of Object.entries(object)) {
      if (callback.call(thisValue, value, key, object)) {
        return key;
      }
    }
    return undefined;
}

