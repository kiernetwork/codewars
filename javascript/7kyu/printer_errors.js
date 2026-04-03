function printerError(s) {
  const errors = s.match(/[^a-m]/g);
  return `${errors ? errors.length : 0}/${s.length}`;
}