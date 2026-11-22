# Spacing Rules

Use a consistent 8px-based spacing system.

## Scale

```text
4px  = tiny internal gap
8px  = small gap
12px = compact component gap
16px = default compact padding
20px = premium mobile padding / iOS screen padding
24px = card padding / section gap
32px = major section gap
48px = hero or large layout gap
64px = major visual separation
```

## Mobile Rules

```text
iOS horizontal screen padding: 20
Android horizontal screen padding: 16
Card padding: 16-24
Section gap: 24-32
Header top spacing: safeAreaTop + 8/12
Bottom spacing: safeAreaBottom + 8/12
```

## Expo / React Native Rules

- Use `react-native-safe-area-context`.
- Never hardcode status bar spacing.
- Use safe area insets for top and bottom spacing.
- Use `Platform.select()` only for small iOS/Android corrections.
- Create reusable `Screen`, `PageHeader`, `Section`, `Card`, and `BottomTab` components.

## Common Mistakes

Avoid:

- random margins
- cramped cards
- inconsistent section gaps
- too much padding in small screens
- no safe-area handling
- all sections using same spacing regardless of importance
