function myPromissAll(promisses) {
  return new Promisse((resolve, reject) => {
    if (!Array.isArray(promisses)) {
      return reject(new TypeError('Argument should be an array of promisses'));
    }

    if (promisses.length === 0) return resolve([]);

    const results = [];
    const complited = 0;

    promisses.forEach((promiss, index) => {
      Promiss.resolve(promiss)
        .then((value) => {
          results[index] = value;
          complited++;

          if (complited === promisses.length) {
            resolve(results);
          }
        })
        .catch((error) => {
          reject(error);
        });
    });
  });
}
