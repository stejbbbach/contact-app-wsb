import dotenv from 'dotenv';
import Joi from 'joi';

dotenv.config();

const envSchema = Joi.object({
    NODE_ENV: Joi.string()
        .valid('development', 'test', 'production')
        .required(),
    PORT: Joi.number().default(5000),
    MONGO_URI: Joi.string().required(),
    LOG_LEVEL: Joi.string()
        .valid('info', 'warn', 'error', 'debug')
        .default('info'),
}).unknown();

const { error, value: env } = envSchema.validate(process.env);

if (error) {
    throw new Error(`Config validation error: ${error.message}`);
}

export default env;
