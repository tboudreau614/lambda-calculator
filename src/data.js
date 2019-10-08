// STEP 1 - Get the modules here exported before building out your components
// Don't worry about bringing all of these into the same file.
// Export them as necessary and import each array into its appropriate
// file. No real tricks here just be aware of what is in each array
// and how you'll access the data.

export const numbers = ["3", "2", "1", "6", "5", "4", "9", "8", "7", ".", "0"];

export const operators = [
  {
    char: "/",
    value: "/",
    op: function (l, r) { return l / r; }
  },
  {
    char: "x",
    value: "*",
    op: function (l, r) { return l * r; }
  },
  {
    char: "-",
    value: "-",
    op: function (l, r) { return l - r; }
  },
  {
    char: "+",
    value: "+",
    op: function (l, r) { return l + r; }
  },
  {
    char: "=",
    value: "="
  }
];

export const specials = ["C", "+/-", "%"];