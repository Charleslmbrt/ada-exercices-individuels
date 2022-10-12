const aksName = () => {
  const name = window.prompt("Quel est ton prénom ?", "Ton prénom");
  // console.log(name);

  const sayHello = `👋 Bonjour ${name}`;
  // console.log(text);

  //   document.body.innerHTML += `<h2> ${sayHello} </h2>`;
  const test = document.querySelector("h2");
  test.innerHTML += sayHello;
};

function aksBirthYear() {
  const yearOfBirth = window.prompt(
    "Quelle est ton année de naissance ?",
    "Ton année de naissance"
  );
  // console.log(yearOfBirth);

  const monthOfBirth = window.prompt(
    "Quel est ton mois de naissance ?",
    "Ton mois de naissance"
  );
  // console.log(monthOfBirth);

  const age = `Vous êtes né.e en ${monthOfBirth} ${yearOfBirth}. Vous avez ${
    2022 - yearOfBirth
  } ans.`;
  // console.log(age);

  document.body.innerHTML += `<h3> ${age} </h3>`;
}

aksName();
aksBirthYear();
