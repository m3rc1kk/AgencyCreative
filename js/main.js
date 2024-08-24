const teamButton = document.querySelector('.team__button-story');
const teamIcon = document.querySelector('.team__button-icon');

const changeDarkColorTeamIcon = () => {
    teamIcon.src = './images/team/play-circle-hover.svg';
}

const changeLightColorTeamIcon = (element) => {
    teamIcon.src = './images/team/play-circle.svg';
}

teamButton.addEventListener('mouseover', changeDarkColorTeamIcon);
teamButton.addEventListener('mouseout', changeLightColorTeamIcon);