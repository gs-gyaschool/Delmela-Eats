import app from "./app";
import { logger } from "./lib/logger";

// Vercel doesn't need to "listen" on a port, so we only do this locally
if (process.env.NODE_ENV !== 'production') {
  const rawPort = process.env["PORT"] || "3000"; // Default to 3000 if not set
  const port = Number(rawPort);

  if (Number.isNaN(port) || port <= 0) {
    throw new Error(`Invalid PORT value: "${rawPort}"`);
  }

  app.listen(port, () => {
    logger.info({ port }, "Server listening locally");
  });
}

// THIS IS THE KEY: Vercel looks for this export to run your app
export default app;
