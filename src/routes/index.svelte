<script lang="ts">
	import Page from '$lib/components/Page.svelte';
</script>

<Page
	heading="Hello, I’m Mike."
	description="A UK based, Lead frontend engineer living in Sussex, working in London and remote."
>
	<p slot="intro">
		Currently <a href="https://zonedigital.com">@Zone</a>. I’ve spent over 10 years working across
		marketing and publishing sectors to deliver high-end web apps, sites and products.
	</p>

	<section>
		<h2>Projects</h2>
		<div class="projects">
			<article>
				<a href="/sort">
					<h3>Sort</h3>
					<p>Using visualisation to explore different sorting algorithms.</p>
				</a>
			</article>
			<article>
				<a href="https://snake.simmo.codes">
					<h3>Snake</h3>
					<p>A fun project to build a Snake game with CSS grid and a little bit of TypeScript.</p>
				</a>
			</article>
			<article>
				<a href="/gulp-stats">
					<h3>Gulp Stats</h3>
					<p>A Gulp plugin to display summary of the tasks run.</p>
				</a>
			</article>
		</div>
	</section>
</Page>

<style>
	section {
		display: grid;
		row-gap: var(--space-s);
	}

	.projects {
		display: grid;
		gap: var(--space-s);
		grid-template-columns: var(--grid-two-cols);
	}

	article {
		background-color: var(--theme-background-secondary);
		border-radius: var(--space-xxs);
		padding: var(--space-m);
	}

	article a {
		color: inherit;
	}
</style>
