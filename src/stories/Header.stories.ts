import type { Meta, StoryObj } from '@storybook/react'
import { Header } from '../features/header'

const meta = {
  title: 'Page/Header',
  component: Header,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen'
  },
  args: {}
} satisfies Meta<typeof Header>

export default meta
type Story = StoryObj<typeof meta>

export const LoggedIn: Story = {
  args: {
    user: {
      name: 'Jane Doe'
    }
  }
}

export const LoggedOut: Story = {}
