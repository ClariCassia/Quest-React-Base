import './MyQuest.css'
import ParagraphColored from './components/StyledText/index.jsx';
import Button from './components/AlertButton/index.jsx';

function MyQuest() {
  return (
    <>
      <h1>My Quest</h1>

      <ParagraphColored paragraph='This is my first challenge in React' color='aqua' />

      <Button label='Entrar React avançado'>
      </Button>

    </>
  )
}

export default MyQuest
