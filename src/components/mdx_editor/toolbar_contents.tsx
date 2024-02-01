import React from 'react'
import {
  UndoRedo,
  BoldItalicUnderlineToggles,
  Separator,
  BlockTypeSelect,
  CodeToggle,
  CreateLink,
} from '@mdxeditor/editor'


// type Props = {}

export default function ToolbarContents() {
  return (
    <div className='flex w-[944px] items-center justify-center'>
      <UndoRedo />
      <Separator />
      <BoldItalicUnderlineToggles />
      <CodeToggle />
      <Separator />
      <CreateLink />
      <Separator />
      <BlockTypeSelect />
      {/* <ChangeCodeMirrorLanguage /> */}
    </div>
  )
}