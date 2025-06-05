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
    :root {
        --background: #f0fff1;
        --header: #621708;
        --sub-header: #ac171c;
        --text: #c9070e;
        --footer-bg: #621708;
        --footer-text: #fff;
        --footer-icon: brightness(0) invert(1);
        --tag-bg: #f6aa1c;
        --tag-text: #220901;
        --grid-bg: #AEC8A4;
        --grid-line: #798b71;
        --sidebar-bg: #ba181b;
        --sidebar-text: #fff;
        --about-bg: #720f12;
        --about-bg-hover: #881317;
    }
    :global(body.dark) {
        --background: #f0fff1;
        --header: #621708;
        --text: #c9070e;
        --footer-bg: #621708;
        --footer-text: #fff;
        --footer-icon: brightness(1) invert(0.2);
        --tag-bg: #f6aa1c;
        --tag-text: #220901;
        --grid-bg: #E3EEB2;
        --grid-line: #b8c28d;
        --sidebar-bg: #ba181b;
        --sidebar-text: #fff;
        --about-bg: #720f12;
        --about-bg-hover: #881317;
    }
    nav {
        position: fixed;
        top: 0;
        left: 0;
        padding: 1rem;
        z-index: 10;
        background: none;
    }
    .darkmode-toggle {
        border: none;
        padding: 0;
        margin-top: -0.8rem;
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
        background-color: var(--footer-bg);
        color: var(--footer-text);
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
        filter: var(--footer-icon);
        transition: filter 0.2s;
    }
    .footer-icon:hover {
        filter: brightness(0.7) invert(0.7);
    }
</style>