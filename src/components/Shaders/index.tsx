import { Modal } from 'antd'
import { useState } from 'react'
import { SketchPicker } from 'react-color'
type Props = {
  visible: boolean
  onOk: any
  onCancel: any
}
function Shaders({ visible, onOk, onCancel }: Props) {
  // colorPrimary 设置
  const [colorPrimary, setColorPrimary] = useState<string>('')
  /**
   * @description 编辑antd主题颜色
   * @param color
   */
  const changeColorPrimary = (color) => {
    setColorPrimary(color.hex)
  }
  return (
    <Modal open={visible} onOk={() => onOk(colorPrimary)} onCancel={onCancel}>
      <SketchPicker color={colorPrimary} onChange={changeColorPrimary} />
    </Modal>
  )
}

export default Shaders
