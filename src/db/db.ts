import { Prisma, PrismaClient } from "@prisma/client"

export const prisma = new PrismaClient({ log: ["error", "warn"] }).$extends({
  model: {
    $allModels: {
      findManyAndCount<Model, Args>(
        this: Model,
        args: Prisma.Exact<Args, Prisma.Args<Model, "findMany">>,
      ): Promise<[Prisma.Result<Model, Args, "findMany">, number]> {
        return prisma.$transaction([
          (this as any).findMany(args),
          (this as any).count({ where: (args as any).where }),
        ]) as any
      },
    },
  },
  name: "findManyAndCount",
})
