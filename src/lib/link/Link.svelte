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
   * Disabled state
   * @type {boolean}
   */
  export let isDisabled: boolean | undefined = undefined;

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
   * URL it points to
   * @type {string}
   */
  export let href: string | undefined = undefined;

  /**
   * The target
   * @type {string}
   */
  export let target: string | undefined = undefined;

  $: finalClass =
    CSS.link.colors.primary +
    (isDisabled ? " " + CSS.link.disabled : "") +
    (isLoading ? " " + CSS.link.loading : "") +
    (!!className ? " " + className : "");
</script>

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
>
  {#if isLoading}
    <Spinner isSmall />
  {/if}

  {#if $$slots.left}
    <span class:invisible={isLoading}>
      <slot name="left" />
    </span>
  {/if}

  <span class:invisible={isLoading}>
    <slot />
  </span>

  {#if $$slots.right}
    <span class:invisible={isLoading}>
      <slot name="right" />
    </span>
  {/if}
</a>
