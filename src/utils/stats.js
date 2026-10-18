// Works out how many tasks are done, for the stats bar.
export function calculateStats(tasks) {
  const total = tasks.length;
  const done = tasks.filter((task) => task.done).length;
  const percent = Math.round((done / total) * 100);
  return { total, done, percent };
}
