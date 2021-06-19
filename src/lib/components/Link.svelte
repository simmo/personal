<script lang="ts">
	export let href: string;

	const externalProps = {
		rel: 'noopener noreferrer',
	};

	let props = {
		...(href.startsWith('http') ? externalProps : null),
	};
</script>

<a {href} {...props} class:withIcon={$$slots.icon}><slot name="icon" /><slot /></a>

<style>
	.withIcon {
		align-items: center;
		display: inline-grid;
		gap: var(--space-xs);
		grid-template-columns: auto 1fr;
	}
</style>
