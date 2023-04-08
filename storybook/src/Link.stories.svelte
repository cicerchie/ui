<script lang="ts">
	import { Meta, Story, Template } from '@storybook/addon-svelte-csf';

	import { Link } from '../../src/lib';

	const meta = {
		title: 'Link',
		component: Link,
		argTypes: {
			label: {
				defaultValue: 'Click me'
			},
			href: {
				defaultValue: '#'
			}
		}
	};
</script>

<Meta {...meta} />

<Template let:args>
	<Link {...args} href={args.href}>{args.label}</Link>
</Template>

<Template id="withSlots" let:args>
	<Link {...args} href={args.href}>
		<span slot="left">♥</span>
		{args.label}
		<span slot="right">♥</span>
	</Link>
</Template>

<Story name="Default" />

<Story name="Target _blank" args={{ target: '_blank' }} />

<Story name="Disabled" args={{ isDisabled: true }} />

<Story name="ID" args={{ id: 'with_id' }} />

<Story name="Loading state" args={{ isLoading: true }} />

<Story name="With custom CSS class" args={{ class: 'text-pink-500' }} />

<Story name="With both slots" template="withSlots" />
