import { FunctionComponent } from 'react';
import '../../styles/Header.css';

const Header: FunctionComponent = () => {
    return (
        <div className="row">
            <nav className="col-xs-12">
                <div className="container">
                    <h3 className="navbar-brand">Prometheum Exercise built by Keegan Kelly</h3>
                </div>
            </nav>
        </div>
    )
}

export default Header;