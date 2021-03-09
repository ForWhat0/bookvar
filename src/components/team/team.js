import { Global } from "./teamStyledComponents"
import {TextTeam} from "./textTeam"
import {TeamSwiper} from "./teamSwipper"

export default function Team({posts}) {
    return (
        <Global>
            <TeamSwiper employees={posts}/>
        </Global>
    )
}
