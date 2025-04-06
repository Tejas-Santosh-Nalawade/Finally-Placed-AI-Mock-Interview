/** @type { import("drizzle-kit").Config } */
export default {
    schema: "./utils/schema.js",
    dialect: 'postgresql',
    dbCredentials: {
        url: 'postgresql://ai-mock-interview_owner:npg_Kqe2Sgj5mGHC@ep-royal-sun-a5dbvgr4.us-east-2.aws.neon.tech/ai-mock-interview?sslmode=require',
    }
};