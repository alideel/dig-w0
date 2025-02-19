(async () => {
  console.log("App Started");
  const PERSONS = [
    {
      name: "Ahmed Ali",
      age: 20,
    },
    {
      name: "Saif Amer",
      age: 19,
    },
    {
      name: "Marwan Ali",
      age: 30,
    },
    {
      name: "Ameer Qais",
      age: 16,
    },
    {
      name: "Nabeel Fawzi",
      age: 45,
    },
    undefined,
    {
      name: "Ali Hasan",
      age: 45,
    },
  ];

  // TO-DO
  // Promise object/function here
  // 2 params, 1: list, 2: target to match
  // return: Promise, resolve: list after filteration, reject: error message
  // TO-DO
  const ageFilter = (persons, age) => {
    return new Promise((resolve, reject) => {
      const result = persons.filter((person) => person?.age == age);
      if (result.length == 0) {
        reject("no match");
      } else {
        resolve(result);
      }
    });
  };

  ageFilter(PERSONS, 200)
    .then((result) => {
      console.log(result);
    })
    .catch((err) => {
      console.log(err);
    });
})();
