class Job {
    constructor(pos,comp, year, duration, descrpt,img){
        this.position = pos;
        this.company = comp;
        this.year = year;
        this.duration = duration;
        this.description = descrpt;
        this.img = img;
    }
}

class Project {
    constructor(name, description, year, company,img,tags){
        this.name = name;
        this.descriptio =  description;
        this.year = year;
        this.company = company;
        this.img = img;
    }
}

var medialab = new Job("Undergraduate Researcher ","MIT Media Lab ","Winter 2019 ",
 "1mo ","INSERT DESCRIPTION","/media/hack.svg");

var chegg = new Job("Software Engineer Intern ","Chegg ", "Summer 2019 ","3 mos ", "INSERT DESCRIPTION ", "media/chegg.png");

var sloan = new Job("Research Assistant ","MIT Sloan Automotive Lab ", "Summer 2018 ", "1mo ", "Insert Description","/media/sloan.png");

var weLab = new Job("Lab Assistant ", "Wellesley Engineering Lab ", "Summer 2017 ", "1mo ", "INsert Description ", "media/weLab.jpg" );

var tutor =  new Job("Highschool Physics Tutor", "", "2018", "8 mos", "I was a physics private tutor. I tutored twice a week. I learned a lot in this expeience, and" + 
                    "had fun finding different ways to explain physics concepts through thought experiments and demonstrations.", "media/tutor.jpg");

var jobsList = [
    chegg, sloan, mediaLab, weLab, tutor
];

var emojiMaestro = new Project("Emoji Maestro", "DESCRIPT ", "2019", "HACK MIT", "media/hack.svg");

var wendyWorld = new Project("Wendy's World ", "DESCRIOP","2018", "Wellesley Data Structures and Algorithms", "media/git1.png");

var homeFood = new Project("HomeFood ","descript","2020 ","Independent Project", "media/git2.png");

