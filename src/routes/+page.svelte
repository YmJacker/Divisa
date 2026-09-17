<script lang="ts">
    import type { PageProps } from "./$types";
    let { data }: PageProps = $props();
    let baseCurrency = $state(1);

    import DateComponent from "$lib/components/DateDisplay.svelte";
    import Display from "$lib/components/DisplayList.svelte";

    /* console.log(data) */
</script>

<div class="flex justify-center items-center h-screen">
    <div class="text-center flex flex-col">
        <!-- componente fecha -->
        <DateComponent dateInfo= {data.date}/>
        <!-- componente divisa -->
        <div class="flex flex-col">
            <Display data={data.data} bind:bank={baseCurrency}/>
            <Display data={data.data} bind:bank={baseCurrency}/> 
        </div>
        
    </div>
</div>

<style></style>
