import { database } from './aquariumData';

export const tipList = () => {
    let tipHTML = "<ul>"

    for (const tip of database.tips) {
        tipHTML += `
        <li>
            <h3>${tip.topic}</h3>
            <p>text: ${tip.text}</p>
        </li>
    `;
    }

    tipHTML += "</ul>"
    return tipHTML
}

