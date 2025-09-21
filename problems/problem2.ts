async function fetchJobsInOrder(
  jobIds: number[],
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  fetchJob: (id: number) => Promise<any>
) {
  return Promise.all(jobIds.map((id) => fetchJob(id)));
}

async function mockFetchJob(id: number) {
  const titles: Record<number, string> = {
    101: "Frontend Developer",
    102: "Backend Developer",
    103: "UX Designer",
  };
  await new Promise((r) => setTimeout(r, Math.random() * 200));
  return { id, title: titles[id] ?? "Unknown" };
}

const jobIds = [101, 102, 103];

fetchJobsInOrder(jobIds, mockFetchJob).then((res) => {
  console.log("Problem 2 Outputs:", res);
});

module.exports = { fetchJobsInOrder };
