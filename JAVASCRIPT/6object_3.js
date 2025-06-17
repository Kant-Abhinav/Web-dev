//Destructuring of objects

const course = {
    courseName:"Js in Hindi",
    price: "999",
    courseInstructor: "Lord",
}
console.log(course.courseInstructor);

//We can also write it as

const {courseInstructor} = course;
console.log(courseInstructor);
 //We can also change the name of the keyword according to ourselves

 const {courseName: name} = course; //Here we assigned the keyword courseName = name string value

 console.log(name);
 //The use of curly brackets and assigning it with some object is called destructuring of objects.


//JSON

// {
//     name: "hitesh",
//     courseName: "Js in hindi",
//     price: "free",
// }

//This format is known as JSON and all the keywords are in string datatypes. 


