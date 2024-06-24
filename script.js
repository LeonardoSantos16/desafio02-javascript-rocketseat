let students = [{
    name: "Leonardo",
    firstNote: 6,
    secondNote: 9

},{
    name: "Lucas",
    firstNote: 3,
    secondNote: 10
},
{
    name: "Murillo",
    firstNote: 3,
    secondNote: 5
},
{
    name: "Lionel",
    firstNote: 1,
    secondNote: 4
}]


function mean(firstNote, secondNote){
    return (firstNote + secondNote) / 2
}


function apresentation(student){
    let meanStudent = mean(student.firstNote, student.secondNote);
    alert("A média do(a) aluno(a) " + student.name + " é: " + meanStudent)
    if(meanStudent >= 7){
        alert("Parabéns " + student.name + " você foi aprovado(a) no concurso!")
    }else{
        alert("Não foi dessa vez " + student.name + ", tente novamente")
    }
}


for(let student of students){
    apresentation(student);
}