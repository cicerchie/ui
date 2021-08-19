<script lang="ts">
	import { Meta, Story, Template } from '@storybook/addon-svelte-csf';

	import { Button } from '../../src/lib';

	const meta = {
		title: 'Button',
		component: Button,
		argTypes: {
			label: {
				defaultValue: 'Click me'
			},
			onClick: { action: 'onClick' }
		}
	};
</script>

<Meta {...meta} />

<Template let:args>
	<Button {...args} on:click={args.onClick}>{args.label}</Button>
</Template>

<Story name="Primary" />

<Story name="Secondary" args={{ secondary: true }} />

<Story name="White" args={{ white: true }} />

<Story name="Small" args={{ sm: true }} />

<Story name="Block" args={{ block: true }} />

<Story name="Loading state" args={{ loading: true }} />

<Story name="Disabled" args={{ disabled: true }} />

<Story name="Form ID" args={{ form: 'contact_form' }} />

<Story name="As reset" args={{ reset: true }} />

<Story name="As submit" args={{ submit: true }} />

<Story name="With custom CSS class" args={{ class: 'bg-pink-500' }} />

<Story name="As link" args={{ href: 'https://github.com/cicerchie/ui' }} />

<Story
	name="As link w/ custom target"
	args={{ href: 'https://github.com/cicerchie/ui', target: '_blank' }}
/>
