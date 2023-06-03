export const createElement = (tagName, attribute) => {
  const elem = document.createElement(tagName);
  Object.assign(elem, attribute);
  return elem;
};

export const pluralizeYears = (age) => {
  let years = age % 100;
  if (years >= 11 && years <= 19) {
    return 'лет'
  } else {
    let lastDigit = years % 10;
    if (lastDigit === 1) {
      return 'год'
    } else if (lastDigit >= 2 && lastDigit <= 4) {
      return 'года'
    } else {
      return 'лет'
    }
  };
};

export const handleImageFileSelection = (input, image) => {

};

export const createSelectDate = (selectDay, selectMonth, selectYear, birthdate) => {
  for (let day = 0; day <=31; day++) {
    const option = document.createElement('option');
    option.value = day ? day : '';
    option.text = day ? day : '';
    selectDay.append(option);
  };

  ['', 'Янв', 'Фев', 'Мрт', 'Апр', 'Май', 'Инь', 'Иль', 'Авг', 'Снт', 'Окт', 'Нбр', 'Дкб'].forEach((month, i) => {
    const option = document.createElement('option');
    option.value = i;
    option.text = month;
    selectMonth.append(option);
  });

  const currentYear = new Date().getFullYear();
  const years = new Array();
  for (let year = currentYear + 1; year >= currentYear - 100; year--) {
    const option = document.createElement('option');
    option.value = year ? currentYear + 1 - year : '';
    option.text = option.value;
    selectYear.append(option);
  };

  if (birthdate) {
    const [day, month, year] = birthdate.split('/');
    selectDay.value = day;
    selectMonth.value = month;
    selectYear.value = year;
  };
  [selectDay, selectMonth, selectYear].forEach(dateSelect => {
    dateSelect.addEventListener('change', ({currentTarget}) => {
      currentTarget.blur();
    });
  });
};