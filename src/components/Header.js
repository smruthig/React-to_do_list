import PropTypes from 'prop-types'
import Button from './Button'

const Header = (props) => {
    // const onClick = () => {
    //     props.onAdd()
    // }

    return (
        <div>
            <header className='header'>
                <h1>{props.title}</h1>
                <Button 
                    text={props.showAdd ? 'Close' : 'Add'} 
                    color={props.showAdd ? 'red' : 'green'} 
                    onClick={props.onAdd}
                />
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
