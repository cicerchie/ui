<script>
  let className = null
  export { className as class }

  export let sm = null
</script>

<div
  class={`border-current rounded-full animate-spin ${sm ? 'w-4 h-4 border-2' : 'w-8 h-8 border-4'}${className ? ` ${className}` : ''}`}
  style="border-right-color: transparent"
  role="status" />
