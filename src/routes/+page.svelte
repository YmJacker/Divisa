<script lang="ts">
    import type { PageProps } from "./$types";

    let { data }: PageProps = $props();
</script>

<div class="flex justify-center items-center h-screen">
    <div class="text-center">

        <label for="ciudad">Selecciona o escribe una ciudad:</label>
        <input list="ciudades" name="ciudad" id="ciudad" />
        <datalist id="ciudades">
            <option value="Madrid"/>
            <option value="Barcelona"/>
            <option value="Valencia"/>
            <option value="Sevilla"/>
        </datalist>


    </div>
</div>

<style></style>
