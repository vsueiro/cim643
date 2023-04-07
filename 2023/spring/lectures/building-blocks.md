# JavaScript Building Blocks

```javascript
// Creating variables
let name = …

// Creating constants
const name = …
```

```javascript
// Strings
"Vini";

"🐕";

`Vini`;
```

```javascript
// Numbers

// Integer
10;

// Float
3.14;
```

```javascript
// Functions

// Without arguments

// Define
function bark() {
  alert("Woof woof");
}

// Call
bark();

// Arrow Function Alternative
let bark = () => {
  alert("Woof woof");
};

// With arguments

// Define
function scream(words) {
  alert(words + "!!!");
}

// Arrow Function Alternative
let scream = (words) => {
  alert(words + "!!!");
};

// Call
scream("Hello");
```

```javascript
// Array (or List)
let animals = ["🐕", "🐈", "🐿️"];

let ages = [2, 4, 1];
```

```javascript
// Conditions

// Single check
if ( … ) {
  …
}

// Multiple checks
if ( … ) {
  …
} else if ( … ) {
  …
} else {
  …
}
```

```javascript
let animals = ["🐕", "🐈", "🐿️"];

// Loops

for (let animal of animals) {
  console.log(animal);
}

for (let i = 0; i < animals.length; i++) {
  let animal = animals[i];
  console.log(animal);
}

let i = 0;
while (i < animals.length) {
  let animal = animals[i];
  console.log(animal);
  i++;
}

animals.forEach(function (animal) {
  console.log(animal);
});

animals.forEach((animal) => {
  console.log(animal);
});
```

```javascript
let counter = 0;

// Increment

// Add 1
counter = counter + 1;

// Add 1
counter += 1;

// Add 1
counter++;
```

```javascript
// Events

// Call bark function when button is clicked
button.onclick = bark;

// Call bark function when button is clicked
button.addEventListener("click", bark);
```

```javascript
// Object

let person = {
  name: "Vini",
  age: 31,
};
```

```javascript
// Array of Objects

let people = [
  {
    name: "Vini",
    age: 31,
  },
  {
    name: "Mari",
    age: 30,
  },
];
```

```javascript
// Array of Objects with… Arrays!

let people = [
  {
    name: "Vini",
    age: 31,
    pets: ["Mylla", "Rolinda"],
  },
  {
    name: "Mari",
    age: 30,
    pets: ["Fofinho"],
  },
];
```

```javascript
// Array of Objects with… Arrays… of Objects!!!

let people = [
  {
    name: "Vini",
    age: 31,
    pets: [
      {
        name: "Mylla",
        type: "Dog",
      },
      {
        name: "Rolinda",
        type: "Bird",
      },
    ],
  },
  {
    name: "Mari",
    age: 30,
    pets: [
      {
        name: "Fofinho",
        type: "Dog",
      },
    ],
  },
];
```

<style>
  table,
  tr,
  th,
  td {
    border: none !important;
    background: transparent !important;
  }

  pre {
    width: fit-content !important;
  }
</style>
