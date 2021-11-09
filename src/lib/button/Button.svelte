<script lang="ts">
  import { get_current_component } from "svelte/internal";
  import objstr from "obj-str";

  import CSS from "../common/CSS";
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

  /**
   * URL it points to ("a" tag)
   * @type {string}
   */
  export let href: string | undefined = undefined;

  /**
   * Href target
   * @type {string}
   */
  export let target: string | undefined = undefined;

  const cmp = get_current_component();

  $: type = submit ? "submit" : reset ? "reset" : "button";
  $: finalSize = sm ? "sm" : "base";
  $: finalColor = secondary ? "secondary" : white ? "white" : "primary";
  $: slotBase = objstr({
    [CSS.btn.slot.sizes[finalSize]]: true,
    invisible: loading,
  });
  $: finalClass = objstr({
    [CSS.btn.base]: true,
    [CSS.btn.colors[finalColor]]: true,
    [CSS.btn.sizes[finalSize]]: true,
    [CSS.btn.disabled]: disabled,
    [CSS.btn.loading]: loading,
    [CSS.btn.block]: block,
    [className]: !!className,
  });
</script>

{#if href}
  <a
    href={!loading && !disabled && href ? href : undefined}
    {target}
    rel={target === "_blank" ? "noopener noreferrer" : undefined}
    class={finalClass}
    on:click
    on:mouseover
    on:mouseenter
    on:mouseleave
    on:focus
  >
    {#if loading}
      <Spinner sm class="absolute" />
    {/if}

    {#if $$slots.left}
      <div class="{slotBase} {CSS.btn.slot.left.sizes[finalSize]}">
        <slot name="left" />
      </div>
    {/if}

    <span class:invisible={loading}>
      <slot />
    </span>

    {#if $$slots.right}
      <div class="{slotBase} {CSS.btn.slot.right.sizes[finalSize]}">
        <slot name="right" />
      </div>
    {/if}
  </a>
{:else}
  <button
    {type}
    disabled={disabled || loading}
    {form}
    class={finalClass}
    on:click
    on:mouseover
    on:mouseenter
    on:mouseleave
    on:focus
  >
    {#if loading}
      <Spinner sm class="absolute" />
    {/if}

    {#if $$slots.left}
      <div class="{slotBase} {CSS.btn.slot.left.sizes[finalSize]}">
        <slot name="left" />
      </div>
    {/if}

    <span class:invisible={loading}>
      <slot />
    </span>

    {#if $$slots.right}
      <div class="{slotBase} {CSS.btn.slot.right.sizes[finalSize]}">
        <slot name="right" />
      </div>
    {/if}
  </button>
{/if}
