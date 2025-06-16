<script lang="ts">
    export let headshotSrc = "/JaredPhoto.png";

    const aboutMe = "I’m a software and web developer with a background in computer science and a passion for building interesting and useful applications. I love creating software that solves real-world problems and enhances user experiences.";
    const journey = "I’ve always loved video games, which got me into computers—and eventually into coding. I stuck with it because I love solving problems and building things.";
    const current = "I’m currently building out my portfolio and improving my web development skills by working with frameworks like React and Svelte, while exploring better ways to design clean, responsive interfaces.";
    const ethic = "I aim to write well-formatted, reusable code with a strong focus on functionality. I like building things that work reliably and can be easily extended or improved over time.";
    const hobbies = "Outside of coding, I enjoy playing video games, learning Japanese, cooking, and fishing. I also love exploring new technologies and learning about the latest trends in software development.";
</script>

<div class="about-columns">
    <div class="about-col">
        <div class="about-headshot-container">
            <img src={headshotSrc} alt="Headshot" class="about-headshot" />
        </div>
        <div class="about-section">
            <h2>Hi, I'm Jared</h2>
            <hr class="about-divider" />
            <div class="about-section-content">
                <p>{aboutMe}</p>
            </div>
        </div>
        <div class="about-section">
            <h2>How I Got Here</h2>
            <hr class="about-divider" />
            <div class="about-section-content">
                <p>{journey}</p>
            </div>
        </div>
    </div>
    <div class="about-col">
        <div class="about-section">
            <h2>What I'm Working On</h2>
            <hr class="about-divider" />
            <div class="about-section-content">
                <p>{current}</p>
            </div>
        </div>
        <div class="about-section">
            <h2>How I Work</h2>
            <hr class="about-divider" />
            <div class="about-section-content">
                <p>{ethic}</p>
            </div>
        </div>
        <div class="about-section">
            <h2>Outside of Code</h2>
            <hr class="about-divider" />
            <div class="about-section-content">
                <p>{hobbies}</p>
            </div>
        </div>
    </div>
</div>

<style>
.about-columns {
    display: flex;
    gap: 0;
    margin-top: 3rem;
    height: 80vh;
    width: 70%;
    z-index: 4;
    border-radius: 12px;
    margin-right: 9rem;
}
.about-col {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
}
.about-headshot-container {
    height: 240px;
    width: 240px;
    aspect-ratio: 1/1;
    display: flex;
    align-items: center;
    justify-content: center;
    background: var(--sub-header);
    border-radius: 50%;
    box-shadow: 0 0 0 8px var(--sub-header);
    margin-bottom: 2rem;
    overflow: hidden;
}
.about-headshot {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 50%;
    border: 4px solid var(--sub-header);
    box-shadow: 0 2px 8px rgba(0,0,0,0.08);
    display: block;
}
.about-section {
    width: 100%;
    text-align: center;
    padding-bottom: 0;
}
.about-section h2 {
    margin-top: .4rem;
    font-family: 'Poppins', sans-serif;
    font-weight: 600;
    font-size: 2rem;
    line-height: 1.2;
    margin-bottom: 0.3rem;
    color: var(--sub-header);
    padding-top: 0;
}
.about-section-content {
    font-family: 'Poppins', sans-serif;
    font-size: 1.1rem;
    line-height: 1.5;
    color: var(--sub-header, #333);
    padding-left: 1rem;
    padding-right: 1rem;
    padding-bottom: 0;
}
.about-divider {
    width: 30%;
    border: none;
    border-top: 3px solid var(--header);
    margin-bottom: 0;

}
</style>