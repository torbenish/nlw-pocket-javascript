import type { FastifyPluginAsyncZodOpenApi } from 'fastify-zod-openapi'
import z from 'zod'
import { createGoalCompletion } from '../../functions/create-goal-completion'

export const createCompletionRoute: FastifyPluginAsyncZodOpenApi =
  async app => {
    app.post(
      '/completions',
      {
        schema: {
          body: z.object({
            goalId: z.string(),
          }),
        },
      },
      async request => {
        const { goalId } = request.body
        await createGoalCompletion({
          goalId,
        })
      }
    )
  }
