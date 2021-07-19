---
title: Array destructuring for function arguments
heading: Array destructuring for function arguments
description: Maybe not an everyday solution but certainly an interesting way to solve an edge case problem.
isPublished: true
published: 2021-06-01
---

Over the weekend while working on my Friday fun day project I encountered a problem I've not had in a while. I was creating a function to generate a random number within a range and I wanted to be able to optionally provide arguments, or in other words use different function signatures, where the first argument is optional.

For example I wanted to write:

```js
// Return a random number between 0 - 20
random(20);

// Return a random number between 10 - 20
random(10, 20);
```

With the first example, `from` defaults to `0`, with `to` being the first argument given to the function, `20`.

In the second example, `from` is the first argument, but `to` is second.

How can we write this function where the arguments shift?

Usually I'd opt for a function with a single argument that accepts an object, but this felt like overkill for a function with a very fix job.

## Solution 1

We could use several `if` statements.

```js
function random(a, b) {
	const from = typeof b !== 'undefined' ? a : 0;
	const to = typeof b !== 'undefined' ? b : a;

	return from + Math.random() \* (to - from);
}
```

👎 This has duplication and is executing the same condition twice.

## Solution 2

We could use a single condition by using let.

```js
function random(a, b) {
	let from;
	let to;

	if (typeof b !== 'undefined') {
		from = a;
		to = b;
	} else {
		from = 0;
		to = a;
	}

	return from + Math.random() \* (to - from);
}
```

👎 Eeeek, now it has got a bit long and the declaration of the variable is separate from the value being defined.

## Final solution

The method I settled on was to use array de-structuring:

```js
function random(a, b) {
	const [from, to] = typeof b !== 'undefined' ? [a, b] : [0, a];

	return from + Math.random() \* (to - from);
}
```

👍 Now we have the condition once and the value declared and defined in the same place.

What do you think?

Does the array destructing pattern work for you?

Any other ways this could be done?

## Bonus round

My final function looked like this:

```ts
export function random(within: number): number;
export function random(from: number, to: number): number;
export function random(a: number, b?: number) {
	const [from, to] = typeof b !== 'undefined' ? [a, b] : [0, a];

	return from + Math.random() * Math.abs(from - to);
}
```

I've been able to leverage TypeScript's function overloading to define some annotations to each use-case of the function - this means if the developer (lol, just me) using my function just provides one argument they will get documentation based on how they are using the function.
