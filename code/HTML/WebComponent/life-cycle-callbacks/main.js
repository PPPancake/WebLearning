class Square extends HTMLElement {
  static get observedAttributes() {
    return ['c', 'l'];
  }

  constructor() {
    super();
    var shadow = this.attachShadow({mode:'open'});
    
    var div = document.createElement('div');
    var style = document.createElement('style');
    shadow.appendChild(style);
    shadow.appendChild(div);
  }


  
  connectCallback() {
    console.log('Custom square element added to page.');
    updateStyle(this);
  }

  disconnectedCallback() {
    console.log('Custom square element removed from page.');
  }

  adoptedCallback() {
    console.log('Custom square element moved to new page.');
  }
  
  attributeChangedCallback(name, oldValue, newValue) {
    console.log('Custom square element attributes changed.');
    updateStyle(this);
  }
}

window.customElements.define('custom-square', Square);

function updateStyle(elem) {
  var shadow = elem.shadowRoot;
  shadow.querySelector("style").textContent = `
    div {
      width: ${elem.getAttribute("l")}px;
      height: ${elem.getAttribute("l")}px;
      background-color: ${elem.getAttribute("c")}
    }
    `;
}

const add = document.querySelector('.add');
const update = document.querySelector('.update');
const remove = document.querySelector('.remove');

let square;

update.disabled = true;
remove.disabled = true;

function random(min, max) {
  return Math.floor(Math.random() * (max-min+1) + min);
}

add.onclick = function () {
  square = document.createElement('custom-square');
  square.setAttribute('l', '100');
  square.setAttribute('c', 'red');
  document.body.appendChild(square);

  update.disabled = false;
  remove.disabled = false;
  add.disabled = true;
};

update.onclick = function() {
  square.setAttribute('l', random(50, 200));
  square.setAttribute('c', `rgb(${random(0, 255)},${random(0, 255)},${random(0, 255)})`);
};

remove.onclick = function() {
  // Remove the square
  document.body.removeChild(square);

  update.disabled = true;
  remove.disabled = true;
  add.disabled = false;
};