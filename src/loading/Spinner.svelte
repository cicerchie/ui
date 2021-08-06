<script lang="ts">
  import objstr from "obj-str";

  import CSS from "../common/CSS";

  /**
   * Custom CSS class
   * @type {string}
   */
  let className: string | undefined = undefined;
  export { className as class };

  export let aria: Record<string, boolean | "true" | "false"> = {
    hidden: "true",
  };
  export let srOnlyMessage = "Loading...";

  /**
   * Small size
   * @type {boolean}
   */
  export let sm: boolean | undefined = undefined;

  $: size = sm ? "sm" : "base";
</script>

<div
  class={objstr({
    [CSS.spinner.base]: true,
    [CSS.spinner.sizes[size]]: true,
    [className]: !!className,
  })}
  style="border-right-color: transparent"
  role="status"
  aria-hidden={aria.hidden}
>
  {#if srOnlyMessage}<span class="sr-only">{srOnlyMessage}</span>{/if}
</div>
