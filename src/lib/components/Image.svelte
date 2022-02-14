<script lang="ts">
	export let alt: string;
	export let caption: string | undefined = undefined;
	export let source: string | undefined = undefined;
	export let src: string;
	export let loading: 'lazy' | 'eager' = 'lazy';
</script>

{#if source || caption}
	<figure class="full grid">
		<img {alt} class="offset" {src} />
		<figcaption>
			{#if caption}{caption}{/if}
			{#if source}
				{#if caption && source} -&nbsp;{/if}<a href={source}>Source</a>
			{/if}
		</figcaption>
	</figure>
{:else}
	<img {alt} class="offset" {loading} {src} />
{/if}

<style>
	figure {
		margin: 0;
		padding: 0;
		row-gap: var(--space-xxs);
	}

	figcaption {
		border-bottom: 1px solid var(--theme-highlight);
		font-size: var(--text-xs);
		padding-bottom: var(--space-xxs);
	}

	img {
		border-radius: var(--space-xs);
		display: block;
		width: 100%;
	}
</style>
