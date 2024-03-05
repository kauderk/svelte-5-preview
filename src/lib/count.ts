export function factory(root: SvelteRuneRoot) {
  createSvelteRuneRoot()
  let count = $state(0, root)

  function increment() {
    count += 1
  }

  function Count() {
    return count
  }
  return {
    increment,
    Count,
  }
}
