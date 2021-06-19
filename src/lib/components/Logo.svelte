<script lang="ts">
	export let size: number;
</script>

<svg height={size} width={size} viewBox="0 0 310 357">
	<g
		class="base"
		fill="none"
		fill-rule="evenodd"
		stroke="#000"
		stroke-linejoin="round"
		stroke-width="30"
	>
		<polygon
			class="leaf"
			points="230 221.551858 155.001 178.241 155.001 91.62 230 48.31 230 134.93 305 178.240929"
		/>
		<polygon
			class="leaf"
			points="5 178.240929 80 134.93 80 48.31 155 91.62 154.999 178.241 80 221.551858"
		/>
		<polygon
			class="leaf"
			points="154.999 264.861 80 308.171858 80.001 221.55 155 178.24 230 221.55 230 308.171858"
		/>
		<polygon class="diamond" points="80 48.3109291 155 5 230 48.3109291 155 91.6218582" />
		<polygon class="diamond" points="5.001 91.62 80 48.31 79.999 134.931 5 178.241858" />
		<polygon class="diamond" points="230 48.31 305 91.62 305 178.241858 230 134.931858" />
		<polygon class="diamond" points="230.001 221.55 305 178.24 304.999 264.861 230 308.171858" />
		<polygon class="diamond" points="80 308.170929 155 264.86 230 308.170929 155 351.481858" />
		<polygon class="diamond" points="5 264.861858 5 178.24 80 221.55 80 308.171858" />
	</g>
</svg>

<style>
	@keyframes colours {
		0% {
			fill: var(--color-blue);
		}

		33% {
			fill: var(--color-green);
		}

		66% {
			fill: var(--color-orange);
		}

		100% {
			fill: var(--color-pink);
		}
	}

	.base {
		animation: colours 15s infinite linear alternate;
		stroke: var(--theme-background-primary);
	}

	.leaf {
		opacity: 1;
	}

	.diamond {
		opacity: 0.3;
	}
</style>
