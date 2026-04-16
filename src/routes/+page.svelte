<script lang="ts">
    import type { PageProps } from "./$types";
    let { data }: PageProps = $props();

    import DateComponent from "$lib/components/DateDisplay.svelte";

    console.log(data)
</script>

<div class="flex justify-center items-center h-screen">
    <div class="text-center flex flex-col">
        <DateComponent dateInfo= {data.date}/>
        <div class="flex flex-row">
            <!-- {#each data.data as x}
                <div class="bg-sky-500">{x.name}</div>
            {/each} -->
        </div>
        
    </div>
</div>

<style></style>
