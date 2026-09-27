// Simple typewriter effect for the hero role text
document.addEventListener('DOMContentLoaded', () => {
    const target = document.getElementById('typed');
    if (!target) return;

    const roles = ['Front-End Developer', 'YouTuber', 'Content Creator', 'Car Guy'];
    let roleIndex = 0;
    let charIndex = 0;
    let deleting = false;

    function tick() {
        const word = roles[roleIndex];

        if (!deleting) {
            charIndex++;
            target.textContent = word.slice(0, charIndex);
            if (charIndex === word.length) {
                deleting = true;
                setTimeout(tick, 1400);
                return;
            }
        } else {
            charIndex--;
            target.textContent = word.slice(0, charIndex);
            if (charIndex === 0) {
                deleting = false;
                roleIndex = (roleIndex + 1) % roles.length;
            }
        }

        setTimeout(tick, deleting ? 45 : 90);
    }

    tick();
});
