document.addEventListener('DOMContentLoaded', function() {
  var factCount = 0;
  var links = document.querySelectorAll('.nav-link');
  links.forEach(function(link) {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      if (link.textContent.trim() === 'Galerija') {
        document.getElementById('gallery').scrollIntoView({ behavior: 'smooth' });
      } else {
        alert("Coming Soon");
      }
    });
  });
  function loadCatFact() {
    fetch('https://catfact.ninja/fact')
      .then(response => response.json())
      .then(data => {
        document.getElementById('cat-fact').innerText = data.fact;
        factCount++;
        document.getElementById('fact-counter').innerText = "Jauni fakti ielādēti: " + factCount;
      })
      .catch(err => {
        document.getElementById('cat-fact').innerText = "Kļūda ielādējot faktu.";
      });
  }
  loadCatFact();
  document.getElementById('new-fact').addEventListener('click', loadCatFact);
});
