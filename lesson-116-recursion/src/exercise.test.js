import {
  fibonacci
} from './exercise';

describe('fibonacci', () => {
  it('does what is expected', () => {

      // Note that we will just say that any negative numbers will just return 1.
      expect(fibonacci(-1)).toBe(1); 
      
      expect(fibonacci(0)).toBe(1); 
      expect(fibonacci(1)).toBe(1); 
      expect(fibonacci(2)).toBe(2); 
      expect(fibonacci(3)).toBe(3); 
      expect(fibonacci(4)).toBe(5); 
      expect(fibonacci(5)).toBe(8); 
      expect(fibonacci(6)).toBe(13); 
      expect(fibonacci(7)).toBe(21); 

  });
});

