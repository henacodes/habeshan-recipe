import { writable } from "svelte/store";

export const modalStore = writable({
  sidebar: false,
});
