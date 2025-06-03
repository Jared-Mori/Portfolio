<script lang="ts">
    import ProjectCard from '$lib/ProjectCard.svelte';
    import { draggable } from '@neodrag/svelte';

    let projects = [
        { id: 0, title: "Project 1", description: "Desc 1", link: "/project1", tags: ["svelte", "frontend"] },
        { id: 1, title: "Project 2", description: "Desc 2", link: "/project2", tags: ["TypeScript", "API"] },
        { id: 2, title: "Project 3", description: "Desc 3", link: "/project3", tags: ["Node.js", "Backend"] },
        { id: 3, title: "Project 4", description: "Desc 4", link: "/project4", tags: ["Python", "ML"] },
        { id: 4, title: "Project 5", description: "Desc 5", link: "/project5", tags: ["React", "UI"] },
        { id: 5, title: "Project 6", description: "Desc 6", link: "/project6", tags: ["Go", "API"] },
        { id: 6, title: "Project 7", description: "Desc 7", link: "/project7", tags: ["C++", "Performance"] },
        { id: 7, title: "Project 8", description: "Desc 8", link: "/project8", tags: ["Rust", "Systems"] },
        { id: 8, title: "Project 9", description: "Desc 9", link: "/project9", tags: ["SQL", "Database"] }
    ];

    let positions = [
        { x: 100, y: 100 },
        { x: 700, y: 100 },
        { x: 1300, y: 100 },
        { x: 100, y: 100 },
        { x: 700, y: 100 },
        { x: 1300, y: 100 },
        { x: 100, y: 100 },
        { x: 700, y: 100 },
        { x: 1300, y: 100 },
        { x: 100, y: 100 }
    ];

    let sidebarOne = false;
    let sidebarTwo = false;
    let sidebarThree = false;

    function toggleSideBars(sidebar: string, isOpen: boolean) {
        if (sidebar === 'one') {
            if (isOpen) {
                sidebarOne = false;
                sidebarTwo = false;
                sidebarThree = false;
            } else {
                sidebarOne = true;
            }
        } else if (sidebar === 'two') {
            if (isOpen) {
                sidebarTwo = false;
                sidebarThree = false;
            } else {
                sidebarTwo = true;
            }
        } else if (sidebar === 'three') {
            sidebarThree = !sidebarThree;
        }
    }

    function getStartPosition(index: number) {
        const x = 100 + (600 * (index % 3));
        const y = 100;
        return { x, y};
    }

    function getConnectorHeight(index: number) {
        if (index >= positions.length - 1) {
            return 0; // No connector for the last item
        }
        
        return positions[index + 1].y - positions[index].y + 250;
    }

    function getConnectorWidth(index: number) {
        if (index >= positions.length - 1) {
            return 0; // No connector for the last item
        }
        return positions[index + 1].x - positions[index].x;
    }

    function getHorizontalLineTop(i: number) {
        // 50% from top plus the vertical line's height in px
        return `calc(50% + ${getConnectorHeight(i)}px)`;
    }

    $: gridHeight = 200 + (projects.length * 250);
</script>

<div class="introduction">

    <div class="sidebar {sidebarOne ? 'open' : ''}">
        <button id ="sidebar-one"  class="sidebar-toggle" aria-label="Toggle sidebar" on:click={() => toggleSideBars('one', sidebarOne)}></button>
        <div class="sidebar-content">
            <p>Welcome to the sidebar! Click the button to toggle visibility.</p>
        </div>
    </div>

    <div class="sidebar {sidebarTwo ? 'open' : ''}">
        <button id="sidebar-two" class="sidebar-toggle" aria-label="Toggle sidebar" on:click={() => toggleSideBars('two', sidebarTwo)}></button>
        <div class="sidebar-content">
            <p>Welcome to the sidebar! Click the button to toggle visibility.</p>
        </div>
    </div>

    <div class="sidebar {sidebarThree ? 'open' : ''}">
        <button id="sidebar-three" class="sidebar-toggle" aria-label="Toggle sidebar" on:click={() => toggleSideBars('three', sidebarThree)}></button>
        <div class="sidebar-content">
            <p>Welcome to the sidebar! Click the button to toggle visibility.</p>
        </div>
    </div>

    <div class="content">
        <h1>Welcome to the Svelte App!</h1>
        <p>This is your main content area.</p>
    </div>
</div>

<div
    class="projects-grid"
    style="height: {gridHeight}px;"
>
    {#each projects as project, i}
        {#if project}
            <div 
                class="grid-slot" 
                data-index={i} 
                use:draggable={{ 
                    bounds: 'parent', 
                    grid: [50, 50], 
                    defaultPosition: getStartPosition(project.id), 
                    onDrag: ({ offsetX, offsetY }) => {positions[project.id] = { x: offsetX, y: offsetY };
            }}}>
                <ProjectCard {...project} />
                <!-- Vertical line -->
                {#if getConnectorHeight(i) < 0}
                    <!-- Draw upwards: position SVG so its bottom is at the center -->
                    <svg
                        class="slot-line"
                        width="3"
                        height={Math.abs(getConnectorHeight(i))}
                        style="position:absolute; left:50%; top:calc(50% - {Math.abs(getConnectorHeight(i))}px); transform:translateX(-50%); pointer-events:none;"
                    >
                        <line x1="0" y1={Math.abs(getConnectorHeight(i))} x2="0" y2="0" stroke="#540b0e" stroke-width="10" stroke-linecap="round" />
                    </svg>
                {:else}
                    <!-- Draw downwards: position SVG so its top is at the center -->
                    <svg
                        class="slot-line"
                        width="3"
                        height={getConnectorHeight(i)}
                        style="position:absolute; left:50%; top:50%; transform:translateX(-50%); pointer-events:none;"
                    >
                        <line x1="0" y1="0" x2="0" y2={getConnectorHeight(i)} stroke="#540b0e" stroke-width="10" stroke-linecap="round" />
                    </svg>
                {/if}
                <!-- Horizontal line, starts at the end of the vertical line -->
                {#if getConnectorWidth(i) < 0}
                    <svg
                        class="slot-line"
                        width={Math.abs(getConnectorWidth(i))}
                        height="3"
                        style="position:absolute; left:calc(50% - {Math.abs(getConnectorWidth(i))}px); top:{getHorizontalLineTop(i)}; transform:translateX(0); pointer-events:none;"
                    >
                        <line x1={Math.abs(getConnectorWidth(i))} y1="1.5" x2={-5} y2="1.5" stroke="#540b0e" stroke-width="10" stroke-linecap="round" />
                    </svg>
                {:else}
                    <svg
                        class="slot-line"
                        width={getConnectorWidth(i)}
                        height="3"
                        style="position:absolute; left:50%; top:{getHorizontalLineTop(i)}; transform:translateX(0); pointer-events:none;"
                    >
                        <line x1={-5} y1="1.5" x2={getConnectorWidth(i)} y2="1.5" stroke="#540b0e" stroke-width="10" stroke-linecap="round" />
                    </svg>
                {/if}
                <svg
                    width="16"
                    height="16"
                    style="position:absolute; left:50%; top:{getHorizontalLineTop(i)}; transform:translate(-50%, -50%); pointer-events:none; z-index:-1;"
                >
                    <circle cx="8" cy="8" r="6" fill="#540b0e" />
                </svg>
            </div>
        {/if}
    {/each}
</div>

<style>
    @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
    :global(body) {
        margin: 0;
        padding: 0;
    }
    .introduction {
        display: flex;
        height: 97vh;
        position: relative;
        overflow: hidden;
        background-color: #f0fff1;
        width: auto;
    }
    .content {
        flex: 1;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        z-index: 1;
    }
    .content h1 {
        font-family: 'Poppins', sans-serif;
        font-weight: 600;
        font-style: normal;
        font-size: 4rem;
        margin-bottom: 1rem;
        line-height: 1.1;
        max-width: 400px;
        color: #660708;
    }
    .content p {
        font-family: 'Poppins', sans-serif;
        font-weight: 400;
        font-style: normal;
        font-size: 1.5rem;
        color: #a4161a;
        max-width: 600px;
        text-align: center;
    }
    .projects-grid {
        box-sizing: border-box;
        min-width: 100%;
        background: #E3EEB2;
        background-image:
            linear-gradient(to right, #b8c28d 1px, transparent 1px),
            linear-gradient(to bottom, #b8c28d 1px, transparent 1px);
        background-size: 50px 50px;
        position: relative;
    }
    .grid-slot {
        position: relative;
        width: 450px;
        height: 250px;
        aspect-ratio: 16 / 9;
        display: flex;
        background: rgba(255,255,255,0.1);
        border-radius: 12px;
    }
    .slot-line {
        z-index: -1;
    }
    .sidebar {
        position: absolute;
        display: flex;
        flex-direction: column;
        right: -90%;
        width: 90%;
        height: 100%;
        background-color: #ba181b;
        transition: right 0.3s;
        z-index: 2;
    }
    .sidebar.open {
        right: 0;
    }
    .sidebar-content {
        flex: 1;
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 1;
        color: white;
    }
    .sidebar-toggle {
        position: absolute;
        background-color: #ba181b;
        top: 0;
        bottom: 0;
        border: none;
        cursor: pointer;
        z-index: 3;
        box-shadow: -6px 0 6px rgba(0,0,0,0.2);
        transition: box-shadow 0.2s;
    }
    #sidebar-one {
        left: -9%;
        width: 9%;
    }
    #sidebar-two {
        left: -6%;
        width: 6%;
    }
    #sidebar-three {
        left: -3%;
        width: 3%;
    }
    .sidebar-toggle:hover {
        box-shadow: -10px 0 12px rgba(0,0,0,0.2);
    }
    
</style>