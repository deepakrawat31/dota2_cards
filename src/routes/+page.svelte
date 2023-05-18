<script>
   import Header from "../components/Header.svelte";
   import Card from "../components/Card.svelte";

   export let data;
   const { heros } = data;
   let attr;
</script>

<svelte:head>
   <title>D2 Cards</title>
</svelte:head>

<main
   class="bg-slate-200 rounded-xl shadow-neubrut-6 border-4 border-black select-none"
>
   <Header bind:value={attr} />
   <div
      class={`${
         attr === undefined
            ? "hidden"
            : "p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
      }`}
   >
      {#each heros as hero, i}
         {#if hero.primary_attr === attr}
            <Card {hero} {i} />
         {/if}
      {/each}
   </div>
</main>
