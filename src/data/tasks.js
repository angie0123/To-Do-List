const List = (() => {
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

  const update = (index, task) => {
    localStorage.setItem(index, task);
  };

  const toArray = () => {
    const list = [];
    for (let i = 0; i < localStorage.length; i++) {
      const task = JSON.parse(localStorage.getItem(i));
      list.push(task);
    }
    return list;
  };

  return { add, removeAll, remove, isEmpty, update, toArray };
})();

export default List;
