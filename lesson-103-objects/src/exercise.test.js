import {
  getStudentsName,
  getStudentsAge,
  getStudentsStreetName,
  sumStudentsFavoriteNumbers,
  getStudentAddressAsFormattedString,
  createStudent,
  createStudentWithAddress,
  callFunctionOnObject,
  copyObject,
  copyObjectButChangeValueToILoveJavaScript,
  mergeObjects,
} from './exercise';

describe('getStudentsName', () => {
  it('does what is expected', () => {
    const student = {
      name: 'bob',
      age: 99,
    };
    expect(getStudentsName(student)).toBe('bob');
  });
});

describe('getStudentsAge', () => {
  it('does what is expected', () => {
    const student = {
      name: 'bob',
      age: 99,
    };
    expect(getStudentsAge(student)).toBe(99);
  });
});

describe('getStudentsStreetName', () => {
  it('does what is expected', () => {
    const student = {
      name: 'bob',
      age: 99,
      address: {
        streetName: 'Bob Lane',
        streetNumber: 123,
        city: 'JaneVille',
      },
    };
    expect(getStudentsStreetName(student)).toBe('Bob Lane');
  });
});

describe('sumStudentsFavoriteNumbers', () => {
  it('does what is expected', () => {
    const student1 = {
      name: 'bob',
      favoriteNumber: 1,
    };

    const student2 = {
      name: 'claire',
      favoriteNumber: 101,
    };
    expect(sumStudentsFavoriteNumbers(student1, student2)).toBe(102);
  });
});

describe('getStudentAddressAsFormattedString', () => {
  it('does what is expected', () => {
    const student = {
      name: 'bob',
      age: 99,
      address: {
        streetName: 'Bob Lane',
        streetNumber: 123,
        city: 'JaneVille',
      },
    };
    expect(getStudentAddressAsFormattedString(student)).toBe(
      '123 Bob Lane, JaneVille'
    );
  });
});

describe('createStudent', () => {
  it('does what is expected', () => {
    const student = createStudent('alice', 123);

    expect(student).toEqual({
      name: 'alice',
      age: 123,
    });
  });
});

describe('createStudentWithAddress', () => {
  it('does what is expected', () => {
    const address = {
      streetName: 'Alice Lane',
      streetNumber: 33,
      city: 'JaneVille',
    };
    const student = createStudentWithAddress('alice', 123, address);

    expect(student).toEqual({
      name: 'alice',
      age: 123,
      address: {
        streetName: 'Alice Lane',
        streetNumber: 33,
        city: 'JaneVille',
      },
    });
  });
});

describe('callFunctionOnObject', () => {
  it('does what is expected', () => {
    const student = {
      name: 'bob',
      getFavoriteColor: () => 'red',
    };

    expect(callFunctionOnObject(student)).toBe('red');
  });
});

describe('copyObject', () => {
  it('does what is expected', () => {
    const object = {
      name: 'foo',
      value: 'bar',
    };

    const newObject = copyObject(object);

    expect(newObject.name).toBe('foo');
    expect(newObject.value).toBe('bar');

    expect(newObject).not.toBe(object);
  });
});

describe('copyObjectButChangeValueToILoveJavaScript', () => {
  it('does what is expected', () => {
    const object = {
      name: 'foo',
      value: 'bar',
    };

    const newObject = copyObjectButChangeValueToILoveJavaScript(object);

    expect(newObject.name).toBe('foo');
    expect(newObject.value).toBe('I love JavaScript!');

    // If these are changing, it means that you have mutated the original object!
    expect(object.name).toBe('foo');
    expect(object.value).toBe('bar');
  });
});

describe('mergeObjects', () => {
  it('does what is expected', () => {
    const object1 = {
      name: 'foo',
      value: 'bar',
    };

    const object2 = {
      label: 'FiFo',
      value: 'charles',
    };

    const result = mergeObjects(object1, object2);

    // Note the use of `.toEqual` here!
    // Unlike a `===` comparison, the toEqual function will compare the values of the objects themselves.
    // See the next test for a demonstration.
    expect(result).toEqual({
      name: 'foo',
      label: 'FiFo',
      value: 'charles',
    });
  });
});

// You don't have to do anything here.
// This test for demonstration purposes
describe('Equality demonstration', () => {
  it('Behaves as expected', () => {
    const object1 = {
      value: 1,
    };

    const object2 = {
      value: 1,
    };

    // Comparison of primitives, therefore equal
    const objectValuesAreEqual = object1.value === object2.value;
    expect(objectValuesAreEqual).toBe(true);

    // Comparison of objects - therefore not equal
    const objectsAreEqual = object1 === object2;
    expect(objectsAreEqual).toBe(false);

    //To be does a shallow comparison
    expect(object1).not.toBe(object2);

    //To equal does a deep comparison
    expect(object1).toEqual(object2);
  });
});
