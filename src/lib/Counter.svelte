<script>
  // let count = $state(0)

  // function increment() {
  //   count += 1
  // }

  // import { increment, Count } from './count'

  import { factory } from './count'
  const { increment, Count } = factory()
</script>

<button onclick={increment}>
  clicks: {Count}
</button>
