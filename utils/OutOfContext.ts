export class OutOfContext extends Error {
 constructor() {
  super(
   'Out of context: This component must be used within a valid context provider.'
  );
  this.name = 'OutOfContext';
 }
}
