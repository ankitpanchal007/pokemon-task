export const pokemonFilter = (list, item) => {
  if (list && list.length > 0) {
    const res = list.find((pk) => pk.id === item.id);
    if (!res) {
      list = [...list, item];
    }
  }
  return list;
};
