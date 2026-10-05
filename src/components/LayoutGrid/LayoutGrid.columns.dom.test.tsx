import { describe, it, expect } from "vitest";
import { createRoot } from "react-dom/client";
import { flushSync } from "react-dom";
import { StyledEngineProvider } from "@mui/material/styles";
import { LayoutGrid } from "./LayoutGrid";

function mount(node: React.ReactElement) {
  const container = document.createElement("div");
  document.body.appendChild(container);
  const root = createRoot(container);
  // injectFirst, as RecursicaThemeProvider does, so the component CSS beats MUI's.
  flushSync(() =>
    root.render(
      <StyledEngineProvider injectFirst>{node}</StyledEngineProvider>,
    ),
  );
  return {
    container,
    done: () => {
      root.unmount();
      container.remove();
    },
  };
}

describe("LayoutGrid tokens", () => {
  it("takes columns and gutters from the responsive Forge variables", () => {
    document.documentElement.style.setProperty(
      "--recursica_brand_layout-grids_columns",
      "3",
    );
    document.documentElement.style.setProperty(
      "--recursica_brand_layout-grids_column-gutter",
      "10px",
    );
    document.documentElement.style.setProperty(
      "--recursica_brand_layout-grids_row-gutter",
      "20px",
    );
    const { container, done } = mount(
      <LayoutGrid>
        <LayoutGrid.Col size={1}>a</LayoutGrid.Col>
      </LayoutGrid>,
    );
    const grid = container.querySelector(".MuiGrid-container") as HTMLElement;
    const style = getComputedStyle(grid);
    expect(style.getPropertyValue("--Grid-columns").trim()).toBe("3");
    expect(style.getPropertyValue("--Grid-columnSpacing").trim()).toBe("10px");
    expect(style.getPropertyValue("--Grid-rowSpacing").trim()).toBe("20px");
    done();
  });

  it("drops columns and spacing props passed at runtime", () => {
    const { container, done } = mount(
      <LayoutGrid {...({ columns: 12, spacing: 8 } as Record<string, unknown>)}>
        <LayoutGrid.Col size={1}>a</LayoutGrid.Col>
      </LayoutGrid>,
    );
    const grid = container.querySelector(".MuiGrid-container") as HTMLElement;
    expect(
      getComputedStyle(grid).getPropertyValue("--Grid-columns").trim(),
    ).toBe("3");
    done();
  });

  it("clamps a column wider than the grid to the row", () => {
    const { container, done } = mount(
      <LayoutGrid>
        <LayoutGrid.Col size={6}>a</LayoutGrid.Col>
      </LayoutGrid>,
    );
    const col = container.querySelector(
      ".MuiGrid-container > div",
    ) as HTMLElement;
    expect(getComputedStyle(col).maxWidth).toBe("100%");
    done();
  });
});
