<script lang="ts" context="module">
	import type { PostMeta } from '$lib/types';

	export const meta: PostMeta = {
		title: 'Using this with array methods',
		heading: 'Using `this` with array methods',
		description:
			'In this post we explore a little known method of defining `this` within array method callbacks.',
		isPublished: true,
		published: new Date('2021-06-10T08:00:00Z'),
	};
</script>

<script lang="ts">
	import Code from '$lib/components/Code.svelte';
	import Copy from '$lib/components/Copy.svelte';
	import Page from '$lib/components/Page.svelte';
</script>

<Page {meta}>
	<Copy>
		<h2>A contrived example</h2>
		<p>A fairly standard pattern to see - inline arrow functions used for callbacks:</p>

		<Code
			code={`
const animals = ['cat', 'dog', 'monkey'];
const cat = animals.find(animal => animal === 'cat');
const monkey = animals.find(animal => animal === 'monkey');
  `}
		/>

		<p>
			Oh wait, we've got some duplication in those arrow functions. You might be tempted to write:
		</p>

		<Code
			code={`
// Utility
const findAnimalInList = (list, animal) => {
  return list.find(item => item === animal);
};

const animals = ['cat', 'dog', 'monkey'];
const cat = findAnimalInList(animals, 'cat');
const monkey = findAnimalInList(animals, 'monkey');
`}
		/>

		<p>
			Great, duplication removed and we can extract that <Code>findAnimalInList</Code> function into
			a new file and test it, nice.
		</p>
		<p>
			But, <Code>findAnimalInList</Code> is still recreating the callback function provided to <Code
				>find</Code
			> every time it's invoked. Also, we are abstracting more than we need. If you came to this code
			with fresh eyes, to know what it is actually doing, we'd need to find the extracted function, see
			what it does and jump back to where we were.
		</p>
		<p>We've lost the context.</p>

		<h2>There is another way</h2>
		<p>
			<Code>this</Code> way (every pun intended) allows us to extract the logic without loosing all the
			context.
		</p>
		<p>
			Ever noticed in the docs that <Code>Array.find</Code>
			<Code>Array.some</Code>
			<Code>Array.every</Code>
			<Code>Array.filter</Code> etc all accept a weird <Code>thisArg</Code>
			argument (usually as the last optional argument)?
		</p>
		<p>
			This allows us to define <Code>this</Code> inside of the callback function. If we focus on extracting
			the logic only, not the <Code>find</Code>, we can retain some of the context.
		</p>
		<Code
			code={`
// Utility
function byName(animal) {
  return animal === this;
}

const animals = ['cat', 'dog', 'monkey'];
const cat = animals.find(byName, 'cat');
const monkey = animals.find(byName, 'monkey');
`}
		/>

		<p>
			You'll see we're using a good old fashioned <Code>function</Code>, the reason being that arrow
			functions do not have their own <Code>this</Code>.
		</p>
		<p>
			Like the previous example we can still isolate+test and it keeps the code DRY, without
			creating multiple functions. We also have the added bonus in that we could pass the <Code
				>byName</Code
			>
			function to any array function!
		</p>
		<Code
			code={`
const justCats = animals.filter(byName, 'cat');
`}
		/>
		<p>
			This example is using strings, but <Code>this</Code> could also be an object or an array.
		</p>
		<p>Think of all the possibilities!</p>
	</Copy>
</Page>
