const { z } = require('zod');

const userSchema = z.object({
    name: z.string().min(3).max(255),
    email: z.email(),
    password: z.string().min(6).max(30),
    age: z.number().int().positive().optional()
});

module.exports = userSchema;