# handy-jest-matchers

A (soon to be) collection of handy extra Jest matchers:

1. matchJSON

## Installation
```
npm i handy-jest-matchers
```

----

## Usage
1. Add `"setupFilesAfterEnv": ["handy-jest-matchers/src/setup.js"]` to your Jest config file
2. Use as follows in any of your tests:
```
// matchJSON

describe('simpleTest', () => {
   it('should pass', () => {
      expect({
         name: "Bob",
         occupation: {
            title: 'soldier',
            location: 'middle west'
         }
      }).toMatchObject({
         name: "Bob",
         occupation: expect.matchJSON(
            `{"title":"soldier","location":"middle west"}`
         )
      })
    })
})

```