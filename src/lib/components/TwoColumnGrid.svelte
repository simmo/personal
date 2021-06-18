<div class="container">
	<slot />
</div>

<style>
	.container {
		display: grid;
		gap: var(--space-m);
	}

	@media screen and (min-width: 30rem) {
		.container {
			grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
		}
	}
</style>
