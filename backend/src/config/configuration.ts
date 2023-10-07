export default () => ({
  server: {
    port: parseInt(process.env.PORT, 10) || 3000,
  },
  database: {
    type: process.env.DATABASE_TYPE || 'postgres',
    host: process.env.POSTGRES_HOST || 'postgres',
    port: parseInt(process.env.POSTGRES_PORT, 10) || 5432,
    username: process.env.POSTGRES_USER || 'student',
    password: process.env.POSTGRES_PASSWORD || 'student',
    database: process.env.POSTGRES_DB || 'nest_project',
  },
  jwt: {
    secret: process.env.JWT_SECRET || 'secret',
    ttl: process.env.JWT_TTL || '30000s',
  },
});
