<script>
   import { quadOut } from "svelte/easing";
   import { fade } from "svelte/transition";

   export let currentHero;

   const stats = [
      {
         id: 1,
         title: "Turbo Winrate",
         amount: (currentHero.turbo_wins / currentHero.turbo_picks) * 100,
      },
      {
         id: 2,
         title: "Pro Winrate",
         amount: (currentHero.pro_win / currentHero.pro_pick) * 100,
      },
   ];
</script>

<div class="flex items-center justify-between gap-2 max-w-sm w-full mt-4">
   {#each stats as stat}
      <div
         class="p-2 bg-amber-500 border-4 border-black shadow-neubrut-4 rounded-xl flex flex-col"
         in:fade={{
            duration: 600,
            delay: stat.id * 300,
            easing: quadOut,
         }}
      >
         <div class="text-sm self-start">{stat.title}</div>
         <div class="text-5xl self-center">
            {stat.amount.toFixed(0)}%
         </div>
      </div>
   {/each}
</div>
