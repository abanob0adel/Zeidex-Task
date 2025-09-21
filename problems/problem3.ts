function mergeJobsWithApplications(
  applications: { jobId: number; userId: string }[],
  jobs: { id: number; title: string }[]
) {
  const counts = applications.reduce<Map<number, number>>((map, { jobId }) => {
    map.set(jobId, (map.get(jobId) || 0) + 1);
    return map;
  }, new Map());
  return jobs
    .filter((job) => counts.has(job.id))
    .map((job) => ({
      ...job,
      applications: counts.get(job.id)!,
    }));
}

const applications = [
  { jobId: 1, userId: "u1" },
  { jobId: 2, userId: "u2" },
  { jobId: 1, userId: "u3" },
  { jobId: 3, userId: "u4" },
];

const jobs = [
  { id: 1, title: "Frontend Developer" },
  { id: 2, title: "Backend Developer" },
  { id: 3, title: "UX Designer" },
  { id: 4, title: "DevOps Engineer" },
];

console.log("Problem 3:", mergeJobsWithApplications(applications, jobs));

module.exports = { mergeJobsWithApplications };
