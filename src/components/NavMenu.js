import icon_cart from '../img/icon_cart.png';
import icon_plate from '../img/icon_plate.png';

function NavMenu() {
    return (
        <div className='flex-container'>
            <div className='napisy'>
                <h1 className='napis1'>LUXURY</h1>
                <h2 className='napis2'>Resteurant</h2>
            </div>
            <ul className='Nav-menu-list'>
                <li><a  href="#">HOME</a></li>
                <li><a  href="#">MENU</a></li>
                <li><a  href="#">RESERVATION</a></li>
                <li><a  href="#">RECIPE</a></li>
                <li><a  href="#">BLOG</a></li>
                <li><a  href="#">PAGES</a></li>
                <li><a  href="#">CONTACT</a></li>
                <div className='zdjecie1'>
                    <img src={icon_cart} alt="icon_cart" />
                </div>
            </ul>
            <div className='ramka1'>
                <img className='icon_plate' src={icon_plate} alt="icon_plate" />
                <a className='napisz' href="#">BOOK YOUR TABLE</a>
            </div>
        </div>
    );
}
export default NavMenu 