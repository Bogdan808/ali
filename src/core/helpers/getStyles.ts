import type { ComponentPropsWithRef } from 'react'
import type { styled } from 'styled-components'

type Styled = typeof styled

type StyledComponentProps<Target extends keyof Styled> = ComponentPropsWithRef<
  ReturnType<(typeof styled)[Target]>
>

export type IUIComponentProps<
  C extends keyof Styled,
  // eslint-disable-next-line @typescript-eslint/ban-types
  O extends Record<string, unknown> = {}
> = StyledComponentProps<C> & O
