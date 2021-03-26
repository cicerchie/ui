<script lang="ts">
  export let btnClass: string;
  export let disabled: boolean | undefined;
  export let form: string | undefined;
  export let href: string | undefined;
  export let loading: boolean | undefined;
  export let type: string;
  export let events: (
    node: HTMLElement
  ) => {
    destroy: () => void;
  };
</script>

{#if href && !disabled && !loading}
  <a {href} class={btnClass} use:events>
    <slot />
  </a>
{:else}
  <button {type} {disabled} {form} class={btnClass} use:events>
    <slot />
  </button>
{/if}
