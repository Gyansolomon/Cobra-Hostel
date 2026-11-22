# Component System Reference

Use `design/COMPONENT_SYSTEM.md` before creating UI.

Core rules:

- Start from reusable base components.
- Build app-specific components only when repeated patterns appear.
- Do not create one-off card and button styles for each screen.
- Components need loading, empty, disabled, error, and success states where relevant.
- Document major reusable components in `docs/COMPONENTS.md`.
- Use shadcn/ui for accessible web components when appropriate.
- Use Storybook to test component states.
- Use one icon system such as Iconsax or Lucide.
- Use React Hook Form and Zod for serious forms.
- Use TanStack Query for server-state UI.
- Warn the user before relying on paid sources such as Tailwind Plus, Untitled UI, UI8, paid icon packs, or paid templates.
- Use Magic UI, Aceternity UI, and Motion Primitives only when their visual/motion patterns fit the product.
