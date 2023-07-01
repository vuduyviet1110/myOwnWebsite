import Header from './components/Header'
import SideBar from './components/SideBar'
function DefaultLayout({Content}) {
    return ( 
        <div className="wrapper">
        <Header/>
        <div className="container">
            <SideBar/>
            <div className="content">
                {Content}
            </div>
        </div>
        </div>
    );
}

export default DefaultLayout;