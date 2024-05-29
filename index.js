document.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        document.getElementById('skeleton-title').outerHTML = '<h1>Hi, I am Suraj Srivastav</h1>';
        document.getElementById('skeleton-subtitle').outerHTML = '<h3>Python, C, C++</h3>';
        document.getElementById('skeleton-description').outerHTML = '<p>Hi, I am Suraj Srivastav. I am pursuing B.Tech from BN College of Engineering and Technology, which is situated in Bakshi ka Talab, Lucknow and affiliated to AKTU.</p>';
        document.getElementById('skeleton-button1').outerHTML = '<a href="#">Talk to me</a>';
        document.getElementById('skeleton-button2').outerHTML = '<a href="#">Print resume</a>';
    }, 2000); // Simulating a 2-second loading time
});
