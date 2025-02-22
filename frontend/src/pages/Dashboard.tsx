import NavbarAdmin from '../components/navbar/NavbarAdmin';

export default function Dashboard() {


    return (
        <><NavbarAdmin />
            <div style={{ marginLeft: "20%" }}>
            <div className='dashboard-container'>
                <div className='top-bloc'>
                    <div className='bloc-posts'>

                    </div>
                    <div className='bloc-companies'>

                    </div>
                </div>
                <div className='bloc-users'>

                </div>
            </div>
            </div>
        </>
    );
}
