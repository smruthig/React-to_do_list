import PropTypes from 'prop-types'
import Button from './Button'

const Header = (props) => {
    const onClick = () => {
        console.log('Clicked')
    }

    return (
        <div>
            <header className='header'>
                <h1>{props.title}</h1>
                <Button text="Add" color="green" onClick={onClick}/>
            </header>
        </div>
    )
}

Header.defaultProps = {
    title: 'Task tracker',
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
}

export default Header
