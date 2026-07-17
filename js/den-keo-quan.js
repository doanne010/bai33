document.addEventListener('DOMContentLoaded', () => {
    const lantern = document.querySelector('.lantern');
    const faces = document.querySelectorAll('.face');
    let angle = 0;
    let running = true;
    let frameId;

    function rotate() {
        if (running) {
            angle = (angle + 0.3) % 360;
            lantern.style.transform = `rotateY(${angle}deg)`;
        }
        frameId = requestAnimationFrame(rotate);
    }

    faces.forEach(face => {
        face.addEventListener('mouseenter', () => {
            running = false;
        });
        face.addEventListener('mouseleave', () => {
            running = true;
        });
    });

    rotate();
});
