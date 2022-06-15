export default function getValueInputGroup() {
  //   const gr1 = document.querySelectorAll(
  //     ".radio_input[name='mona_features[0][0][group][0][value][0]']"
  //   );

  //   const gr2 = document.querySelectorAll(
  //     ".radio_input[name='mona_features[0][0][group][1][value][0]']"
  //   );

  //   const gr3 = document.querySelectorAll(
  //     ".radio_input[name='mona_features[0][0][group][2][value][0]']"
  //   );

  //   const listOrder = document.querySelector(".list-order");

  //   let resultGr1 = [];

  //   const appendResult = (ele, arr) => {
  //     let value = ele.value;
  //     let name = value.split("|")[0];
  //     let price = ele.value.split("|")[1];
  //     arr = []

  //     const newEle = document.createElement("li");
  //     newEle.className = "item-sub";
  //     const remove = document.createElement("div");
  //     remove.className = "remove";
  //     remove.innerHTML = `<i class="fa-solid fa-xmark"></i>`;
  //     remove.addEventListener("click", () => {
  //       newEle.remove();
  //     });
  //     newEle.append(name);
  //     newEle.append(remove);

  //     const item = document.querySelectorAll(".list-order .item-sub")

  //     item.forEach(el => {
  //         console.log(el.textContent)
  //         console.log(typeof el.textContent)
  //         console.log(name)
  //         console.log(typeof name)
  //         if (el.textContent == name) {
  //             console.log(true)
  //             return
  //         }
  //     })
  //     listOrder.append(newEle);
  //   };

  //   if (gr1) {
  //     gr1.forEach((ele) => {
  //       ele.addEventListener("click", () => {
  //         appendResult(ele, resultGr1);
  //       });
  //     });
  //   }

  //   if (gr2) {
  //     gr2.forEach((ele) => {
  //       ele.addEventListener("click", () => {
  //         appendResult(ele);
  //       });
  //     });
  //   }

  //   if (gr3) {
  //     gr3.forEach((ele) => {
  //       ele.addEventListener("click", () => {
  //         appendResult(ele);
  //       });
  //     });
  //   }

  const choice = document.querySelectorAll('.mona-choice-order-field');

  choice.forEach((el) => {
    el.addEventListener('click', () => {
      const listOrder = document.querySelector('.list-order');
      const nameInput = el.name;
      const nameValue = el.value;
      const nameOrder = nameValue.split('|')[0];
      const price = nameValue.split('|')[1];
      const newOrder = document.createElement('li');
      newOrder.className = 'item-sub';
      newOrder.setAttribute('data-name', nameInput);
      newOrder.innerHTML = nameOrder;
      const remove = document.createElement('div');
      remove.className = 'remove';
      remove.innerHTML = `<i class="fas fa-times"></i>`;
      remove.addEventListener('click', () => {
        const choice1 = document.querySelectorAll('.mona-choice-order-field');
        choice1.forEach((c) => {
          if (new String(nameInput).valueOf() == new String(c.name).valueOf()) {
            c.checked = false;
          }
        });
        newOrder.remove();
      });
      newOrder.append(remove);

      // scan elements
      const itemOrder = document.querySelectorAll('.item-sub');
      let flag = false;

      itemOrder.forEach((item) => {
        const dataName = item.getAttribute('data-name');
        if (new String(dataName).valueOf() == new String(nameInput).valueOf()) {
          item.innerHTML = nameOrder;
          const remove = document.createElement('div');
          remove.className = 'remove';
          remove.innerHTML = `<i class="fas fa-times"></i>`;
          remove.addEventListener('click', () => {
            const choice1 = document.querySelectorAll('.mona-choice-order-field');
            choice1.forEach((c) => {
              c.checked = false;
            });
            item.remove();
          });
          item.append(remove);
          flag = true;

          if (el.checked === false) {
            item.remove();
          }
        }
      });

      if (flag === false) {
        listOrder.append(newOrder);
      }
    });
  });
}
