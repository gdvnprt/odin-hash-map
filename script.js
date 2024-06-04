const makeHashMap = () => {
    const hash = (key) => {
        let hashCode = 0;
        const primeNumber = 31;
        for (let i = 0; i < key.length; i++) {
            hashCode = primeNumber * hashCode + key.charCodeAt(i);
        };
        return hashCode;
    };

    let buckets = new Array(16);

    const makeNode = (k, v) => {
        let key = k;
        let value = v || null;
        let nextNode = null;
    };

    const set = (key, value) => {
        let hashCode = hash(key);
        // the first is a key and the second is a value that is assigned to this key
        // If a key already exists, then the old value is overwritten
        if (buckets[hashCode % 16]) {
            let pointer = buckets[hashCode % 16];
            // collision creates a linked list
            while (pointer.key !== key && pointer.nextNode) {
                pointer = pointer.nextNode;
            };
            if (pointer.key === key) {
                pointer.value = value;
            } else {
                pointer.nextNode = makeNode(key, value);
            };
        } else {
            buckets.splice(hashCode % 16, 0, makeNode(key, value));
        };
        // grow bucket size when needed to by calculating if bucket has reached the load factor of 0.75
    };

    const get = (key) => {
        // takes one argument as a key and returns the value that is assigned to this key
        let hashCode = hash(key);
        if (buckets[hashCode % 16]) {
            if (buckets[hashCode % 16].nextNode) {
                let pointer = buckets[hashCode];
                while (pointer.key !== key && pointer.nextNode) {
                    pointer = pointer.nextNode;
                };
                if (pointer.key === key) {
                    return pointer.value;
                } else {
                    // If a key is not found, return null
                    return null;
                };
            } else {
                if (buckets[hashCode % 16].key === key) {
                    return buckets[hashCode % 16].value;
                } else {
                    return null;
                }
            }
        } else{
            // If a key is not found, return null
            return null;
        }
    };

    const has = (key) => {
        // takes a key as an argument and returns true or false based on whether or not the key is in the hash map
        let hashCode = hash(key);
        if (buckets[hashCode % 16]) {
            if (buckets[hashCode % 16].nextNode) {
                let pointer = buckets[hashCode];
                while (pointer.key !== key && pointer.nextNode) {
                    pointer = pointer.nextNode;
                };
                if (pointer.key === key) {
                    return true;
                } else {
                    // If a key is not found, return false
                    return false;
                };
            } else {
                if (buckets[hashCode % 16].key === key) {
                    return true;
                } else {
                    return false;
                };
            }
        } else{
            // If a key is not found, return false
            return false;
        };
    };

    const remove = (key) => {
        // If the given key is in the hash map, it should remove the entry with that key and return true
        // If the key isn’t in the hash map, it should return false
        let hashCode = hash(key);
        if (buckets[hashCode % 16]) {
            if (buckets[hashCode % 16].nextNode) {
                let pointer = buckets[hashCode % 16];
                while (pointer.key !== key && pointer.nextNode) {
                    pointer = pointer.nextNode;
                };
                if (pointer.key === key) {
                    //remove node from linked list in the place the pointer lands
                    if (pointer.nextNode) {
                        pointer = pointer.nextNode;
                    } else {
                        pointer = null;
                    };
                    return true;
                } else {
                    // If a key is not found, return false
                    return false;
                };
            } else {
                if (buckets[hashCode % 16].key === key) {
                    buckets.splice(hashCode % 16, 1, null)
                    return true;
                } else {
                    return false;
                };
            }
        } else{
            // If a key is not found, return false
            return false;
        };
    };

    const length = () => {
        // returns the number of stored keys in the hash map
        let counter = 0;
        for (let i = 0; i < buckets.length; i++) {
            if (buckets[i]){
                if (buckets[i].nextNode) {
                    counter++;
                    let pointer = buckets[i];
                    while (pointer.nextNode) {
                        pointer = pointer.nextNode;
                        counter++
                    };
                };
            } else {
                counter++;
            }
        };
        return counter;
    };

    const clear = () => {
        // removes all entries in the hash map
        buckets = new Array(16);
    };

    const keys = () => {
        // returns an array containing all the keys inside the hash map
        let keyArray = [];
        for (let i = 0; i < buckets.length; i++) {
            if (buckets[i]){
                if (buckets[i].nextNode) {
                    keyArray.push(buckets[i].key);
                    let pointer = buckets[i];
                    while (pointer.nextNode) {
                        pointer = pointer.nextNode;
                        keyArray.push(pointer.key);
                    };
                };
            } else {
                keyArray.push(buckets[i].key);
            }
        };
        return keyArray;
    };

    const values = () => {
        // returns an array containing all the values
        let valArray = [];
        for (let i = 0; i < buckets.length; i++) {
            if (buckets[i]){
                if (buckets[i].nextNode) {
                    valArray.push(buckets[i].value);
                    let pointer = buckets[i];
                    while (pointer.nextNode) {
                        pointer = pointer.nextNode;
                        valArray.push(pointer.value);
                    };
                };
            } else {
                valArray.push(buckets[i].value);
            }
        };
        return valArray;
    };

    const entries = () => {
        // returns an array that contains each key, value
        // Example: [[firstKey, firstValue], [secondKey, secondValue]]
        let entryArray = [];
        for (let i = 0; i < buckets.length; i++) {
            if (buckets[i]){
                if (buckets[i].nextNode) {
                    entryArray.push([buckets[i].key, buckets[i].value]);
                    let pointer = buckets[i];
                    while (pointer.nextNode) {
                        pointer = pointer.nextNode;
                        entryArray.push([pointer.key, pointer.value]);
                    };
                };
            } else {
                entryArray.push([buckets[i].key, buckets[i].value]);
            }
        };
        return entryArray;
    };

    return {hash, set, get, has, remove, length, clear, keys, values, entries}
};