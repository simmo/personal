---
title: Colouring the web
heading: Colouring the web
description: How do you define a colour for a machine?
og: { image: /preview/colouring-the-web.jpg }
isPublished: true
published: 2021-06-28T08:30:00Z
---

<script>
  import HexToRgbConverter from '$lib/projects/colour-the-web/components/HexToRgbConverter.svelte';
  import HexVisualiser from '$lib/projects/colour-the-web/components/HexVisualiser.svelte';
  import HslVisualiser from '$lib/projects/colour-the-web/components/HslVisualiser.svelte';
  import RgbVisualiser from '$lib/projects/colour-the-web/components/RgbVisualiser.svelte';
  import ColourSquare from '$lib/components/ColourSquare.svelte';
</script>

When building stuff of the web, it's likely you'll need to inject a little bit of colour into your project at some point.

But, how do we describe a colour to a machine?

In the web world at least we can express colour in several different formats. The main ones we'll look at today are **Hex**, **RGB** and **HSL**.

## Hex (hexadecimal)

A hex code is made from a six-digit (sometimes three digits, [we'll get to that](#hex-shorthand)), three-byte hexadecimal number.

Each byte represents the red, green and blue components of a colour.

Now, that all sounds a bit nerdy and this is supposed to be about the visual medium of colour so, let's visualise.

The hex code for this <ColourSquare value="#bada55">green</ColourSquare>-ish colour is my favourite hex code, `#bada55`. To use it in CSS we'd write something like this:

```css
.thing {
	color: #bada55;
}
```

`#` - Tells the browser we're using a hex.

`ba` - Red component.

`da` - Green component.

`55` - Blue component.

What are these letters and numbers?! How does `ba` mean 'red'?!

Probably a post for another day, but briefly put, hexadecimal or base 16, uses 16 symbols to represent a number (`0-9` and `A-F`, where the latter represents `10-15`). We, humans, favour the simpler base 10 (`0-9`), decimal system, thank goodness.

We'll use [parseInt](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/parseInt) in JavaScript to humanise the value:

```js
parseInt('ba', 16);
// → 186
```

Here we are asking for a string with a value of `"ba"` to be parsed as an integer. To help JavaScript know what it's dealing with, we provide a radix (the base) of `16` to tell it to expect base 16.

<HexVisualiser value="#bada55" />

### Achromatic

You may notice that when all the colour components are the same, we get a shade of grey.

### Hex shorthand

Hex codes can also be provided as three digits if each colour component has two of the same digit.

For example `#ff99cc` could be written as `#f9c`.

In a time, long ago, before CSS variables and CSS-in-JS, where you'd be writing the same hex code over and over, optimisations like this could help reduce the size of your files. However, most pre/post-processing systems will make this optimisation on your behalf, when minifying.

### Alpha

You can optionally provide a fourth component to a hex that represents the alpha channel.

For example, `#bada5580`.

As with the colours, this is provided as a hex. `0` is transparent and `1` is opaque. `0.5` is semi-transparent.

## RGB (Red, Green, Blue)

Following on from the above, if we convert our hex code to RGB we get a nicer decimal value.

Here's a converter that does just that.

<HexToRgbConverter value="#bada55" />

These values are between `0-255`, where `0` is `0%` and `255` is `100%` of each colour component.

We can use an RGB value in CSS with:

```css
.thing {
	color: rgb(186, 218, 85);
}
```

Much like the hex, as before:

`rgb` tells the browser we're using RGB and to use the values between the parenthesise.

`186` is the red component.

`218` is the green component.

`85` is the blue component.

If red, green and blue are all `255` (`100%`) what would you expect? Well, having two kids who like to use **all** the paints 🙈, my expectation would be a murky brown! This however is not what we get, in fact `rgb(255, 255, 255)` gives us <ColourSquare value="rgb(255,255,255)">white</ColourSquare> and `rgb(0, 0, 0)`, <ColourSquare value="rgb(0,0,0)">black</ColourSquare>.

What! Yep, I know, madness.

Think of it like this - imagine you're in a completely dark room and you have three torches, one for each colour component (red, green and blue) and these torches are all off (set to `0`). What colour would the room be? Well, your torches are off, the room is black and void of light.

Now let's turn your torches on (set to `255`) and shine them all together at a single point - you'd get white! [Weird, but, SCIENCE](https://youtu.be/kEnz_3miiAc).

<RgbVisualiser  value="#bada55" />

### Achromatic

As with hex, when all the digits are the same we get a shade of grey.

### Alpha

To use alpha you need to switch out `rgb` for `rgba` and provide a fourth argument.

For example, `rgba(186, 218, 85, 0.5)`.

`0` is transparent and `1` is opaque. `0.5` is semi-transparent.

## HSL (Hue, Saturation, Lightness)

Compared to Hex and RGB, which focus on the mixing of the three core colours, HSL is a little more complicated. It does, however, better align with how we perceive colour-making.

**Hue** is a degree on the colour wheel from `0-360`. `0` = Red, `120` = Green and `240` = Blue.

**Saturation** is a percentage, where `0%` means a shade of grey, `100%` being the full colour.

**Lightness** is a percentage, where `0%` is black and `100%` is white.

<HslVisualiser value="#bada55" />

As with RGB, we use a similar syntax to tell the browser what do show.

`hsl` tells the browser we're using HSL and to use the values between the parenthesise.

`74` is the hue (degrees).

`64%` is the saturation.

`59%` is the lightness.

### Achromatic

Unlike hex and RGB, HSL becomes achromatic when you drop saturation down to `0`. You can then use lightness to change the shade.

### Alpha

To use alpha you need to switch out `hsl` for `hsla` and provide a fourth argument.

For example, `hsla(74, 64%, 59%, 0.5)`.

`0` is transparent and `1` is opaque. `0.5` is semi-transparent.

## What should I use?

Personally I lean towards using Hex codes for fixed colours, but more to `rgb` and `hsl` when needing to have more explicit control or power to manipulate the colour. `hsl`, for example, can play really nicely with theming where you might want to save the hue and saturation to a CSS custom property and alter the lightness based on context.

For example:

```css
:root {
	--hs: 74, 64%;
}

body {
	background-color: hsl(var(--hs), 90%);
}

a {
	color: hsl(var(--hs), 30%);
}
```

## Next up

In my next post, we'll take a look at programmatically manipulating colours and how we might interpolate between them.
