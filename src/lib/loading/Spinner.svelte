<script lang="ts">
  import objstr from "obj-str";

  import CSS from "../common/CSS";

  export let aria: Record<string, boolean | "true" | "false"> = {
    hidden: "true",
  };

  /**
   * Custom CSS class
   * @type {string}
   */
  let className: string | undefined = undefined;
  export { className as class };

  /**
   * ID
   * @type {string}
   */
  export let id: string | undefined = undefined;

  /**
   * Small size
   * @type {boolean}
   */
  export let sm: boolean | undefined = undefined;

  export let srOnlyMessage = "Loading...";

  $: size = sm ? "sm" : "base";

  $: finalClass = objstr({
    [CSS.spinner.base]: true,
    [CSS.spinner.sizes[size]]: true,
    [className]: !!className,
  });
</script>

<div
  class={finalClass}
  {id}
  style="border-right-color: transparent"
  role="status"
  aria-hidden={aria.hidden}
>
  {#if srOnlyMessage}<span class="sr-only">{srOnlyMessage}</span>{/if}
</div>
