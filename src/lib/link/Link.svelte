<script lang="ts">
  import { get_current_component } from "svelte/internal";
  import objstr from "obj-str";

  import { eventsIf } from "$lib/common/events";
  import CSS from "$lib/common/CSS";
  import { Spinner } from "$lib/loading";

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
  export let disabled: boolean | undefined = undefined;

  /**
   * Loading state
   * @type {boolean}
   */
  export let loading: boolean | undefined = undefined;

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

  const cmp = get_current_component();

  $: finalClass = objstr({
    [CSS.link.colors.primary]: true,
    [CSS.link.disabled]: disabled,
    [CSS.link.loading]: loading,
    [className]: !!className,
  });
</script>

<a
  href={!loading && !disabled && href ? href : undefined}
  {target}
  rel={target === "_blank" ? "noopener noreferrer" : undefined}
  class={finalClass}
  use:eventsIf={{ enabled: !loading && !disabled, cmp }}
>
  {#if loading}
    <Spinner sm />
  {/if}

  {#if $$slots.left}
    <span class:invisible={loading}>
      <slot name="left" />
    </span>
  {/if}

  <span class:invisible={loading}>
    <slot />
  </span>

  {#if $$slots.right}
    <span class:invisible={loading}>
      <slot name="right" />
    </span>
  {/if}
</a>
