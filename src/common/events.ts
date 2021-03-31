// Taken from https://github.com/hperrin/svelte-material-ui/blob/master/packages/common/forwardEvents.js. Thanks @hperrin.

import type { SvelteComponent } from "svelte";
import { bubble, listen } from "svelte/internal";

type SvelteUseAction = (
  node: HTMLElement,
  parameters: { enabled: boolean; cmp: SvelteComponent }
) => {
  update?: (parameters: unknown) => void;
  destroy?: () => void;
};

export const eventsIf: SvelteUseAction = (node, { enabled, cmp }) => {
  if (enabled) return getEventsAction(cmp)(node);
};

const getEventsAction = (component: SvelteComponent) => {
  return (node: HTMLElement): { destroy: () => void } => {
    const events = Object.keys(component.$$.callbacks);
    const listeners: (() => void)[] = [];

    events.forEach((event) =>
      listeners.push(listen(node, event, (e) => bubble(component, e)))
    );

    return {
      destroy: () => listeners.forEach((listener) => listener()),
    };
  };
};
