declare module 'maath/random/dist/maath-random.esm' {
    const random: {
      // ... other methods or properties from maath-random.esm
  
      // Add the type definition for inSphere
      inSphere: (
        array: Float32Array,
        options: { radius: number }
      ) => Float32Array;
    };
  
    export default random;
  }
  