function hschangeContent(hscontentId) {
    var hscontent = document.getElementById('hs-wiki-content');
    var hsnewContent = document.getElementById(hscontentId).innerHTML;
    hscontent.innerHTML = hsnewContent;
};

document.getElementById("hs-wiki-search-input").addEventListener("keyup", function(event) {
    if (event.keyCode === 13) { // Überprüfen, ob die Eingabetaste gedrückt wurde
      event.preventDefault(); // Verhindern, dass das Formular gesendet wird
      hswikisearchcontent(); // Funktion zum Durchführen der Suche aufrufen
    }
});

function hswikisearchcontent() {
    var hscontent = document.getElementById('hs-wiki-content');
    var hswikisearchcontentb = document.getElementById('hs-wiki-search-content-b').innerHTML;
    hscontent.innerHTML = hswikisearchcontentb;

    var input = document.getElementById('hs-wiki-search-input');
    var filter = input.value.toUpperCase();
    var ul = document.getElementById('hs-wiki-search-ul');
    var li = ul.getElementsByTagName('li');
    for (i = 0; i < li.length; i++) {
      a = li[i].getElementsByTagName("a")[0];
      txtValue = a.textContent || a.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        li[i].style.display = "";
      } else {
        li[i].style.display = "none";
      }
    }
};