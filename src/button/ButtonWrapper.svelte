<script>
  export let btnClass
  export let disabled
  export let events
  export let form
  export let href
  export let loading
  export let type
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
