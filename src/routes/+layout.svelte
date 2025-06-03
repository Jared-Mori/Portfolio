<script>
    let { children } = $props();
    let darkMode = $state(false);

    function toggleDarkMode() {
        darkMode = !darkMode;
        document.body.classList.toggle('dark', darkMode);
    }
</script>

<nav>
    <button class="darkmode-toggle" aria-label="Toggle dark mode" onclick={toggleDarkMode}>
        {#if darkMode}
            <img src="/darkmode.svg" alt="Dark mode" width="48" height="48" />
        {:else}
            <img src="/lightmode.svg" alt="Light mode" width="48" height="48" />
        {/if}
    </button>
</nav>

{@render children()}

<footer>
    <p>© 2025 Jared Mori</p>
    <div class="footer-links">
    <a href="https://github.com/Jared-Mori" target="_blank" rel="noopener">
        <img src="GithubLogo.png" alt="GitHub" class="footer-icon" />
    </a>
    <a href="https://www.linkedin.com/in/jared-mori-a4ba52340/" target="_blank" rel="noopener">
        <img src="LinkedInLogo.png" alt="LinkedIn" class="footer-icon" />
    </a>
</div>
</footer>

<style>
    nav {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        padding: 1rem;
        z-index: 10;
    }
    .darkmode-toggle {
        border: none;
        padding: 0;
        cursor: pointer;
        background: none;
        filter: invert(13%) sepia(98%) saturate(2000%) hue-rotate(353deg) brightness(55%) contrast(120%);
    }
    footer {
        position: relative;
        bottom: 0;
        left: 0;
        max-width: 100%;
        padding: 1rem;
        background-color: #023047;
        color: white;
        text-align: center;
        font-family: 'Poppins', sans-serif;
        font-weight: 300;
    }
    .footer-links {
        position: absolute;
        right: 1rem;
        top: 50%;
        transform: translateY(-50%);
        display: flex;
        align-items: center;
        margin-top: 0;
    }
    .footer-links a {
        margin: 0 0.5rem;
        display: inline-block;
    }
    .footer-icon {
        width: 32px;
        height: 32px;
        vertical-align: middle;
        filter: brightness(0) invert(1);
        transition: filter 0.2s;
    }
    .footer-icon:hover {
        filter: brightness(0.7) invert(0.7);
    }
</style>