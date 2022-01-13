import ppLogo from './parchLogo.png'

const Header = ()=> (
    <header className="row">

        <div className="header">

            <img src={ppLogo} className="headerLogo" alt="Parch + Posey"/>
            <h1 className="customerName">Company Customer Portal</h1>
            <button className="logOut">Logout</button>

            <section className="waves">
            <div className="wave one" ><svg viewBox="0 0 500 150" preserveAspectRatio="none" ><path d="M2.83,144.58 C177.76,-52.77 464.45,169.25 501.12,53.80 L500.00,150.00 L-9.59,150.50 Z" ></path></svg></div>            
            <div className="wave two" ><svg viewBox="0 0 500 150" preserveAspectRatio="none" ><path d="M0.57,147.55 C159.71,-28.11 413.09,158.39 507.89,-22.19 L500.00,150.00 L0.00,146.55 Z" ></path></svg></div> 
            <div className="wave three" ><svg viewBox="0 0 500 150" preserveAspectRatio="none" ><path d="M0.57,147.55 C159.71,-28.11 413.09,158.39 507.89,-22.19 L500.00,150.00 L0.00,146.55 Z" ></path></svg></div> 

            
            </section>


        </div>

    </header>
);

export default Header;