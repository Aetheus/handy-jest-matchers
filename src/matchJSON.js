
function toObject(input) {
    if (typeof input === 'object') {
        return { ...input };
    } else if (typeof input === "string") {
        try {
            return JSON.parse(input);
        } catch (e) {
            throw new Error (`Expected ${input} to be an object or JSON string!`);
        }
    } else {
        throw new Error (`Expected ${input} to be an object or JSON string!`);
    }
}

function stripUndefined(input) {
    for (let key in input) {
        if (typeof input[key] === 'undefined') {
            delete input[key];
        }
    }
}

module.exports = function (actual, expected) {
    let message;
    let pass = false;

    const actualObject = toObject(actual);
    const expectedObject = toObject(expected);

    stripUndefined(actualObject);
    stripUndefined(expectedObject);

    try {
        // TODO: clean this up
        expect(actualObject).toMatchObject(expectedObject);
        pass = true;
    } catch (e) {
        message = `${actualObject} did not match ${expectedObject}`;
    }

    return {
        pass,
        message: () => message
    }
}
