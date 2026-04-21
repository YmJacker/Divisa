<script lang="ts">
    import type { PageProps } from "./$types";
    let { data }: PageProps = $props();

    import DateComponent from "$lib/components/DateDisplay.svelte";
    import Display from "$lib/components/DisplayList.svelte";

    /* console.log(data) */
</script>

<div class="flex justify-center items-center h-screen">
    <div class="text-center flex flex-col">
        <DateComponent dateInfo= {data.date}/>
        
        <div class="flex flex-col">
            <Display data={data.data}/> 
        </div>
        
    </div>
</div>

<style></style>
