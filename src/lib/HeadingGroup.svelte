<script lang="ts">
  export let title: string
  export let description: string
</script>

<div class="max-w-md space-y-2 text-center mb-8 lg:max-w-lg">
  <h2 class="heading all-uppercase">
    {title}
  </h2>
  <p class="paragraph">{description}</p>
</div>
<style>
  .lg\:max-w-lg  {
    margin-left: auto!important;
    margin-right: auto!important;
    
  }
</style>
