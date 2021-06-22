---
title: Using this with array methods
heading: Using `this` with array methods
description: In this post we explore a little known method of defining `this` within array method callbacks.
isPublished: true
published: 2021-06-10T08:00:00Z
---

## A contrived example

A fairly standard pattern to see - inline arrow functions used for callbacks:

```js
const animals = ['cat', 'dog', 'monkey'];
const cat = animals.find((animal) => animal === 'cat');
const monkey = animals.find((animal) => animal === 'monkey');
```

Oh wait, we've got some duplication in those arrow functions. You might be tempted to write:

```js
// Utility
const findAnimalInList = (list, animal) => {
	return list.find((item) => item === animal);
};

const animals = ['cat', 'dog', 'monkey'];
const cat = findAnimalInList(animals, 'cat');
const monkey = findAnimalInList(animals, 'monkey');
```

Great, duplication removed and we can extract that `findAnimalInList` function into a new file and test it, nice.

But, `findAnimalInList` is still recreating the callback function provided to `find` every time it's invoked. Also, we are abstracting more than we need. If you came to this code with fresh eyes, to know what it is actually doing, we'd need to find the extracted function, see what it does and jump back to where we were.

We've lost the context.

## There is another way

`this` way (every pun intended) allows us to extract the logic without loosing all the context.

Ever noticed in the docs that `Array.find`, `Array.some`, `Array.every`, `Array.filter` etc all accept a weird `thisArg` argument (usually as the last optional argument)?

This allows us to define `this` inside of the callback function. If we focus on extracting the logic only, not the `find`, we can retain some of the context.

```js
// Utility
function byName(animal) {
	return animal === this;
}

const animals = ['cat', 'dog', 'monkey'];
const cat = animals.find(byName, 'cat');
const monkey = animals.find(byName, 'monkey');
```

You'll see we're using a good old fashioned `function`, the reason being that arrow functions do not have their own `this`.

Like the previous example we can still isolate+test and it keeps the code DRY, without creating multiple functions. We also have the added bonus in that we could pass the `byName` function to any array function!

```js
const justCats = animals.filter(byName, 'cat');
```

This example is using strings, but `this` could also be an object or an array.

Think of all the possibilities!
