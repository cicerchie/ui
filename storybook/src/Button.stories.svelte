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

<Story name="Secondary" args={{ isSecondary: true }} />

<Story name="White" args={{ isWhite: true }} />

<Story name="Small" args={{ isSmall: true }} />

<Story name="Block" args={{ isBlock: true }} />

<Story name="Loading state" args={{ isLoading: true }} />

<Story name="Disabled" args={{ isDisabled: true }} />

<Story name="Form ID" args={{ form: 'contact_form' }} />

<Story name="ID" args={{ id: 'with_id' }} />

<Story name="As reset" args={{ isReset: true }} />

<Story name="As submit" args={{ isSubmit: true }} />

<Story name="With custom CSS class" args={{ class: 'bg-pink-500' }} />

<Story name="As link" args={{ href: 'https://github.com/cicerchie/ui' }} />

<Story
	name="As link w/ custom target"
	args={{ href: 'https://github.com/cicerchie/ui', target: '_blank' }}
/>
