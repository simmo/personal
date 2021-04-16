<script lang="ts">
	export let href: string;

	const externalProps = {
		rel: 'noopener noreferrer',
	};

	let props = {
		...(href.startsWith('http') ? externalProps : null),
	};
</script>

<a {href} {...props}><slot /></a>
