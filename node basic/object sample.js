var Person={name:"abhiav",age:18,place:"thrissur",
display: function(){
    console.log(this.name)
}}

console.log(Person['age'])

for(x in Person){
    console.log(Person[x])
}

console.log(Person.display())

Person.name='Akash' // to change the value