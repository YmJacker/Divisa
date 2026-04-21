<script lang="ts">
    let { data} = $props(); // Accept the callback; datos que se piden y recibimos

    let selected = $state();
    let getSelected = $derived(data.find((x:any) => x.symbol === selected));
    let simbolo = $derived(getSelected ? getSelected['sign'] : '');
    let valor = $state(1);

    let selectedRes = $state();
    let getSelectedRes = $derived(data.find((x:any) => x.symbol === selectedRes));
    let simboloRes = $derived(getSelectedRes ? getSelectedRes['sign'] : '');
    let valorRes = $derived(valor/getSelected?.price*getSelectedRes?.price);

</script>

<div>

    <label for="price" class="block text-sm/6 font-medium text-white">Price</label>
    <div class="mt-2 bg-gray-800">
        <div class="flex items-center rounded-md bg-white/5 ">
            <div class="shrink-0 text-base text-gray-400  w-10">
                <!-- simbolo de la moneda -->
                {simbolo}
            </div>

            <input
                id="price"
                type="text"
                name="price"
                placeholder="0.00"
                value={valor}
                //oninput={() => localValue = parseFloat(localValue || 0)}                  
                class="block min-w-0 grow bg-gray-800 py-1.5 pr-3 pl-1 text-base text-white placeholder:text-gray-500 focus:outline-none sm:text-sm/6"
            />

            <div class="grid shrink-0 grid-cols-1 focus-within:relative">
                <select
                    id="currency"
                    name="currency"
                    aria-label="Currency"
                    bind:value={selected}
                    class="col-start-1 row-start-1 w-full appearance-none rounded-md bg-gray-800 py-1.5 pr-7 pl-3 text-base text-gray-400 *:bg-gray-800 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"    
                >
                    <!-- tipo de moneda -->
                    {#each data as x}
                        <option 
                            value={x.symbol}
                            selected={x.symbol === "USD" || null}
                        >
                            {x.symbol} - {x.name}
                        </option>
                    {/each}
                </select>


                <!-- flecha hacia abajo -->
                <svg
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    data-slot="icon"
                    aria-hidden="true"
                    class="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-gray-400 sm:size-4"
                >
                    <path
                        d="M4.22 6.22a.75.75 0 0 1 1.06 0L8 8.94l2.72-2.72a.75.75 0 1 1 1.06 1.06l-3.25 3.25a.75.75 0 0 1-1.06 0L4.22 7.28a.75.75 0 0 1 0-1.06Z"
                        clip-rule="evenodd"
                        fill-rule="evenodd"
                    />
                </svg>
            </div>
        </div>
    </div>

    <!-- lado respuesta -->
    <label for="price" class="block text-sm/6 font-medium text-white">Price</label>
    <div class="mt-2 bg-gray-800">
        <div class="flex items-center rounded-md bg-white/5 ">
            <div class="shrink-0 text-base text-gray-400  w-10">
                <!-- simbolo de la moneda -->
                {simboloRes}
            </div>

            <div class="text-left block min-w-0 grow bg-gray-800 py-1.5 pr-3 pl-1 text-base text-white placeholder:text-gray-500 focus:outline-none sm:text-sm/6">
                {valorRes}
            </div>

            <div class="grid shrink-0 grid-cols-1 focus-within:relative">
                <select
                    name="currency"
                    aria-label="Currency"
                    bind:value={selectedRes}
                    class="col-start-1 row-start-1 w-full appearance-none rounded-md bg-gray-800 py-1.5 pr-7 pl-3 text-base text-gray-400 *:bg-gray-800 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"    
                >
                    <!-- tipo de moneda -->
                    {#each data as x}
                        <option 
                            value={x.symbol}
                            selected={x.symbol === "EUR" || null}
                        >
                            {x.symbol} - {x.name}
                        </option>
                    {/each}
                </select>


                <!-- flecha hacia abajo -->
                <svg
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    data-slot="icon"
                    aria-hidden="true"
                    class="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-gray-400 sm:size-4"
                >
                    <path
                        d="M4.22 6.22a.75.75 0 0 1 1.06 0L8 8.94l2.72-2.72a.75.75 0 1 1 1.06 1.06l-3.25 3.25a.75.75 0 0 1-1.06 0L4.22 7.28a.75.75 0 0 1 0-1.06Z"
                        clip-rule="evenodd"
                        fill-rule="evenodd"
                    />
                </svg>
            </div>
        </div>
    </div>

</div>

<style>
    input[type="number"] {
        -moz-appearance: textfield;
    }
</style>