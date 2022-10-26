import { atom } from "nanostores";

export const singleton = atom<number | string>("initial");
