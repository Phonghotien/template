export default function listSub() {
  const listSub = document.querySelectorAll('.list-sub');
  if (listSub) {
    listSub.forEach((a, i) => {
      const item = a.querySelectorAll('.item-sub');

      item.forEach((b, j) => {
        const remove = document.createElement('div');
        remove.className = 'remove';
        remove.innerHTML = `<i class="fas fa-times"></i>`;
        remove.addEventListener('click', () => {
          b.remove();
        });
        b.append(remove);
      });
    });
  }
}
