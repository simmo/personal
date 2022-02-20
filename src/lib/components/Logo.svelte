<script lang="ts">
	export let size: number;
</script>

<svg width={size} height={size} viewBox="0 0 401 401">
	<path
		class="base leaf bottom right"
		d="M205 203.129L275.017 162.705L340.023 200.228L272.508 239.207C270.962 240.1 270.009 241.751 270.008 243.537L270.001 321.486L204.992 283.961L205 203.129Z"
	/>
	<path
		class="base leaf top"
		d="M202.508 117.964L270.023 78.9842L270.016 154.044L199.999 194.467L129.992 154.058L129.999 78.9959L197.509 117.964C199.056 118.857 200.961 118.857 202.508 117.964Z"
	/>
	<path
		class="base leaf bottom left"
		d="M59.9775 200.254L124.994 162.718L195.001 203.127L194.993 283.96L129.977 321.498L129.984 243.551C129.984 241.764 129.031 240.113 127.484 239.22L59.9775 200.254Z"
	/>
	<path
		class="base diamond top right"
		d="M280.015 154.044L280.022 78.9828L345.031 116.507L345.023 191.569L280.015 154.044Z"
	/>
	<path
		class="base diamond top"
		d="M135 70.3371L200.017 32.8008L265.023 70.324L200.007 107.86L135 70.3371Z"
	/>
	<path
		class="base diamond bottom right"
		d="M280 321.485L280.006 246.425L345.023 208.888L345.016 283.947L280 321.485Z"
	/>
	<path
		class="base diamond bottom"
		d="M134.977 330.158L199.994 292.622L265 330.145L199.984 367.681L134.977 330.158Z"
	/>
	<path
		class="base diamond bottom left"
		d="M54.9692 283.974L54.9765 208.913L119.985 246.437L119.978 321.499L54.9692 283.974Z"
	/>
	<path
		class="base diamond top left"
		d="M54.9773 191.594L54.9838 116.534L120 78.9973L119.993 154.057L54.9773 191.594Z"
	/>
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

	@keyframes move {
		0% {
			transform: translate(0, 0);
		}

		100% {
			transform: translate(var(--x, 0), var(--y, 0));
		}
	}

	.base {
		animation: colours 15s infinite linear alternate, move 2s infinite ease-in-out alternate;
	}

	.leaf {
		--distance: 2%;
		opacity: 1;
	}

	.diamond {
		--distance: 6%;
		opacity: 0.4;
	}

	.top {
		--y: calc(var(--distance) * -1);
	}

	.bottom {
		--y: var(--distance);
	}

	.right {
		--x: var(--distance);
	}

	.left {
		--x: calc(var(--distance) * -1);
	}
</style>
