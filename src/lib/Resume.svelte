<script lang="ts">
    import { copy } from 'svelte-copy';
    let emailCopyMessage = '';
    let phoneCopyMessage = '';
    let emailCopyTimeout: ReturnType<typeof setTimeout>;
    let phoneCopyTimeout: ReturnType<typeof setTimeout>;

    function showEmailCopyMessage(msg: string) {
        emailCopyMessage = msg;
        clearTimeout(emailCopyTimeout);
        emailCopyTimeout = setTimeout(() => emailCopyMessage = '', 2000);
    }
    function showPhoneCopyMessage(msg: string) {
        phoneCopyMessage = msg;
        clearTimeout(phoneCopyTimeout);
        phoneCopyTimeout = setTimeout(() => phoneCopyMessage = '', 2000);
    }
    const email = "jared@mori.us";
    const phone = "310-801-5171";
    const profile = "Recent Computer Science graduate with hands-on experience developing C++ and Python applications during an internship at Lockheed Martin. Also experienced in web development through personal and academic projects. Skilled in software engineering, version control, and collaborative development. Eager to contribute to impactful software and web-based projects in a dynamic, team-focused environment.";
</script>

<div class="resume-container">
    <div id="col-one" class="resume-col">
        <div class="resume-section">
            <h2>CONTACT</h2>
            <hr class="resume-divider" />
            <div class="contact-links-row">
                <div class="copy-btn-container" style="position: relative; display: inline-block;">
                    {#if emailCopyMessage}
                        <div class="copy-toast">{emailCopyMessage}</div>
                    {/if}
                    <button class="contact-link"
                        use:copy={{
                            text: email,
                            events: ['click'],
                            onCopy({ text }) {
                                showEmailCopyMessage(`Copied: ${text}`);
                            },
                            onError({ error }) {
                                showEmailCopyMessage(error.message);
                            }
                        }}
                    >
                        <img src="/email.svg" alt="Email" />
                    </button>
                </div>
                <a href="https://github.com/Jared-Mori" target="_blank" rel="noopener" class="contact-link">
                    <img src="/GithubLogo.png" alt="GitHub" />
                </a>
                <a href="https://www.linkedin.com/in/jared-mori-a4ba52340/" target="_blank" rel="noopener" class="contact-link">
                    <img src="/LinkedInLogo.png" alt="LinkedIn" />
                </a>
                <div class="copy-btn-container" style="position: relative; display: inline-block;">
                    {#if phoneCopyMessage}
                        <div class="copy-toast">{phoneCopyMessage}</div>
                    {/if}
                    <button class="contact-link"
                        use:copy={{
                            text: phone,
                            events: ['click'],
                            onCopy({ text }) {
                                showPhoneCopyMessage(`Copied: ${text}`);
                            },
                            onError({ error }) {
                                showPhoneCopyMessage(error.message);
                            }
                        }}
                    >
                        <img src="/phone.svg" alt="Phone" />
                    </button>
                </div>
            </div>
        </div>
        <div class="resume-section">
            <h2>EDUCATION</h2>
            <hr class="resume-divider" />
            <div class="column-one-content">
                <p>2023 - 2025</p>
                <p>CALIFORNIA STATE UNIVERSITY, FULLERTON</p>
                <ul>
                    <li>Bachelor of Science in Computer Science</li>
                </ul>
            </div>
            <div class="column-one-content">
                <p>2020 - 2023</p>
                <p>EL CAMINO COLLEGE</p>
                <ul>
                    <li>Coursework in Computer Science and Mathematics</li>
                </ul>
            </div>
        </div>
        <div class="resume-section">
            <h2>Hard Skills</h2>
            <hr class="resume-divider" />
            <div class="column-one-content">
                <ul>
                    <li>C++ / C#</li>
                    <li>Python</li>
                    <li>Java</li>
                    <li>Unity</li>
                    <li>Git / Github</li>
                    <li>Jira and Agile</li>
                    <li>JavaScript / HTML / CSS</li>
                    <li>React / Svelte</li>
                </ul>
            </div>
        </div>
        <div class="resume-section">
            <h2>Soft Skills</h2>
            <hr class="resume-divider" />
            <div class="column-one-content">
                <ul>
                    <li>Team Collaboration</li>
                    <li>Leadership</li>
                    <li>Problem Solving</li>
                    <li>Adaptability</li>
                </ul>
            </div>
        </div>
    </div>
    <div id="col-two" class="resume-col">
        <div class="resume-section">
            <h2>PROFILE</h2>
            <hr class="resume-divider" />
            <div class="column-two-content">
                <p id="profile">{profile}</p>
            </div>
        </div>
        <div class="resume-section work-experience">
            <h2>WORK EXPERIENCE</h2>
            <hr class="resume-divider" />
            <div class="column-two-content">
                <p>--- MAY - AUGUST 2023 ---</p>
                <p>SOFTWARE ENGINEERING INTERN, LOCKHEED MARTIN SPACE</p>
                <ul>
                    <li>Contributed production-level C++ code to a large-scale software project for Lockheed Martin Space.</li>
                    <li>Developed and maintained automated tests using Python to validate new features.</li>
                    <li>Collaborated in Agile team meetings, code reviews, and sprint plannings.</li>
                </ul>
                <p>--- 2021 - 2022 SCHOOL YEAR ---</p>
                <p>AVID TUTOR, PALOS VERDES PENINSULA HIGH SCHOOL</p>
                <ul>
                    <li>Led tutoring sessions in math and science for small student groups (4-6 students)</li>
                    <li>Encouraged and facilitated collaboration and peer-to-peer learning</li>
                    <li>Assisted teachers in student study group placements and evaluated student work.</li>
                </ul>
                <p>--- 2019 - 2020 ---</p>
                <p>INSTRUCTOR, MATHNASIUM</p>
                <ul>
                    <li>Tutored math to 5–12 students from elementary to high school levels.</li>
                    <li>Assigned and graded worksheets tailored to individual learning levels.</li>
                    <li>Collaborated with staff to optimize instructional support for 40–50 students.</li>
                </ul>
            </div>
        </div>
        <div class="resume-section">
            <h2>REFERENCE</h2>
            <hr class="resume-divider" />
            <div class="column-two-content">
                <div class="reference-container">
                    <div class="reference">
                        <p>GREG EDLUND</p>
                        <ul>
                            <li>Former Vice President, Lockheed Martin Space</li>
                            <li>PHONE: 303-912-1065</li>
                            <li>EMAIL: edlundgreg@yahoo.com</li>
                        </ul>
                    </div>
                    <div class="reference">
                        <p>Antonio Pieknik</p>
                        <ul>
                            <li> Software Engineering Asc. Manager, Lockheed Martin Space</li>
                            <li>EMAIL: antonio.g.pieknik@lmco.com</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

<a href="Jared-Resume-2025.pdf" download class="download-resume-btn">
    Download Resume (PDF)
</a>

<style>
.resume-container {
    display: flex;
    margin-top: 3rem;
    align-items: flex-start;
    height: 80vh;
    width: 70%;
    z-index: 4;
    border-radius: 12px;
    margin-right: 9rem;
}
.resume-col {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100%;
}
#col-one {
    flex: 4;
}
#col-two {
    flex: 6;
}
.resume-section {
    width: 100%;
    text-align: center;
}
.resume-section h2 {
    margin-top: .4rem;
    font-family: 'Poppins', sans-serif;
    font-weight: 500;
    font-size: 1.9rem;
    margin-bottom: 0;
    color: var(--background);
}
.column-one-content {
    font-family: 'Poppins', sans-serif;
    font-size: 1rem;
    line-height: 1;
    color: var(--background, #333);
    padding-left: 1rem;
    padding-right: 1rem;
    padding-top: .4rem;
}
.column-one-content p {
    font-size: 1rem;
    margin: 0.2rem 0;
}
.column-one-content ul {
    list-style-type: default;
    padding: 0;
    margin: .7rem;
    margin-bottom: 0;
}
.column-one-content li {
    font-size: .8rem;
    text-align: left;
    margin-bottom: 0.5rem;
}
.column-two-content {
    font-family: 'Poppins', sans-serif;
    font-size: 1.1rem;
    line-height: 1.5;
    color: var(--background, #333);
    padding-left: 1rem;
    padding-right: 1rem;
}
.column-two-content p {
    font-size: 1.1rem;
    margin: 0.2rem 0;
    text-align: left;
}
#profile {
    font-size: 0.8rem;
    margin-bottom: 0;
    text-align: left;
}
.column-two-content ul {
    list-style-type: none;
    padding: 0;
    margin: 0rem;
    margin-bottom: 0;
}
.column-two-content li {
    font-size: .9rem;
    text-align: left;
    margin-bottom: 0.2rem;
}
.reference-container {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    width: 100%;
}
.reference {
    padding: 1rem;
    border-radius: 8px;
    width: 100%;
    text-align: left;
}
.resume-section.work-experience .column-two-content {
    height: 330px;
    overflow-y: auto;
    width: 100%;
    background-color: rgba(156, 51, 51, 0.459);
}
.resume-section.work-experience .column-two-content::-webkit-scrollbar {
    width: 8px;
    border-radius: 4px;
}
.resume-section.work-experience .column-two-content::-webkit-scrollbar-thumb {
    background: var(--about-bg);
    border-radius: 4px;
}
.resume-section.work-experience .column-two-content::-webkit-scrollbar-thumb:hover {
    background: #871b22;
}
.resume-divider {
    width: 30%;
    border: none;
    border-top: 3px solid var(--header);
    margin-bottom: 0;
    margin-top: 0;
    height: 0;
}
.contact-links-row {
    display: flex;
    justify-content: center;
    gap: 1rem;
    margin: 1rem 0;
    margin-bottom: 0;

}
.contact-link img {
    width: 32px;
    height: 32px;
    object-fit: cover;
    filter: invert(97%) sepia(6%) saturate(300%) hue-rotate(62deg) brightness(104%) contrast(97%);
}
button {
    background: none;
    border: none;
    cursor: pointer;
    padding: 0;
    height: 32px;
    width: 32px;
}
.download-resume-btn {
    display: inline-block;
    margin: 2rem auto 0 auto;
    padding: 0.8rem 2rem;
    background: var(--about-bg);
    color: #fff;
    font-family: 'Poppins', sans-serif;
    font-size: 1.1rem;
    font-weight: 500;
    border: none;
    border-radius: 6px;
    text-decoration: none;
    text-align: center;
    box-shadow: 0 2px 8px rgba(0,0,0,0.08);
    transition: background 0.2s;
    cursor: pointer;
}
.download-resume-btn:hover {
    background: var(--about-bg-hover);
}
.copy-toast {
    position: absolute;
    bottom: 110%; /* Place just above the button */
    left: 50%;
    transform: translateX(-50%);
    background: var(--about-bg, #720f12);
    color: #fff;
    padding: 0.8rem 2rem;
    border-radius: 8px;
    font-family: 'Poppins', sans-serif;
    font-size: 1.1rem;
    box-shadow: 0 2px 8px rgba(0,0,0,0.15);
    z-index: 1000;
    animation: fadein 0.2s;
    white-space: nowrap;
}
@keyframes fadein {
    from { opacity: 0; }
    to { opacity: 1; }
}
</style>