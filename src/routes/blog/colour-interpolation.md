---
title: Colour interpolation
heading: Colour interpolation
description: Interpolation is a technique that allows you to bridge the gap between two or more points, in this post we apply concept to colour.
og: {
	image: /preview/colour-interpolation.jpg
}
isPublished: true
published: 2021-07-25T09:00:00Z
---

<script>
  import ColourInterpolationVisualiser from '$lib/projects/colour-interpolation/components/ColourInterpolationVisualiser.svelte';
  import ColourInterpolation from '$lib/projects/colour-interpolation/components/ColourInterpolation.svelte';
</script>

Previously, [we took a look at colour and how we describe colour to a machine](/blog/colouring-the-web).

In this post we'll look at how we can get from one colour to another.

We'll focus on RGB verses HSL with linear interpolation. Lets break that down:

`RGB` - A colour made from mixing red, green and blue together.

`HSL` - A colour made from picking a hue (a degree of colour), saturation (percentage between shade of grey and full colour) and lightness (percentage between black and white).

`Linear interpolation` - Getting from one thing to another at a constant speed.

## RGB verses HSL

Well, I say "verses", but one is not is not better than the other, just different. HSL uses a hue, therefore interpolating will go through a variable number of colour hues, depending on the the colours being interpolated between.

Lets look at a few examples.

### Blue to red

#### HSL

<ColourInterpolation from={[50,150,220]} to={[192,57,43]} stops={10} mode="HSL" />

#### RGB

<ColourInterpolation from={[50,150,220]} to={[192,57,43]} stops={10} />

Same start and end but look at the difference between! These colours have hues that are far apart, resulting in several intense changes for HSL. RGB on the other hand, is much smoother but gets a little grey in the middle.

### Blue to purple

#### HSL

<ColourInterpolation from={[50,150,220]} to={[80,33,100]} stops={10} mode="HSL" />

#### RGB

<ColourInterpolation from={[50,150,220]} to={[80,33,100]} stops={10} />

Here the hues are much closer. Which results in a much more subtle change for HSL but the same smooth transition for RGB. Again, HSL is much more vibrant and RGB a little duller.

## How does it work?

Assuming we provide the colours as arrays, as both RGB and HSL have 3 values we can use the same function to interpolate.

```js
const interpolate = (from, to) => {
	return (factor) => {
		const next = [...from];

		for (let i = 0; i < next.length; i++) {
			next[i] += Math.round(factor * (to[i] - next[i]));
		}

		return next;
	};
};

const colourStop = interpolate([52, 152, 219], [192, 57, 43]);

colourStop(0.5);
```

## What do I use?

Either! The point of this post is to say, one choice does not fit all. Depending on your use case and the colours you are using, one might provide a nicer feel. Also, linear interpolation might not be right for you, perhaps you need to look at interpolating the individual values independently of one another.

The main take away is, experiment!

<ColourInterpolationVisualiser />
