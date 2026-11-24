/** Toggles one item in an accordion where only a single item can be open. */
export function toggleOpen(current: number | null, index: number): number | null {
  return current === index ? null : index;
}

/** Wraps an index inside a list for keyboard navigation (ArrowUp / ArrowDown). */
export function wrapIndex(index: number, length: number): number {
  if (length <= 0) return 0;
  return ((index % length) + length) % length;
}
