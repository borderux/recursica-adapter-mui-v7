# Installing `@recursica/adapter-mui-v7`

Follow these instructions to install and configure the MUI Adapter in your host project.

## 1. Install Dependencies

First, install the Recursica MUI Adapter package:

```bash
npm install @recursica/adapter-mui-v7
```

### Peer Dependencies

This library requires the following peer dependencies. Ensure they are installed in your project:

```bash
npm install @mui/material@>=7.0.0 @emotion/react@>=11.14.0 @emotion/styled@>=11.14.0 react@>=16.8.0 react-dom@>=16.8.0
```

---

## 2. Setup and Integration

Before consuming Recursica components, integrate the CSS and design tokens into your application:

1. **Integrate CSS**: Import `recursica_variables_scoped.css` and the MUI adapter CSS `style.css` into your application entrypoint (e.g., `main.tsx` or `App.tsx`).

   ```tsx
   import "./path/to/recursica_variables_scoped.css"; // Recursica theme variables
   import "@recursica/adapter-mui-v7/style.css"; // MUI adapter styles
   ```

2. **Configure MUI's CSS Injection & Theme Provider**: Because the Recursica UI components use native CSS modules, they must be given a higher priority than MUI's default engine styles. You **must** wrap your application root in `<StyledEngineProvider injectFirst>` and `<RecursicaThemeProvider theme="light">` to correctly cascade design token properties. By default `RecursicaThemeProvider` also wraps its children in a `<Layer layer={0}>` (via the `initLayer0` prop, which defaults to `true`), so the base page surface/border/elevation variables resolve automatically with no extra setup:

   ```tsx
   import { StyledEngineProvider } from "@mui/material/styles";
   import { RecursicaThemeProvider } from "@recursica/adapter-mui-v7";
   import manifest from "./path/to/recursica_manifest.json";

   function App() {
     return (
       <StyledEngineProvider injectFirst>
         <RecursicaThemeProvider theme="light" manifest={manifest}>
           {/* Your App Components */}
         </RecursicaThemeProvider>
       </StyledEngineProvider>
     );
   }
   ```

   Pass the parsed `recursica_manifest.json` from your Forge export as `manifest`. Components that are configured by it (currently `Pagination`, for its Button variants) read it from here and throw if it's missing.

3. **Integrate Google Fonts**: Integrating custom fonts depends on how you load fonts in your project and which fonts are specified in your `recursica_variables_scoped.css` (since it is project-dependent). We suggest loading them via Google Fonts, as shown in this example:

   ```css
   @import url("https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap");
   ```

4. **Align MUI's breakpoints with Forge's (Optional but Recommended)**: Forge defines your layout grids (columns, gutters, margin) per breakpoint, and they switch via plain CSS `@media`. MUI's responsive props (`size={{ xs: 12, md: 6 }}`) switch at `theme.breakpoints` instead, which Forge never edits. If the two differ, a page changes layout at two different widths. `breakpointsFromRecManifest` builds breakpoint values from the `recursica_manifest.json` in your Forge export, so both switch at the same widths:

   ```tsx
   import { ThemeProvider, createTheme } from "@mui/material/styles";
   import { breakpointsFromRecManifest } from "@recursica/adapter-mui-v7";
   import manifest from "./path/to/recursica_manifest.json";

   // e.g. { mobile: 0, tablet: 481, default: 781 } when Forge defines extra grids
   const theme = createTheme({
     breakpoints: {
       values: {
         ...createTheme().breakpoints.values,
         ...breakpointsFromRecManifest(manifest),
       },
     },
   });
   ```

   Each non-default grid starts at its `min-width` (a grid with only a `max-width` starts at `0`), and the `default` grid is named `default` and starts one pixel past the widest `max-width`. If your manifest only defines the `default` grid (the stock export), it returns `{}` and your theme is unchanged. MUI's `values` replaces its defaults instead of merging, hence the spread of `createTheme().breakpoints.values`; use Forge's names (`mobile`, `tablet`, ...) in responsive props to switch where Forge does. TypeScript needs a module augmentation of MUI's `BreakpointOverrides` to accept custom names. The result is a plain object you can edit, and nothing applies it automatically. See the [LayoutGrid usage guide](src/components/LayoutGrid/USAGE.md).

5. **Configure PostCSS Plugin (Optional but Recommended)**: It is highly recommended (but optional) to install the `@recursica/recursica-postcss-vars` plugin to verify that Recursica CSS variables are properly connected in case they change.

   Install the plugin as a dev dependency:

   ```bash
   npm install @recursica/recursica-postcss-vars --save-dev
   ```

   Then, configure it in your `postcss.config.js`:

   ```javascript
   export default {
     plugins: {
       "@recursica/recursica-postcss-vars": {
         cssPath: "./path/to/recursica_variables_scoped.css",
         strict: process.env.NODE_ENV === "production",
       },
     },
   };
   ```

6. **Configure ESLint Plugin (Optional but Recommended)**: It is highly recommended (but optional) to install `eslint-plugin-recursica`, which flags use of the `overStyled` escape-hatch prop so it stays easy to audit.

   Install the plugin as a dev dependency:

   ```bash
   npm install eslint-plugin-recursica --save-dev
   ```

   Then, add it to your `eslint.config.js`:

   ```javascript
   import recursica from "eslint-plugin-recursica";

   export default [recursica.configs.recommended];
   ```
