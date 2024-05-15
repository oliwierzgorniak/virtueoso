import { writable } from "svelte/store";

export let listElements = writable([]);
export let isAddFormOpen = writable(false);
export let activeVirtue = writable(null);
export let isAddRecordOpen = writable(false);

// router
export let location = writable("home");
