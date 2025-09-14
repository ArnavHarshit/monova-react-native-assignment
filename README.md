# Monova React Native Developer Assignment

## Project Overview
This project is a React Native application built with Expo and TypeScript that replicates the UI and interactions from the provided reference video for Monova's React Native Developer position.

## How to Run
### Via Expo Snack
1. Visit the Expo Snack URL: https://snack.expo.dev/@dangerwizz/github.com-arnavharshit-monova-react-native-assignment
2. Click "Run" to view the web version
3. Alternatively, scan the QR code with the Expo Go app on your mobile device

### Local Development
1. Clone this repository
2. Install dependencies: `npm install`
3. Start the development server: `expo start`
4. Press 'w' for web or scan QR code for mobile

## Features Implemented
- **Items Preview Screen**: Grid/list of items with image, category, color, and style badges
- **Filter System**: Interactive filter chips and active-filter pills with real-time updates
- **Collections View**: Scrollable cards showing outfits with top, bottom, footwear, and optional outerwear
- **Responsive Design**: Works on both web and mobile devices
- **Smooth Animations**: Entrance animations for cards and micro-interactions on chip toggles

## Component Structure
```
src/
├── components/ # Reusable UI components
│ ├── CollectionCard.tsx
│ ├── ItemCard.tsx
│ └── FilterChip.tsx
├── screens/ # App screens
│ ├── SavedScreen.tsx
│ └── ItemsScreen.tsx
├── data/ # Mock data
│ └── mockData.ts
├── types/ # TypeScript definitions
│ └── index.ts
├── constants/ # Style constants
│ ├── colors.ts
│ └── styles.ts
└── navigation/ # Navigation setup
└── index.ts
```

## State Management
- React hooks (useState, useMemo) for local component state
- Filter state managed in ItemsScreen component
- No global state management needed for this scale of application

## Animations & Interactions Implemented
1. Fade-in animations for item cards
2. Spring animations for outfit cards entering from right
3. Scale animations on filter chip interactions
4. Smooth horizontal scrolling for collections carousel
5. Loading states during filter changes

## Assumptions & Limitations
- Used placeholder images from picsum.photos
- Mocked data structure based on reference screenshots
- Simplified some animations for Expo Snack compatibility
- Focused on web compatibility via React Native Web
- Limited to the features shown in the reference video

## Technical Stack
- React Native with Expo
- TypeScript for type safety
- React Navigation for routing
- React Native Reanimated for animations
