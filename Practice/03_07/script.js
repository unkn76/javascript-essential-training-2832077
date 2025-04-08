/**
 * Practice: Building objects
 *
 * - Create JavaScript objects based on objects in your current environment.
 * - Give each object an identifiable name.
 * - Create properties to describe the objects and set their values.
 * - Find an object that has another object inside of it to create a nested object.
 * - Test your objects in the browser console by accessing the entire object and its specific properties.
 */

const vtrident = {
  name: "Voron Trident",
  mainColor: "Green",
  secondColor: "Natural",
  materialType: "FDM",
  dimSize: {
    xaxis: 250,
    yaxis: 250,
    zaxis: 250,
  },
};

console.log(vtrident.dimSize.zaxis);
