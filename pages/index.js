const button = document.querySelector('.mode_light');
const skillsBlock = document.querySelector('.user-skills');
const informBlock = document.querySelector('.user-information');

button.addEventListener('click', () => {
    button.classList.toggle('mode_dark');
    skillsBlock.classList.toggle('user-skills_dark');
    informBlock.classList.toggle('user-information_dark');
    document.querySelector('.body').classList.toggle('body_dark');
})