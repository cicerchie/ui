<script lang="ts">
  import { get_current_component } from "svelte/internal";
  import objstr from "obj-str";

  import { getEventsAction } from "../common/events";
  import CSS from "../common/CSS";
  import ButtonWrapper from "./ButtonWrapper.svelte";
  import { Spinner } from "../loading";

  /**
   * Custom CSS class
   * @type {string}
   */
  let className: string | undefined = undefined;
  export { className as class };

  /**
   * Use full-width
   * @type {boolean}
   */
  export let block: boolean | undefined = undefined;

  /**
   * Disabled state
   * @type {boolean}
   */
  export let disabled: boolean | undefined = undefined;

  /**
   * ID of the form it belongs to
   * @type {string}
   */
  export let form: string | undefined = undefined;

  /**
   * URL it points to
   * @type {string}
   */
  export let href: string | undefined = undefined;

  /**
   * Loading state
   * @type {boolean}
   */
  export let loading: boolean | undefined = undefined;

  /**
   * Reset type
   * @type {boolean}
   */
  export let reset: boolean | undefined = undefined;

  /**
   * Submit type
   * @type {boolean}
   */
  export let submit: boolean | undefined = undefined;

  /**
   * Secondary color
   * @type {boolean}
   */
  export let secondary: boolean | undefined = undefined;

  /**
   * White color
   * @type {boolean}
   */
  export let white: boolean | undefined = undefined;

  /**
   * Small size
   * @type {boolean}
   */
  export let sm: boolean | undefined = undefined;

  const events = getEventsAction(get_current_component());

  $: type = submit ? "submit" : reset ? "reset" : "button";
  $: btnSize = sm ? "sm" : "base";
  $: btnColor = secondary ? "secondary" : white ? "white" : "primary";
  $: slotBase = objstr({
    [CSS.btn.slot.sizes[btnSize]]: true,
    invisible: loading,
  });
  $: btnClass = objstr({
    [CSS.btn.base]: true,
    [CSS.btn.colors[btnColor]]: true,
    [CSS.btn.sizes[btnSize]]: true,
    [CSS.btn.disabled]: disabled,
    [CSS.btn.loading]: loading,
    [CSS.btn.block]: block,
    [className]: !!className,
  });
</script>

<ButtonWrapper {href} {btnClass} {form} {type} {disabled} {loading} {events}>
  {#if loading}
    <Spinner sm class="absolute" />
  {/if}

  {#if $$slots.left}
    <div class="{slotBase} {CSS.btn.slot.left.sizes[btnSize]}">
      <slot name="left" />
    </div>
  {/if}

  <span class:invisible={loading}>
    <slot />
  </span>

  {#if $$slots.right}
    <div class="{slotBase} {CSS.btn.slot.right.sizes[btnSize]}">
      <slot name="right" />
    </div>
  {/if}
</ButtonWrapper>
