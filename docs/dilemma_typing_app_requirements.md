# Dilemma Keyboard Typing Practice Application - Technical Requirements

## 1. Project Overview

### 1.1 Purpose
Create a web-based typing practice application specifically designed for the Dilemma split keyboard with chording/layered input system, where users maintain fixed finger positions and use thumb-activated layer switching.

### 1.2 Target Users
- Users with Dilemma keyboards or similar chording layouts
- Typists transitioning from traditional keyboards to chording systems
- Advanced users seeking to optimize their layer-switching efficiency

## 2. Functional Requirements

### 2.1 Keyboard Layout Management
- **FR-001**: Parse and interpret Vial configuration files (.vil format)
- **FR-002**: Extract key mappings from all active layers (base, numbers, symbols)
- **FR-003**: Map QMK keycodes to Unicode characters and special functions
- **FR-004**: Support for combo key definitions and layer switching logic
- **FR-005**: Handle transparent keys (KC_TRNS) and layer inheritance

### 2.2 Visual Keyboard Representation
- **FR-006**: Display split keyboard layout with accurate key positioning
- **FR-007**: Show current active layer with visual indicators
- **FR-008**: Highlight keys as they should be pressed
- **FR-009**: Display finger position guides for home row
- **FR-010**: Visual feedback for layer switch keys (thumbs)
- **FR-011**: Color-coded layers (base/numbers/symbols)

### 2.3 Typing Practice Engine
- **FR-012**: Generate practice text based on available characters in current layer
- **FR-013**: Progressive difficulty system starting with single-layer exercises
- **FR-014**: Multi-layer exercises requiring layer switching
- **FR-015**: Custom text input for personalized practice
- **FR-016**: Real-time typing validation and error detection
- **FR-017**: Support for combo key sequences
- **FR-018**: Pause/resume functionality

### 2.4 Performance Analytics
- **FR-019**: Words per minute (WPM) calculation
- **FR-020**: Accuracy percentage tracking
- **FR-021**: Layer switching speed metrics
- **FR-022**: Per-key error rate analysis
- **FR-023**: Session history and progress tracking
- **FR-024**: Heatmap of key usage and error patterns
- **FR-025**: Export performance data (CSV/JSON)

### 2.5 Training Programs
- **FR-026**: Beginner program: single-layer character practice
- **FR-027**: Intermediate program: basic layer switching
- **FR-028**: Advanced program: rapid layer switching and combos
- **FR-029**: Custom practice sets based on common word patterns
- **FR-030**: Repetitive strain injury prevention exercises

## 3. Non-Functional Requirements

### 3.1 Performance
- **NFR-001**: Response time < 50ms for keystroke registration
- **NFR-002**: Smooth 60fps visual updates
- **NFR-003**: Support for typing speeds up to 200 WPM
- **NFR-004**: Minimal input latency (< 16ms)

### 3.2 Usability
- **NFR-005**: Intuitive interface requiring minimal setup
- **NFR-006**: Keyboard navigation support
- **NFR-007**: Accessible design (WCAG 2.1 AA compliance)
- **NFR-008**: Responsive design for various screen sizes

### 3.3 Compatibility
- **NFR-009**: Modern browsers (Chrome 90+, Firefox 88+, Safari 14+)
- **NFR-010**: Cross-platform support (Windows, macOS, Linux)
- **NFR-011**: Mobile device support (tablets)

### 3.4 Data Management
- **NFR-012**: Client-side data storage (no server required)
- **NFR-013**: Settings persistence across sessions
- **NFR-014**: Import/export configuration files
- **NFR-015**: Privacy-focused (no data transmission)

## 4. Technical Architecture

### 4.1 Frontend Technology Stack
- **HTML5**: Semantic markup and canvas for keyboard visualization
- **CSS3**: Advanced layouts, animations, and responsive design
- **JavaScript (ES6+)**: Core application logic
- **Web APIs**: KeyboardEvent, Storage API, File API

### 4.2 Core Components

#### 4.2.1 Configuration Parser
```javascript
class VialConfigParser {
  parseLayoutFile(vialJson)
  extractLayers()
  mapKeycodes()
  buildCharacterMaps()
}
```

#### 4.2.2 Keyboard Engine
```javascript
class DilemmaKeyboard {
  handleKeyPress(event)
  validateInput(expectedChar, actualKey, modifiers)
  switchLayer(layerIndex)
  processComboKeys()
}
```

#### 4.2.3 Practice Engine
```javascript
class TypingPractice {
  generateExercise(difficulty, focusChars)
  trackProgress()
  calculateMetrics()
  provideFeedback()
}
```

#### 4.2.4 Analytics Engine
```javascript
class PerformanceTracker {
  recordKeystroke(key, timestamp, correct)
  calculateWPM()
  generateHeatmap()
  exportData()
}
```

### 4.3 Data Models

#### 4.3.1 Key Mapping
```json
{
  "layers": [
    {
      "id": 0,
      "name": "base",
      "keys": {
        "position": [row, col],
        "keycode": "KC_A",
        "character": "a",
        "finger": "left_pinky"
      }
    }
  ]
}
```

#### 4.3.2 Performance Data
```json
{
  "session": {
    "timestamp": "2025-01-01T00:00:00Z",
    "duration": 300000,
    "wpm": 45.2,
    "accuracy": 96.8,
    "keystrokes": [
      {
        "key": "a",
        "timestamp": 1000,
        "correct": true,
        "layer": 0
      }
    ]
  }
}
```

## 5. User Interface Requirements

### 5.1 Main Interface Components
- **Header**: Application title, settings, import/export controls
- **Keyboard Visualization**: Split keyboard with real-time highlighting
- **Practice Area**: Text display and input field
- **Performance Panel**: Live WPM, accuracy, progress indicators
- **Layer Indicator**: Current active layer with visual cues

### 5.2 Visual Design Guidelines
- **Color Scheme**: High contrast, customizable themes
- **Typography**: Monospace fonts for typing area, clear sans-serif for UI
- **Layout**: Responsive grid system, mobile-first approach
- **Animations**: Smooth transitions, feedback animations

## 6. Development Phases

### Phase 1: Core Infrastructure (4 weeks)
- Vial configuration parser
- Basic keyboard visualization
- Simple character input handling

### Phase 2: Practice Engine (3 weeks)
- Text generation system
- Progress tracking
- Basic analytics

### Phase 3: Advanced Features (4 weeks)
- Multi-layer exercises
- Combo key support
- Advanced analytics and heatmaps

### Phase 4: Polish & Optimization (2 weeks)
- Performance optimization
- UI/UX improvements
- Cross-browser testing

## 7. Testing Requirements

### 7.1 Unit Testing
- Configuration parser accuracy
- Keystroke validation logic
- Performance calculation algorithms

### 7.2 Integration Testing
- End-to-end typing workflows
- Multi-layer switching scenarios
- Data persistence across sessions

### 7.3 Usability Testing
- New user onboarding
- Keyboard layout learning curve
- Performance tracking effectiveness

## 8. Deployment & Distribution

### 8.1 Hosting Options
- **Static Site Hosting**: GitHub Pages, Netlify, Vercel
- **Progressive Web App**: Offline capability, installable
- **Open Source**: GitHub repository with MIT license

### 8.2 Documentation
- User manual with setup instructions
- Developer documentation for customization
- Video tutorials for keyboard layout configuration

## 9. Future Enhancements

### 9.1 Version 2.0 Features
- Multi-user support and competitions
- Cloud sync for cross-device progress
- Community-generated practice texts
- Integration with other keyboard firmware formats

### 9.2 Advanced Analytics
- Machine learning for personalized difficulty adjustment
- Ergonomic analysis and recommendations
- Comparative analysis with traditional keyboards

## 10. Success Metrics

- **User Engagement**: Average session duration > 10 minutes
- **Learning Effectiveness**: 20% WPM improvement within 30 days
- **Adoption Rate**: 100+ active users within 6 months
- **Performance**: 99% uptime, < 100ms response times
