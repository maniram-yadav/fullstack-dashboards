import dotenv from 'dotenv';

dotenv.config();

interface Config {
  port: number;
  mongoUri: string;
  jwtSecret: string;
  jwtExpiration: string;
  refreshTokenSecret: string;
  refreshTokenExpiration: string;
  redisUrl: string;
  nodeEnv: string;
  rateLimitWindowMs: number;
  rateLimitMax: number;
}

const config: Config = {
  port: parseInt(process.env.PORT || '3001'),
  mongoUri: process.env.MONGO_URI || 'mongodb://localhost:27017/user-management',
  jwtSecret: process.env.JWT_SECRET || 'secret',
  jwtExpiration: process.env.JWT_EXPIRATION || '1h',
  refreshTokenSecret: process.env.REFRESH_TOKEN_SECRET || 'refresh-secret',
  refreshTokenExpiration: process.env.REFRESH_TOKEN_EXPIRATION || '7d',
  redisUrl: process.env.REDIS_URL || 'redis://localhost:6379',
  nodeEnv: process.env.NODE_ENV || 'development',
  rateLimitWindowMs: parseInt(process.env.RATE_LIMIT_WINDOW_MS || '60000'),
  rateLimitMax: parseInt(process.env.RATE_LIMIT_MAX || '100')
};

export default config;