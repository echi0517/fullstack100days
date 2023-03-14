// const job = { title: "developer", location: "new york", salary: 5000 };


// console.log(new Date().toISOString())

// console.log(job.title)


class Job {
    constructor(jobTitle, place, salary) {
        this.title = jobTitle
        this.location = place
        this.salary = salary
    }

    descibe() {
        console.log(`I'm a ${this.title} , i work ${this.location} salary ${this.salary}`)
    }
}


const developer = new Job('Developer', 'New York' , 50000)
console.log(developer)
developer.descibe()
 