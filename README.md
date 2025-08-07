# ARise - Data Structures & Algorithms Learning App

Welcome to **ARise**, an interactive learning platform for Data Structures and Algorithms, developed for the Center for Distance Education, Anna University.

## Overview

ARise is a mobile-first educational app designed to help students master core concepts in Data Structures and Algorithms (DSA). The app features interactive content, AR/3D visualizations, quizzes, and contributor profiles, making learning engaging and effective.

## Features

- **Structured Curriculum**: Organized by units, chapters, and topics ([src/data/curriculum.ts](src/data/curriculum.ts)).
- **Rich Topic Content**: Concise explanations, examples, and exercises ([src/data/topicContent.ts](src/data/topicContent.ts)).
- **Contributor Profiles**: Meet the team behind ARise ([src/data/contributorsData.ts](src/data/contributorsData.ts)).
- **Authentication**: Secure signup and login flows ([app/(auth)/signup1.tsx](app/(auth)/signup1.tsx), [app/(auth)/loginScreen.tsx](app/(auth)/loginScreen.tsx)).
- **Profile Management**: Edit and view your profile ([app/(tabs)/ProfileScreen.tsx](app/(tabs)/ProfileScreen.tsx)).
- **AR/3D Integration**: Launch AR models for select topics.
- **Modern UI**: Built with React Native and Expo, using custom themes ([theme.ts](theme.ts)).

## Getting Started

1. **Install dependencies**

   ```bash
   npm install
   ```

2. **Start the app**

   ```bash
   npx expo start
   ```

   You can run the app on:
   - Android emulator
   - iOS simulator
   - Expo Go

3. **Development**

   - Edit screens in the [app](app/) directory.
   - Use [file-based routing](https://docs.expo.dev/router/introduction/) for navigation.

## Project Structure

- `app/` - Main application code (screens, authentication, tabs, contributors, etc.)
- `src/data/` - Curriculum, topic content, and contributor data
- `components/` - Reusable UI components
- `constants/` - Theme and color definitions
- `assets/` - Fonts and images
- `scripts/` - Utility scripts (e.g., project reset)

## Resetting the Project

To start fresh, run:

```bash
npm run reset-project
```

This will archive the starter code and create a blank `app` directory.

## About

This app is developed for the **Center for Distance Education, Anna University** by a dedicated student team. For contributor details, see [src/data/contributorsData.ts](src/data/contributorsData.ts).

## License

This project is for educational use at Anna University. For other uses, please contact the Center for Distance Education.

## Learn More

- [Expo documentation](https://docs.expo.dev/)
- [Expo Router](https://docs.expo.dev/router/introduction/)