import { createBurgerMenu } from "./createBurgerMenu.js";
import { createElement } from "./helper.js";
import { API_URL } from "./const.js";
import { renderModal } from "./renderModal.js";

const nav = document.querySelector('.nav');
createBurgerMenu(nav, 'nav_active');

export const renderNavigation = () => {
  nav.textContent = '';

  const buttonSignUp = createElement('button', {
    className: 'nav__btn btn',
    textContent: 'Зарегистрироваться'
  })

  buttonSignUp.addEventListener('click',() => {
    renderModal({
      title: 'Регистрация',
      description: 'Введите ваши данные для регистрации на сервисе WishList',
      btnSubmit: 'Зарегистрироваться',
      submitHandler: async () => {
        const formData = new FormData(event.target);
        const credentials = {
          login: formData.get('login'),
          password: formData.get('password'),
        };
        try {
          const response = await fetch(`${API_URL}/register`, {
            method: 'POST',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify(credentials),
          });

          if (response.ok) {
            const data = await response.json();
            console.log(data);
          } else {
            console.log(await response.json());
            throw new Error('Invalid credentials');
          };
        } catch(error) {

        }
      }
    });
  });
  
  const buttonLogin = createElement('button', {
    className: 'nav__btn btn',
    textContent: 'Войти'
  })

  buttonLogin.addEventListener('click', () => {

  });
  
  nav.append(buttonSignUp, buttonLogin);
};
