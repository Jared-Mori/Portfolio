<script lang="ts">
    export let title: string;
</script>

<div class="tag">
    <span>{title}</span>
</div>

<style>
    .tag {
        display: inline-block;
        padding: 0.25rem .5rem;
        background-color: var(--tag-bg);
        border-radius: 6px;
        color: var(--tag-text);
        margin-right: 0.5rem;
        margin-bottom: 0.5rem;
        font-family: 'Poppins', sans-serif;
        font-weight: 500;
        font-style: normal;
        font-size: 0.875rem;
        max-width: 600px;
        text-align: center;
    }
</style>