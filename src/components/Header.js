import PropTypes from 'prop-types'
import Button from './Button'
import {useLocation} from 'react-router-dom'

const Header = (props) => {
    // const onClick = () => {
    //     props.onAdd()
    // }

    const location = useLocation()

    return (
        <div>
            <header className='header'>
                <h1>{props.title}</h1>
                {location.pathname === '/' && (<Button 
                    text={props.showAdd ? 'Close' : 'Add'} 
                    color={props.showAdd ? 'red' : 'green'} 
                    onClick={props.onAdd}
                    />
                )}
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
