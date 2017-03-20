function component () {
    var element = document.createElement('div');

    element.innerHTML = `
    <h2>We're working on a redesign. Revelation soon!<h2>
    <img src='./assets/compere.jpg'>
`;

    return element;
}

document.body.appendChild(component());