# handy-jest-matchers

## Installation
```
npm i handy-jest-matchers
```

----

## Usage
1. Add `"setupFilesAfterEnv": ["handy-jest-matchers/src/setup.js"]` to your jest config file
2. Use as follows:
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