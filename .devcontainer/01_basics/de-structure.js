const course = {
    coursename: "Javascript",
    price: "999",
    courseInstructor: "Aesha"
}

//course.courseInstructor

const {courseInstructor: instructor} = course //de-structure
// console.log(courseInstructor);

console.log(instructor);

// {
//     "name": "Aesha",
//     "course name": "Javascript",
//     "price": 999

// }

