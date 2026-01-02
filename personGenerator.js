const personGenerator = {
    surnameJson: `{  
        "count": 16,
        "list": {
            "id_1": "Иванов",
            "id_2": "Смирнов",
            "id_3": "Кузнецов",
            "id_4": "Васильев",
            "id_5": "Петров",
            "id_6": "Михайлов",
            "id_7": "Новиков",
            "id_8": "Федоров",
            "id_9": "Кравцов",
            "id_10": "Николаев",
            "id_11": "Семёнов",
            "id_12": "Славин",
            "id_13": "Степанов",
            "id_14": "Павлов",
            "id_15": "Александров",
            "id_16": "Морозов"
        }
    }`,
    firstNameMaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Александр",
            "id_2": "Максим",
            "id_3": "Иван",
            "id_4": "Артем",
            "id_5": "Дмитрий",
            "id_6": "Никита",
            "id_7": "Михаил",
            "id_8": "Даниил",
            "id_9": "Егор",
            "id_10": "Андрей"
        }
    }`,
firstNameFemaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Александра",
            "id_2": "Аделина",
            "id_3": "Алиса",
            "id_4": "Дарья",
            "id_5": "Татьяна",
            "id_6": "Анна",
            "id_7": "Анастасия",
            "id_8": "Аполлинария",
            "id_9": "Арина",
            "id_10": "Василиса"
        }
    }`,
    GENDER_MALE: 'Мужчина',
    GENDER_FEMALE: 'Женщина',

    randomIntNumber: (max = 1, min = 0) => Math.floor(Math.random() * (max - min + 1) + min),

    randomValue: function (json) {
        const obj = JSON.parse(json);
        const prop = `id_${this.randomIntNumber(obj.count, 1)}`;  // this = personGenerator
        return obj.list[prop];
    },

    randomGender: function() {
        return this.randomIntNumber(1) === 1 ? this.GENDER_MALE : this.GENDER_FEMALE;
    },

    randomFirstName: function(gender) {
        if (gender === this.GENDER_MALE) {
            return this.randomValue(this.firstNameMaleJson);
        } else {
            return this.randomValue(this.firstNameFemaleJson);
        }
    },

     randomSurname: function(gender) {
        const maleSurname = this.randomValue(this.surnameJson);

        if (gender === this.GENDER_MALE) {
            return maleSurname;
        } else {
            return this.convertToFemaleSurname(maleSurname);
        }
    },

    convertToFemaleSurname: function(maleSurname) {
        if (maleSurname.endsWith('ов')) {
            return maleSurname + 'а';
        } else if (maleSurname.endsWith('ев')) {
            return maleSurname + 'а';
        } else if (maleSurname.endsWith('ин')) {
            return maleSurname + 'а';
        } else if (maleSurname.endsWith('ын')) {
            return maleSurname.substring(0, maleSurname.length - 1) + 'а';
        } else if (maleSurname.endsWith('ский')) {
            return maleSurname.substring(0, maleSurname.length - 2) + 'ая';
        } else if (maleSurname.endsWith('цкой')) {
            return maleSurname.substring(0, maleSurname.length - 3) + 'кая';
        } else {
            return maleSurname + 'а';
        }
    },

    randomBirthYear: function() {
        return this.randomIntNumber(2005, 1950);
    },

    getPerson: function () {
        this.person = {};
        this.person.gender = this.randomGender();
        this.person.firstName = this.randomFirstName(this.person.gender);
        this.person.surname = this.randomSurname(this.person.gender);
        this.person.birthYear = this.randomBirthYear();
        
        return this.person;
    }
};