<script lang="ts">
	export let href: string;
	export let heading: string;
	export let description: string;
</script>

<article>
	<a {href}>
		<h3>{heading}</h3>
		<p>{description}</p>
	</a>
</article>

<style>
	article {
		display: grid;
	}

	a {
		background-color: var(--theme-background-secondary);
		border-radius: var(--space-xxs);
		color: inherit;
		display: block;
		padding: var(--space-m);
	}

	a:hover,
	a:focus {
		text-decoration: none;
	}

	a:hover h3 {
		color: var(--theme-accent);
	}

	h3 {
		transition: color 0.3s;
	}
</style>
