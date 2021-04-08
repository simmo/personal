<script lang="ts">
	import Page from '$lib/components/Page.svelte';
</script>

<Page
	heading="Hello, I’m Mike."
	description="A UK based, Lead frontend engineer living in Sussex, working in London and remote."
>
	<p slot="intro">
		Currently @Zone. I’ve spent over 10 years working across marketing and publishing sectors to
		deliver high-end web apps, sites and products.
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
				<a href="/snake">
					<h3>Snake</h3>
					<p>
						A fun project to build a Snake game with CSS grid and a little bit of TypeScript.
					</p></a
				>
			</article>
		</div>
	</section>
</Page>

<style>
	section {
		display: grid;
		gap: var(--space-s);
	}

	.projects {
		display: grid;
		gap: var(--space-s);
		grid-template-columns: repeat(2, 1fr);
	}

	article {
		background-color: var(--theme-background-secondary);
		border-radius: var(--space-xxs);
		padding: var(--space-s);
	}

	a {
		color: inherit;
	}
</style>
