const button = document.querySelector('.modal-button')
    button.addEventListener('click', toggleModal)

    var button2 = document.querySelector('.modal-button-2')
    button2.addEventListener('click', hiddenModal)

    const overlay = document.querySelector('.modal-overlay')
    overlay.addEventListener('click', hiddenModal)


    function toggleModal () {
      const modal = document.querySelector('.modal');
      modal.classList.remove('invisible');
      modal.classList.remove('opacity-0');
      const fixed = document.querySelector('body');
      fixed.classList.toggle('h-full');
      fixed.classList.toggle('overflow-y-hidden');
    }

    function hiddenModal () {
      const modal = document.querySelector('.modal');
      modal.classList.toggle('invisible');
      modal.classList.toggle('opacity-0');
      const fixed = document.querySelector('body');
      fixed.classList.remove('h-full');
      fixed.classList.remove('overflow-y-hidden');
    }