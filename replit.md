# SparkArts - Nonprofit Arts Organization Website

## Overview

SparkArts is a full-stack web application built for a nonprofit organization dedicated to bringing free art education to elementary school students. The application features a modern React frontend with a Node.js/Express backend, using PostgreSQL for data persistence through Drizzle ORM.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter for client-side routing
- **Styling**: Tailwind CSS with shadcn/ui component library
- **State Management**: TanStack Query (React Query) for server state
- **Form Handling**: React Hook Form with Zod validation
- **Build Tool**: Vite for development and production builds

### Backend Architecture
- **Runtime**: Node.js with Express.js
- **Language**: TypeScript with ES modules
- **Development**: tsx for TypeScript execution
- **Production**: esbuild for server bundling

### Database Architecture
- **Database**: PostgreSQL
- **ORM**: Drizzle ORM with Neon serverless driver
- **Schema Management**: Drizzle Kit for migrations
- **Connection**: WebSocket support for serverless environments

## Key Components

### Frontend Structure
```
client/
├── src/
│   ├── components/
│   │   ├── home/          # Landing page components
│   │   ├── shared/        # Reusable components (Navbar, Footer)
│   │   └── ui/           # shadcn/ui component library
│   ├── pages/            # Route components
│   ├── hooks/            # Custom React hooks
│   └── lib/              # Utility functions and configurations
```

### Backend Structure
```
server/
├── index.ts              # Main server entry point
├── routes.ts             # API route definitions
└── vite.ts               # Vite integration for development
```

### Database Schema
- **Users table**: Basic user authentication with username/password
- **Future expansion**: Ready for additional nonprofit-specific entities

## Data Flow

1. **Client Requests**: React components use TanStack Query for data fetching
2. **API Layer**: Express routes handle HTTP requests with CORS support
3. **Database Operations**: Drizzle ORM manages PostgreSQL interactions
4. **Response Handling**: JSON responses with comprehensive error handling

### Current API Endpoints
- `POST /api/donations` - Donation processing endpoint (demo implementation)

## External Dependencies

### UI and Styling
- **Radix UI**: Comprehensive component primitives
- **Tailwind CSS**: Utility-first CSS framework
- **Lucide React**: Icon library
- **Embla Carousel**: Carousel functionality

### Development Tools
- **Vite**: Fast build tool with HMR
- **ESBuild**: Production bundling
- **TypeScript**: Type safety across the stack

### Third-party Services
- **Google AdSense**: Monetization integration
- **External donation platform**: Links to donate.sparkarts.net

## Deployment Strategy

### Development Environment
- Vite dev server with Express middleware
- Hot module replacement for frontend
- Automatic TypeScript compilation
- CORS headers for local development

### Production Build
1. **Frontend**: Vite builds React app to `dist/public`
2. **Backend**: ESBuild bundles server code to `dist/index.js`
3. **Database**: Drizzle migrations applied via `db:push`

### Environment Configuration
- `DATABASE_URL`: PostgreSQL connection string (required)
- Node.js production mode detection
- Static file serving for built frontend

### Key Architectural Decisions

1. **Monorepo Structure**: Frontend and backend in single repository for simplified development
2. **TypeScript Throughout**: Ensures type safety across the entire stack
3. **Serverless-Ready Database**: Neon PostgreSQL with WebSocket support for scalability
4. **Component Library**: shadcn/ui provides consistent, accessible UI components
5. **Modern Build Tools**: Vite and ESBuild for fast development and optimized production builds

The architecture prioritizes developer experience while maintaining production readiness for a nonprofit organization's web presence.