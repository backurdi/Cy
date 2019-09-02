import '../css/style.scss';
import '../css/_mixin.scss';
import {
    insertElement
} from '../reusable/reusable';

const memberImagePath = require.context('../img', true);

insertElement('nav', 'nav.html');
insertElement('footer', 'footer.html');

//Add members to about page
const membersList = [{
        name: "Linnea Harris",
        title: "Revisor",
        image: `${memberImagePath('./man.jpg', true)}`,
        linkedIn: "#",
        email: "#"
    },
    {
        name: "Kim Harris",
        title: "Revisor",
        image: `${memberImagePath('./man.jpg', true)}`,
        linkedIn: "#",
        email: "#"
    },
    {
        name: "Salman Harris",
        title: "Revisor",
        image: `${memberImagePath('./man.jpg', true)}`,
        linkedIn: "#",
        email: "#"
    },
]
const memberContainer = document.getElementById('members');
for (let i = 0; i < membersList.length; i++) {
    const member = `
<div class="member-box">
                <div class="avatar" style="background-image: url(${membersList[i].image});">
                    <div class="avatar-text">
                        <h3>${membersList[i].name}</h3>
                        <p>${membersList[i].title}</p>
                    </div>
                </div>
                <div class="link-container">
                    <a href="${membersList[i].linkedIn}">
                        <svg class="linkedIn-icon">
                            <use xlink:href="../../sprite.svg#icon-linkedin-logo"></use>
                        </svg>
                    </a>
                    <a href="${membersList[i].email}">
                            <svg class="mail-icon">
                                <use xlink:href="../../sprite.svg#icon-mail"></use>
                            </svg>
                    </a>
                </div>
            </div>
`
    memberContainer.insertAdjacentHTML('afterbegin', member);
}