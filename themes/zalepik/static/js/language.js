function zalepikDropwonFunction() {
    document.getElementById("zalepikDropdown").classList.toggle("zalepikShow");
  }
  
  // Close the dropdown if the user clicks outside of it
  window.onclick = function(event) {
    if (!event.target.matches('.zalepikDropwonButton')) {
      var dropdowns = document.getElementsByClassName("zalepikContent");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('zalepik_dropdown_bahasa_wrap zalepikContent zalepikShow')) {
          openDropdown.classList.remove('zalepik_dropdown_bahasa_wrap zalepikContent zalepikShow');
        }
      }
    }
  }

  function zalepikDropwonFunction2() {
    document.getElementById("zalepikDropdown2").classList.toggle("zalepikShow");
  }
  
  // Close the dropdown if the user clicks outside of it
  window.onclick = function(event) {
    if (!event.target.matches('.zalepikDropwonButton')) {
      var dropdowns = document.getElementsByClassName("zalepikContent");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('zalepik_dropdown_bahasa_wrap zalepikContent zalepikShow')) {
          openDropdown.classList.remove('zalepik_dropdown_bahasa_wrap zalepikContent2 zalepikShow')
        }
      }
    }
  }