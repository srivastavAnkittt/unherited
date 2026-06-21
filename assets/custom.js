document.querySelectorAll('.footer-main-heading').forEach(function (heading) {
  heading.addEventListener('click', function () {
    const parent = this.closest('.parent-footer');
    const targetUl = parent.querySelector('ul');
    const targetIcon = this.querySelector('.footer-dropdown-icon');
    document.querySelectorAll('.parent-footer').forEach(function (pf) {
      const ul = pf.querySelector('ul');
      const icon = pf.querySelector('.footer-dropdown-icon');
      if (ul !== targetUl) {
        ul.classList.add('hidden');

        if (icon) {
          icon.classList.remove('rotate-180');
        }
      }
    });
    targetUl.classList.toggle('hidden');
    if (targetIcon) {
      if (targetUl.classList.contains('hidden')) {
        targetIcon.classList.remove('rotate-180');
      } else {
        targetIcon.classList.add('rotate-180');
      }
    }
  });
});