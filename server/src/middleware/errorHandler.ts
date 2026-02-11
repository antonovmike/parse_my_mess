import type { Request, Response, NextFunction } from "express";
// Middleware: 404 handler
function notFound(_req: Request, res: Response) {
  res.status(404).json({ error: "Not found" });
}

interface HttpError extends Error {
  status?: number;
}

function errorHandler(
  err: Error,
  req: Request,
  res: Response,
  _next: NextFunction,
) {
  const statusCode = (err as HttpError).status || 500;
  const errorMessage = err.message || "Internal Server Error";

  res.status(statusCode).json({ error: errorMessage });
}

export { notFound, errorHandler };
export type { HttpError };
