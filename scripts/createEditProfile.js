import { API_URL } from "./const.js";
import { createElement, createSelectDate, handleImageFileSelection } from "./helper.js";
import { getUser } from "./service.js";

export const createEditProfile = async (login) => {
  const user = await getUser(login);

  const sectionEditProfile = createElement('section', {
    className: 'edit edit_profile',
  });

  const container = createElement('div', {
    className: 'container'
  });
  sectionEditProfile.append(container);

  const formProfile = createElement('form', {
    className: 'edit__form'
  });
  container.append(formProfile);

  formProfile.addEventListener('submit', (e) => {

  });

  const editAvatar = createElement('fieldset', {
    className: 'edit__avatar',
  });

  const editAvatarImage = createElement('img', {
    src: `${API_URL}/${user.avatar}`,
    alt: `avatar ${user.login}`,
    className: 'edit__avatar-image'});

  const editAvatarLoad = createElement('div', {
    className: 'edit__avatar-load'
  });

  const editAvatarLabel = createElement('label', {
    className: 'edit__label-avatar',
    htmlFor: 'avatar-load',
    innerHTML: `
      <svg class="edit__icon-avatar" width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M4.75 33.25H10.6875L28.1992 15.7384L22.2617 9.80086L4.75 27.3125V33.25ZM7.91667 28.6267L22.2617 14.2817L23.7183 15.7384L9.37333 30.0834H7.91667V28.6267ZM29.0858 5.20919C28.9394 5.06241 28.7654 4.94596 28.5738 4.86651C28.3823 4.78705 28.177 4.74615 27.9696 4.74615C27.7622 4.74615 27.5569 4.78705 27.3653 4.86651C27.1738 4.94596 26.9998 5.06241 26.8533 5.20919L23.9558 8.10669L29.8933 14.0442L32.7908 11.1467C32.9376 11.0002 33.0541 10.8262 33.1335 10.6347C33.213 10.4431 33.2539 10.2378 33.2539 10.0304C33.2539 9.82307 33.213 9.61774 33.1335 9.4262C33.0541 9.23466 32.9376 9.06067 32.7908 8.91419L29.0858 5.20919Z" fill="white"/>
      </svg>
      Обновить фотографию
    `,
  });

  const editAvatarFile = createElement('input', {
    className:"edit__input-file edit__input-file_avatar",
    type:"file",
    id: 'avatar-load',
    accept:"image/jpeg, image/png",
    // value: `${API_URL}/${user.avatar}`,
  });

  handleImageFileSelection(editAvatarFile, editAvatarImage);

  const btnDeleteAvatar = createElement('button', {
    className: 'edit__avatar-delete',
    type: 'button',
    innerHTML: `
    <svg class="edit__icon-avatar" width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M9.48842 29.6389C9.48842 31.35 10.9027 32.75 12.6313 32.75H25.2027C26.9313 32.75 28.3456 31.35 28.3456 29.6389V10.9722H9.48842V29.6389ZM12.6313 14.0833H25.2027V29.6389H12.6313V14.0833ZM24.417 6.30556L22.8456 4.75H14.9884L13.417 6.30556H7.91699V9.41667H29.917V6.30556H24.417Z" fill="white"/>
    </svg>
    Удалить
    `,
  });


  btnDeleteAvatar.addEventListener('click', () => {
    editAvatarFile.value = '';
    // editAvatarImage.src = `${API_URL}/avatars/empty.jpg`,
    editAvatarImage.src = 'img/avatar.png';
  });

  editAvatarLoad.append(editAvatarLabel, editAvatarFile, btnDeleteAvatar);
  editAvatar.append(editAvatarImage, editAvatarLoad);

  const editName = createElement('fieldset', {
    className: 'edit__name',
  });

  const editLabelName = createElement('label', {
    className: 'edit__label',
    innerHTML: `
      <span class="edit__label-text">Имя:</span>
      <input type="text" class="edit__input" name="name" vlaue="${user.name || ''}">
    `
  });

  const editLabelSurname = createElement('label', {
    className: 'edit__label',
    innerHTML: `
      <span class="edit__label-text">Фамилия:</span>
      <input type="text" class="edit__input" name="surname" vlaue="${user.surname || ''}">
    `
  });

  editName.append(editLabelName, editLabelSurname);

  const editBirthday = createElement('fieldset', {
    className: 'edit__birthdate',
  });

  const editBirthdayLegend = createElement('legend', {
    className: 'edit__label-text',
    textContent: 'Дата рождения:',
  });

  const editBirthdayWrapper = createElement('div', {
    className: 'edit__birthdate-wrapper',
  });
  editBirthday.append(editBirthdayLegend, editBirthdayWrapper);

  const editLabelDay = createElement('label', {
    className: 'edit__label edit__label_select',
  });
  const selectDay = createElement('select', {
    className: 'edit__select',
    // type: 'text',
    name: 'day',
  });
  editLabelDay.append(selectDay);  
  const editLabelMonth = createElement('label', {
    className: 'edit__label edit__label_select',
  });
  const selectMonth = createElement('select', {
    className: 'edit__select',
    // type: 'text',
    name: 'month',
  });
  editLabelMonth.append(selectMonth);  
  const editLabelYear = createElement('label', {
    className: 'edit__label edit__label_select',
  });
  const selectYear = createElement('select', {
    className: 'edit__select',
    // type: 'text',
    name: 'year',
  });
  editLabelYear.append(selectYear);
  
  createSelectDate(selectDay, selectMonth, selectYear, user.birthdate);

  editBirthdayWrapper.append(editLabelDay, editLabelMonth, editLabelYear);
  
  const editDescription = createElement('fieldset', {
    className: 'edit__description',
  });
  const editLabelDescription = createElement('label', {
    className: 'edit__label-text',
    htmlFor: 'description',
    textContent: 'Вступительный текст:',
  });
  const editInputDescription = createElement('textarea', {
    className: 'edit__description-input',
    name: 'description',
    id: 'description',
  });
  editDescription.append(editLabelDescription, editInputDescription);

  const editSubmitBtn = createElement('button', {
    className: 'edit__submit-btn btn',
    textContent: 'Сохранить изменения',
    type: 'submit',
  });

  formProfile.append(editAvatar, editName, editBirthday, editDescription, editSubmitBtn);

  return {sectionEditProfile, formProfile};
}; 