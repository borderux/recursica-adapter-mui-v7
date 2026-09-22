import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Grid } from "./Grid";
import { Card } from "../Card/Card";
import { Text } from "../Text/Text";

type GridStoryProps = React.ComponentProps<typeof Grid>;

const meta: Meta<GridStoryProps> = {
  title: "UI-Kit/Grid",
  component: Grid,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "Grid is a responsive grid layout hand-composed from MUI's own Grid, providing column sizing, offsets, ordering, and breakpoint-based visibility using MUI's native prop names. Defaults to the design system's own layout-grid tokens: 6 columns, with design-system-managed column-gutter/row-gutter/margin values applied automatically (not integrator-configurable).",
      },
    },
    controls: {
      include: ["children", "columns", "direction", "wrap"],
    },
  },
  argTypes: {
    columns: {
      control: "number",
      description:
        "Number of columns in each row. Defaults to the design system's default column count (6).",
    },
  },
};

export default meta;

type Story = StoryObj<GridStoryProps>;

const Swatch = ({ children }: { children: React.ReactNode }) => (
  <Card>
    <Card.Content>
      <Text>{children}</Text>
    </Card.Content>
  </Card>
);

// Uses the design system default (6 columns) with no explicit `columns` override.
export const Default: Story = {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars, @typescript-eslint/no-explicit-any
  render: ({ withLayer, layer, ...args }: any) => (
    <Grid {...args}>
      <Grid.Col size={2}>
        <Swatch>size 2 of 6 (default)</Swatch>
      </Grid.Col>
      <Grid.Col size={2}>
        <Swatch>size 2 of 6 (default)</Swatch>
      </Grid.Col>
      <Grid.Col size={2}>
        <Swatch>size 2 of 6 (default)</Swatch>
      </Grid.Col>
    </Grid>
  ),
};

// Explicitly overrides `columns` to 12 — this story exercises MUI's own breakpoint/size system
// at standard 12-column proportions, independent of the design system's 6-column default. Kept
// at parity with mantine-adapter's `ResponsiveSpans` story (same breakpoints/content) under this
// adapter's own `size` prop name — see IMPLEMENTATION_NOTES.md.
export const ResponsiveSizes: Story = {
  args: {
    columns: 12,
  },
  // eslint-disable-next-line @typescript-eslint/no-unused-vars, @typescript-eslint/no-explicit-any
  render: ({ withLayer, layer, ...args }: any) => (
    <Grid {...args}>
      <Grid.Col size={{ xs: 12, sm: 6, md: 3 }}>
        <Swatch>xs 12 / sm 6 / md 3</Swatch>
      </Grid.Col>
      <Grid.Col size={{ xs: 12, sm: 6, md: 3 }}>
        <Swatch>xs 12 / sm 6 / md 3</Swatch>
      </Grid.Col>
      <Grid.Col size={{ xs: 12, sm: 6, md: 3 }}>
        <Swatch>xs 12 / sm 6 / md 3</Swatch>
      </Grid.Col>
      <Grid.Col size={{ xs: 12, sm: 6, md: 3 }}>
        <Swatch>xs 12 / sm 6 / md 3</Swatch>
      </Grid.Col>
    </Grid>
  ),
};

export const Offset: Story = {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars, @typescript-eslint/no-explicit-any
  render: ({ withLayer, layer, ...args }: any) => (
    <Grid {...args}>
      <Grid.Col size={2} offset={2}>
        <Swatch>size 2, offset 2 (of 6)</Swatch>
      </Grid.Col>
      <Grid.Col size={2}>
        <Swatch>size 2 (of 6)</Swatch>
      </Grid.Col>
    </Grid>
  ),
};

export const Grow: Story = {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars, @typescript-eslint/no-explicit-any
  render: ({ withLayer, layer, ...args }: any) => (
    <Grid {...args}>
      <Grid.Col size={2}>
        <Swatch>size 2 (of 6)</Swatch>
      </Grid.Col>
      <Grid.Col size={2}>
        <Swatch>size 2 (of 6)</Swatch>
      </Grid.Col>
      <Grid.Col size="grow">
        <Swatch>size &quot;grow&quot; (fills remaining space)</Swatch>
      </Grid.Col>
    </Grid>
  ),
};

// Overrides the design system's default column count (6) to demonstrate a genuinely custom value.
export const CustomColumnCount: Story = {
  args: {
    columns: 4,
  },
  // eslint-disable-next-line @typescript-eslint/no-unused-vars, @typescript-eslint/no-explicit-any
  render: ({ withLayer, layer, ...args }: any) => (
    <Grid {...args}>
      <Grid.Col size={2}>
        <Swatch>size 2 of 4</Swatch>
      </Grid.Col>
      <Grid.Col size={2}>
        <Swatch>size 2 of 4</Swatch>
      </Grid.Col>
    </Grid>
  ),
};

export const VisibleHiddenFrom: Story = {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars, @typescript-eslint/no-explicit-any
  render: ({ withLayer, layer, ...args }: any) => (
    <Grid {...args}>
      <Grid.Col size={3} hiddenFrom="sm">
        <Swatch>hidden from sm and up</Swatch>
      </Grid.Col>
      <Grid.Col size={3} visibleFrom="sm">
        <Swatch>visible from sm and up</Swatch>
      </Grid.Col>
    </Grid>
  ),
};
