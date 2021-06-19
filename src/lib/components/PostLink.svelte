<script lang="ts">
	export let href: string;
	export let heading: string;
	export let description: string;
</script>

<article>
	<a {href}>
		<h3>{heading}</h3>
		<p class="description">{description}</p>
		<p class="cta">View <span>&raquo;</span></p>
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
		display: grid;
		gap: var(--space-xs);
		grid-template-rows: auto 1fr auto;
		font-weight: 300;
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
		font-size: var(--text-m);
		font-weight: 500;
		line-height: 1.4;
		transition: color 0.2s;
	}

	.cta {
		font-weight: 500;
		margin-top: var(--space-m);
	}

	.description {
		opacity: 0.7;
	}

	.cta span {
		color: var(--theme-accent);
		display: inline-block;
		opacity: 0;
		transition-property: opacity;
		transition-duration: 0.2s;
	}

	a:hover .cta span {
		opacity: 1;
	}
</style>
