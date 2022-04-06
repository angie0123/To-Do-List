export default function () {
  const add = (task) => {
    localStorage.setItem(localStorage.length, JSON.stringify(task));
  };

  const removeAll = () => {
    localStorage.clear();
  };

  const remove = (task) => {
    for (let value in localStorage) {
      console.log(value);
    }
  };

  const isEmpty = () => {
    return localStorage.length === 0;
  };

  return { add, removeAll, remove, isEmpty };
}
