document.addEventListener('DOMContentLoaded', function () {
  document.querySelector('#btnUpper').addEventListener('click', function () {
    let text = document.querySelector('#texto').value;
    document.querySelector('#result').innerHTML = upper(text);
  })

  function upper(text) {
    return text.toUpperCase();
  }
})

document.addEventListener('DOMContentLoaded', function () {
  document.querySelector('#btnLower').addEventListener('click', function () {
    let text = document.querySelector('#texto').value;
    document.querySelector('#result').innerHTML = lower(text);
  })

  function lower(text) {
    return text.toLowerCase();
  }
})

document.addEventListener('DOMContentLoaded', function () {
  document.querySelector('#btnAlt').addEventListener('click', function () {
    let text = document.querySelector('#texto').value;
    document.querySelector('#result').innerHTML = fl(text);
  })

  function fl(text) {
    const t = text;
    let modificado = "";
    const words = t.split(" ");

    for (let i = 0; i < words.length; i++) {
      words[i] = words[i][0].toUpperCase() + words[i].substr(1).toLowerCase();
      modificado = modificado + words[i] + " ";
    }

    return modificado;
  }
})
