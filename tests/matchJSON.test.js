require('../src/setup');

describe('matchJSON', () => {
   describe('when used asymmetrically', () => {
      it('should match when input is JSON string and expected is an object', () => {
         const jsonString = JSON.stringify(
            { name: 'Mahathir', age: 94 }
         );

         expect({ message: jsonString }).toMatchObject(
            {
               message: expect.matchJSON(
                  { name: 'Mahathir', age: 94 }
               ),
            }
         );
      });

      it('should match when input is JSON string and expected is an object', () => {
         const jsonString = JSON.stringify(
            { name: 'Mahathir', age: 94 }
         );

         expect({ message: jsonString }).toMatchObject(
            {
               message: expect.matchJSON(
                  { name: 'Mahathir', age: 94 }
               ),
            }
         );
      });
   });

   describe('when used as a regular matcher', () => {
      it('should pass when input and expected are both equivalent objects', () => {
         expect({ name: 'Bot' }).matchJSON({ name: 'Bot' });
      });

      it('should pass when input in an object and expected is an equivalent JSON', () => {
         expect({ name: 'Bot' }).matchJSON(JSON.stringify({ name: 'Bot' }));
      });

      it('should pass when input is a JSON and expected is an equivalent object', () => {
         expect(JSON.stringify({ name: 'Bot' })).matchJSON({ name: 'Bot' });
      });

      it('should throw an error when input is not a JSON or an object', () => {
         let error;
         try {
            expect(123).matchJSON({ name: 'Bot' });
         } catch (e) {
            error = e;
         }
         expect(error.message).toBe('Expected 123 to be an object or JSON string!');
      });

      it('should throw an error when expected is not a JSON or an object', () => {
         let error;
         try {
            expect({ name: 'Bot' }).matchJSON(333);
         } catch (e) {
            error = e;
         }
         expect(error.message).toBe('Expected 333 to be an object or JSON string!');
      });
   });

});
