const makeHashMap = () => {
    const hash = (key) => {
        let hashCode = 0;
        const primeNumber = 31;
        for (let i = 0; i < key.length; i++) {
            hashCode = primeNumber * hashCode + key.charCodeAt(i);
        };
        return hashCode;
    };

    const set = (key, value) => {
        // the first is a key and the second is a value that is assigned to this key
        // If a key already exists, then the old value is overwritten
        // collision creates a linked list
        // grow bucket size when needed to by calculating if bucket has reached the load factor
    };

    const get = (key) => {
        // takes one argument as a key and returns the value that is assigned to this key
        // If a key is not found, return null
    };

    const has = (key) => {
        // takes a key as an argument and returns true or false based on whether or not the key is in the hash map
    };

    const remove = (key) => {
        // If the given key is in the hash map, it should remove the entry with that key and return true
        // If the key isn’t in the hash map, it should return false
    };

    const length = () => {
        // returns the number of stored keys in the hash map
    };

    const clear = () => {
        // removes all entries in the hash map
    };

    const keys = () => {
        // returns an array containing all the keys inside the hash map
    };

    const values = () => {
        // returns an array containing all the values
    };

    const entries = () => {
        // returns an array that contains each key, value
        // Example: [[firstKey, firstValue], [secondKey, secondValue]]
    };

    return {hash, set, get, has, remove, length, clear, keys, values, entries}
};