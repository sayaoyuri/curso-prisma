import prisma from "./database";

(async () => {
  const students = await prisma.student.groupBy({
    by: ["class"],
    _count: {
      id: true
    },
    orderBy: {
      _count: {
        id: "desc"
      }
    }
  });

  const notEmployed = await prisma.student.groupBy({
    by: ['class'],
    _count: { id: true },
    where: { 
      jobId: { equals: null } 
    },
    orderBy: {
      _count: { id: "desc" }
    }
  })
  console.log(students)
  console.log(notEmployed);
})()