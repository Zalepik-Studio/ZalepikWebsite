const zalepik_drawer = document.querySelector('.zalepik_drawer')
    zalepik_drawer.addEventListener('click', toggleMenuDrawer)

    var zalepik_drawer_close = document.querySelector('.zalepik_drawer_close')
    zalepik_drawer_close.addEventListener('click', hiddenMenuDrawer)


    function toggleMenuDrawer () {
      const drawer_layer = document.querySelector('.zalepik_wrap_menu_nav_drawer');
      drawer_layer.classList.remove('invisible');
      drawer_layer.classList.remove('opacity-0');
      const fixed = document.querySelector('body');
      fixed.classList.toggle('h-full');
      fixed.classList.toggle('overflow-y-hidden');
    }

    function hiddenMenuDrawer () {
      const drawer_layer = document.querySelector('.zalepik_wrap_menu_nav_drawer');
      drawer_layer.classList.toggle('invisible');
      drawer_layer.classList.toggle('opacity-0');
      const fixed = document.querySelector('body');
      fixed.classList.remove('h-full');
      fixed.classList.remove('overflow-y-hidden');
    }