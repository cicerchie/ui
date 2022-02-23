<script lang="ts">
  import { Meta, Story, Template } from "@storybook/addon-svelte-csf";

  import { Spinner } from "../../src/lib";

  const meta = {
    title: "Spinner",
    component: Spinner,
  };
</script>

<Meta {...meta} />

<Template let:args>
  <Spinner {...args} />
</Template>

<Story name="Primary" />

<Story name="ID" args={{ id: "with_id" }} />

<Story name="Small" args={{ isSmall: true }} />

<Story name="With custom CSS class" args={{ class: "text-pink-500" }} />
