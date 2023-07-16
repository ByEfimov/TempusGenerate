function LocalSave(key, data) {
  localStorage.setItem(key, JSON.stringify(data));
}

export default LocalSave;
