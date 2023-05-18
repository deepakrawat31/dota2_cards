export const load = async ({ fetch }) => {
   const res = await fetch("https://api.opendota.com/api/heroStats");
   const data = await res.json();

   return {
      heros: data,
   };
};
