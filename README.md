# Task Manager App

A simple Task Manager app built with React Native and Expo, featuring a clean Material Design interface using React Native Paper.

## Features
- Add new tasks with a dedicated input field
- Mark tasks as complete with visual feedback (strikethrough text)
- Delete tasks using the trash icon
- View all tasks in a scrollable list with clear visual distinction for completed tasks
- Modern Material Design interface using React Native Paper

## Setup
1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the app:
   ```bash
   npx expo start
   ```

3. Choose your preferred method to run the app:
   - Press 'w' to open in web browser
   - Press 'a' to open on Android emulator
   - Scan the QR code with the Expo Go app on your Android device

## Libraries Used
- React Native: Core framework
- Expo: Development platform
- React Native Paper: Material Design components
- React Navigation: Navigation between screens
- React Native Safe Area Context: Safe area handling
- React Native Screens: Screen management
- React Native Gesture Handler: Gesture handling
- React Native Reanimated: Animations
- React Native Masked View: Masked view component
- React Native Async Storage: Local storage

## Code Structure
- `app/(tabs)/index.tsx`: Main component containing the task management logic and UI
- `node_modules/`: Project dependencies

## Development
The app is built using Expo Router for navigation and React Native Paper for the UI components. The code follows TypeScript best practices and includes proper type definitions.

## Contributing
To contribute to the project:
1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Create a new Pull Request

## License
This project is licensed under the MIT License - see the LICENSE file for details.
