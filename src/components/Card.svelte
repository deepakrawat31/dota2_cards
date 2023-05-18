<script>
   export let hero;
   export let i;
   import {
      IconSword,
      IconBow,
      IconArrowDownRight,
   } from "@tabler/icons-svelte";
   import { quintInOut } from "svelte/easing";
   import { fade } from "svelte/transition";
</script>

<div
   class="p-2 bg-amber-500 shadow-neubrut-4 border-4 border-black rounded-xl font-bold"
   in:fade={{
      easing: quintInOut,
      delay: 70 * hero.id,
      duration: 700,
   }}
>
   <div class="flex items-center justify-between pb-2">
      <span class="text-xl">
         {hero.localized_name}
      </span>
      <span class="relative">
         {#if hero.attack_type === "Melee"}
            <IconSword class="peer cursor-alias" />
            <span
               class="hidden md:block absolute -top-9 scale-0 peer-hover:scale-100 px-1 py-0.5 bg-amber-500 shadow-neubrut-2 border-2 border-black rounded"
               >{hero.attack_type}</span
            >
         {:else}
            <IconBow class="peer cursor-alias" />
            <span
               class="hidden md:block absolute -top-9 scale-0 peer-hover:scale-100 px-1 py-0.5 bg-amber-500 shadow-neubrut-2 border-2 border-black rounded"
               >{hero.attack_type}</span
            >
         {/if}
      </span>
      <span>
         <img
            src={`https://api.opendota.com${hero.icon}`}
            alt={hero.localized_name}
         />
      </span>
   </div>
   <div class="h-1 bg-black rounded-full" />
   <div class="flex flex-col my-4">
      <div class="flex items-center justify-between">
         <span class="relative flex items-center justify-between md:gap-1">
            <span class="text-lg">{hero.base_agi}</span>
            <span class="text-sm peer cursor-alias">+{hero.agi_gain}</span>
            <span
               class="absolute -top-7 left-7 scale-0 peer-hover:scale-100 px-1 py-0.5 rounded bg-amber-500 shadow-neubrut-2 border-2 border-black"
               >/lvl</span
            >
         </span>
         <span class="relative flex items-center justify-between md:gap-1">
            <span class="text-lg">{hero.base_str}</span>
            <span class="text-sm peer cursor-alias">+{hero.str_gain}</span>
            <span
               class="absolute -top-7 left-7 scale-0 peer-hover:scale-100 px-1 py-0.5 rounded bg-amber-500 shadow-neubrut-2 border-2 border-black"
               >/lvl</span
            >
         </span>
         <span class="relative flex items-center justify-between md:gap-1">
            <span class="text-lg">{hero.base_int}</span>
            <span class="text-sm peer cursor-alias">+{hero.int_gain}</span>
            <span
               class="absolute -top-7 left-7 scale-0 peer-hover:scale-100 px-1 py-0.5 rounded bg-amber-500 shadow-neubrut-2 border-2 border-black"
               >/lvl</span
            >
         </span>
      </div>
      <div class="flex items-center justify-between">
         <span>Agi</span>
         <span>Str</span>
         <span>Int</span>
      </div>
   </div>
   <div class="h-1 bg-black rounded-full" />
   <div class="my-4">
      <span class="text-center block">Base Stats</span>
      <div class="flex items-center justify-between">
         <span>HP Regen</span>
         <span>{hero.base_health_regen}</span>
      </div>
      <div class="flex items-center justify-between">
         <span>Mana Regen</span>
         <span>{hero.base_mana_regen}</span>
      </div>
      <div class="flex items-center justify-between">
         <span>Armor</span>
         <span>{hero.base_armor}</span>
      </div>
      <div class="flex items-center justify-between">
         <span>Attack Dmg</span>
         <span>{hero.base_attack_min} - {hero.base_attack_max}</span>
      </div>
      <div class="flex items-center justify-between">
         <span>Attack Range</span>
         <span>{hero.attack_range}</span>
      </div>
      <div class="flex items-center justify-between">
         <span>Attack Time</span>
         <span>{hero.attack_rate}</span>
      </div>
      <div class="flex items-center justify-between">
         <span>Movement Speed</span>
         <span>{hero.move_speed}</span>
      </div>
      <div class="flex items-center justify-between">
         <span>Day/Night Vision</span>
         <span>{hero.day_vision}/{hero.night_vision}</span>
      </div>
   </div>
   <div class="h-1 bg-black rounded-full" />
   <div
      class="my-4 flex items-center justify-between flex-wrap md:gap-x-4 gap-y-1"
   >
      {#each hero.roles as roles}
         <span class="">{roles}</span>
      {/each}
   </div>
   <div class="h-1 bg-black rounded-full" />
   <div class="mt-4 flex items-center justify-end">
      <a href={i}>
         <IconArrowDownRight />
      </a>
   </div>
</div>

<style>
</style>
