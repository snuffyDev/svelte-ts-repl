<script>
	import { browser } from '$app/env';

	import REPL from '$lib/sk';
	import { onMount } from 'svelte';
	let repl;
	onMount(() => {
		repl.set({
			components: [
				{
					name: 'App',
					type: 'svelte',
					source:
						'<scr' +
						'ipt lang="ts">' +
						`\n  import Codeblock from './Codeblock.svelte';
	let name: string = 'world';

	interface TestingOutput {
		body: Record<string, any>
	}

	let testOutput: TestingOutput = {
		body: {
			output: 'Interfaces Work'
		}
	}

	function typeGuard(input: TestingOutput): input is TestingOutput {
		return (input as TestingOutput).body !== undefined;
	}

	enum EXAMPLE {
		WORKS = 'It works!'
		BROKEN = "Dang :( I'm broken"
	}
	` +
						'</scr' +
						'ipt>' +
						`

<h2>Hello {name}!</h2>
<code>name is typeof {typeof name}</code>
<h1>
	Enums
</h1>
<Codeblock>
		{\`enum EXAMPLE {
     WORKS = 'It works!'
     BROKEN = "Dang :( I'm broken"
}\`}
</Codeblock>
Output:
<br>
<Codeblock>
WORKS: {EXAMPLE.WORKS}
BROKEN: {EXAMPLE.BROKEN}
</Codeblock>

<h1>Type Guards</h1>

<Codeblock>
{\`interface TestingOutput {
	body: Record<string, any>
}

let testOutput: TestingOutput = {
  body: {
    output: 'Interfaces Work'
  }
}

function typeGuard(input: TestingOutput): input is TestingOutput {
  return (input as TestingOutput).body !== undefined;
}	\`}
</Codeblock>

Output: {typeGuard(testOutput)}


<style>

	h1 {

  margin: .67em 0;
  font-weight: 600;
  padding-bottom: .3em;
  font-size: 2em;
  border-bottom: 1px solid #21262d;
	}
</style>`
				},
				{
					name: 'Codeblock',
					type: 'svelte',
					source: `<pre>
<slot>
</slot>
</pre>
<style>
	pre {
		font-size:1rem;
		border: hsl(0, 0%, 80%) solid 1px;
		border-radius: 0.3rem;
	background: hsl(0, 0%, 96%);
		padding: 1rem;
		color: hsl(45, 7%, 45%);

	}
</style>`
				}
			]
		});
	});
</script>

{#if browser}
	<REPL bind:this={repl} showAst embedded relaxed showModified />
{/if}

<style lang="scss">
	:global {
		html,
		body {
			font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell,
				'Open Sans', 'Helvetica Neue', sans-serif;
		}
	}
</style>
