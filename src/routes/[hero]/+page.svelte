<script>
   import { page } from "$app/stores";
   import {
      IconBow,
      IconSword,
      IconArrowLeft,
      IconArrowRight,
      IconHome,
   } from "@tabler/icons-svelte";
   import { fade, fly } from "svelte/transition";
   import { quadOut } from "svelte/easing";
   import Stats from "../../components/Stats.svelte";

   export let data;
   const { heros } = data;
   let id = $page.url.pathname.slice(1);
   $: currentHero = heros[id];
</script>

<svelte:head>
   <title>{currentHero.localized_name}</title>
</svelte:head>

<main
   class="bg-slate-200 rounded-xl shadow-neubrut-6 border-4 border-black p-4 flex flex-col gap-4 font-bold select-none"
>
   <div class="flex items-center justify-between gap-2">
      <div
         class="shadow-neubrut-2 border-4 border-black bg-amber-500 rounded-lg"
      >
         <a href="/" class="p-1.5 flex items-center justify-between gap-1"
            ><IconHome stroke={3} /></a
         >
      </div>
      <div
         class="p-1.5 shadow-neubrut-2 border-4 border-black bg-amber-500 rounded-lg"
      >
         {#if currentHero.primary_attr === "agi"}
            Agility
         {:else if currentHero.primary_attr === "str"}
            Strength
         {:else if currentHero.primary_attr === "int"}
            Inteligence
         {:else}
            Universal
         {/if}
      </div>
   </div>

   <div class="flex flex-col gap-4 items-center justify-between">
      <div
         class={`flex items-center gap-4 max-w-sm w-full leading-5 ${
            parseInt(id) < 1 ? "justify-end" : "justify-between"
         }`}
      >
         {#if parseInt(id) >= 1}
            <button
               class="shadow-neubrut-2 border-4 border-black bg-amber-500 rounded-lg"
            >
               <a
                  href={`/${id}`}
                  class="p-2 flex items-center gap-1"
                  on:click={() => (id = parseInt(id) - 1)}
               >
                  <IconArrowLeft stroke={3} />
                  {heros[parseInt(id) - 1].localized_name}
               </a>
            </button>
         {/if}
         {#if parseInt(id) < heros.length - 1}
            <button
               class="shadow-neubrut-2 border-4 border-black bg-amber-500 rounded-lg"
            >
               <a
                  href={`/${id}`}
                  class="p-2 flex items-center gap-1"
                  on:click={() => (id = parseInt(id) + 1)}
                  >{heros[parseInt(id) + 1].localized_name}<IconArrowRight
                     stroke={3}
                  /></a
               >
            </button>
         {/if}
      </div>
      <div class="max-w-sm w-full">
         {#key id}
            <div
               class="p-2 bg-amber-500 shadow-neubrut-4 border-4 border-black rounded-xl"
               in:fade={{
                  duration: 700,
                  easing: quadOut,
               }}
            >
               <div class="flex items-center justify-between pb-2">
                  <span class="text-xl">
                     {currentHero.localized_name}
                  </span>
                  <span class="relative">
                     {#if currentHero.attack_type === "Melee"}
                        <IconSword class="peer cursor-alias" />
                        <span
                           class="hidden md:block absolute -top-9 scale-0 peer-hover:scale-100 px-1 py-0.5 bg-amber-500 shadow-neubrut-2 border-2 border-black rounded"
                           >{currentHero.attack_type}</span
                        >
                     {:else}
                        <IconBow class="peer cursor-alias" />
                        <span
                           class="hidden md:block absolute -top-9 scale-0 peer-hover:scale-100 px-1 py-0.5 bg-amber-500 shadow-neubrut-2 border-2 border-black rounded"
                           >{currentHero.attack_type}</span
                        >
                     {/if}
                  </span>
                  <span>
                     <img
                        src={`https://api.opendota.com${currentHero.icon}`}
                        alt={currentHero.localized_name}
                     />
                  </span>
               </div>
               <div class="h-1 bg-black rounded-full" />
               <div class="flex flex-col my-4">
                  <div class="flex items-center justify-between">
                     <span
                        class="relative flex items-center justify-between md:gap-1"
                     >
                        <span class="text-lg">{currentHero.base_agi}</span>
                        <span class="text-sm peer cursor-alias"
                           >+{currentHero.agi_gain}</span
                        >
                        <span
                           class="absolute -top-7 left-7 scale-0 peer-hover:scale-100 px-1 py-0.5 rounded bg-amber-500 shadow-neubrut-2 border-2 border-black"
                           >/lvl</span
                        >
                     </span>
                     <span
                        class="relative flex items-center justify-between md:gap-1"
                     >
                        <span class="text-lg">{currentHero.base_str}</span>
                        <span class="text-sm peer cursor-alias"
                           >+{currentHero.str_gain}</span
                        >
                        <span
                           class="absolute -top-7 left-7 scale-0 peer-hover:scale-100 px-1 py-0.5 rounded bg-amber-500 shadow-neubrut-2 border-2 border-black"
                           >/lvl</span
                        >
                     </span>
                     <span
                        class="relative flex items-center justify-between md:gap-1"
                     >
                        <span class="text-lg">{currentHero.base_int}</span>
                        <span class="text-sm peer cursor-alias"
                           >+{currentHero.int_gain}</span
                        >
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
                     <span>{currentHero.base_health_regen}</span>
                  </div>
                  <div class="flex items-center justify-between">
                     <span>Mana Regen</span>
                     <span>{currentHero.base_mana_regen}</span>
                  </div>
                  <div class="flex items-center justify-between">
                     <span>Armor</span>
                     <span>{currentHero.base_armor}</span>
                  </div>
                  <div class="flex items-center justify-between">
                     <span>Attack Dmg</span>
                     <span
                        >{currentHero.base_attack_min} - {currentHero.base_attack_max}</span
                     >
                  </div>
                  <div class="flex items-center justify-between">
                     <span>Attack Range</span>
                     <span>{currentHero.attack_range}</span>
                  </div>
                  <div class="flex items-center justify-between">
                     <span>Attack Time</span>
                     <span>{currentHero.attack_rate}</span>
                  </div>
                  <div class="flex items-center justify-between">
                     <span>Movement Speed</span>
                     <span>{currentHero.move_speed}</span>
                  </div>
                  <div class="flex items-center justify-between">
                     <span>Day/Night Vision</span>
                     <span
                        >{currentHero.day_vision}/{currentHero.night_vision}</span
                     >
                  </div>
               </div>
               <div class="h-1 bg-black rounded-full" />
               <div
                  class="my-4 flex items-center justify-between flex-wrap md:gap-x-4 gap-y-1"
               >
                  {#each currentHero.roles as roles}
                     <span class="">{roles}</span>
                  {/each}
               </div>
            </div>
            <Stats {currentHero} />
         {/key}
      </div>
   </div>
</main>
