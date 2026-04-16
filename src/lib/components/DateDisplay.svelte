<script lang="ts">
    let { dateInfo } = $props();
    
    const date = new Date(dateInfo);
    const options: Intl.DateTimeFormatOptions = {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        weekday: 'long'
    };
    
    const formattedDate = date.toLocaleDateString(navigator.language, options);
    const formattedTime = date.toLocaleTimeString(navigator.language);
</script>

<!-- caja exterior -->
<div class="flex bg-blue-600 rounded-2xl px-2 py-1">
    <div class="border-r px-2">
        {formattedDate}
    </div>
    <div class="px-2">
        {formattedTime}
    </div>
</div>