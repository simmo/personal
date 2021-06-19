<script lang="ts" context="module">
	import type { PostMeta } from '$lib/types';

	export const meta: PostMeta = {
		title: 'Maze Generation',
		heading: 'Maze Generation',
		description: 'Exploring the use of a recursive backtracker algorithm to generate a Maze.',
		og: {
			image: '/preview/maze.jpg',
		},
		isPublished: true,
		published: new Date('2021-05-02T18:00:00Z'),
	};
</script>

<script lang="ts">
	import Code from '$lib/components/Code.svelte';
	import ColourSquare from '$lib/components/ColourSquare.svelte';
	import Copy from '$lib/components/Copy.svelte';
	import Link from '$lib/components/Link.svelte';
	import Page from '$lib/components/Page.svelte';
	import Maze from '$lib/projects/maze/Maze.svelte';
</script>

<Page {meta}>
	<p slot="intro">
		I'm not sure why or if I'll ever need to create a maze as part of a project but it does make for
		an interesting code challenge!
	</p>

	<Maze />

	<Copy>
		<h2>Research</h2>
		<p>
			This Wikipedia article on <Link
				href="https://en.wikipedia.org/wiki/Maze_generation_algorithm"
			>
				maze generation algorithms
			</Link> was a great help.
		</p>
		<blockquote>
			<ol>
				<li>Choose the initial cell, mark it as visited and push it to the stack</li>
				<li>
					While the stack is not empty
					<ol>
						<li>Pop a cell from the stack and make it a current cell</li>
						<li>
							If the current cell has any neighbours which have not been visited
							<ol>
								<li>Push the current cell to the stack</li>
								<li>Choose one of the unvisited neighbours</li>
								<li>Remove the wall between the current cell and the chosen cell</li>
								<li>Mark the chosen cell as visited and push it to the stack</li>
							</ol>
						</li>
					</ol>
				</li>
			</ol>
		</blockquote>
		<h2>Implementation</h2>
		<p>
			Note: The current cell is shown in <ColourSquare value="--color-green">green</ColourSquare> with
			the cells in the stack shown in <ColourSquare value="--theme-highlight">grey</ColourSquare>.
			When the algorithm is backtracking, the cell is shown in <ColourSquare value="--color-pink"
				>pink</ColourSquare
			>.
		</p>
		<h3>Stack</h3>
		<p>One important feature of this algorithm is the use of a stack.</p>
		<p>
			You can think of a stack like a pile of plates ready to be washed up - as you are given a
			plate you place it down on top of the previous, this is known as a 'push'. When you go to wash
			one up you take it from the top of the pile, known as a 'pop'. This is a last-in, first-out
			system.
		</p>
		<p>
			In JavaScript/TypeScript, we can use an array for this structure. It helpfully has the methods <Code
				>push</Code
			>
			and
			<Code>pop</Code> that can be used exactly as needed.
		</p>
		<h3>The loop</h3>
		<p>
			When we visit a cell, we push it into the stack. We look at the neighbouring cells, that have
			not yet been visited, picking one at random, this becomes the next cell. We remove the wall
			between the current and the next. The next becomes our current cell. Repeat.
		</p>
		<p>
			However, there comes a time when the current cell has no unvisited neighbours, we have no next
			cell to go to - we've reached a dead-end. This is where backtracking and the stack come into
			play.
		</p>
		<p>
			We 'pop' an item from the stack and see if it has any unvisited neighbours. If it does, make
			this the current and carry on. If not, keep popping from the stack, checking for unvisited
			neighbours, until our stack becomes empty.
		</p>
		<p>When the stack is empty we're done!</p>
	</Copy>
</Page>
