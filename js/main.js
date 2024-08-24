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


const servicesLink = document.querySelector('.services__body-link');
const servicesIcon = document.querySelector('.services__body-link-icon');

const changeBlueColorServicesIcon = () => {
    servicesIcon.src = './images/services/arrow-right-hover.svg';
}

const changeDarkColorServicesIcon = () => {
    servicesIcon.src = './images/services/arrow-right.svg';
}

servicesLink.addEventListener('mouseover', changeBlueColorServicesIcon);
servicesLink.addEventListener('mouseout', changeDarkColorServicesIcon);