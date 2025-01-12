import type { Express } from "express";
import { createServer, type Server } from "http";

export function registerRoutes(app: Express): Server {
  // Donation endpoint
  app.post('/api/donations', (req, res) => {
    // In a real app, this would connect to a payment processor
    const { amount, name, email } = req.body;

    // For demo purposes, just acknowledge the donation
    res.json({
      success: true,
      message: 'Donation received',
      data: { amount, name, email }
    });
  });

  const httpServer = createServer(app);
  return httpServer;
}