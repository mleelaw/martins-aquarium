import { database } from './aquariumData.js';

export const fishList = () => {
    let fishHTML = "<ul>"

    for (const item of database.fish) {
        fishHTML += `
        <li>
            <h3>${item.name}</h3>
            <p>Species: ${item.species}</p>
            <p>Length: ${item.length} cm</p>
            <p>Location: ${item.location} </p>
            <p>Diet: ${item.diet} </p>
            <img src="${item.image}" width="200">
        </li>
    `;
    }

    fishHTML += "</ul>"
    return fishHTML
}


  