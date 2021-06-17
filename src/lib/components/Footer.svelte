<script lang="ts">
	const now = new Date();
</script>

<footer class="main">&copy; {now.getFullYear()} Mike Simmonds</footer>

<style>
	footer {
		border-top: 1px solid var(--theme-background-secondary);
		color: var(--theme-text-secondary);
		font-size: var(--text-xs);
		padding-top: var(--space-m);
		padding-bottom: max(var(--space-m), env(safe-area-inset-bottom));
	}
</style>
