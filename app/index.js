function component () {
    var element = document.createElement('div');

    element.innerHTML = `

    <nav>
        <div class="nav-wrapper">
          <ul id="nav-mobile" class="right hide-on-med-and-down">
            <li><a href="sass.html">Sass</a></li>
            <li><a href="badges.html">Components</a></li>
            <li><a href="collapsible.html">JavaScript</a></li>
          </ul>
        </div>
    </nav>
    <h2>We're working on a redesign. Revelation soon!!<h2>
    <img src='./assets/compere.jpg'>
`;

    return element;
}

document.body.appendChild(component());