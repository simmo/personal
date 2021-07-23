<script lang="ts">
	export let id: string;
	export let ratio: number;
</script>

<div class="wrap">
	<div class="iframe-wrap" style={`padding-bottom:${ratio}%`}>
		<iframe
			title="Giphy image"
			src={`https://giphy.com/embed/${id}`}
			width="100%"
			height="100%"
			frameBorder="0"
			class="giphy"
			allowFullScreen
		/>
	</div>
	<p><a href={`https://giphy.com/gifs/${id}`}>via GIPHY</a></p>
</div>

<style>
	.wrap {
		display: grid;
		gap: var(--space-xs);
		max-width: 30vw;
	}

	.iframe-wrap {
		border-radius: var(--space-xxs);
		height: 0;
		overflow: hidden;
		position: relative;
		width: 100%;
	}

	.giphy {
		position: absolute;
	}

	p {
		font-size: var(--text-xs);
	}

	a {
		color: var(--theme-text-secondary);
	}
</style>
