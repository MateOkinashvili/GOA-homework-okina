const logOutput = (message) => {
    const output = document.getElementById("output");
    output.innerHTML += `<p>${message}</p>`;
  };
  
  const checkAssignment = () => {
    return new Promise((resolve) => {
      setTimeout(() => resolve("შევამოწმოთ დავალება"), 1000);
    });
  };
  
  const completeAssignment = () => {
    return new Promise((resolve) => {
      setTimeout(() => resolve("დავალება შესრულდა"), 1000);
    });
  };
  
  const gradeAssignment = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const random = Math.random();
        if (random > 0.5) {
          resolve(`დავალება შესრულდა წარმატებულად და მივიღე ${Math.floor(random * 10)} ქულა`);
        } else {
          reject("ჩავიჭერით");
        }
      }, 1000);
    });
  };
  
  checkAssignment()
    .then((message) => {
      logOutput(message);
      return completeAssignment();
    })
    .then((message) => {
      logOutput(message);
      return gradeAssignment();
    })
    .then((message) => {
      logOutput(message);
    })
    .catch((error) => {
      logOutput(error);
    });
  