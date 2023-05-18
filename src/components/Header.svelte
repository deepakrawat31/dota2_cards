<script>
   let y;
   export let value;

   const attribut = [
      { type: "agi", name: "Agility" },
      { type: "str", name: "Strength" },
      { type: "int", name: "Inteligence" },
      { type: "all", name: "Universal" },
   ];
   let activeAttr = "Attribute";
   let openMenu = false;
</script>

<svelte:window bind:scrollY={y} />

<header
   class={`p-4 sticky top-0 font-semibold z-10 ${
      y > 40 ? "backdrop-blur border-b border-b-black/5" : ""
   }`}
>
   <div class="relative">
      <button
         on:click={() => (openMenu = !openMenu)}
         class="p-2 bg-amber-500 rounded-md shadow-neubrut-2 border-4 border-black"
         >{activeAttr}</button
      >
      <span
         class={`absolute flex flex-col items-start justify-between gap-2 transition-transform duration-200 p-2 bg-amber-500 shadow-neubrut-2 border-4 border-black rounded-md ${
            openMenu === true
               ? "scale-100 translate-y-2"
               : "scale-0 -translate-y-16"
         }`}
      >
         {#each attribut as attr}
            <button
               on:click={() => {
                  value = attr.type;
                  activeAttr = attr.name;
                  openMenu = false;
               }}
               class="w-full text-start md:hover:bg-amber-400 py-0.5 px-2 rounded"
               >{attr.name}</button
            >
         {/each}
      </span>
   </div>
</header>
