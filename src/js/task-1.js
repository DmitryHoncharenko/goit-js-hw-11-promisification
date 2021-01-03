const delay = ms => {
    // Твой код
    // const time = logger(time);
    
    setTimeout(() => {
            if (logger(ms)) {
            // logger()
                // return Promise.resolve();
        }
    }, ms);
    return Promise.resolve();
    
};

const logger = time => console.log(`Resolved after ${time}ms`);

// Вызовы функции для проверки
delay(2000).then(logger); // Resolved after 2000ms
delay(1000).then(logger); // Resolved after 1000ms
delay(1500).then(logger); // Resolved after 1500ms

// const getMessage = function () {
//   const input = prompt('Введите сообщение');

//   return Promise.resolve(input);
// };

// const logger = message => console.log(message);

// getMessage().then(message => logger(message));

// // Или еще короче
// getMessage().then(logger);