export default function linkFormat() {
  let Num = document.querySelectorAll('.phoneFormat');
  Num.forEach((el) => {
    let numTxt = el.textContent.split('');
    let phone = 'tel:';
    numTxt.forEach((v) => {
      if (!isNaN(v) && v != ' ') phone += v;
    });
    el.setAttribute('href', phone);
  });

  let Mail = document.querySelectorAll('.mailFormat');
  Mail.forEach((el) => {
    let mailTxt = el.textContent.split(' ');
    let email = 'mailto:';
    mailTxt.forEach((v) => {
      email += v;
    });
    el.setAttribute('href', email);
  });
}
