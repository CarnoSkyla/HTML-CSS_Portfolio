var username = "Sbucarno";
var usersurname = "Labi";

const isUserNameCorrect = false;

 checkName = (name, surname) => {
    var users = [];
    var errors = [];
    
    if ((typeof name == 'string' && typeof surname == 'string')) {
        const userFullName = name.concat(' ' + surname);
        const name = userFullName.split('');
        if (name.contains(Number)) {
            errors.push({
                error: `${name} ${surname} contains a number`
            })
            isUserNameCorrect = false;
            errors.forEach(error => {
                document.getElementById('prac').innerHTML = `${error.error}, try again`
            });
        } else {
            users.push({
                user: userFullName
            })
            errors = []
            isUserNameCorrect = true;
        } 
    } else {
        isUserNameCorrect = false
        errors.push({
            error: `${name} ${surname} is not a valid name`
        })
        errors.forEach(error => {
            document.getElementById('prac').innerHTML = `${error.error}, try again`
        });
    }
    return users;
}
//document.getElementById('prac').innerHTML = name + surname
