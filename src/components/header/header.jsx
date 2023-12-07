import './style.css';

function Header() {
    return (
        <div className="header">
            <div className='logo_section'>
                <div className="logo">EDYODA</div>
                <p className='logo_stories'>Stories</p>
            </div>
            <div className='header_Rightnav'>
                <div className='explore'>Explore categories <div class="drop_down"> <i class="arrow_down"></i></div></div>
                <div className='button_area'>
                    <p>Edyoda is a leraning and knowledge <br /> sharing platform for techies</p>
                    <a className='button'>Go To Main Website</a>
                </div>
            </div>
        </div>

    );
}
export default Header;