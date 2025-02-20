document.addEventListener('DOMContentLoaded', function() {
  var links = document.querySelectorAll('.nav-link');
  for (var i = 0; i < links.length; i++) {
    links[i].addEventListener('click', function(e) {
      e.preventDefault();
      alert("Coming Soon");
    });
  }

  function loadCatFact() {
    fetch('https://catfact.ninja/fact')
      .then(response => response.json())
      .then(data => {
        document.getElementById('cat-fact').innerText = data.fact;
      });
  }

  loadCatFact();

  document.getElementById('new-fact').addEventListener('click', loadCatFact);
});
