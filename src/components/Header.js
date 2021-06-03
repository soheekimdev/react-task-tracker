const Header = (props) => {
  return (
    <header>
      <h1>{props.title}</h1>
    </header>
  )
}

Header.defaultProps = {
  title: 'Task Tracker',
}

export default Header
