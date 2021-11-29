var educationHIstory = {
    name: "Morris",
    age: 33,
    State: "Oregon",
    cities: ["Tigard", "Portland", "Salem", "Beaverton"],
    introduceMyself: function() {
        return "Hi my name is " + this.name + " and I'm from " + this.State;
    },
    education: [
        {
            school: "University of Utah",
            degree: "Masters Biomedical Informatics",
            fisrtYear: 2021,
            graduationYear: 2023,
            classes: [
                {
                    title: "Data visualization",
                    credit: 2,
                    track: "Analytics"
                },
                {
                    title: "Intro to Programming",
                    credit: 2,
                    track: "Computer science"
                }
            ]
        },
        {
            school: "Oregon Institute of Technology",
            degree: "Bachelors Health Informatics",
            fisrtYear: 2016,
            graduationYear: 2019,
            classes: [
                {
                    title: "Intro to Health Informatics",
                    credit: 3,
                    track: "Informatics"
                },
                {
                    title: "Clinical Database Design",
                    credit: 4,
                    track: "Database"
                }
            ]
        },
        {
            school: "Chemeketa Community College",
            degree: "Assocaite of Science",
            fisrtYear: 2014,
            graduationYear: 2016,
            classes:  [
                {
                    title: "Writing 222",
                    credit: 3,
                    track: "General"
                },
                {
                    title: "Math 111",
                    credit: 3,
                    track: "General"
                }
            ]
        },
    ]
}
