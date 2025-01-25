import Header from "../../components/Header";

import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

function Accommodation() {
    return (
        <>
            <Header title="Accommodations" />

            <main>
                <Tabs
                    defaultActiveKey="all"
                    transition={false}
                    id="noanim-tab-example"
                    className="mb-3"
                >
                    <Tab eventKey="all" title="All">
                        All
                    </Tab>
                    <Tab eventKey="profile" title="Profile">
                        Hotel
                    </Tab>
                    <Tab eventKey="ourist-inn" title="Tourist Inn">
                        Tourist Inn
                    </Tab>
                    <Tab eventKey="lodging" title="Lodging">
                        Lodging
                    </Tab>
                    <Tab eventKey="homestay" title="Homestay">
                        Homestay
                    </Tab>
                </Tabs>
            </main>
        </>
    );
}

export default Accommodation;