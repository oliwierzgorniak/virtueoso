import { writable } from "svelte/store";

export let listElements = writable([]);
export let isAddFormOpen = writable(false);
