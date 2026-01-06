function updatePersonOnPage(person) {
    document.getElementById('fullNameOutput').innerText = `${person.surname} ${person.firstName} ${person.patronymic}`;
    document.getElementById('genderOutput').innerText = person.gender;
    document.getElementById('birthYearOutput').innerText = person.birthYear;
    document.getElementById('professionOutput').innerText = person.profession;
    document.getElementById('firstNameOutput').innerText = person.firstName;
    document.getElementById('surnameOutput').innerText = person.surname;
    document.getElementById('patronymicOutput').innerText = person.patronymic;
    const genderColor = person.gender === personGenerator.GENDER_MALE ? '#007bff' : '#e83e8c';
    document.getElementById('genderOutput').style.color = genderColor;
}

function generateNewPerson() {
    const newPerson = personGenerator.getPerson();
    updatePersonOnPage(newPerson);
    const button = document.getElementById('generateBtn');
    button.classList.add('btn-success');
    setTimeout(() => {
        button.classList.remove('btn-success');
    }, 300);
}

window.onload = function() {
    const initPerson = personGenerator.getPerson();
    updatePersonOnPage(initPerson);
    document.getElementById('generateBtn').addEventListener('click', generateNewPerson);
};