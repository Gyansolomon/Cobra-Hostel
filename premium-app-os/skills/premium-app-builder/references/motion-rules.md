# Motion Rules Reference

Use `design/MOTION_RULES.md` as the source of truth.

Core rules:

- Motion should make state changes easier to understand.
- Keep standard transitions fast and subtle.
- Prefer opacity and transform animations.
- Avoid distracting loops, slow transitions, and heavy blur.
- Respect reduced-motion preferences.
- Use stronger motion only for moments that deserve emphasis.
- Use Reanimated for advanced React Native gestures and transitions.
- Use Moti for simple React Native fade/slide/scale.
- Use Expo Haptics for meaningful mobile feedback.
- Use Expo BlurView carefully for premium sheets/modals.
- Use Lottie/Rive only for special illustrated or interactive moments.
- Use Motion Primitives for reusable web motion patterns.
