<script lang="ts">
  import Image from './assets/homepage.jpg'
  import HeadingGroup from './lib/HeadingGroup.svelte'
  
  import BackgroundImageCard from './lib/BackgroundImageCard.svelte'

  const title = 'Get ready for something good!'
  const description =
    'Please switch to regular browser to verify your delivery zone'
  const src = Image
  const alt = 'Spatula Foods'
</script>

<main class="flex font-sans subpixel-antialiased">
  <BackgroundImageCard {src} {alt}>
    <HeadingGroup  {description} />
    <Form />
  </BackgroundImageCard>
</main>
