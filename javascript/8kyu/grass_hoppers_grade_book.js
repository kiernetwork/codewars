function getGrade(s1, s2, s3) {
  const avg = (s1 + s2 + s3) / 3;
  return 'FFFFFFDCBA'[Math.min(9, Math.floor(avg / 10))];
}