<script>
  let className = null
  export { className as class }

  export let aria = {}
  export let srOnlyMessage = 'Loading...'
  
  export let sm = null
</script>

<div
  class={`border-current rounded-full animate-spin ${sm ? 'w-4 h-4 border-2' : 'w-8 h-8 border-4'}${className ? ` ${className}` : ''}`}
  style="border-right-color: transparent"
  role="status"
  aria-hidden={aria.hidden}>
  {#if srOnlyMessage}<span class="sr-only">{srOnlyMessage}</span>{/if}
</div>
