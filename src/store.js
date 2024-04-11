import { writable } from "svelte/store";

export let listElements = writable([]);
export let isAddFormOpen = writable(false);

export let activeVirtue = writable(null);

// router
export let location = writable("home");
