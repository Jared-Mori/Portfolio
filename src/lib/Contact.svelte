<script>
    let submitted = false;
</script>

{#if submitted}
    <p>Thank you for reaching out! I'll get back to you soon.</p>
{:else}
    <form 
        action="https://formspree.io/f/yourFormID" 
        method="POST"
        on:submit={() => submitted = true}
        class="contact-form"
    >
        <label>
            Name:
            <input type="text" name="name" required />
        </label>
        <label>
            Email:
            <input type="email" name="email" required />
        </label>
        <label>
            Message:
            <textarea name="message" rows="5" required></textarea>
        </label>
        <button type="submit">Send</button>
    </form>
{/if}

<style>
.contact-form {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    max-width: 1000px;
    margin: 4rem 25vw 6rem 0; /* Top, Right, Bottom, Left: moves form right */
    font-family: 'Poppins', sans-serif;
    font-size: 1.5rem;
    padding: 3rem 2.5rem;
}
.contact-form label {
    display: flex;
    flex-direction: column;
    font-weight: 500;
    font-family: 'Poppins', sans-serif;
    font-size: 1.3rem;
    color: var(--sub-header);
}
.contact-form input,
.contact-form textarea {
    padding: 1.5rem;
    border-radius: 8px;
    border: 2px solid var(--header);
    background-color: var(--background);
    color: var(--sub-header);
    font-size: 1.3rem;
    font-family: 'Poppins', sans-serif;
}
.contact-form textarea {
    min-height: 180px;
    resize: vertical;
}
.contact-form input:focus,
.contact-form textarea:focus {
    outline: none;
}
.contact-form button {
    background: var(--grid-bg);
    color: var(--header);
    border: none;
    border-radius: 8px;
    padding: 1.2rem 3rem;
    font-size: 1.4rem;
    cursor: pointer;
    font-family: 'Poppins', sans-serif;
    font-weight: 600;
    margin-top: 1.5rem;
    transition: background 0.2s;
}
.contact-form button:hover {
    background: var(--grid-line);
    color: var(--sub-header);
}
</style>