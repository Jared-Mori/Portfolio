<script lang="ts">
    import Tag from './Tag.svelte';
    export let title: string;
    export let description: string;
    export let tags: string[] = [];
    export let link: string;
</script>

<div class="project-card">
    <h3>{title}</h3>
    <p>{description}</p>
    <div class="tags">
        {#each tags as tag}
            <Tag title={tag} />
        {/each}
    </div>
    <a class="project-link-btn" href={link} target="_blank" rel="noopener">
        <img src="/link.svg" alt="View Project" class="project-link-img" />
    </a>
</div>

<style>
.project-card {
    background: #f0fff1;
    border-radius: 12px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.459);
    padding: 1rem;
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    transition: box-shadow 0.3s ease, transform 0.3s ease;
    position: relative;
    cursor: default;
}
.project-card:hover {
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.459);
    transform: translateY(-8px) scale(1.02);
}
.project-card h3 {
    color: #660708;
    margin: 0 0 0.5rem 0;
    font-family: 'Poppins', sans-serif;
    font-weight: 600;
    font-style: normal;
    font-size: 3rem;
    line-height: 1;
}
.project-card p {
    color: #a4161a;
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
    font-style: normal;
    font-size: 1.1rem;
    margin-bottom: 1rem;
    line-height: 1.1;
    margin: 1rem 0 1rem 0;
    flex: 1;
    overflow: hidden;
    text-overflow: ellipsis;
}
.tags {
    display: flex;
    flex-wrap: wrap;
    margin-top: auto;
    justify-content: flex-end;
}
.project-link-btn {
    position: absolute;
    top: 1rem;
    right: 1rem;
    padding: 0.4rem;
    border-radius: 15px;
    z-index: 2;
    display: flex;
    align-items: center;
    justify-content: center;
}
.project-link-img {
    width: 24px;
    height: 24px;
    display: block;
    transition: transform 0.4s ease filter 0.4s ease;
}
.project-link-btn:hover {
    filter: invert(34%) sepia(98%) saturate(749%) hue-rotate(2deg) brightness(97%) contrast(101%);
    transform: scale(1.1);
}
</style>