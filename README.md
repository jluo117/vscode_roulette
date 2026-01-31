# Dev Roulette

A fun and interactive roulette wheel extension for Visual Studio Code. Test your luck with a fully functional European roulette game!

## Features

- 🎡 **Interactive Roulette Wheel**: Spin a beautifully animated roulette wheel with 37 numbers (0-36)
- 🎨 **Color Display**: Immediately see whether you landed on Red, Black, or Green (0)
- ⚡ **Smooth Animations**: Watch the wheel spin with realistic easing effects
- 🎯 **Accurate Results**: European roulette numbering system with correct red/black distributions

## How to Use

1. Open VS Code
2. Press `Ctrl+Shift+P` (Windows/Linux) or `Cmd+Shift+P` (macOS)
3. Search for "Open Roulette" and select it
4. A webview panel will open with the roulette wheel
5. Click the **SPIN** button to spin the wheel
6. Wait 4 seconds for the result to appear with both the number and color

## Requirements

- Visual Studio Code 1.108.1 or higher

## Installation

1. Clone or download this repository
2. Run `npm install` to install dependencies
3. Press `F5` to open the extension in the Extension Development Host
4. Or, package the extension with `vsce package` and install the `.vsix` file

## Extension Settings

This extension currently has no configurable settings.

## Known Issues

None at this time.

## Release Notes

### 1.0.0

- Initial release
- Roulette wheel with 37 numbers
- Color detection (Red, Black, Green)
- Smooth spinning animation with random results

## Development

To contribute or modify this extension:

```bash
# Install dependencies
npm install

# Compile TypeScript
npm run compile

# Watch mode for development
npm run watch

# Run tests
npm test

# Lint code
npm run lint
```

Press `F5` to test the extension in the VS Code Extension Development Host.

**Have fun spinning the wheel! 🎰**
