const askName = () => {
  const name = window.prompt("Quel est ton prénom ?", "Ton prénom");

  const sayHello = `👋 Bonjour ${name}`;

  //   document.body.innerHTML += `<h2> ${sayHello} </h2>`;
  const test = document.querySelector("h2");
  test.innerHTML += sayHello;
};

function askBirthYear() {
  const yearOfBirth = parseInt(
    window.prompt(
      "Quelle est ton année de naissance ?",
      "Ton année de naissance"
    )
  );

  let invalid = 0;
  let monthOfBirth = 0;

  do {
    monthOfBirth = parseInt(
      window.prompt(
        "Quel est ton mois de naissance ?",
        "Ton mois de naissance (en chiffre)"
      )
    );
    invalid = monthOfBirth > 12 || monthOfBirth <= 0 || isNaN(monthOfBirth);
    if (invalid) {
      error();
    }

    // console.log(monthOfBirth);
  } while (invalid);

  const dayOfBirth = parseInt(
    window.prompt("Quel est ton jour de naissance ?", "Ton jour de naissance")
  );

  function getAge(date) {
    let diff = Date.now() - date.getTime();
    let age = new Date(diff);
    return Math.abs(age.getUTCFullYear() - 1970);
  }

  function error() {
    const alertError = alert("Erreur de saisie");
    return alertError;
  }

  const age = `Vous êtes né.e le ${dayOfBirth} ${
    monthOfBirth === 1
      ? "janvier"
      : monthOfBirth === 2
      ? "février"
      : monthOfBirth === 3
      ? "mars"
      : monthOfBirth === 4
      ? "avril"
      : monthOfBirth === 5
      ? "mai"
      : monthOfBirth === 6
      ? "juin"
      : monthOfBirth === 7
      ? "juillet"
      : monthOfBirth === 8
      ? "août"
      : monthOfBirth === 9
      ? "septembre"
      : monthOfBirth === 10
      ? "octobre"
      : monthOfBirth === 11
      ? "novembre"
      : monthOfBirth === 12
      ? "décembre"
      : error()
  } ${yearOfBirth}. Vous avez ${getAge(
    new Date(yearOfBirth, monthOfBirth, dayOfBirth)
  )} ans.`;

  document.body.innerHTML += `<h3> ${age} </h3>`;
}

askName();
askBirthYear();
