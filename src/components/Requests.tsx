import RequestsByStatus from '../components/RequestsByStatus'
import {OrderStatusEnum} from '../gql/graphql'
import {Tabs, TabsHeader, Tab, TabsBody, TabPanel} from '@material-tailwind/react'

function Requests() {
    return (
        /*
        placeholder fuckery
        https://github.com/creativetimofficial/material-tailwind/issues/528
        */

        // ACTIVE TAB NOT WORKING???
        // https://www.material-tailwind.com/docs/react/tabs
        <Tabs value={OrderStatusEnum.Pending}>
            <TabsHeader placeholder="">
                <Tab
                    placeholder=""
                    key={OrderStatusEnum.Pending}
                    value={OrderStatusEnum.Pending}
                >
                    Pending
                </Tab>
                <Tab
                    placeholder=""
                    key={OrderStatusEnum.Accepted}
                    value={OrderStatusEnum.Accepted}
                >
                    Accepted
                </Tab>
            </TabsHeader>
            <TabsBody placeholder="">
                <TabPanel
                    key={OrderStatusEnum.Pending}
                    value={OrderStatusEnum.Pending}
                >
                    <RequestsByStatus status={OrderStatusEnum.Pending} />
                </TabPanel>
                <TabPanel
                    key={OrderStatusEnum.Accepted}
                    value={OrderStatusEnum.Accepted}
                >
                    <RequestsByStatus status={OrderStatusEnum.Accepted} />
                </TabPanel>
            </TabsBody>
        </Tabs>
    )
}

export default Requests
