function updatePersonOnPage(person) {
    document.getElementById('fullNameOutput').innerText = `${person.surname} ${person.firstName} ${person.patronymic}`;
    document.getElementById('genderOutput').innerText = person.gender;
    document.getElementById('birthYearOutput').innerText = person.birthDate;
    document.getElementById('professionOutput').innerText = person.profession;
    document.getElementById('firstNameOutput').innerText = person.firstName;
    document.getElementById('surnameOutput').innerText = person.surname;
    document.getElementById('patronymicOutput').innerText = person.patronymic;
    const genderColor = person.gender === personGenerator.GENDER_MALE ? '#007bff' : '#e83e8c';
    document.getElementById('genderOutput').style.color = genderColor;
}

function clearPersonData() {
    document.getElementById('fullNameOutput').innerText = 'Фамилия Имя Отчество';
    document.getElementById('genderOutput').innerText = 'Генерация пола';
    document.getElementById('birthYearOutput').innerText = 'Генерация даты рождения';
    document.getElementById('professionOutput').innerText = 'Генерация профессии';
    document.getElementById('firstNameOutput').innerText = 'Иван';
    document.getElementById('surnameOutput').innerText = 'Иванов';
    document.getElementById('patronymicOutput').innerText = 'Иванович';
    document.getElementById('genderOutput').style.color = '#007bff';
    const button = document.getElementById('clearBtn');
    button.classList.add('btn-danger');
    setTimeout(() => {
        button.classList.remove('btn-danger');
    }, 300);
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
    document.getElementById('clearBtn').addEventListener('click', clearPersonData);
};