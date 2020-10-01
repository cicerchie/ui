<script>
  import { get_current_component as getCurrentComponent } from 'svelte/internal'
  import clsx from 'clsx'

  import { getEventsAction } from '../common/events'
  import CSS from '../common/CSS'
  import ButtonWrapper from './ButtonWrapper.svelte'
  import { Spinner } from '../loading'

  let className = null
  export { className as class }

  export let block = null
  export let disabled = null
  export let form = null
  export let href = null
  export let loading = null

  export let reset = null
  export let submit = null

  export let secondary = null
  export let white = null

  export let sm = null

  const events = getEventsAction(getCurrentComponent())
  const slots = $$props.$$slots

  const type = submit ? 'submit' : reset ? 'reset' : 'button'

  $: btnSize = sm ? 'sm' : 'base'
  $: btnColor = secondary ? 'secondary' : white ? 'white' : 'primary'
  $: loadingClass = loading ? 'invisible' : ''

  $: btnClass = clsx(
    CSS.btn.base,
    CSS.btn.colors[btnColor],
    CSS.btn.sizes[btnSize],
    disabled && CSS.btn.disabled,
    loading && CSS.btn.loading,
    block && CSS.btn.block,
    className
  )

  $: slotLeftClass =
    slots.left &&
    clsx(
      CSS.btn.slot.sizes[btnSize],
      loadingClass,
      CSS.btn.slot.left.sizes[btnSize]
    )

  $: slotRightClass =
    slots.right &&
    clsx(
      CSS.btn.slot.sizes[btnSize],
      loadingClass,
      CSS.btn.slot.right.sizes[btnSize]
    )
</script>

<ButtonWrapper {href} {btnClass} {form} {type} {disabled} {loading} {events}>
  {#if loading}
    <Spinner sm class="absolute" />
  {/if}

  {#if slots.left}
    <div class={slotLeftClass}>
      <slot name="left" />
    </div>
  {/if}

  <span class={loadingClass}>
    <slot />
  </span>

  {#if slots.right}
    <div class={slotRightClass}>
      <slot name="right" />
    </div>
  {/if}
</ButtonWrapper>
