const getUsers = () => {
    const url = 'https://reqres.in/api/users';
    
    fetch(url)
        .then((result) => {
            return result.json();
        })
        .then(({ data:users }) => {
            console.log('----------');
            console.log('Пункт #1');
            console.log('')
            users.forEach(({ last_name: lastName }) => {
                console.log(lastName);
            })

            return users
        })
        .then((users) => {
            console.log('----------');
            console.log('Пункт #2');
            console.log('');
            users.filter(({ last_name: lastName }) => lastName.startsWith('W'))
                .forEach(({ last_name: lastName }) => {
                    console.log(lastName);
                });

            return users
        })
        .then((users) => {
            console.log('----------');
            console.log('Пункт #3');
            console.log('');
            const fullnames = users.reduce((account, item, index, array) => {

                let message =account + item.last_name + ` ` + item.first_name;
    
            if (index !==(array.length - 1)) {
                message += `, `;}
                
                return message;
            });

            console.log(`Наша база содержит данные следующих пользователей: ` + fullnames);

            return users
        })
        .then(users => {
            console.log('----------');
            console.log('Пункт #4');
            console.log('');
            const user = users[0];

            const keys = Object.keys(user)

            console.log(keys.join());
            console.log('----------');
        })
    }

console.log(getUsers());