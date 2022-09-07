<script lang="ts">
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
  export let isBlock: boolean | undefined = undefined;

  /**
   * Disabled state
   * @type {boolean}
   */
  export let isDisabled: boolean | undefined = undefined;

  /**
   * ID of the form it belongs to
   * @type {string}
   */
  export let form: string | undefined = undefined;

  /**
   * ID
   * @type {string}
   */
  export let id: string | undefined = undefined;

  /**
   * Loading state
   * @type {boolean}
   */
  export let isLoading: boolean | undefined = undefined;

  /**
   * Reset type
   * @type {boolean}
   */
  export let isReset: boolean | undefined = undefined;

  /**
   * Submit type
   * @type {boolean}
   */
  export let isSubmit: boolean | undefined = undefined;

  /**
   * Secondary color
   * @type {boolean}
   */
  export let isSecondary: boolean | undefined = undefined;

  /**
   * White color
   * @type {boolean}
   */
  export let isWhite: boolean | undefined = undefined;

  /**
   * Small size
   * @type {boolean}
   */
  export let isSmall: boolean | undefined = undefined;

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

  $: type = isSubmit ? "submit" : isReset ? "reset" : "button";
  $: finalSize = isSmall ? "sm" : "base";
  $: finalColor = isSecondary ? "secondary" : isWhite ? "white" : "primary";
  $: slotBase = CSS.btn.slot.sizes[finalSize] + (isLoading ? " invisible" : "");
  $: finalClass =
    CSS.btn.base +
    " " +
    CSS.btn.colors[finalColor] +
    " " +
    CSS.btn.sizes[finalSize] +
    (isDisabled ? " " + CSS.btn.disabled : "") +
    (isLoading ? " " + CSS.btn.loading : "") +
    (isBlock ? " " + CSS.btn.block : "") +
    (!!className ? " " + className : "");
</script>

{#if href}
  <a
    href={!isLoading && !isDisabled && href ? href : undefined}
    {id}
    {target}
    rel={target === "_blank" ? "noopener noreferrer" : undefined}
    class={finalClass}
    on:click
    on:mouseover
    on:mouseenter
    on:mouseleave
    on:focus
    {...$$restProps}
  >
    {#if isLoading}
      <Spinner isSmall class="absolute" />
    {/if}

    {#if $$slots.left}
      <div class="{slotBase} {CSS.btn.slot.left.sizes[finalSize]}">
        <slot name="left" />
      </div>
    {/if}

    <span class:invisible={isLoading}>
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
    {id}
    {type}
    disabled={isDisabled || isLoading}
    {form}
    class={finalClass}
    on:click
    on:mouseover
    on:mouseenter
    on:mouseleave
    on:focus
    {...$$restProps}
  >
    {#if isLoading}
      <Spinner isSmall class="absolute" />
    {/if}

    {#if $$slots.left}
      <div class="{slotBase} {CSS.btn.slot.left.sizes[finalSize]}">
        <slot name="left" />
      </div>
    {/if}

    <span class:invisible={isLoading}>
      <slot />
    </span>

    {#if $$slots.right}
      <div class="{slotBase} {CSS.btn.slot.right.sizes[finalSize]}">
        <slot name="right" />
      </div>
    {/if}
  </button>
{/if}
