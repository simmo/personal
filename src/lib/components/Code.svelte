<script lang="ts">
	import Prism from 'prismjs';

	export let code: undefined | string = undefined;
</script>

{#if code}
	<pre><code>{@html Prism.highlight(code.trim(), Prism.languages.javascript)}</code></pre>
{:else}
	<code><slot /></code>
{/if}

<style>
	code {
		background-color: var(--theme-background-secondary);
		border-radius: var(--space-xxs);
		display: inline-block;
		font-weight: 500;
		padding: 0 var(--space-xs);
	}

	pre {
		background-color: #101010;
		border-radius: var(--space-xxs);
		box-shadow: 0 0 var(--space-m) rgba(0, 0, 0, 0.3) inset;
		font-weight: 500;
		margin: var(--space-s) 0;
		overflow-x: auto;
		padding: var(--space-s);
		width: 100%;
	}

	pre code {
		all: unset;
		color: #fff;
		display: block;
		width: 100%;
	}

	:global(.token.comment),
	:global(.token.blockquote),
	:global(.token.shebang.important),
	:global(.token.shebang) {
		color: #75715e;
	}

	:global(.token.operator),
	:global(.token.important),
	:global(.token.keyword),
	:global(.token.rule),
	:global(.token.tag),
	:global(.token.deleted),
	:global(.token.selector),
	:global(.token.prolog),
	:global(.token.title .token.punctuation) {
		color: #f92672;
	}

	:global(.token.property),
	:global(.token.entity),
	:global(.token.atrule),
	:global(.token.command),
	:global(.token.code) {
		color: #66d9ef;
	}

	:global(.token.regex),
	:global(.token.atrule .token.property) {
		color: #fd971f;
	}

	:global(.token.pseudo-element),
	:global(.token.id),
	:global(.token.class),
	:global(.token.class-name),
	:global(.token.pseudo-class),
	:global(.token.function),
	:global(.token.namespace),
	:global(.token.inserted),
	:global(.token.symbol),
	:global(.token.url-reference .token.variable),
	:global(.token.attr-name) {
		color: #a6e22e;
	}

	:global(.token.string),
	:global(.token.url),
	:global(.token.list),
	:global(.token.cdata),
	:global(.token.attr-value),
	:global(.token.attr-value a.token.url-link) {
		color: #e6db74;
	}

	:global(.token.constant),
	:global(.token.hexcode),
	:global(.token.builtin),
	:global(.token.number),
	:global(.token.boolean) {
		color: #ae81ff;
	}

	:global(.token.doctype),
	:global(.token.punctuation),
	:global(.token.variable),
	:global(.token.macro.property) {
		color: #f8f8f2;
	}

	:global(.token.entity) {
		cursor: help;
	}

	:global(.token.title),
	:global(.token.title .token.punctuation) {
		font-weight: bold;
	}

	:global(.token.bold) {
		font-weight: bold;
	}

	:global(.token.italic) {
		font-style: italic;
	}

	/* YAML */
	:global(.language-yaml .token.atrule) {
		color: #f92672;
	}

	/* Bash */
	:global(.language-bash .token.function) {
		color: #f92672;
	}

	/* 
			<key>name</key>
			<string>User-defined constant</string>
			<key>scope</key>
			<string>constant.character, constant.other</string>
			<key>settings</key>
			<dict>
				<key>foreground</key>
				<string>#AE81FF</string>
			</dict>
		</dict>
		<dict>
			<key>name</key>
			<string>Variable</string>
			<key>scope</key>
			<string>variable</string>
			<key>settings</key>
			<dict>
				<key>fontStyle</key>
				<string></string>
			</dict>
		</dict>
		<dict>
			<key>name</key>
			<string>Keyword</string>
			<key>scope</key>
			<string>keyword</string>
			<key>settings</key>
			<dict>
				<key>foreground</key>
				<string>#F92672</string>
			</dict>
		</dict>
		<dict>
			<key>name</key>
			<string>Storage</string>
			<key>scope</key>
			<string>storage</string>
			<key>settings</key>
			<dict>
				<key>fontStyle</key>
				<string></string>
				<key>foreground</key>
				<string>#F92672</string>
			</dict>
		</dict>
		<dict>
			<key>name</key>
			<string>Storage type</string>
			<key>scope</key>
			<string>storage.type</string>
			<key>settings</key>
			<dict>
				<key>fontStyle</key>
				<string>italic</string>
				<key>foreground</key>
				<string>#66D9EF</string>
			</dict>
		</dict>
		<dict>
			<key>name</key>
			<string>Class name</string>
			<key>scope</key>
			<string>entity.name.class</string>
			<key>settings</key>
			<dict>
				<key>fontStyle</key>
				<string>underline</string>
				<key>foreground</key>
				<string>#A6E22E</string>
			</dict>
		</dict>
		<dict>
			<key>name</key>
			<string>Inherited class</string>
			<key>scope</key>
			<string>entity.other.inherited-class</string>
			<key>settings</key>
			<dict>
				<key>fontStyle</key>
				<string>italic underline</string>
				<key>foreground</key>
				<string>#A6E22E</string>
			</dict>
		</dict>
		<dict>
			<key>name</key>
			<string>Function name</string>
			<key>scope</key>
			<string>entity.name.function</string>
			<key>settings</key>
			<dict>
				<key>fontStyle</key>
				<string></string>
				<key>foreground</key>
				<string>#A6E22E</string>
			</dict>
		</dict>
		<dict>
			<key>name</key>
			<string>Function argument</string>
			<key>scope</key>
			<string>variable.parameter</string>
			<key>settings</key>
			<dict>
				<key>fontStyle</key>
				<string>italic</string>
				<key>foreground</key>
				<string>#FD971F</string>
			</dict>
		</dict>
		<dict>
			<key>name</key>
			<string>Tag name</string>
			<key>scope</key>
			<string>entity.name.tag</string>
			<key>settings</key>
			<dict>
				<key>fontStyle</key>
				<string></string>
				<key>foreground</key>
				<string>#F92672</string>
			</dict>
		</dict>
		<dict>
			<key>name</key>
			<string>Tag attribute</string>
			<key>scope</key>
			<string>entity.other.attribute-name</string>
			<key>settings</key>
			<dict>
				<key>fontStyle</key>
				<string></string>
				<key>foreground</key>
				<string>#A6E22E</string>
			</dict>
		</dict>
		<dict>
			<key>name</key>
			<string>Library function</string>
			<key>scope</key>
			<string>support.function</string>
			<key>settings</key>
			<dict>
				<key>fontStyle</key>
				<string></string>
				<key>foreground</key>
				<string>#66D9EF</string>
			</dict>
		</dict>
		<dict>
			<key>name</key>
			<string>Library constant</string>
			<key>scope</key>
			<string>support.constant</string>
			<key>settings</key>
			<dict>
				<key>fontStyle</key>
				<string></string>
				<key>foreground</key>
				<string>#66D9EF</string>
			</dict>
		</dict>
		<dict>
			<key>name</key>
			<string>Library class/type</string>
			<key>scope</key>
			<string>support.type, support.class</string>
			<key>settings</key>
			<dict>
				<key>fontStyle</key>
				<string>italic</string>
				<key>foreground</key>
				<string>#66D9EF</string>
			</dict>
		</dict>
		<dict>
			<key>name</key>
			<string>Library variable</string>
			<key>scope</key>
			<string>support.other.variable</string>
			<key>settings</key>
			<dict>
				<key>fontStyle</key>
				<string></string>
			</dict>
		</dict>
		<dict>
			<key>name</key>
			<string>Invalid</string>
			<key>scope</key>
			<string>invalid</string>
			<key>settings</key>
			<dict>
				<key>background</key>
				<string>#F92672</string>
				<key>fontStyle</key>
				<string></string>
				<key>foreground</key>
				<string>#F8F8F0</string>
			</dict>
		</dict>
		<dict>
			<key>name</key>
			<string>Invalid deprecated</string>
			<key>scope</key>
			<string>invalid.deprecated</string>
			<key>settings</key>
			<dict>
				<key>background</key>
				<string>#AE81FF</string>
				<key>foreground</key>
				<string>#F8F8F0</string>
			</dict>
		</dic */
</style>
