# QuickCart - Monorepo Shopping Cart Project

# About the project

QuickCart is a learning project that focuses on building a monorepo shopping cart application using pnpm workspaces.
This project aims to provide an educational platform for developers to understand and implement essential concepts while creating a practical e-commerce solution.

## Key features

- **User-Friendly Shopping**: QuickCart simplifies the shopping experience, making it easy for users to browse, add items to their cart, and make purchases with efficiency and convenience.

- **Reward Points System**: Users earn reward points with each purchase they make. These points accumulate over time and contribute to a loyalty program.

- **Badge Accumulation**: As users accrue reward points, they can achieve various badges as a recognition of their loyalty. These badges can be proudly displayed on their profiles.

- **Badge Exchange**: The project introduces a unique feature where users can exchange their earned badges for exclusive items with specific value types, adding a gamified aspect to the shopping experience.

- **Internationalization**: QuickCart offers internationalization support, allowing users to access the platform in their preferred language, creating a personalized shopping experience.

- **User Authentication**: QuickCart includes robust user authentication features, ensuring the security of user accounts and personal information.

- **Admin Dashboard**: The project comes equipped with an admin dashboard for efficient product and stock management. Admins can easily manage products and monitor inventory levels, ensuring a smooth shopping experience for users.

## Project Goals

- **Learning**: QuickCart serves as an educational resource, demonstrating the implementation of a monorepo structure with pnpm workspaces, as well as internationalization and user authentication. Developers can learn about best practices in software development, version control, and project organization.

- **Customer-Centric Development**: The project focuses on the user experience, emphasizing simplicity and convenience. It's an opportunity to explore user-centered design and development.

- **Rewarding Loyalty**: QuickCart aims to reward loyal customers with a loyalty program that recognizes and appreciates their continued support.

- **Innovation and Fun**: The badge system adds an element of fun and competition to the project, encouraging users to engage more with the platform.

## Requirements

- node ">=18.8"
- pnpm ">=8.8"
- docker

## Getting Started

1. Clone the repository to your local environment: `git clone [repository URL]`
2. Run tests to ensure the codebase is functioning as expected: `pnpm test`
3. duplicate default.env and rename to .env
4. add DB credentials to .env
5. start application: `docker compose up`

## Tech stack

- **Frontend**: Nextjs, next-intl
- **Backend**: Express, Tailwind
- **Dev**: TypeScript, Eslint, Prettier, PNPM workspace
- **Infra**: Docker

## Current state

- Early stage
  - monorepo setup

## Further development

- Product suggestions based on purchase history
- TBC
