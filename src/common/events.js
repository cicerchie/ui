// Taken from https://github.com/hperrin/svelte-material-ui/blob/master/packages/common/forwardEvents.js. Thanks @hperrin.

import { bubble, listen } from 'svelte/internal'

export function getEventsAction (component) {
  return node => {
    const events = Object.keys(component.$$.callbacks)
    const listeners = []

    events.forEach(event => listeners.push(listen(node, event, e => bubble(component, e))))

    return {
      destroy: () => listeners.forEach(listener => listener())
    }
  }
}
