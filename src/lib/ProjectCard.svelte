<script lang="ts">
    import Tag from './Tag.svelte';
    export let title: string;
    export let description: string;
    export let tags: string[] = [];
    export let link: string;
    export let github: string;
</script>

<div class="project-card">
    <h3>{title}</h3>
    <p>{description}</p>
    <div class="tags">
        {#each tags as tag}
            <Tag title={tag} />
        {/each}
    </div>
    <div class="links">
        <a class="project-link-btn" href={link} target="_blank" rel="noopener">
            {#if link}
                <img src="/link.svg" alt="View Project" class="project-link-img" />
            {/if}
        </a>
            <a class="project-link-btn" href={link} target="_blank" rel="noopener">
            {#if github}
                <img src="/GithubLogo.png" alt="View Github" class="github-link-img" />
            {/if}
        </a>
    </div>
</div>

<style>
.project-card {
    background: var(--background);
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
    color: var(--header);
    margin: 0 0 0.5rem 0;
    font-family: 'Poppins', sans-serif;
    font-weight: 600;
    font-style: normal;
    font-size: 2.8rem;
    line-height: 1;
}
.project-card p {
    color: var(--text);
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
.links {
    display: flex;
    flex-direction: row;
    gap: 0.5rem;
    position: absolute;
    bottom: 1rem;
    left: 1rem;
    right: auto;
    top: auto;
    z-index: 2;
}
.project-link-btn {
    padding: 0.4rem;
    border-radius: 15px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: none;
    border: none;
}
.project-link-img {
    width: 24px;
    height: 24px;
    display: block;
    transition: transform 0.4s ease filter 0.4s ease;
}
.github-link-img {
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