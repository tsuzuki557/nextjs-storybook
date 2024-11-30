import type { Meta, StoryObj } from '@storybook/react';

import { Button } from './Button';

// なぜsatisfiesなのか？
// ref. https://storybook.js.org/docs/writing-stories/typescript#using-satisfies-for-better-type-safety
// ref. https://zenn.dev/uhyo/articles/blueberry-book-catchup#satisfies-%E6%BC%94%E7%AE%97%E5%AD%90%E3%81%AE%E8%BF%BD%E5%8A%A0
const meta = {
	title: 'Example/Buttona',
	component: Button,
  args: {
    children: 'ボタン',
  }
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof Button>;

export const Primary:Story = {
  args: {
    style: {backgroundColor: 'red'},
  }
};

export const Hoge:Story = {
  args: {
    children: 'hoge',
  }
};

// // More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
// const meta = {
//   title: 'Example/Button',
//   component: Button,
//   parameters: {
//     // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
//     layout: 'centered',
//   },
//   // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
//   tags: ['autodocs'],
//   // More on argTypes: https://storybook.js.org/docs/api/argtypes
//   argTypes: {
//     backgroundColor: { control: 'color' },
//   },
//   // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
//   args: { onClick: fn() },
// } satisfies Meta<typeof Button>;

// export default meta;
// type Story = StoryObj<typeof meta>;

// // More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
// export const Primary: Story = {
//   args: {
//     primary: true,
//     label: 'Button',
//   },
// };

// export const Secondary: Story = {
//   args: {
//     label: 'Button',
//   },
// };

// export const Large: Story = {
//   args: {
//     size: 'large',
//     label: 'Button',
//   },
// };

// export const Small: Story = {
//   args: {
//     size: 'small',
//     label: 'Button',
//   },
// };
